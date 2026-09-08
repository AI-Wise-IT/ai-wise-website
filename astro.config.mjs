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
      prefixDefaultLocale: false,
      // No automatic redirect on browser language. See R-L7.
      redirectToDefaultLocale: false,
    },
  },
  // Sitemap carries hreflang alternates for both languages, so a crawler that
  // finds one version finds the other. See docs/prd.md, R-S.4 and R-L5.
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "nl",
        // Same hreflang codes the pages declare in their own head, so the two
        // signals never disagree.
        locales: { nl: "nl", en: "en" },
      },
    }),
  ],
  build: {
    inlineStylesheets: "always",
  },
});
