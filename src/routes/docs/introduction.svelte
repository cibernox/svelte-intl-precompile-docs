<script context="module" lang="ts">
	import Playground from "$lib/playground.svelte";
import { t } from "precompile-intl-runtime";
	export const prerender = true;
</script>

<svelte:head>
	<title>{$t('introduction.title')}</title>
</svelte:head>

<h1 class="text-4xl font-semibold">{$t('introduction.title')}</h1>

<h2 class="text-2xl font-semibold">{$t('introduction.subtitle.why-use-it')}</h2>

<p>{$t('introduction.paragraph.why-use-it-1')}</p>
<p>{@html $t('introduction.paragraph.why-use-it-2')}</p>
<p>{$t('introduction.paragraph.why-use-it-3')}</p>
<p>{$t('introduction.paragraph.why-use-it-4')}</p>

<h2 class="text-2xl font-semibold">What? Show me the code</h2>

<p>There, play with it. Paste your own translations and see the transformed output.</p>

<Playground></Playground>

<h2 class="text-2xl font-semibold">What features does it have?</h2>

<p>
	All the features supported by the ICU message syntax are supported<br>
	It has an API almost completely compatible with <a href="https://github.com/kaisermann/svelte-i18n">svelte-i18n</a>,
	another very popular and well designed internationalization library for Svelte.js
</p>

<p>Its main features include:</p>

<ul class="list-disc list-inside px-8">
	<li>Translations with interpolation, interpolation, selected substranslations and all ICU features.</li>
	<li>Formatters for dates, tims, numbers, ordinals, currencies all leveraging the native Intl API available in modern browsera and node.</li>
	<li>A svelte-oriented API providing convenient to use stores that update automatically when locale or translations change.</li>
	<li>A range functions to load locales asynchronously when needed or to extract the default locale from the request headers in SSR mode.</li>
	<li>Full tree-shaking of all the above features that your app doesn't use.</li>
</ul>