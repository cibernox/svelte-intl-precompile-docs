<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Codeblock from '$lib/codeblock.svelte';
	import CodeInline from '$lib/code-inline.svelte';
</script>

<svelte:head>
	<title>Getting started</title>
</svelte:head>

<h1 class="text-4xl font-semibold">Getting started</h1>
<h2 class="text-2xl font-semibold">Instalation</h2>
<p>
	Install svelte-intl-precompile as a runtime dependency of your sveltkit app.
</p>
<Codeblock>npm install svelte-intl-precompile</Codeblock>

<h2 class="text-2xl font-semibold">Create your translations</h2>
<p>
	Next create a folder to put your translations files in. I like to use <CodeInline>/messages</CodeInline> or <CodeInline>/locales</CodeInline>
	at the root of the project, but really any folder will do. 
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

<p>
	I recommend using JSON files but you can use use javascript with an object as their default export. Whatever
	the file extension, you translations inside are just regular strings in the ICU message syntax:
</p>

<Codeblock lang="js">
{`{
	"recent.aria": "Find recently viewed tides",
	"menu": "Menu",
	"foot": "{count} {count, plural, =1 {foot} other {feet}}",
}`}
</Codeblock>

<p>I prefer shallow dictionaries like the one above, but you can also define translations using nested dictionaries.</p>

<Codeblock lang="js">{`{
	"placeholders": {
		"fullname": "John Smith",
		"street-name": "13 Elm Street",
		"subject": "Re: Hello"
	},
	"welcome-hero": "Welcome to Goliath Bank!",
}`}
	</Codeblock>

<h2 class="text-2xl font-semibold">Hook the compiler into SvelteKit</h2>

<p>
	This library's build time compiler needs to hook into the build pipeline of your app. For that, add it
	to the list of vite plugins in your <CodeInline>svelte.config.js</CodeInline>
</p>

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

<p>You are set, time to use the library.</p>