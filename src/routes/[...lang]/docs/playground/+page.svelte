<script lang="ts">
	import { t } from "svelte-intl-precompile";
	import Playground from "$lib/Playground.svelte";
</script>

<svelte:head>
	<title>{$t('playground.title')}</title>
</svelte:head>

<h1 class="text-4xl font-semibold">{$t('playground.title')}</h1>

<Playground/>
