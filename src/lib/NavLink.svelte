<script lang="ts">
  import { page } from "$app/stores"
	export let href;
  $: isActive = $page.url.pathname === href
</script>

<li class="p-0 mb-2">
	<a href={href} class="uppercase font-bold" class:underline={isActive} data-testid="nav-link-anchor"><slot/></a>
  <slot name="submenu"/>
</li>