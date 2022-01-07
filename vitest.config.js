import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { sveltekitViteConfig } from './svelte.config.js'
import path from 'path';
import svelteInlineCompile from './svelte-inline-compile.js';

export default defineConfig({
  ...sveltekitViteConfig,
  plugins: [
    svelte({ hot: !process.env.VITEST }),
    svelteInlineCompile(),
  ],
  test: {
    global: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib'),
    },
  },  
})