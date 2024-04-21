import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: ' https://davidzavala123.github.io',
  base: '/lombok-webpage',
  output: "server",
  adapter: netlify()
});