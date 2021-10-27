<script>
  import NavLink from '$lib/nav-link.svelte';
  import { page } from "$app/stores";
  import { onMount, afterUpdate } from 'svelte';
  $: {
    $page.path;
    let callback = () => {
      if (window.location.hash) {
        let header = document.querySelector(window.location.hash);
        header && header.scrollIntoView();
      }
    };
    onMount(callback);
    afterUpdate(callback);
  }
</script>

<nav class="fixed w-72 h-screen shadow-xl bg-gray-500">
  <ul class="pt-4 pl-8 pr-8 text-white">
    <NavLink href="/docs/introduction">Introduction</NavLink>
    <NavLink href="/docs/getting-started">Getting started</NavLink>
    <NavLink href="/docs/configuration">
      Configuration
      <ul slot="submenu" class="pb-2 pl-4">
        <li><a href="/docs/configuration#sample-config">Example</a></li>
        <li><a href="/docs/configuration#static-locales">Load locales statically</a></li>
        <li><a href="/docs/configuration#dynamic-locales">Load locales dynamically</a></li>
        <li><a href="/docs/configuration#init">Default & Fallback locales</a></li>
        <li><a href="/docs/configuration#find-best-locale">Find the best locale</a></li>
      </ul>
    </NavLink>
    <NavLink href="/docs/usage">
      Usage
      <ul slot="submenu" class="pb-2 pl-4">
        <li><a href="/docs/usage#basic-translation">Basic translation</a></li>
        <li><a href="/docs/usage#passing-arguments">Passing arguments</a></li>
        <!-- <li><a href="/docs/usage#passing-arguments">Formatting date/time</a></li> -->
      </ul>
    </NavLink>
  </ul>
</nav>
<div class="ml-72">
  <article class="px-14 pt-8 space-y-10">
    <slot/>
  </article>
</div>
