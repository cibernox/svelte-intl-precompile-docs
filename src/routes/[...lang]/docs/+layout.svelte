<script>
  import { t, locale } from 'svelte-intl-precompile';
  import NavLink from '$lib/NavLink.svelte';
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

<nav class="fixed w-76 h-screen shadow-xl bg-gray-500">
  <ul class="pt-4 pl-8 pr-8 text-white">
    <NavLink href="/{$locale}/docs/introduction">{$t('introduction.title')}</NavLink>
    <NavLink href="/{$locale}/docs/icu-crash-course">{$t('icu-crash-course.title')}</NavLink>
    <NavLink href="/{$locale}/docs/getting-started">{$t('getting-started.title')}</NavLink>
    <NavLink href="/{$locale}/docs/configuration">
      {$t('configuration.title')}
      {#snippet submenu()}
        <ul  class="pb-2 pl-4">
          <li><a href="/{$locale}/docs/configuration#sample-config">{$t('configuration.link.example')}</a></li>
          <li><a href="/{$locale}/docs/configuration#static-locales">{$t('configuration.subsection.static-locales')}</a></li>
          <li><a href="/{$locale}/docs/configuration#dynamic-locales">{$t('configuration.subsection.dynamic-locales')}</a></li>
          <li><a href="/{$locale}/docs/configuration#init">{$t('configuration.subsection.init')}</a></li>
          <li><a href="/{$locale}/docs/configuration#find-best-locale">{$t('configuration.subsection.find-locale')}</a></li>
          <li><a href="/{$locale}/docs/configuration#custom-formats">{$t('configuration.subsection.custom-formats')}</a></li>
        </ul>
      {/snippet}
    </NavLink>
    <NavLink href="/{$locale}/docs/usage">
      {$t('usage.title')}
      {#snippet submenu()}
        <ul  class="pb-2 pl-4">
          <li><a href="/{$locale}/docs/usage#basic-translation">{$t('usage.link.basic-translations')}</a></li>
          <li><a href="/{$locale}/docs/usage#passing-arguments">{$t('usage.subsection.passing-arguments')}</a></li>
          <li><a href="/{$locale}/docs/usage#formatting">{$t('usage.subsection.formatting')}</a></li>
          <li><a href="/{$locale}/docs/usage#other-stores">{$t('usage.subsection.other-stores')}</a></li>
        </ul>
      {/snippet}
    </NavLink>
    <NavLink href="/docs/playground">{$t('playground.title')}</NavLink>
  </ul>
</nav>
<div class="ml-76">
  <article class="px-14 py-8 space-y-8">
    {@render children?.()}
  </article>
</div>
