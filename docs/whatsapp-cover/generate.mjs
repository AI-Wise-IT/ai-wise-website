/**
 * Generates the WhatsApp Business cover photo for the AI Wise design system, 16:9.
 *
 * This is a brand asset rather than a website one, and it lives here for the same reason
 * ../share-image/generate.mjs does: it is made from the hero photograph and the lockup,
 * both of which are in this repo, and it needs sharp, which Astro already installs. The
 * design system holds the output, under assets/photography/, and the reasoning, in
 * sources/build-notes/whatsapp-cover.md. Copy a new render up when this changes.
 *
 * Built from two files in this repo and nothing else:
 * - src/assets/hero/eagle-forest-landscape.jpg, the hero photograph (2560x1440);
 * - public/assets/logo/lockup-en.svg or lockup-en-plain.svg, with the near-black
 *   backing rectangle removed, as LogoSvg.astro does for the site.
 *
 * A near-black layer keeps the lockup readable over the photograph. The share image uses
 * one flat tint because it is shown small; a cover photo is shown large, so this one is a
 * top-down gradient: full weight across the band the lockup sits in, easing off above it
 * so the misty sky reads, and below it so the canopy and the eagle keep their colour. The
 * script measures the moss tagline's contrast against what actually lies behind it and
 * prints it; the weight over the lockup is tuned to clear 4.5:1 and no more.
 *
 * Layout. WhatsApp shows the cover cropped and puts a large circular profile picture
 * over the middle of it; see CROP and AVATAR below, both measured off a real profile
 * rather than taken from a guide. That leaves one band for the lockup, and it sits
 * there: centred horizontally, clear of the top crop, above the avatar, left of the
 * eagle. Everything is a fraction of the canvas, so the same composition renders at any
 * 16:9 size. Run with --guides and --preview after changing any of it.
 *
 * Usage, from the repo root:
 *   node docs/whatsapp-cover/generate.mjs
 * Options:
 *   --variant full|plain   with the glyph, or wordmark and tagline only (default: both)
 *   --width <px>           canvas width, height follows at 16:9 (default: both sizes)
 *   --cy <0..1>            centre of the lockup down the canvas (default: LOCKUP_CY)
 *   --sky --top --bottom   the three stops of the near-black layer (defaults: OVERLAY)
 *   --guides               also write a copy with the safe zones drawn on it
 *   --preview              also write a mock of the profile view, avatar composited
 *   --out <dir>            output directory (default: docs/whatsapp-cover/out)
 */
import { existsSync, mkdirSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";
import sharp from "sharp";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "../..");
const PHOTO = resolve(ROOT, "src/assets/hero/eagle-forest-landscape.jpg");
/* --preview only, to show the cover with a real profile picture over it. These are the
   design system's two avatar assets, kept on Simon's machine in the brand upload kit;
   without them --preview is skipped and everything else still runs. */
const AVATARS = "C:/Users/simon/OneDrive/Documenten/Carriere/AI Wise/brand/profile-pictures";

const NEAR_BLACK = "#0B0D0C";
const MOSS = [0x7f, 0x89, 0x6d];
/* The legibility layer. The share image uses one flat tint because it is shown small; a
   cover photo is shown large, so the photograph should still read as a photograph. The
   layer therefore holds its full weight from the top edge down past the lockup, which is
   the only thing that needs protecting and which sits over the pale sky and mist, and
   then eases off across the lower part of the frame so the canopy and the eagle keep
   their colour. `top` is tuned against the measurement below; `bottom` by eye. */
const OVERLAY = { sky: 0.7, top: 0.91, bottom: 0.46 };
const JPEG = { quality: 88, mozjpeg: true, chromaSubsampling: "4:4:4" };

/* 1211x681 is the size WhatsApp's own guidance is quoted at; 1920x1080 is the same
   frame with room to spare, for a platform that re-encodes what it is given. */
const SIZES = [1920, 1211];

/* Per variant: the file, the drawing inside it without its 66-unit clear space, and a
   generous box around the tagline in those same units, for the contrast check. */
const VARIANTS = {
  full: {
    file: resolve(ROOT, "public/assets/logo/lockup-en.svg"),
    viewBox: { x: 66, y: 66, w: 1072.2, h: 284 },
    tagline: { x0: 320, y0: 276, x1: 1140, y1: 350 },
  },
  plain: {
    file: resolve(ROOT, "public/assets/logo/lockup-en-plain.svg"),
    viewBox: { x: 66, y: 66, w: 809, h: 283.1 },
    tagline: { x0: 60, y0: 276, x1: 880, y1: 350 },
  },
};

/* What WhatsApp actually does with the upload, measured off a screenshot of the profile
   on iOS (12 September 2026) rather than taken from a guide. Two surprises, and both move
   the composition:

   - The cover is shown at about 2.22:1, not 16:9. A 16:9 upload keeps its full width and
     is centre-cropped to roughly CROP off the top and off the bottom.
   - The avatar is centred horizontally and low, not in a corner, and it is large: a third
     of the cover's width. It covers the middle of the frame from AVATAR.cy upward.

   Together they leave one band for the lockup: below the top crop, above the avatar. */
const CROP = 0.1; // of the height, off the top and off the bottom, on display
const AVATAR = { d: 0.57, cx: 0.5, cy: 0.737 }; // diameter and centre, d and cy in heights

/* Composition, as fractions of the canvas. */
const LOCKUP_W = 0.46; // of the width
const LOCKUP_CY = 0.27; // centre of the lockup, down from the top

/* Everything that must survive belongs in here: inside the width WhatsApp keeps, below
   the top crop and above the avatar. Guides only; the lockup is placed by the two values
   above, and --guides is how you check it still lands inside. */
const SAFE = { x: 0.1, y: CROP + 0.04, w: 0.8, h: AVATAR.cy - AVATAR.d / 2 - CROP - 0.07 };

const { values } = parseArgs({
  options: {
    variant: { type: "string" },
    width: { type: "string" },
    cy: { type: "string" },
    sky: { type: "string" },
    top: { type: "string" },
    bottom: { type: "string" },
    guides: { type: "boolean" },
    preview: { type: "boolean" },
    out: { type: "string" },
  },
});

const overlay = Object.fromEntries(
  Object.entries(OVERLAY).map(([k, d]) => [k, values[k] === undefined ? d : Number(values[k])])
);
for (const [k, n] of Object.entries(overlay))
  if (!(n >= 0 && n <= 1)) throw new Error(`--${k} must be 0..1, got ${n}`);
const variants = values.variant ? [values.variant] : Object.keys(VARIANTS);
const widths = values.width ? [Number(values.width)] : SIZES;
const outDir = values.out ? resolve(values.out) : resolve(HERE, "out");
mkdirSync(outDir, { recursive: true });

const strip = (svg) =>
  svg
    .replace(/^[\s\S]*?<svg\b[^>]*>/, "")
    .replace(/<\/svg>\s*$/, "")
    .replace(/<rect\b[^>]*\/>/, "");

const lin = (c) => ((c /= 255) <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const lum = (r, g, b) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
const ratio = (a, b) => (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);

async function build(variantName, W) {
  const H = Math.round((W * 9) / 16);
  const v = VARIANTS[variantName];
  const drawing = strip(await readFile(v.file, "utf8"));

  const lockupW = W * LOCKUP_W;
  const scale = lockupW / v.viewBox.w;
  const lockupH = v.viewBox.h * scale;
  const left = (W - lockupW) / 2;
  const top = H * (values.cy === undefined ? LOCKUP_CY : Number(values.cy)) - lockupH / 2;
  /* The layer holds full weight to just below the lockup, then eases off. */
  const hold = (top + lockupH) / H + 0.03;

  const px = { x: (u) => Math.round(left + (u - v.viewBox.x) * scale), y: (u) => Math.round(top + (u - v.viewBox.y) * scale) };

  const layer = (withLockup, withGuides) =>
    Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">` +
        `<defs><linearGradient id="shade" x1="0" y1="0" x2="0" y2="1">` +
        `<stop offset="0" stop-color="${NEAR_BLACK}" stop-opacity="${overlay.sky}"/>` +
        `<stop offset="${(top / H).toFixed(4)}" stop-color="${NEAR_BLACK}" stop-opacity="${overlay.top}"/>` +
        `<stop offset="${hold.toFixed(4)}" stop-color="${NEAR_BLACK}" stop-opacity="${overlay.top}"/>` +
        `<stop offset="1" stop-color="${NEAR_BLACK}" stop-opacity="${overlay.bottom}"/>` +
        `</linearGradient></defs>` +
        `<rect width="${W}" height="${H}" fill="url(#shade)"/>` +
        (withLockup
          ? `<g transform="translate(${left} ${top}) scale(${scale}) translate(${-v.viewBox.x} ${-v.viewBox.y})">${drawing}</g>`
          : "") +
        (withGuides
          ? `<g fill="none" stroke-width="${Math.max(2, W / 600)}">` +
            /* clay: the avatar. amber: what the display crop cuts. blue: the safe box.
               moss: where the lockup actually landed. */
            `<circle cx="${AVATAR.cx * W}" cy="${AVATAR.cy * H}" r="${(AVATAR.d * H) / 2}" stroke="#B6735D"/>` +
            `<g fill="#A77C40" fill-opacity="0.28" stroke="none">` +
            `<rect x="0" y="0" width="${W}" height="${CROP * H}"/>` +
            `<rect x="0" y="${(1 - CROP) * H}" width="${W}" height="${CROP * H}"/></g>` +
            `<rect x="${SAFE.x * W}" y="${SAFE.y * H}" width="${SAFE.w * W}" height="${SAFE.h * H}" stroke="#378CAC" stroke-dasharray="12 10"/>` +
            `<rect x="${left}" y="${top}" width="${lockupW}" height="${lockupH}" stroke="#7F896D"/>` +
            `</g>`
          : "") +
        `</svg>`
    );

  const photo = await sharp(PHOTO).resize(W, H, { fit: "cover", position: "centre" }).png({ compressionLevel: 0 }).toBuffer();
  const compose = (withLockup, withGuides = false) => sharp(photo).composite([{ input: layer(withLockup, withGuides) }]);

  /* Contrast of the moss tagline against the darkened photograph behind it (WCAG 2.1). */
  const { data, info } = await compose(false).raw().toBuffer({ resolveWithObject: true });
  const found = [];
  for (let y = px.y(v.tagline.y0); y < px.y(v.tagline.y1); y++)
    for (let x = px.x(v.tagline.x0); x < px.x(v.tagline.x1); x++) {
      const i = (y * info.width + x) * info.channels;
      found.push(lum(data[i], data[i + 1], data[i + 2]));
    }
  found.sort((a, b) => a - b);
  const mean = found.reduce((a, b) => a + b, 0) / found.length;
  const light = found[Math.floor(found.length * 0.95)];
  const m = lum(...MOSS);
  console.log(
    `${variantName} ${W}x${H}, shade ${overlay.sky}/${overlay.top}/${overlay.bottom}: moss tagline ${ratio(m, mean).toFixed(2)}:1 on average, ` +
      `${ratio(m, light).toFixed(2)}:1 against the lightest 5% behind it`
  );

  const write = async (pipeline, name) => {
    const info = await pipeline.toFile(resolve(outDir, name));
    console.log(`  ${name}: ${info.width}x${info.height}, ${(info.size / 1024).toFixed(1)} KB`);
  };

  const base = `whatsapp-cover-${variantName}-${W}x${H}`;
  await write(compose(true).jpeg(JPEG), `${base}.jpg`);
  if (values.guides) await write(compose(true, true).png(), `${base}-guides.png`);

  if (values.preview) {
    /* The business page as WhatsApp draws it: the cover cropped to the band it shows,
       the avatar centred and low over it, on the near-black the profile sheet sits on.
       This is a check on the composition, not an asset; nothing here is uploaded. */
    const bandTop = Math.round(CROP * H);
    const bandH = H - 2 * bandTop;
    const banner = await sharp(await compose(true).png().toBuffer())
      .extract({ left: 0, top: bandTop, width: W, height: bandH })
      .png()
      .toBuffer();
    const d = Math.round(AVATAR.d * H);
    const ring = Math.round(d * 0.025);
    const at = { left: Math.round(AVATAR.cx * W - d / 2), top: Math.round(AVATAR.cy * H) - bandTop - Math.round(d / 2) };
    const mask = Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${d}" height="${d}"><circle cx="${d / 2}" cy="${d / 2}" r="${d / 2}" fill="#fff"/></svg>`
    );
    for (const [who, file] of [
      ["mark", `${AVATARS}/ai-wise-1024.png`],
      ["portrait", `${AVATARS}/simon-1024.png`],
    ]) {
      if (!existsSync(file)) {
        console.log(`  no ${file}, skipping the ${who} preview`);
        continue;
      }
      const avatar = await sharp(await sharp(file).resize(d, d).png().toBuffer())
        .composite([{ input: mask, blend: "dest-in" }])
        .png()
        .toBuffer();
      await write(
        sharp({ create: { width: W, height: Math.round(bandH * 1.35), channels: 3, background: NEAR_BLACK } })
          .composite([
            { input: banner, left: 0, top: 0 },
            {
              input: Buffer.from(
                `<svg xmlns="http://www.w3.org/2000/svg" width="${d + ring * 2}" height="${d + ring * 2}">` +
                  `<circle cx="${d / 2 + ring}" cy="${d / 2 + ring}" r="${d / 2 + ring / 2}" fill="${NEAR_BLACK}"/></svg>`
              ),
              left: at.left - ring,
              top: at.top - ring,
            },
            { input: avatar, ...at },
          ])
          .png(),
        `${base}-preview-${who}.png`
      );
    }
  }
}

for (const variant of variants) {
  if (!VARIANTS[variant]) throw new Error(`unknown variant: ${variant}`);
  for (const W of widths) await build(variant, W);
}
