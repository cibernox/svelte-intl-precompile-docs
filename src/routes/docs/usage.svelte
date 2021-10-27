<script context="module" lang="ts">
	export const prerender = true;
</script>
<script lang="ts">
	import CodeInline from '$lib/code-inline.svelte';
	import Codeblock from '$lib/codeblock.svelte';
</script>

<svelte:head>
	<title>Introduction</title>
</svelte:head>

<h1 class="text-4xl font-semibold">Usage</h1>

<h2 class="text-2xl font-semibold">Configuration example</h2>

<p>
	This is the minimal working example of the library's initialization. Put this in your <CodeInline>__layout.svelte</CodeInline> file.
</p>

<Codeblock lang="html">
{`
<script context="module">
	import { addMessages, init } from 'svelte-intl-precompile';
	import en from '$locales/en.js';
	import es from '$locales/es.js';
	addMessages('en', en);
	addMessages('es', es);
	init({
		fallbackLocale: 'en',
		initialLocale: 'en'
	});	
</script>
<slot/>
`}
</Codeblock>

<p>This will get you going but lets dive deeper on it more.</p>

<h2 class="text-2xl font-semibold">Load locales statically</h2>

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

<h2 class="text-2xl font-semibold">Load locales dynamically</h2>

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
import { init, register } from 'svelte-intl-precompile';
register('en', () => import('$locales/en.js'));
register('es', () => import('$locales/es.js'));
init({ initialLocale: en });

export async function preload() {
  return waitLocale(); // awaits the default locale, "en" in this case.
}
`}</Codeblock>

<h2 class="text-2xl font-semibold">Init: default and fallback locales</h2>

<p>
	To the call to <CodeInline>init(libOptions)</CodeInline> the most important options are <CodeInline>initialLocale</CodeInline> 
	and <CodeInline>fallbackLocale</CodeInline>. The first determines the locale in which the app will be initially rendered and 
	the second the locale that will be checking when a translation is not found in the currently selected locale.
</p>

<p>
	There's a lot we can do to achieve the best experience, like smartly initializing the <CodeInline>initialLocale</CodeInline> to
	the users' configured locale if they are logged, read it from a cookie in case they are repeating visitors or choose it based on 
	the requests `Accept-Language` header when doing SSR, but the most straigtforward is to detect it from the browser or the URL with the provided
	utility functions.
</p>

<h2 class="text-xl font-semibold"><CodeInline>getLocaleFromNavigator()</CodeInline></h2>

<p>Return the browsers locale, which in turn is the operative systems' locale.</p>

<Codeblock lang="js">{`
<script context="module">
  import { init, getLocaleFromNavigator, register } from 'svelte-intl-precompile';
  register('en', () => import('$locales/en.js'));
  register('es', () => import('$locales/es.js')); 
  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator()
  });	
</script>
`}</Codeblock>

<h2 class="text-xl font-semibold"><CodeInline>getLocaleFromQueryString(key)</CodeInline></h2>

<p>Returns the locale in the query string of the query string of the current URL, in the given parameter.</p>

<Codeblock lang="js">{`
<script context="module">
  import { init, getLocaleFromQueryString, register } from 'svelte-intl-precompile';
  register('en', () => import('$locales/en.js'));
  register('es', () => import('$locales/es.js')); 
  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromQueryString('lang') // When in "/users?sort=name&dir=asc&lang=es" it will select Spanish.
  });	
</script>
`}</Codeblock>

<h2 class="text-xl font-semibold"><CodeInline>getLocaleFromHash(key)</CodeInline></h2>

<p>Identical to <CodeInline>getLocaleFromQueryString</CodeInline> but will look in the hash.</p>

<Codeblock lang="js">{`
<script context="module">
  import { init, getLocaleFromHash, register } from 'svelte-intl-precompile';
  register('en', () => import('$locales/en.js'));
  register('es', () => import('$locales/es.js')); 
  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromQueryString('lang')
  });	
</script>
`}</Codeblock>

<h2 class="text-xl font-semibold"><CodeInline>getLocaleFromPathname()</CodeInline></h2>

<p>It will identify the locale from the URL's path</p>

<Codeblock lang="js">{`
<script context="module">
  import { init, getLocaleFromHash, register } from 'svelte-intl-precompile';
  register('en', () => import('$locales/en.js'));
  register('es', () => import('$locales/es.js')); 
  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromPathname() // When in "https://myapp.com/en-US/user" it will select US english.
  });	
</script>
`}</Codeblock>

<h2 class="text-xl font-semibold"><CodeInline>getLocaleFromHostname()</CodeInline></h2>

<p>It will identify the locale from the host name.</p>

<Codeblock lang="js">{`
<script context="module">
  import { init, getLocaleFromHash, register } from 'svelte-intl-precompile';
  register('en', () => import('$locales/en.js'));
  register('es', () => import('$locales/es.js')); 
  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromHostname() // When in "https://pt.myapp.com" it will select Portuguese.
  });	
</script>
`}</Codeblock>
