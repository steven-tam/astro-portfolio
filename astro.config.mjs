// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://www.steventam.com",
  integrations: [sitemap(), tailwind()],
  server: { host: '0.0.0.0'},
  devToolbar: { enabled: false },
  

  
});
