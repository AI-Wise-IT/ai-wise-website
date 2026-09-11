# Design system import

The AI Wise design system is the source of truth for every visual decision on
this site. It lives in Claude Design, project `0a1bab69-70cf-421d-abe9-7124374b18af`,
and is read through the `DesignSync` tool after `/design-login`.

Imported on 8 September 2026.

## What was imported, and where it went

| From the design system | In this repo |
| --- | --- |
| `tokens/colors.css` | `src/styles/tokens/colors.css` |
| `tokens/typography.css` | `src/styles/tokens/typography.css` |
| `tokens/spacing.css` | `src/styles/tokens/spacing.css` |
| `tokens/layout.css` | `src/styles/tokens/layout.css` |
| `tokens/motion.css` | `src/styles/tokens/motion.css` |
| `tokens/semantic.css` | `src/styles/tokens/semantic.css` |
| `tokens/base.css` | `src/styles/tokens/base.css` |
| `tokens/fonts.css` | `src/styles/tokens/fonts.css` |
| `styles.css` | `src/styles/styles.css`, plus one import of `site.css` |
| `assets/logo/*.svg` | `public/assets/logo/` |
| `assets/logo/png/*` | `public/assets/logo/png/` |
| `assets/weave/masters/*.svg` | `public/assets/weave/masters/`, kept only for `base.css`, see below |
| `assets/fonts/*.ttf` | converted, see below |
| `assets/profile-picture-professional.jpg` | cropped, see below |

Six of the eight token files are byte-for-byte copies. The two that changed say
so at the top of the file.

## Deviations, and why

**`tokens/base.css`.** The four weave `background-image` URLs were changed from
`../assets/weave/masters/...` to `/assets/weave/masters/...`. The stylesheet is
bundled by Astro and the masters are served from `public/`, so the relative path
no longer resolves. Nothing else in the file changed.

**The weave is no longer on the website.** Since 11 September 2026 the hero uses a
photograph instead (see below). `Weave.astro` and the weave CSS in `site.css` are
gone, and nothing on the site uses the `.aiw-weave` classes. `base.css` still
carries them, because it stays a verbatim copy of the design system, and its
`background-image` URLs still point at `/assets/weave/masters/`. Those four SVGs
therefore stay in `public/`: without them Vite warns at build time that the URLs
do not resolve. They cost nothing at runtime, since no element ever gets the
classes that load them.

**Hero photograph.** A generated nature photograph, a golden eagle gliding over a
green forest canopy, following the photography direction in the design system's
`readme.md`. Two crops: 16:9 for landscape-shaped screens and 4:5 for portrait
ones. The sources are Simon's selection in the AI Wise folder,
`input/selected-eagle-images/desktop/landscape-09.png` (2560x1440) and
`mobile/portrait-09.png` (1440x1800), both upscaled; the smaller originals are
not used. They were converted once to JPEG masters with sharp (quality 93,
mozjpeg, 4:4:4 chroma, alpha removed) and live in `src/assets/hero/`, not in
`public/`, so Astro's image pipeline produces AVIF, WebP and JPEG at several
widths. The masters are 672 KB and 456 KB. Web versions of the same two frames,
with the direction and the generation prompt, belong in the design system under
`assets/photography/` and the "Photography" section of its `readme.md`.

**Logo in the header.** `glyph.svg` and `wordmark.svg` both paint a near-black
backing rectangle. On the near-black page it is invisible; over the hero
photograph it shows as a dark box. `Header.astro` therefore reads the two files at
build time and inlines them without that rectangle and without their fixed pixel
size. The files in `public/assets/logo/` are unchanged.

**`tokens/fonts.css`.** Rewritten. The design system links the three variable
TTFs directly, which is right for a prototype and costs 1.5 MB in production.
Here they are subset to Latin and converted to WOFF2. Source Sans 3 stays
variable at 23 KB. Newsreader is pinned to the single instance the system
actually uses, `opsz` 18 and `wght` 400, at 19 KB rather than 125 KB. Newsreader
Italic is not shipped because nothing on this site uses it.

**Components.** None of the JSX was imported. The components assume a global
`window.AIWiseDesignSystem_0a1bab`, which is a prototype pattern, and this site
needs five of the nineteen. `base.css` already carries the weave, the container,
the eyebrow, the display and lead type and the reflective style as plain CSS, so
the Astro components in `src/components/` use those classes directly. The one
component with real styling of its own, `Button`, was translated to CSS in
`src/styles/site.css`: same sizes, same variants, same `color-mix` hover and
press values, with `:hover` and `:active` doing what React state does in the JSX.
That removes the need for a JavaScript runtime on a page that has no interaction.

**Icons.** The design system loads Lucide from a CDN and flags the whole icon
choice as a substitution awaiting Simon's decision. This site uses two icons, so
the paths are inlined in `src/components/Icon.astro` rather than adding a
dependency or a third-party request the privacy statement would have to name.
The system's rules still apply: outline only, stroke 1.5, `currentColor`, never
larger than 32px, never replacing a word.

**Portrait.** The original is a 3000x2001 landscape frame. The design system
crops it 4:5. That crop is now done at build time, from the horizontal centre at
full height, downscaled to 880x1100, rather than by `object-fit` in the browser.
The original stays at `assets/profile-picture-professional.jpg`.

## Reproducing the font conversion

Requires `fonttools` and `brotli`.

```bash
pip install fonttools brotli
```

The Latin subset, as one line:

```
U+0000-00FF,U+0131,U+0141-0142,U+0152-0153,U+0160-0161,U+0178,U+017D-017E,U+0192,U+02C6,U+02DC,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212
```

Source Sans 3, kept variable:

```bash
python -m fontTools.subset SourceSans3-VariableFont_wght.ttf --unicodes="$SUBSET" --layout-features="kern,liga,calt,ccmp,locl,mark,mkmk" --flavor=woff2 --output-file=public/fonts/source-sans-3-var.woff2
```

Newsreader, pinned then subset:

```bash
python -m fontTools.varLib.instancer Newsreader-VariableFont_opsz-wght.ttf opsz=18 wght=400 --output=news-static.ttf
python -m fontTools.subset news-static.ttf --unicodes="$SUBSET" --layout-features="kern,liga,calt,ccmp,locl,mark,mkmk" --flavor=woff2 --output-file=public/fonts/newsreader-18-400.woff2
```

## Re-importing

Imported files are not edited locally. A change belongs in the design system and
comes back through a new import. When re-importing, re-apply the two deviations
above and check this file still describes what is true.

## What was deliberately left out

`components/forms/`, `ui_kits/documents/`, `slides/`, the `Practice` and `Scan`
screens, and the `Band`, `Card`, `Badge`, `Callout` and `StatBlock` components.
None of them are needed by a four-section page with no form. The design system
keeps them; this repo does not carry copies it does not use.
