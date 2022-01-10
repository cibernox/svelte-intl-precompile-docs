<script context="module" lang="ts">
	import Playground from "$lib/Playground.svelte";
	import { t } from "precompile-intl-runtime";
	export const prerender = true;
</script>

<svelte:head>
	<title>{$t('introduction.title')}</title>
</svelte:head>

<h1 class="text-4xl font-semibold">{$t('introduction.title')}</h1>

<h2 class="text-2xl font-semibold">{$t('introduction.subsection.why-use-it')}</h2>

<p>{$t('introduction.paragraph.why-use-it-1')}</p>
<p>{@html $t('introduction.paragraph.why-use-it-2')}</p>
<p>{$t('introduction.paragraph.why-use-it-3')}</p>
<p>{$t('introduction.paragraph.why-use-it-4')}</p>

<h2 class="text-2xl font-semibold">{$t('introduction.subsection.playground')}</h2>

<p>{$t('introduction.paragraph.playground-preface')}</p>

<Playground/>

<h2 class="text-2xl font-semibold">{$t('introduction.subsection.features')}</h2>

<p>{@html $t('introduction.paragraph.features-1')} <a class="text-primary underline" href="https://github.com/kaisermann/svelte-i18n">svelte-i18n</a> {$t('introduction.paragraph.features-2')}</p>

<p>{$t('introduction.paragraph.features-3')}</p>

<ul class="list-disc list-inside px-8">
	<li>{$t('introduction.list-items.features-1')}</li>
	<li>{$t('introduction.list-items.features-2')}</li>
	<li>{$t('introduction.list-items.features-3')}</li>
	<li>{$t('introduction.list-items.features-4')}</li>
	<li>{$t('introduction.list-items.features-5')}</li>
</ul>