<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { t } from 'svelte-intl-precompile';
	import scrollToHash from '$lib/scroll-to-hash';

	scrollToHash();
	let interpolation = 'orange';
	let guest = 'John';
	let plural1 = 0;
	let plural2 = 0;
	let guestCount = 0;
	let interpolationKey = "Your have {numCats, plural, one {one cat} other {# cats}}";
	let simplePlural = "Your have {numCats, plural, one {one cat} other {# cats}}";
	let complexPlural = "Your have {numCats, plural, \n  =0 {no cats at all} \n  =1 {one single cat} \n  =2 {a couple cats} \n  =3 {a trio of cats} \n  =12 {a dozen cats} \n  other {exactly # cats}}";
	let offsetPlural = "Mary {guestCount, plural, offset:1 \n  =0 {does not give a party.} \n  =1 {invites {guest} to her party.} \n  =2 {invites {guest} and one other person to her party.} \n  other {invites {guest} and # other people to her party.}}";
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

<p>
	ICU messages support interpolating values, which will be properly sanitized so passing <code class="inline">undefined</code> will not interpolate 
	as "undefined".
</p>

<table class="table-auto w-full text-left">
  <thead>
    <tr>
      <th>{$t('icu-crash-course.table-heads.definition')}</th>
      <th>{$t('icu-crash-course.table-heads.definition')}</th>
      <th>{$t('icu-crash-course.table-heads.output')}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
				<pre><code>{interpolationKey}</code></pre>
			</td>
      <td>
				<input 
					class="shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" 
					type="text" 
					bind:value={interpolation} 
					placeholder="chosen">
			</td>
      <td>{$t('icu-crash-course.table-cells.interpolations-2', { values: { chosen: interpolation } })}</td>
    </tr>
	</tbody>
</table>

<h2 class="text-2xl font-semibold">{$t('icu-crash-course.subsection.plurals')}</h2>

<p>
	The second most used feature in any app is pluralization. The ICU syntax has a dedicated <code class="inline">plural</code>
	helper to define plural translations that from very simple to quite complicated, all within the translation itself.
</p>

<div>
	Each path for the plural is prefixed with the numeric qualifier. The possible qualifiers are:
	<ul class="list-disc list-inside ml-8">
		<li>zero</li>
		<li>one (singular)</li>
		<li>two (dual)</li>
		<li>few (paucal)</li>
		<li>many (also used for fractions)</li>
		<li>other (general plural form. The one used on languages with only one plural)</li>
	</ul>
	Let's se some examples first:
</div>

<table class="table-auto w-full text-left">
  <thead>
    <tr>
      <th>{$t('icu-crash-course.table-heads.definition')}</th>
      <th>{$t('icu-crash-course.table-heads.values')}</th>
      <th>{$t('icu-crash-course.table-heads.output')}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
				<pre><code>{simplePlural}</code></pre>
			</td>
      <td>
				<input 
					class="shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" 
					type="number" 
					bind:value={plural1} 
					min="0">
			</td>
      <td>{$t('icu-crash-course.table-cells.plurals-simple', { values: { numCats: plural1 } })}</td>
    </tr>
    <tr>
      <td>
				<pre><code>{complexPlural}</code></pre>
			</td>
      <td>
				<input 
					class="shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" 
					type="number" 
					bind:value={plural2} 
					min="0">
			</td>
      <td>{$t('icu-crash-course.table-cells.plurals-complex', { values: { count: plural2 } })}</td>
    </tr>
    <tr>
      <td>
				<pre><code>{offsetPlural}</code></pre>
			</td>
      <td>
				<input 
					class="shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" 
					type="number" 
					bind:value={guestCount} 
					min="0">
				<input 
					class="shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" 
					type="text" 
					bind:value={guest} 
					placeholder="guest"
					min="0">
			</td>
      <td>{$t('icu-crash-course.table-cells.plurals-offset', { values: { guest, guestCount } })}</td>
    </tr>
	</tbody>
</table>

<p>
	Some languages like English only leverage <code class="inline">one</code> and <code class="inline">other</code> but others
	will be able to use the best plural form. In particular threshold value that divides <code class="inline">few</code> and <code class="inline">many</code>
	is heavily cultural.
</p>

<p>
	You can also specify translations for exact values using <code class="inline">=N</code>. When a number is specified
	that way that translation will supersede the language's default behavior. <br>
	For instance, in english you could use <code class="inline">=2</code> or <code class="inline">=12</code> to have different
	translations specifically for a couple and a dozen instead of using the generic plural.
</p>

<p>
	Lastly, plurals can also make us of the hashtag to print as number the value being used in the plural, and
	optionally the helper can receive an offset that will be substracted to the value in the hashtag.
</p>

<h2 class="text-2xl font-semibold">{$t('getting-started.subsection.installation')}</h2>


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