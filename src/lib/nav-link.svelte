<script lang="ts">
  import { page } from "$app/stores"
	export let href;
  $: isActive = $page.path === href
</script>

<li class="p-0 mb-2">
	<a href={href} class="uppercase font-bold" class:underline={isActive}><slot/></a>
  <slot name="submenu"/>
</li>