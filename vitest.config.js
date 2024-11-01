import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path';

export default defineConfig(({ mode }) => ({
  plugins: [
    svelte({ 
      hot: !process.env.VITEST,
    }),
  ],
  test: {
    global: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
  },
  resolve: {
    conditions: mode === 'test' ? ['browser'] : [],
    alias: {
      $lib: path.resolve('./src/lib'),
    },
  },  
}))