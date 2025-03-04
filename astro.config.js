import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://kydev.com/', // Use to generate your sitemap and canonical URLs in your final build.
  trailingSlash: 'always', // Use to always append '/' at end of url
  markdown: {
    shikiConfig: {
      theme: 'monokai', // Config for syntax highlighting themes
    },
  },
  integrations: [react(), tailwind({}), sitemap(), robotsTxt()],
  buildOptions: {
    output: 'static',  // Esto asegura que el build será completamente estático
  },
  build: {
    minify: false, // Desactiva la minificación del código
    compress: false,
  },
});
