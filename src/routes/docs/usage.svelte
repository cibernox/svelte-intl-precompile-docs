<script context="module" lang="ts">
	export const prerender = true;
</script>
<script>
	import CodeInline from '$lib/code-inline.svelte';
	import Codeblock from '$lib/codeblock.svelte';
</script>

<svelte:head>
	<title>Introduction</title>
</svelte:head>

<h1 class="text-4xl font-semibold">Usage</h1>

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
	"login-success-msg": "Welcome back, {name}"
}
`}</Codeblock>

<h2 class="text-xl font-semibold" id="basic-translation">Basic translations: The <pre class="inline">$t(key, ops)</pre> store.</h2>

<p>This store is the one you will use the most. Just import it and use it as a function, passing in the translation key.</p>

<Codeblock lang="html">{`<script>
	import { t } from 'svelte-intl-precompile'
</script>
<h1>{$t('page.title')}</h1>
`}</Codeblock>

<h2 class="text-xl font-semibold" id="passing-arguments">Passing arguments</h2>

<p>
	The second argument received by the <CodeInline>$t()</CodeInline> is an object. Any argument used by your translation will be passed 
	in the <CodeInline>values</CodeInline> key.
</p>

<Codeblock lang="html">{`<h1>{$t('login-success-msg', { values: { name: user.name } })}</h1>`}</Codeblock>