/**
 * Generates the Open Graph share image: public/assets/og/share.jpg, 1200x630.
 *
 * Made from two files already in the repo, nothing else:
 * - src/assets/hero/eagle-forest-landscape.jpg, the hero photograph, scaled to cover
 *   1200x630 and cropped from the centre;
 * - public/assets/logo/lockup-en.svg, the logo lockup (glyph, wordmark and tagline), with
 *   its near-black backing rectangle removed, as LogoSvg.astro does for the site.
 *
 * One even near-black layer covers the whole photograph, dark enough that the moss tagline
 * keeps 4.5:1 against what lies behind it; the script measures and prints that. The lockup
 * is centred and 582px wide, so the centred 630x630 square that chat apps cut for a small
 * thumbnail still holds all of it, with 24px to spare on either side.
 *
 * The lockup is outlined paths only, so no fonts and no browser are involved: sharp renders
 * the SVG (libvips with librsvg) and composites it. sharp is not a dependency of its own in
 * package.json; it is installed with Astro, which uses it for images.
 *
 * Usage, from the repo root:
 *   node docs/share-image/generate.mjs
 * Options:
 *   --overlay <0..1>  opacity of the near-black layer (default: OVERLAY below)
 *   --jpg <path>      where to write the JPEG (default: public/assets/og/share.jpg)
 *   --no-jpg          write no JPEG, for trying overlay values
 *   --png <path>      also write a lossless PNG
 *   --square <path>   also write the centred 630x630 crop, as a check
 */
import { mkdirSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";
import sharp from "sharp";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

const W = 1200;
const H = 630;
const NEAR_BLACK = "#0B0D0C";
/* 0.84 is the lowest value that keeps the tagline at 4.5:1 against the lightest 5% of the
   photograph behind it; 0.86 leaves a little margin. */
const OVERLAY = 0.86;
const JPEG = { quality: 84, mozjpeg: true, chromaSubsampling: "4:4:4" };

/* The drawing inside lockup-en.svg, without its 66-unit clear space. */
const VIEWBOX = { x: 66, y: 66, w: 1072, h: 284 };
const LOCKUP_WIDTH = 582;
/* The tagline in lockup units, generously boxed, for the contrast check. */
const TAGLINE = { x0: 320, y0: 276, x1: 1140, y1: 350 };

const { values } = parseArgs({
  options: {
    overlay: { type: "string" },
    jpg: { type: "string" },
    "no-jpg": { type: "boolean" },
    png: { type: "string" },
    square: { type: "string" },
  },
});
const overlay = values.overlay === undefined ? OVERLAY : Number(values.overlay);
if (!(overlay >= 0 && overlay <= 1)) throw new Error(`--overlay must be between 0 and 1, got ${values.overlay}`);

const scale = LOCKUP_WIDTH / VIEWBOX.w;
const left = (W - LOCKUP_WIDTH) / 2;
const top = (H - VIEWBOX.h * scale) / 2;

const lockup = (await readFile(resolve(ROOT, "public/assets/logo/lockup-en.svg"), "utf8"))
  .replace(/^[\s\S]*?<svg\b[^>]*>/, "")
  .replace(/<\/svg>\s*$/, "")
  .replace(/<rect\b[^>]*\/>/, "");

const layer = (withLockup) =>
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">` +
      `<rect width="${W}" height="${H}" fill="${NEAR_BLACK}" fill-opacity="${overlay}"/>` +
      (withLockup
        ? `<g transform="translate(${left} ${top}) scale(${scale}) translate(${-VIEWBOX.x} ${-VIEWBOX.y})">${lockup}</g>`
        : "") +
      `</svg>`
  );

const photo = await sharp(resolve(ROOT, "src/assets/hero/eagle-forest-landscape.jpg"))
  .resize(W, H, { fit: "cover", position: "centre" })
  .png({ compressionLevel: 0 })
  .toBuffer();

const compose = (withLockup) => sharp(photo).composite([{ input: layer(withLockup) }]);
const image = await compose(true).png().toBuffer();

/* Contrast of the moss tagline against the darkened photograph behind it (WCAG 2.1). */
{
  const { data, info } = await compose(false).raw().toBuffer({ resolveWithObject: true });
  const lin = (c) => ((c /= 255) <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  const lum = (r, g, b) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
  const ratio = (a, b) => (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
  const moss = lum(0x7f, 0x89, 0x6d);
  const px = (u, origin) => Math.round(origin + (u - VIEWBOX.x) * scale);
  const [x0, x1] = [px(TAGLINE.x0, left), px(TAGLINE.x1, left)];
  const [y0, y1] = [px(TAGLINE.y0, top), px(TAGLINE.y1, top)];
  const found = [];
  for (let y = y0; y < y1; y++)
    for (let x = x0; x < x1; x++) {
      const i = (y * info.width + x) * info.channels;
      found.push(lum(data[i], data[i + 1], data[i + 2]));
    }
  found.sort((a, b) => a - b);
  const mean = found.reduce((a, b) => a + b, 0) / found.length;
  const light = found[Math.floor(found.length * 0.95)];
  console.log(
    `overlay ${overlay}: moss tagline ${ratio(moss, mean).toFixed(2)}:1 on average, ` +
      `${ratio(moss, light).toFixed(2)}:1 against the lightest 5% behind it`
  );
}

const write = async (pipeline, out) => {
  mkdirSync(dirname(out), { recursive: true });
  const info = await pipeline.toFile(out);
  console.log(`${out}: ${info.width}x${info.height}, ${(info.size / 1024).toFixed(1)} KB`);
};

if (values.png) await write(sharp(image).png(), resolve(values.png));
if (values.square)
  await write(sharp(image).extract({ left: (W - H) / 2, top: 0, width: H, height: H }).png(), resolve(values.square));
if (!values["no-jpg"])
  await write(
    sharp(image).jpeg(JPEG),
    values.jpg ? resolve(values.jpg) : resolve(ROOT, "public/assets/og/share.jpg")
  );
