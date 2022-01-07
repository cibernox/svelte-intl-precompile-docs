<script context="module" lang="ts">
	export const prerender = true;
</script>
<script>
	import { t } from 'svelte-intl-precompile';
	import Codeblock from '$lib/Codeblock.svelte';
	import DefinitionEntry from '$lib/DefinitionEntry.svelte';
	import scrollToHash from '$lib/scroll-to-hash';;
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

<Codeblock lang="js">{`{
	"page.title": "Svelte Intl Precompile Docs",
	"login-success-msg": "Welcome back, {name}",
	"transfer-received": "You received {amount, number, currency} at {wireDate, time, short} on {wireDate, date, long}"
}
`}</Codeblock>

<h2 class="text-xl font-semibold" id="basic-translation">{@html $t('usage.subsection.basic-translations')}</h2>

<p>{$t('usage.paragraph.basic-translations-1')}</p>

<Codeblock lang="jsx">{`<script>
	import { t } from 'svelte-intl-precompile'
</script>
<h1>{$t('page.title')}</h1>
`}</Codeblock>

<h2 class="text-xl font-semibold" id="passing-arguments">{$t('usage.subsection.passing-arguments')}</h2>

<p>
	{$t('usage.paragraph.passing-arguments-1')} <code class="bg-code px-2">$t()</code> 
	{$t('usage.paragraph.passing-arguments-2')} <code class="bg-code px-2">values</code> 
	{$t('usage.paragraph.passing-arguments-3')}
</p>

<Codeblock lang="jsx">{`<h1>{$t('login-success-msg', { values: { name: user.name } })}</h1>`}</Codeblock>

<p>{$t('usage.paragraph.passing-arguments-4')}</p>

<Codeblock lang="jsx">{`<h1>{$t('transfer-received', { values: { amount: 123.45 , wireDate: transfer.date } })}</h1>`}</Codeblock>

<h2 class="text-xl font-semibold" id="formatting">{$t('usage.subsection.formatting')}</h2>

<p>{$t('usage.paragraph.formatting-1')}</p>

<Codeblock lang="html">{`<script>
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
`}</Codeblock>

<h2 class="text-xl font-semibold" id="other-stores">{$t('usage.subsection.other-stores')}</h2>

<p>{$t('usage.paragraph.other-stores-1')}</p>

<dl>
	<DefinitionEntry background="gray">
		<svelte:fragment slot="dt"><pre>$locale</svelte:fragment>
		<svelte:fragment slot="dd">{@html $t('usage.definitions.other-stores-1')}</svelte:fragment>
	</DefinitionEntry>
	<DefinitionEntry background="white">
		<svelte:fragment slot="dt"><pre>$locales</svelte:fragment>
		<svelte:fragment slot="dd">{@html $t('usage.definitions.other-stores-2')}</svelte:fragment>
	</DefinitionEntry>
	<DefinitionEntry background="gray">
		<svelte:fragment slot="dt"><pre>$isLoading</svelte:fragment>
		<svelte:fragment slot="dd">{@html $t('usage.definitions.other-stores-3')}</svelte:fragment>
	</DefinitionEntry>
</dl>

<p>{$t('usage.paragraph.other-stores-2')}</p>

<Codeblock lang="jsx">{`<script>
	import { t, locale, locales } from 'svelte-intl-precompile';
</script>
{#each $locales as loc}
	<button 
		type="button" 
		class={loc === $locale && 'current'} 
		on:click={() => $locale = loc}>{loc}</button>
{/each}
`}</Codeblock>

<p>{@html $t('usage.paragraph.other-stores-3')}</p>
