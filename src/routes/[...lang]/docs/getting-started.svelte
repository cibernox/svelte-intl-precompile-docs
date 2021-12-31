<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { t } from 'svelte-intl-precompile';
	import Codeblock from '$lib/codeblock.svelte';
	import CodeInline from '$lib/code-inline.svelte';
	import scrollToHash from '$lib/scroll-to-hash';;
	scrollToHash();
</script>

<svelte:head>
	<title>{$t('getting-started.title')}</title>
</svelte:head>

<h1 class="text-4xl font-semibold">{$t('getting-started.title')}</h1>

<h2 class="text-2xl font-semibold">{$t('getting-started.subsection.installation')}</h2>

<p>{$t('getting-started.paragraph.installation-1')}</p>

<Codeblock>npm install svelte-intl-precompile</Codeblock>

<h2 class="text-2xl font-semibold">{$t('getting-started.subsection.create-translations')}</h2>
<p>
	{@html $t('getting-started.paragraph.create-translations-1', { values: {
		dir1: '/messages',
		or:   $t('common.or'),
		dir2: '/locales',
	} })}
	{$t('getting-started.paragraph.create-translations-2')} 
</p>

<Codeblock>
├── locales
│   ├── en.json
│   ├── es.json
├── src
...
├── static
├── package.json
└── svelte.config.js
</Codeblock>

<p>{$t('getting-started.paragraph.create-translations-3')}</p>

<Codeblock lang="js">
{`{
	"recent.aria": "Find recently viewed tides",
	"menu": "Menu",
	"foot": "{count} {count, plural, =1 {foot} other {feet}}",
}`}
</Codeblock>

<p>{$t('getting-started.paragraph.create-translations-4')}</p>

<Codeblock lang="js">{`{
	"placeholders": {
		"fullname": "John Smith",
		"street-name": "13 Elm Street",
		"subject": "Re: Hello"
	},
	"welcome-hero": "Welcome to Goliath Bank!",
}`}
	</Codeblock>

<h2 class="text-2xl font-semibold">{$t('getting-started.subsection.hook-into-sveltekit')}</h2>

<p>{@html $t('getting-started.paragraph.hook-into-sveltekit-1', { values: { path: '/svelte.config.js' }})}</p>

<Codeblock lang="js">
{`import precompileIntl from "svelte-intl-precompile/sveltekit-plugin.js";

const config = {
	kit: {
		target: '#svelte',
		vite: {
			plugins: [
				precompileIntl('locales') // if your translations are defined in /locales/[lang].json
			]			
		}		
	}
};

export default config;`}
</Codeblock>

<p>{$t('getting-started.paragraph.hook-into-sveltekit-2')}</p>

<h2 class="text-2xl font-semibold">{$t('getting-started.subsection.hook-into-vite')}</h2>

<p>{@html $t('getting-started.paragraph.hook-into-vite-1', { values: { path:'/vite.config.js' }})}</p>

<Codeblock lang="js">
{`import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import precompileIntl from "svelte-intl-precompile/sveltekit-plugin.cjs";

export default defineConfig({
  resolve: {
    dedupe: ["svelte"]
  },
  plugins: [
    svelte(),
    precompileIntl("locales"),
  ],
});`}
</Codeblock>
