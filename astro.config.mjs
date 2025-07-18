// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://feophan.github.io',
  base: 'tq-collation',
  vite: {
    plugins: [tailwindcss()]
  }
});
