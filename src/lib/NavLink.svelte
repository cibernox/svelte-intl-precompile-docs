<script lang="ts">
  import { page } from "$app/stores"
  let { href, children, submenu } = $props();
  let isActive = $derived($page.url.pathname === href)
</script>

<li class="p-0 mb-2">
	<a href={href} class="uppercase font-bold" class:underline={isActive}>{@render children?.()}</a>
  {@render submenu?.()}
</li>