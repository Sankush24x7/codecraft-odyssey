import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/codecraft-odyssey/',
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  }
});
