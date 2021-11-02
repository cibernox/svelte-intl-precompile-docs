<script>
  import { t, locale } from 'svelte-intl-precompile';
  import NavLink from '$lib/nav-link.svelte';
</script>

<nav class="fixed w-72 h-screen shadow-xl bg-gray-500">
  <ul class="pt-4 pl-8 pr-8 text-white">
    <NavLink href="/{$locale}/docs/introduction">{$t('introduction.title')}</NavLink>
    <NavLink href="/{$locale}/docs/getting-started">{$t('getting-started.title')}</NavLink>
    <NavLink href="/{$locale}/docs/configuration">
      {$t('configuration.title')}
      <ul slot="submenu" class="pb-2 pl-4">
        <li><a href="/{$locale}/docs/configuration#sample-config">{$t('configuration.link.example')}</a></li>
        <li><a href="/{$locale}/docs/configuration#static-locales">{$t('configuration.subsection.static-locales')}</a></li>
        <li><a href="/{$locale}/docs/configuration#dynamic-locales">{$t('configuration.subsection.dynamic-locales')}</a></li>
        <li><a href="/{$locale}/docs/configuration#init">{$t('configuration.subsection.init')}</a></li>
        <li><a href="/{$locale}/docs/configuration#find-best-locale">{$t('configuration.subsection.find-locale')}</a></li>
        <li><a href="/{$locale}/docs/configuration#custom-formats">{$t('configuration.subsection.custom-formats')}</a></li>
      </ul>
    </NavLink>
    <NavLink href="/{$locale}/docs/usage">
      {$t('usage.title')}
      <ul slot="submenu" class="pb-2 pl-4">
        <li><a href="/{$locale}/docs/usage#basic-translation">{$t('usage.link.basic-translations')}</a></li>
        <li><a href="/{$locale}/docs/usage#passing-arguments">{$t('usage.subsection.passing-arguments')}</a></li>
        <li><a href="/{$locale}/docs/usage#formatting">{$t('usage.subsection.formatting')}</a></li>
        <li><a href="/{$locale}/docs/usage#other-stores">{$t('usage.subsection.other-stores')}</a></li>
      </ul>
    </NavLink>
    <NavLink href="/docs/playground">{$t('playground.title')}</NavLink>
  </ul>
</nav>
<div class="ml-72">
  <article class="px-14 py-8 space-y-10">
    <slot/>
  </article>
</div>
