<script>
	import { t } from 'svelte-intl-precompile';
	import DefinitionEntry from '$lib/DefinitionEntry.svelte';
	import scrollToHash from '$lib/scroll-to-hash';;
	import Highlight from "svelte-highlight";
	import javascript from "svelte-highlight/languages/javascript";

	scrollToHash();
</script>

<svelte:head>
	<title>{$t('usage.title')}</title>
</svelte:head>

<h1 class="text-4xl font-semibold">{$t('usage.title')}</h1>

<p>
	{$t('usage.paragraph.preface-1')} <a href="https://github.com/kaisermann/svelte-i18n">svelte-intl</a>
	{$t('usage.paragraph.preface-2')}
</p>

<p>{$t('usage.paragraph.preface-3')}</p>

<Highlight class="bg-code" language={javascript} code={`{
	"page.title": "Svelte Intl Precompile Docs",
	"login-success-msg": "Welcome back, {name}",
	"transfer-received": "You received {amount, number, currency} at {wireDate, time, short} on {wireDate, date, long}"
}
`} />

<h2 class="text-xl font-semibold" id="basic-translation">{@html $t('usage.subsection.basic-translations')}</h2>

<p>{$t('usage.paragraph.basic-translations-1')}</p>

<Highlight class="bg-code" language={javascript} code={`<script>
	import { t } from 'svelte-intl-precompile'
</script>
<h1>{$t('page.title')}</h1>
`} />

<h2 class="text-xl font-semibold" id="passing-arguments">{$t('usage.subsection.passing-arguments')}</h2>

<p>
	{$t('usage.paragraph.passing-arguments-1')} <code class="bg-code px-2">$t()</code> 
	{$t('usage.paragraph.passing-arguments-2')} <code class="bg-code px-2">values</code> 
	{$t('usage.paragraph.passing-arguments-3')}
</p>

<Highlight class="bg-code" language={javascript} code={`<h1>{$t('login-success-msg', { values: { name: user.name } })}</h1>`} />

<p>{$t('usage.paragraph.passing-arguments-4')}</p>

<Highlight class="bg-code" language={javascript} code={`<h1>{$t('transfer-received', { values: { amount: 123.45 , wireDate: transfer.date } })}</h1>`} />

<h2 class="text-xl font-semibold" id="formatting">{$t('usage.subsection.formatting')}</h2>

<p>{$t('usage.paragraph.formatting-1')}</p>

<Highlight class="bg-code" language={javascript} code={`<script>
	import { date, number, time, init } from 'svelte-intl-precompile';
	// Adding a custom formatter for Euro as it's not among the defaults.
	init({
		formats: {
			number: {
				EUR: { style: 'currency', currency: 'EUR' },
			}
		}
	}); 
	// ...
	$: {
		jqueryPlugin.magic({
			dateString: $date(d, { format: 'short' }),
			timeString: $time(t, { format: 'full' }),
			priceString: $number(n, { format: 'EUR' })
		})
	}
</script>
`} />

<h2 class="text-xl font-semibold" id="other-stores">{$t('usage.subsection.other-stores')}</h2>

<p>{$t('usage.paragraph.other-stores-1')}</p>

<dl>
	<DefinitionEntry background="gray">
		{#snippet dt()}<pre>$locale</pre>{/snippet}
		{#snippet dd()}{@html $t('usage.definitions.other-stores-1')}{/snippet}
	</DefinitionEntry>
	<DefinitionEntry background="white">
		{#snippet dt()}<pre>$locales</pre>{/snippet}
		{#snippet dd()}{@html $t('usage.definitions.other-stores-2')}{/snippet}
	</DefinitionEntry>
	<DefinitionEntry background="gray">
		{#snippet dt()}<pre>$isLoading</pre>{/snippet}
		{#snippet dd()}{@html $t('usage.definitions.other-stores-3')}{/snippet}
	</DefinitionEntry>
</dl>

<p>{$t('usage.paragraph.other-stores-2')}</p>

<Highlight class="bg-code" language={javascript} code={`<script>
	import { t, locale, locales } from 'svelte-intl-precompile';
</script>
{#each $locales as loc}
	<button 
		type="button" 
		class={loc === $locale && 'current'} 
		on:click={() => $locale = loc}>{loc}</button>
{/each}
`} />

<p>{@html $t('usage.paragraph.other-stores-3')}</p>
