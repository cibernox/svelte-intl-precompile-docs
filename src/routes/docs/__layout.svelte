<script>
  import NavLink from '$lib/nav-link.svelte';
</script>

<nav class="fixed w-64 h-screen shadow-xl bg-gray-500">
  <ul class="pt-4 pl-8 pr-8 font-bold text-white">
    <NavLink href="/docs/introduction">Introduction</NavLink>
    <NavLink href="/docs/getting-started">Getting started</NavLink>
    <NavLink href="/docs/usage">Usage</NavLink>
  </ul>
</nav>
<div class="ml-64">
  <article class="px-14 pt-8 space-y-10">
    <slot/>
  </article>
</div>
