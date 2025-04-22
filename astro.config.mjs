// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://kufaii.xyz",
  integrations: [sitemap()],

  markdown: {
    shikiConfig: {
      theme: "tokyo-night",
      wrap: false,
    },
  },

  output: "server",

  adapter: node({
    mode: "standalone",
  }),
});
