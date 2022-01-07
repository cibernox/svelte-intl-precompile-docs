<script lang="ts">
	import { t } from "precompile-intl-runtime";
	let translations = `{
	"header": "Svelte Intl Precompile is {adjective}",
	"posted-on": "Posted on {postDate, date, long}",
	"invite-friend": "{name} has joined Svelte! Give {gender, select, male {him} female {her} other {your friend}} a warm welcome!",
	"friends-msg": "You have {count, plural, zero {no friend} one {just # friend} other {# friends}}",
}`
	let transformedTranslations = "";
	let minifiedTranslations = "";
	let showMinified = false;
	$: output = showMinified ? minifiedTranslations : transformedTranslations;
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
			.then(({ transformed, minified }) => {
				[transformedTranslations, minifiedTranslations] = [transformed, minified];
			})
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
<div>
	<label for="email" class="text-sm block mb-2">Translations</label>
	<pre
		contenteditable
		bind:textContent={translations}
		class="p-4 m-2 rounded bg-code overflow-x-auto text-sm border ">
		<code><div>{translations}</div></code>
	</pre>
	{translations.length} bytes	
</div>

<div>
	<div class="flex justify-between">
		<label for="email" class="text-sm block mb-2">Output</label>

		<label for="show-minified" class="flex items-center">
			<input type="checkbox" bind:checked={showMinified} id="show-minified">
			<span class="ml-2 text-sm">Show minified output</span>
		</label>
	</div>

	<pre class="p-4 mt-2 rounded bg-code overflow-x-auto text-sm">
		<code><div>{output}</div></code>
	</pre>
	{output.length} bytes
</div>
