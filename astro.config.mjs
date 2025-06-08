import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { fileURLToPath } from 'url'; // <--- Add this import

// https://astro.build/config
export default defineConfig({
  // ... otras configuraciones de Astro

  vite: {
    resolve: {
      alias: {
        // Modifica esta línea:
        // Convertir import.meta.url a un path de sistema de archivos antes de resolver
        '@': fileURLToPath(new URL('./src', import.meta.url)), // <--- Use this
      },
    },
    optimizeDeps: {
      disabled: true,
    }
  },
  integrations: [react()],
});