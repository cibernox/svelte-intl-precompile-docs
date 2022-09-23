import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { t } from "svelte-intl-precompile";
import { C as Codeblock } from "../../../../../chunks/Codeblock.js";
import { D as DefinitionEntry } from "../../../../../chunks/DefinitionEntry.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_t();
  return `${$$result.head += `${$$result.title = `<title>${escape($t("usage.title"))}</title>`, ""}`, ""}

<h1 class="${"text-4xl font-semibold"}">${escape($t("usage.title"))}</h1>

<p>${escape($t("usage.paragraph.preface-1"))} <a href="${"https://github.com/kaisermann/svelte-i18n"}">svelte-intl</a>
	${escape($t("usage.paragraph.preface-2"))}</p>

<p>${escape($t("usage.paragraph.preface-3"))}</p>

${validate_component(Codeblock, "Codeblock").$$render($$result, { lang: "js" }, {}, {
    default: () => {
      return `${escape(`{
	"page.title": "Svelte Intl Precompile Docs",
	"login-success-msg": "Welcome back, {name}",
	"transfer-received": "You received {amount, number, currency} at {wireDate, time, short} on {wireDate, date, long}"
}
`)}`;
    }
  })}

<h2 class="${"text-xl font-semibold"}" id="${"basic-translation"}"><!-- HTML_TAG_START -->${$t("usage.subsection.basic-translations")}<!-- HTML_TAG_END --></h2>

<p>${escape($t("usage.paragraph.basic-translations-1"))}</p>

${validate_component(Codeblock, "Codeblock").$$render($$result, { lang: "jsx" }, {}, {
    default: () => {
      return `${escape(`<script>
	import { t } from 'svelte-intl-precompile'
<\/script>
<h1>{$t('page.title')}</h1>
`)}`;
    }
  })}

<h2 class="${"text-xl font-semibold"}" id="${"passing-arguments"}">${escape($t("usage.subsection.passing-arguments"))}</h2>

<p>${escape($t("usage.paragraph.passing-arguments-1"))} <code class="${"bg-code px-2"}">$t()</code> 
	${escape($t("usage.paragraph.passing-arguments-2"))} <code class="${"bg-code px-2"}">values</code> 
	${escape($t("usage.paragraph.passing-arguments-3"))}</p>

${validate_component(Codeblock, "Codeblock").$$render($$result, { lang: "jsx" }, {}, {
    default: () => {
      return `${escape(`<h1>{$t('login-success-msg', { values: { name: user.name } })}</h1>`)}`;
    }
  })}

<p>${escape($t("usage.paragraph.passing-arguments-4"))}</p>

${validate_component(Codeblock, "Codeblock").$$render($$result, { lang: "jsx" }, {}, {
    default: () => {
      return `${escape(`<h1>{$t('transfer-received', { values: { amount: 123.45 , wireDate: transfer.date } })}</h1>`)}`;
    }
  })}

<h2 class="${"text-xl font-semibold"}" id="${"formatting"}">${escape($t("usage.subsection.formatting"))}</h2>

<p>${escape($t("usage.paragraph.formatting-1"))}</p>

${validate_component(Codeblock, "Codeblock").$$render($$result, { lang: "html" }, {}, {
    default: () => {
      return `${escape(`<script>
	import { date, number, time, init } from 'svelte-intl-precompile';
	// Adding a custom formatter for Euro as it's not among the defaults.
	init({
		formats: {
			number: {
				EUR: { style: 'currency', currency: 'EUR' },
			}
		}
	}); 
	// ...
	$: {
		jqueryPlugin.magic({
			dateString: $date(d, { format: 'short' }),
			timeString: $time(t, { format: 'full' }),
			priceString: $number(n, { format: 'EUR' })
		})
	}
<\/script>
`)}`;
    }
  })}

<h2 class="${"text-xl font-semibold"}" id="${"other-stores"}">${escape($t("usage.subsection.other-stores"))}</h2>

<p>${escape($t("usage.paragraph.other-stores-1"))}</p>

<dl>${validate_component(DefinitionEntry, "DefinitionEntry").$$render($$result, { background: "gray" }, {}, {
    dd: () => {
      return `<!-- HTML_TAG_START -->${$t("usage.definitions.other-stores-1")}<!-- HTML_TAG_END -->`;
    },
    dt: () => {
      return `<pre>$locale</pre>`;
    }
  })}${validate_component(DefinitionEntry, "DefinitionEntry").$$render($$result, { background: "white" }, {}, {
    dd: () => {
      return `<!-- HTML_TAG_START -->${$t("usage.definitions.other-stores-2")}<!-- HTML_TAG_END -->`;
    },
    dt: () => {
      return `<pre>$locales</pre>`;
    }
  })}${validate_component(DefinitionEntry, "DefinitionEntry").$$render($$result, { background: "gray" }, {}, {
    dd: () => {
      return `<!-- HTML_TAG_START -->${$t("usage.definitions.other-stores-3")}<!-- HTML_TAG_END -->`;
    },
    dt: () => {
      return `<pre>$isLoading</pre>`;
    }
  })}</dl>

<p>${escape($t("usage.paragraph.other-stores-2"))}</p>

${validate_component(Codeblock, "Codeblock").$$render($$result, { lang: "jsx" }, {}, {
    default: () => {
      return `${escape(`<script>
	import { t, locale, locales } from 'svelte-intl-precompile';
<\/script>
{#each $locales as loc}
	<button 
		type="button" 
		class={loc === $locale && 'current'} 
		on:click={() => $locale = loc}>{loc}</button>
{/each}
`)}`;
    }
  })}

<p><!-- HTML_TAG_START -->${$t("usage.paragraph.other-stores-3")}<!-- HTML_TAG_END --></p>`;
});
export {
  Page as default
};
