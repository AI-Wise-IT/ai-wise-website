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

**Logo in the header and footer.** `glyph.svg` and `wordmark.svg` both paint a
near-black backing rectangle. On the near-black page it is invisible; over the hero
photograph it shows as a dark box. `LogoSvg.astro` therefore reads the files at
build time and inlines them without that rectangle and without their fixed pixel
size; the header and the footer both use it. The files in `public/assets/logo/`
are unchanged.

**Footer logo with a live tagline.** The footer no longer shows
`lockup-en-plain.svg`. At a height that suits a footer, the tagline inside the
lockup was too small to read. The footer composes the logo the way
`lockup-en.svg` does instead: the glyph on the left, as tall as the block beside
it, and the wordmark with the tagline underneath, with gaps rounded to the
nearest spacing steps. Glyph and wordmark are the logo files. The wordmark's
viewBox is cropped by the 66-unit clear space the file has around its letters,
so a CSS height is its capital height. The tagline is HTML text. The lockup
draws it in Newsreader italic, but this site ships no Newsreader italic and
keeps Newsreader for its one reflection, so the tagline is set in Source Sans 3
regular, 17px, in moss. That is a departure worth a look in the design system:
it has no rule yet for a lockup whose tagline is live text.

**Round floating button.** The floating WhatsApp button is a 56px circle, by
Simon's choice, where the design system gives buttons a 2px radius. The contact
buttons keep the 2px radius. The design system itself is unchanged.

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
That removes the need for a JavaScript runtime. The site adds one variant of its
own, `.btn--outline-signal`: the outline button with its border and icon in
signal blue and the label in the primary text colour, used for the contact
buttons and the floating WhatsApp button. Its hover and press states use the
same `color-mix` steps as the signal fill, so it introduces no new colour. The
design system itself is unchanged.

**Icons.** The design system loads Lucide from a CDN and flags the whole icon
choice as a substitution awaiting Simon's decision. This site uses a handful of
icons, so the paths are inlined in `src/components/Icon.astro` rather than adding
a dependency or a third-party request the privacy statement would have to name.
One comes from Lucide (arrow-right). The three contact buttons use Tabler Icons
3.46.0 (MIT): mail, brand-linkedin and brand-whatsapp, because Lucide has no
WhatsApp logo and the three should read as one family. The floating WhatsApp
button uses the same brand-whatsapp icon. All of them are drawn as outlines at
stroke 1.5 in `currentColor`, no larger than 32px. One deliberate departure from
the design system's "an icon never replaces a word", by Simon's choice: on narrow
screens the contact buttons show only their icons, and the floating WhatsApp
button shows only its icon on every screen. The logos are unmistakable, and each
button keeps its name as its accessible name.

**Portrait.** The original is a 3000x2001 landscape frame, kept at
`assets/profile-picture-professional.jpg` and never sent to the browser. The
design system crops it 4:5. The site uses two crops instead, by Simon's choice,
because the upright portrait was out of proportion and on a phone he wants it
landscape; the design system itself is unchanged. Both crops were cut once with
sharp and saved as JPEG masters (quality 90) in `src/assets/about/`:
`portrait-3x2.jpg` (left 398, top 0, 2100x1400, downscaled to 1440x960, 143 KB),
shown below 768px where the section stacks, and `portrait-4x5.jpg` (left 808,
top 0, 1280x1600, downscaled to 880x1100, 161 KB), shown from 768px in a 200px
column beside the text. Both keep the face on the horizontal centre with the eyes
near the upper third. `About.astro` builds the `<picture>` with `getImage()`, the
same way `Hero.astro` does.

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
above and check this file still describes what is true. If the logo files change,
check that `wordmark.svg` still has a 66-unit margin around its letters, because
`LogoSvg.astro` crops by that amount.

## What was deliberately left out

`components/forms/`, `ui_kits/documents/`, `slides/`, the `Practice` and `Scan`
screens, and the `Band`, `Card`, `Badge`, `Callout` and `StatBlock` components.
None of them are needed by a four-section page with no form. The design system
keeps them; this repo does not carry copies it does not use.
