<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>Introduction</title>
</svelte:head>

<h1 class="text-4xl font-semibold">Introduction</h1>

<h2 class="text-2xl font-semibold">Why you'd want to use it?</h2>

<p>
	Svelte-intl-precompile is an i18n library for svelte apps that aims to provide all the
	features your app may need with the smallest possible penalty in both app size and runtime 
	performance.
</p>

<p>
	To accomplish that, it takes a different approach to most	internationalization libraries.
	Much like Svelte.js analyzes and understands your code and at build time compiles it 
	to minimal and efficient javascript, this library inspects your translations defined
	in the <a href="https://lokalise.com/blog/complete-guide-to-icu-message-format" class="text-primary underline">ICU message syntax</a> and compiles them to small and efficient inline functions.
</p>

<h2 class="text-2xl font-semibold">Features</h2>

<p>
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