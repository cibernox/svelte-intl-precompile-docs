<script context="module" lang="ts">
	export const prerender = true;
</script>
<script lang="ts">
	import { t } from 'svelte-intl-precompile';
	import scrollToHash from '$lib/scroll-to-hash';;
	import CodeInline from '$lib/code-inline.svelte';
	import Codeblock from '$lib/codeblock.svelte';
	import DefinitionEntry from '$lib/definition-entry.svelte';
	scrollToHash();
</script>

<svelte:head>
	<title>{$t('configuration.title')}</title>
</svelte:head>

<h1 class="text-4xl font-semibold">{$t('configuration.title')}</h1>

<h2 class="text-2xl font-semibold" id="sample-config">{$t('configuration.subsection.example')}</h2>

<p>{$t('configuration.paragraph.example-1')} <CodeInline>src/__layout.svelte</CodeInline> {$t('configuration.paragraph.example-2')}</p>

<Codeblock lang="html">
{`<script context="module">
	import { addMessages, init } from 'svelte-intl-precompile';
	import en from '$locales/en.js';
	import es from '$locales/es.js';
	addMessages('en', en);
	addMessages('es', es);
	init({
		initialLocale: 'en',
		fallbackLocale: 'en'
	});	
</script>
<slot/>`}
</Codeblock>

<p>{$t('configuration.paragraph.example-3')}</p>

<h2 class="text-2xl font-semibold" id="static-locales">{$t('configuration.subsection.static-locales')}</h2>

<p>{$t('configuration.paragraph.static-locales-1')} <CodeInline>addMessages(langCode, translations)</CodeInline>.</p>

<Codeblock lang="js">
import en from '$locales/en.js';
import es from '$locales/es.js';	
addMessages('en', en);
addMessages('es', es);	
</Codeblock>

<p>{$t('configuration.paragraph.static-locales-2')} <CodeInline>$locales</CodeInline> {$t('configuration.paragraph.static-locales-3')}</p>

<p>{$t('configuration.paragraph.static-locales-4')}</p>

<h2 class="text-2xl font-semibold" id="dynamic-locales">{$t('configuration.subsection.dynamic-locales')}</h2>

<p>
	{$t('configuration.paragraph.dynamic-locales-1')} <CodeInline>register(langCode, callback)</CodeInline>
  {$t('configuration.paragraph.dynamic-locales-2')} <CodeInline>waitLocale(locale = defaultLocale)</CodeInline> 
  {$t('configuration.paragraph.dynamic-locales-3')}
</p>

<p>
	{$t('configuration.paragraph.dynamic-locales-4')} <CodeInline>preload</CodeInline> 
  {$t('configuration.paragraph.dynamic-locales-5')}
</p>

<Codeblock lang="js">{`
import { init, register, waitLocale } from 'svelte-intl-precompile';
register('en', () => import('$locales/en.js'));
register('es', () => import('$locales/es.js'));
init({ initialLocale: en });

export async function preload() {
  return waitLocale(); // awaits the default locale, "en" in this case.
}
`}</Codeblock>

<h2 class="text-2xl font-semibold" id="dynamic-locales">{$t('configuration.subsection.dynamic-locales-shorthand')}</h2>

<p>
  {$t('configuration.paragraph.dynamic-locales-shorthand-1')} <CodeInline>$locales</CodeInline> 
  {$t('configuration.paragraph.dynamic-locales-shorthand-2')} <CodeInline>registerAll</CodeInline> {$t('common.and')} <CodeInline>availableLocales</CodeInline>.
</p>

<p>
  {$t('configuration.paragraph.dynamic-locales-shorthand-3')} <CodeInline>register(langCode, callback)</CodeInline> 
  {@html $t('configuration.paragraph.dynamic-locales-shorthand-4')}
</p>

<Codeblock lang="js">{`
  import { init, waitLocale } from 'svelte-intl-precompile';
  import { registerAll, availableLocales } from '$locales';
  
  registerAll();
  init({ initialLocale: selectBestMatchingLocale(availableLocales) });
  
  export async function preload() {
    return waitLocale();
  }
  `}</Codeblock>

<h2 class="text-2xl font-semibold" id="init">{$t('configuration.subsection.init')}</h2>

<p>
	{$t('configuration.paragraph.init-1')} <CodeInline>init(libOptions)</CodeInline>
  {$t('configuration.paragraph.init-2')} <CodeInline>initialLocale</CodeInline> 
	{$t('common.and')} <CodeInline>fallbackLocale</CodeInline>{$t('configuration.paragraph.init-3')}
</p>

<Codeblock lang="js">{`init({
	initialLocale: 'es',
	fallbackLocale: 'en'
});`}</Codeblock>

<p>{$t('configuration.paragraph.init-4')} <CodeInline>initialLocale</CodeInline> {@html $t('configuration.paragraph.init-5')}</p>

<h2 class="text-xl font-semibold" id="find-best-locale">{$t('configuration.subsection.find-locale')}</h2>

<p>
  {$t('configuration.paragraph.find-locale-1')} <CodeInline>init()</CodeInline> {$t('configuration.paragraph.find-locale-2')}
</p>

<dl>
  <DefinitionEntry background="gray">
    <svelte:fragment slot="dt"><pre>getLocaleFromNavigator()</svelte:fragment>
    <svelte:fragment slot="dd">{$t('configuration.definitions.navigator')}</svelte:fragment>
  </DefinitionEntry>
  <DefinitionEntry background="white">
    <svelte:fragment slot="dt"><pre>getLocaleFromQueryString(key)</svelte:fragment>
    <svelte:fragment slot="dd">{@html $t('configuration.definitions.query')}</svelte:fragment>
  </DefinitionEntry>
  <DefinitionEntry background="gray">
    <svelte:fragment slot="dt"><pre>getLocaleFromHash(key)</svelte:fragment>
    <svelte:fragment slot="dd">{@html $t('configuration.definitions.hash')}</svelte:fragment>
  </DefinitionEntry>  
  <DefinitionEntry background="white">
    <svelte:fragment slot="dt"><pre>getLocaleFromPathname(regex)</svelte:fragment>
    <svelte:fragment slot="dd">{@html $t('configuration.definitions.path')}</svelte:fragment>
  </DefinitionEntry>
  <DefinitionEntry background="gray">
    <svelte:fragment slot="dt"><pre>getLocaleFromHostname(regex)</svelte:fragment>
    <svelte:fragment slot="dd">{@html $t('configuration.definitions.host')}</svelte:fragment>
  </DefinitionEntry>
</dl>

<h2 class="text-xl font-semibold" id="custom-formats">{$t('configuration.subsection.custom-formats')}</h2>

<p>
  {@html $t('configuration.paragraph.custom-formats-1')}
</p>

<Codeblock lang="js">{`{
  number: {
    currency: { style: 'currency' }
    percent: { style: 'percent' }
    scientific: { notation: 'scientific' }
    engineering: { notation: 'engineering' }
    compactLong: { notation: 'compact', compactDisplay: 'long' }
    compactShort: { notation: 'compact', compactDisplay: 'short' }    
  },
  date: {
    short: { month: 'numeric', day: 'numeric', year: '2-digit' }
    medium: { month: 'short', day: 'numeric', year: 'numeric' }
    long: { month: 'long', day: 'numeric', year: 'numeric' }
    full: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }
  },
  time: {
    short: { hour: 'numeric', minute: 'numeric' }
    medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' }
    long: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' }
    full: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' }
  }
}`}</Codeblock>

<p>
  {$t('configuration.paragraph.custom-formats-2')} <CodeInline>formats</CodeInline>
  {@html $t('configuration.paragraph.custom-formats-3')}
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat" class="text-primary underline">Intl.DateTimeFormat</a>.
</p>

<Codeblock lang="js">{`init({
  fallbackLocale: 'en',
  initialLocale: 'en',
  formats: {
    date: {
      abbreviated: { weekday: 'long', month: 'short', day: 'numeric' }
    },
    time: {
      'just-hour': { hour: 'numeric' }
    }
  }
});`}</Codeblock>