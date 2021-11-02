<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { t } from "precompile-intl-runtime";
	import Playground from "$lib/playground.svelte";
</script>

<svelte:head>
	<title>{$t('playground.title')}</title>
</svelte:head>

<h1 class="text-4xl font-semibold">{$t('playground.title')}</h1>

<Playground/>
