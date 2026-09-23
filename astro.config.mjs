// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Dutch is the default locale and sits on the root; English sits on /en/.
// See docs/prd.md, R-L1.
export default defineConfig({
  site: "https://aiwise.it.com",
  output: "static",
  // One canonical shape for every URL: no trailing slash. vercel.json enforces
  // the same, so a crawler never meets two spellings of one page.
  trailingSlash: "never",
  i18n: {
    defaultLocale: "nl",
    locales: ["nl", "en"],
    routing: {
      // Dutch has no /nl prefix. Since Astro 6, redirectToDefaultLocale may only
      // be set when prefixDefaultLocale is true, and it already defaults to
      // false, so it is not set here. There is no redirect on browser language
      // either way. See docs/prd.md, R-L7.
      prefixDefaultLocale: false,
    },
  },
  // Sitemap carries hreflang alternates for both languages, so a crawler that
  // finds one version finds the other. See docs/prd.md, R-S.4 and R-L5.
  integrations: [
    sitemap({
      // The thank-you pages are only reached by sending the contact form.
      filter: (page) => !/\/(bedankt|en\/thanks)$/.test(new URL(page).pathname),
      i18n: {
        defaultLocale: "nl",
        // Same hreflang codes the pages declare in their own head, so the two
        // signals never disagree.
        locales: { nl: "nl", en: "en" },
      },
    }),
  ],
  // The site loads nothing from anywhere else, so the policy is "self", with one
  // exception: the contact form posts to Formward (forms.formward.eu), as a form
  // submission without JavaScript and as a fetch with it. See docs/prd.md, S4.
  // Astro hashes the inline stylesheet and the analytics bootstrap script and
  // puts those hashes in the policy, which is why 'unsafe-inline' is not needed.
  // frame-ancestors is omitted on purpose: it is ignored in a meta-tag policy,
  // and vercel.json carries X-Frame-Options for that instead.
  security: {
    csp: {
      algorithm: "SHA-256",
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self' https://forms.formward.eu",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self' https://forms.formward.eu",
      ],
    },
  },
  build: {
    inlineStylesheets: "always",
  },
});
