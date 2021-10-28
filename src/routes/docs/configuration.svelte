<script context="module" lang="ts">
	export const prerender = true;
</script>
<script lang="ts">
	import CodeInline from '$lib/code-inline.svelte';
	import Codeblock from '$lib/codeblock.svelte';
	import DefinitionEntry from '$lib/definition-entry.svelte';
</script>

<svelte:head>
	<title>Introduction</title>
</svelte:head>

<h1 class="text-4xl font-semibold">Usage</h1>

<h2 class="text-2xl font-semibold" id="sample-config">Configuration example</h2>

<p>
	This is the minimal working example of the library's initialization. Put this in your <CodeInline>__layout.svelte</CodeInline> file.
</p>

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

<p>This will get you going but lets dive deeper on it more.</p>

<h2 class="text-2xl font-semibold" id="static-locales">Load locales statically</h2>

<p>
	Like in the previous example, the easiest way to add your translation keys is to just import them as modules
	and register them using <CodeInline>addMessages(langCode, translations)</CodeInline>.
</p>

<Codeblock lang="js">
import en from '$locales/en.js';
import es from '$locales/es.js';	
addMessages('en', en);
addMessages('es', es);	
</Codeblock>

<p>
	Note that despite the fact that you defined your translations in JSON files, in here you are importing them as javascript modules
	from `$locales`. This is because the compiler has transformed your translations into a module with inline functions at built time.
</p>

<p>
	This approach is loading all those languages even if only one is being displayed. Usually okay when kicking out a new project 
	or if you only have a few of keys, but when your app grows you should start loading languages on demand.
</p>

<h2 class="text-2xl font-semibold" id="dynamic-locales">Load locales dynamically</h2>

<p>
	Once you have a significant amount of translations and many locales it would be very wasteful to load every possible language
	for every possible user when they will only see their selected one. The library has a <CodeInline>register(langCode, callback)</CodeInline>
	function to dynamically import languages when the user selects it and a  <CodeInline>waitLocale(locale = defaultLocale)</CodeInline> to wait for
	locales to be loaded.
</p>

<p>
	If all your locales are dynamically loaded you want to stop the page from rendering initial locale has loaded. Calling it in 
	Svete's <CodeInline>preload</CodeInline>	function with do exactly that.
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

<h2 class="text-2xl font-semibold" id="init" >Default & fallback locales</h2>

<p>
	To the call to <CodeInline>init(libOptions)</CodeInline> the most important options are <CodeInline>initialLocale</CodeInline> 
	and <CodeInline>fallbackLocale</CodeInline>. The first determines the locale in which the app will be initially rendered and 
	the second the locale that will be checking when a translation is not found in the currently selected locale.
</p>

<Codeblock lang="js">{`init({
	initialLocale: 'es',
	fallbackLocale: 'en'
});`}</Codeblock>

<p>
	There's a lot we can do to achieve the best experience, like smartly initializing the <CodeInline>initialLocale</CodeInline> to
	the users' configured locale if they are logged, read it from a cookie in case they are repeating visitors or choose it based on 
	the requests `Accept-Language` header when doing SSR, but the most straigtforward is to detect it from the browser or the URL with the provided
	utility functions.
</p>

<h2 class="text-xl font-semibold" id="find-best-locale">Find the best locale</h2>

<p>
  There are many valid strategies to select the best locale to pass to the <CodeInline>init()</CodeInline> functions. This library
  provides helpers for the most common ones:
</p>

<dl>
  <DefinitionEntry background="gray">
    <svelte:fragment slot="dt"><pre>getLocaleFromNavigator()</svelte:fragment>
    <svelte:fragment slot="dd">Extracts the locale from browser, which in turn is the operative systems' locale.</svelte:fragment>
  </DefinitionEntry>
  <DefinitionEntry background="white">
    <svelte:fragment slot="dt"><pre>getLocaleFromQueryString(key)</svelte:fragment>
    <svelte:fragment slot="dd">
      Extracts the locale on the given key of the query string of the URL.<br>
      E.g <pre class="inline">getLocaleFromQueryString('lang')</pre> for <pre class="inline">/users?sort=name&amp;dir=asc&amp;lang=es</pre>      
    </svelte:fragment>
  </DefinitionEntry>
  <DefinitionEntry background="gray">
    <svelte:fragment slot="dt"><pre>getLocaleFromHash(key)</svelte:fragment>
    <svelte:fragment slot="dd">
      Like <pre class="inline">getLocaleFromQueryString</pre> but for the URL hash.<br>
      E.g <pre class="inline">getLocaleFromHash('lang')</pre> for <pre class="inline">/users#sort=name&amp;dir=asc&amp;lang=es</pre>
    </svelte:fragment>
  </DefinitionEntry>  
  <DefinitionEntry background="white">
    <svelte:fragment slot="dt"><pre>getLocaleFromPathname()</svelte:fragment>
    <svelte:fragment slot="dd">
      Extracts the locale from the path of the URL.<br>
      E.g <pre class="inline">getLocaleFromPathname()</pre> for <pre class="inline">myapp.com/en-US/users</pre>      
    </svelte:fragment>
  </DefinitionEntry>
  <DefinitionEntry background="gray">
    <svelte:fragment slot="dt"><pre>getLocaleFromHostname()</svelte:fragment>
    <svelte:fragment slot="dd">
      Extracts the locale from host.<br>
      E.g <pre class="inline">getLocaleFromHostname()</pre> for <pre class="inline">https://pt.myapp.com</pre>      
    </svelte:fragment>
  </DefinitionEntry>
</dl>

<h2 class="text-xl font-semibold" id="custom-formats">Custom formats</h2>

<p>
  This library can format numbers, dates and times. It does it without adding significant weight to your app
  by leverating the Intl API already present in all modern browsers and in Node.js.<br/>
  By default you app can these formats, but you can add your own.
</p>
<p></p>

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
  If you want to define your own formats pass them on initialization using the <CodeInline>formats</CodeInline> option, which will be deep 
  merged with the default formats listed above. The formats must be valid options to forward to 
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