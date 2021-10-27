<script lang="ts">
  import { page } from "$app/stores"
	export let href;
  $: isActive = $page.path === href
</script>

<li class="p-0 mb-2 uppercase" class:underline={isActive}>
	<a href={href}><slot/></a>
</li>