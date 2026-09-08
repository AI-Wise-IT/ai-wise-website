# AI Wise website

The public website for AI Wise, at <https://aiwise.it.com>.

One page, in Dutch and English, covering what AI Wise stands for, who is behind
it, and how to get in touch. No offer, no pricing, no scan. The requirements are
in [docs/prd.md](docs/prd.md).

## Stack

- [Astro](https://astro.build), static output, no client-side JavaScript
- Design tokens and assets from the AI Wise design system in Claude Design;
  see [docs/design-system-import.md](docs/design-system-import.md)
- Hosted on Vercel

## Running it

```bash
npm install
npm run dev
```

The dev server binds to IPv6 by default, which some tools cannot reach. To force
IPv4:

```bash
npm run dev -- --host 127.0.0.1
```

Build and preview the production output:

```bash
npm run build
npm run preview
```

Type-check the Astro components:

```bash
npm run check
```

## Layout

```
public/            static files served as-is
  assets/logo/     wordmark, glyph, lockups, favicons
  assets/weave/    the four weave masters
  fonts/           subset WOFF2 fonts
  llms.txt         orientation file for language models
  robots.txt       crawler policy
src/
  assets/          images that go through Astro's image pipeline
  components/      the page sections and the small shared pieces
  content/copy.ts  all user-facing copy, both languages
  layouts/Base.astro  document shell, metadata, structured data
  pages/           / and /privacy in Dutch, /en and /en/privacy in English
  styles/tokens/   imported from the design system, not edited here
  styles/site.css  what this site adds on top
docs/              PRD and the design system import record
```

## Editing the copy

All text lives in [`src/content/copy.ts`](src/content/copy.ts), typed so both
languages stay in step. A text change is not a code change.

The copy follows the voice rules in the design system's `readme.md`, under
"Content fundamentals". In short: first person singular as Simon, sentence case,
concrete before clever, claims only with a qualification. No hype vocabulary, no
experience claims, no statements about time saved or safety, no emoji, no
em-dashes. The tagline stays English and untranslated in both languages.

## Discoverability

The site is meant to be readable by search engines and by AI search and answer
systems alike:

- Static HTML, so nothing essential needs JavaScript to appear
- `robots.txt` allows regular crawlers, AI search crawlers and user-triggered
  fetchers; the model-training category is a separate decision, currently allowed
- `llms.txt` gives a plain orientation to what AI Wise is and is not
- JSON-LD for the business, the person and the site
- One canonical host, no trailing slashes, `hreflang` for both languages plus
  `x-default`, and a sitemap that carries the alternates

## Status

The copy is a draft awaiting Simon's approval. Open decisions are listed at the
end of [docs/prd.md](docs/prd.md).
