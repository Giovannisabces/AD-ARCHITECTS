import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
// import tailwindcssNesting from 'tailwindcss/nesting'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
  // ,vite: {
  //   css: {
  //     postcss: {
  //       plugins: [tailwindcssNesting()]
  //     }
  //   }
  // }
});