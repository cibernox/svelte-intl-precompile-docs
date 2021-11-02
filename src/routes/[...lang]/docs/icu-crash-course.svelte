<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { t } from 'svelte-intl-precompile';
	// import Codeblock from '$lib/codeblock.svelte';
	// import CodeInline from '$lib/code-inline.svelte';
	import scrollToHash from '$lib/scroll-to-hash';import { afterUpdate } from 'svelte';
;
	scrollToHash();
</script>

<svelte:head>
	<title>{$t('icu-crash-course.title')}</title>
</svelte:head>

<h1 class="text-4xl font-semibold">{$t('icu-crash-course.title')}</h1>

<p>
	This library analyzes and compiles the translations authored in the ICU message syntax. While the ICU message syntax is
	an independent proyect this is an accelerated course on why it's good and how to use the main features.
</p>

<h2 class="text-2xl font-semibold">{$t('icu-crash-course.subsection.why')}</h2>

<p>
	ICU stands for <em class="italic">International Components for Unicode</em>. While its popularity begun in C/C++ and Java,
	it's the javascript ecosystem where it has become the defacto standard for internationalization, although it's also popular
	in Python and PHP.
</p>

<p>
	Internationalizing apps is a whole lot more than just mapping some keys to the appropiate translated string in a dictionary. Properly 
	internationalized apps must handle all aspects of translation, including the way dates and times are formatted, what delimiters are used
	in numbers to separate the thousands or the decimals, currencies and support gendered languages.
</p>

<p>
	Even something as simple as plurals can get very complex depending on the language. English, German and Spanish have singular and plural, 
	but some slavic languages have 3, and other languages like Arabic have 6 depending on the number of items being pluralized. Sometimes the threshold 
	where we have to change from one plural form to the next varies depending on the reginal variant. <br>
	English doesn't have many gendered words but French or Italian do, and the adjectives must match the noun's gender.<br>
	<code class="inline">123456789</code> formatted in US regional variante of English will be <code class="inline">123,456,789</code> but in the Indian 
	variant will be <code class="inline">12,34,56,789</code>. <br>
	Formatting currencies the $ symbol goes before the amount, but the € goes after.
</p>

<p>
	The ICU abstracts all this complexity from the developers and gives the real professional translators a meta language expressive enough to 
	handle all the subtleties on they side.
</p>

<h2 class="text-2xl font-semibold">{$t('icu-crash-course.subsection.interpolations')}</h2>


<!-- 
<h2 class="text-2xl font-semibold">{$t('getting-started.subsection.installation')}</h2>

<p>{$t('getting-started.paragraph.installation-1')}</p>

<Codeblock>npm install svelte-intl-precompile</Codeblock>

<h2 class="text-2xl font-semibold">{$t('getting-started.subsection.create-translations')}</h2>
<p>
	{$t('getting-started.paragraph.create-translations-1')} <CodeInline>/messages</CodeInline> {$t('common.or')} <CodeInline>/locales</CodeInline>
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

<p>{$t('getting-started.paragraph.hook-into-sveltekit-1')}<CodeInline>/svelte.config.js</CodeInline>.</p>

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

<p>{$t('getting-started.paragraph.hook-into-sveltekit-2')}</p> -->