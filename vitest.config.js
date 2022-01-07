import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { sveltekitViteConfig } from './svelte.config.js'
import path from 'path';
import svelteInlineCompile from 'vite-plugin-svelte-inline-compile';

export default defineConfig({
  ...sveltekitViteConfig,
  plugins: [
    svelte({ 
      hot: !process.env.VITEST,
      compilerOptions: { format: "cjs" }
    }),
    svelteInlineCompile(),
  ],
  test: {
    global: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
  },
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib'),
      // $app: path.resolve('./node_modules/@sveltejs/kit/assets/runtime/app'),
    },
  },  
})