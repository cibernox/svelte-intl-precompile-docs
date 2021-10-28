<script context="module" lang="ts">
	export const prerender = true;
</script>
<script>
	import { t } from 'svelte-intl-precompile';
	import CodeInline from '$lib/code-inline.svelte';
	import Codeblock from '$lib/codeblock.svelte';
	import DefinitionEntry from '$lib/definition-entry.svelte';
	import scrollToHash from '$lib/scroll-to-hash';;
	scrollToHash();
</script>

<svelte:head>
	<title>{$t('usage.title')}</title>
</svelte:head>

<h1 class="text-4xl font-semibold">{$t('usage.title')}</h1>

<p>
	The runtime API of this library is mostly taken from the great <a href="https://github.com/kaisermann/svelte-i18n">svelte-intl</a>, to the point
	that in most cases you can switch from svelte-i18 to svelte-intl-precompile and vice versa without changing your application code one bit.
</p>

<p>
	Its store-centric API is particularly nice to use in templates and provides the added benefit of making your entire app reactive, automatically 
	updating every translation when the user selects another locale or when more dictionary entries are loaded. For the following examples assume that 
	we're working on an app containing these translations.
</p>

<Codeblock lang="js">{`{
	"page.title": "Svelte Intl Precompile Docs",
	"login-success-msg": "Welcome back, {name}",
	"transfer-received": "You received {amount, number, currency} at {wireDate, time, short} on {wireDate, date, long}"
}
`}</Codeblock>

<h2 class="text-xl font-semibold" id="basic-translation">Basic translations: The <pre class="inline">$t(key, ops)</pre> store.</h2>

<p>This store is the one you will use the most. Just import it and use it as a function, passing in the translation key.</p>

<Codeblock lang="jsx">{`<script>
	import { t } from 'svelte-intl-precompile'
</script>
<h1>{$t('page.title')}</h1>
`}</Codeblock>

<h2 class="text-xl font-semibold" id="passing-arguments">Passing arguments</h2>

<p>
	The second argument received by the <CodeInline>$t()</CodeInline> is an object. Any argument used by your translation will be passed 
	in the <CodeInline>values</CodeInline> key.
</p>

<Codeblock lang="jsx">{`<h1>{$t('login-success-msg', { values: { name: user.name } })}</h1>`}</Codeblock>

<p>
	There is no difference if the given parameters are just interpolated, used for in plural/select or are number, dates or times to be formatted.
	All aguments are passed the same way.
</p>

<Codeblock lang="jsx">{`<h1>{$t('transfer-received', { values: { amount: 123.45 , wireDate: transfer.date } })}</h1>`}</Codeblock>

<h2 class="text-xl font-semibold" id="formatting">Formatting dates, times and numbers</h2>

<p>
<p>
	While you can pass number, dates and times to your translations that will be formatted following your preferences, this library also has
	stores to conveniently format them directly from your javascript code.
</p>


<Codeblock lang="html">{`<script>
	import { date, number, time } from 'svelte-intl-precompile';
	// ...
	$: {
		jqueryPlugin.magic({
			dateString: $date(d, { format: 'short' }),
			timeString: $time(t, { format: 'full' }),
			priceString: $number(n, { format: 'currency' })
		})
	}
</script>
`}</Codeblock>

<h2 class="text-xl font-semibold" id="other-stores">Other stores</h2>

<p>
	There are three more stores worth mentioning:
</p>

<dl>
	<DefinitionEntry background="gray">
		<svelte:fragment slot="dt"><pre>$locale</svelte:fragment>
		<svelte:fragment slot="dd">
			Can be used to read or write the current locale (E.g: <pre class="inline">"es-ES"</pre>).
		</svelte:fragment>
	</DefinitionEntry>
	<DefinitionEntry background="white">
		<svelte:fragment slot="dt"><pre>$locales</svelte:fragment>
		<svelte:fragment slot="dd">
			Contain al array of all the available locales (E.g: <pre class="inline">["es-ES", "en", "pt-BR"]</pre>).
		</svelte:fragment>
	</DefinitionEntry>
	<DefinitionEntry background="gray">
		<svelte:fragment slot="dt"><pre>$isLoading</svelte:fragment>
		<svelte:fragment slot="dd">
			Contains <pre class="inline">true</pre> when an asynchronous locale is still being loaded.
		</svelte:fragment>
	</DefinitionEntry>
</dl>

<p>
	Lets build a component to change the current locale.
</p>
<Codeblock lang="jsx">{`<script>
	import { t, locale, locales } from 'svelte-intl-precompile';
</script>
{#each $locales as loc}
	<button type="button" class={loc === $locale && 'current'} on:click={() => $locale = loc}>{loc}</button>
{/each}
`}</Codeblock>

<p>
	The code above is quite straigtforward. We just iterate the list of available locales in <CodeInline>$locales</CodeInline> rendering a button
	for each one. Clicking on a button will set the current locale in <CodeInline>$locale</CodeInline> to the new value.<br/>
	Every translation in the app will update without refreshing the page.
</p>