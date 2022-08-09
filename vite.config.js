import { sveltekit } from '@sveltejs/kit/vite';
import precompileIntl from "svelte-intl-precompile/sveltekit-plugin";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
    precompileIntl('locales'), // if your translations are defined in /locales/[lang].json
    sveltekit()
  ],
  ssr: {
    external: ['@babel/core', 'babel-plugin-precompile-intl']
  }  
};

export default config;
