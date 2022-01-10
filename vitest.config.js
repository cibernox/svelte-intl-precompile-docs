import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { sveltekitViteConfig } from './svelte.config.js'
import path from 'path';
import svelteInlineComponents from 'vite-plugin-svelte-inline-components';

export default defineConfig({
  ...sveltekitViteConfig,
  plugins: [
    svelte({ 
      hot: !process.env.VITEST,
    }),
    svelteInlineComponents(),
  ],
  test: {
    global: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
  },
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib'),
    },
  },  
})