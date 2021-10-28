<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { t } from "precompile-intl-runtime";
	let translations = `{
	"header": "Svelte Intl Precompile is {adjective}",
	"posted-on": "Posted on {postDate, date, long}"
}`
	let transformedTranslations = "";
	let timer;
	function transform(code) {
		fetch('/playground', { method: 'POST', body: code })
			.then(r => {
				if (r.ok) {
					return r.json();
				} else {
					throw new Error('Invalid syntax');
				}
			})
			.then(json => transformedTranslations = json.transformed)
			.catch(() => {
				// noop
			});
	}
	function debouncedTransform(code) {
		clearTimeout(timer);
		timer = setTimeout(() => transform(code), 750);
	}

	$: transformedTranslations === "" ? transform(translations) : debouncedTransform(translations)
</script>

<svelte:head>
	<title>{$t('playground.title')}</title>
</svelte:head>

<h1 class="text-4xl font-semibold">{$t('playground.title')}</h1>

<p>
	Play with the compiler a bit. Type your translations in the first box
	and check the compiled output.
</p>

<pre
	contenteditable
	bind:textContent={translations}
	class="p-4 m-2 rounded bg-code overflow-x-auto">
	<code><div>{translations}</div></code>
</pre>		

<pre class="p-4 mt-2 rounded bg-code overflow-x-auto">
	<code><div>{transformedTranslations}</div></code>
</pre>
