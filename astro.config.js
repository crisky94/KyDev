import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';


export default defineConfig({
  site: 'https://kydev.com/',
  trailingSlash: 'always', 
  markdown: {
    shikiConfig: {
      theme: 'monokai',
    },
  },
  integrations: [react(), tailwind({}), sitemap(), robotsTxt()],
  buildOptions: {
    output: 'static',
  },
  build: {
    minify: false,
    compress: false,
  },
});
