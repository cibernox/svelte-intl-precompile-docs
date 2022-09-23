import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { t, locale } from "svelte-intl-precompile";
import { C as Codeblock } from "../../../../../chunks/Codeblock.js";
import { D as DefinitionEntry } from "../../../../../chunks/DefinitionEntry.js";
const CodeInline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<code class="${"bg-code px-2"}">${slots.default ? slots.default({}) : ``}</code>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $locale, $$unsubscribe_locale;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  $$unsubscribe_t();
  $$unsubscribe_locale();
  return `${$$result.head += `${$$result.title = `<title>${escape($t("configuration.title"))}</title>`, ""}`, ""}

<h1 class="${"text-4xl font-semibold"}">${escape($t("configuration.title"))}</h1>

<h2 class="${"text-2xl font-semibold"}" id="${"sample-config"}">${escape($t("configuration.subsection.example"))}</h2>

<p>${escape($t("configuration.paragraph.example-1"))} ${validate_component(CodeInline, "CodeInline").$$render($$result, {}, {}, {
    default: () => {
      return `src/__layout.svelte`;
    }
  })} ${escape($t("configuration.paragraph.example-2"))}</p>

${validate_component(Codeblock, "Codeblock").$$render($$result, { lang: "html" }, {}, {
    default: () => {
      return `${escape(`
  import { addMessages, init } from 'svelte-intl-precompile';
	import en from '$locales/en';
	import es from '$locales/es';
	addMessages('en', en);
	addMessages('es', es);
	init({
		initialLocale: 'en',
		fallbackLocale: 'en'
	});`)}`;
    }
  })}

<p>${escape($t("configuration.paragraph.example-3"))}</p>

<h2 class="${"text-2xl font-semibold"}" id="${"static-locales"}">${escape($t("configuration.subsection.static-locales"))}</h2>

<p>${escape($t("configuration.paragraph.static-locales-1"))} ${validate_component(CodeInline, "CodeInline").$$render($$result, {}, {}, {
    default: () => {
      return `addMessages(langCode, translations)`;
    }
  })}.</p>

${validate_component(Codeblock, "Codeblock").$$render($$result, { lang: "js" }, {}, {
    default: () => {
      return `import en from &#39;$locales/en&#39;;
import es from &#39;$locales/es&#39;;	
addMessages(&#39;en&#39;, en);
addMessages(&#39;es&#39;, es);	
`;
    }
  })}

<p>${escape($t("configuration.paragraph.static-locales-2"))} ${validate_component(CodeInline, "CodeInline").$$render($$result, {}, {}, {
    default: () => {
      return `$locales`;
    }
  })} ${escape($t("configuration.paragraph.static-locales-3"))}</p>

<p>${escape($t("configuration.paragraph.static-locales-4"))}</p>

<h2 class="${"text-2xl font-semibold"}" id="${"dynamic-locales"}">${escape($t("configuration.subsection.dynamic-locales"))}</h2>

<p>${escape($t("configuration.paragraph.dynamic-locales-1"))} ${validate_component(CodeInline, "CodeInline").$$render($$result, {}, {}, {
    default: () => {
      return `register(langCode, callback)`;
    }
  })}
  ${escape($t("configuration.paragraph.dynamic-locales-2"))} ${validate_component(CodeInline, "CodeInline").$$render($$result, {}, {}, {
    default: () => {
      return `waitLocale(locale = defaultLocale)`;
    }
  })} 
  ${escape($t("configuration.paragraph.dynamic-locales-3"))}</p>

<p>${escape($t("configuration.paragraph.dynamic-locales-4"))} ${validate_component(CodeInline, "CodeInline").$$render($$result, {}, {}, {
    default: () => {
      return `load`;
    }
  })} 
  ${escape($t("configuration.paragraph.dynamic-locales-5"))}</p>

${validate_component(Codeblock, "Codeblock").$$render($$result, { lang: "js" }, {}, {
    default: () => {
      return `${escape(`
  import { init, register, waitLocale } from 'svelte-intl-precompile';
  register('en', () => import('$locales/en'));
  register('es', () => import('$locales/es'));

  export async function load() {
    init({ initialLocale: en });
    await waitLocale(); // awaits the default locale, "en" in this case.
  }
`)}`;
    }
  })}

<h2 class="${"text-2xl font-semibold"}" id="${"dynamic-locales"}">${escape($t("configuration.subsection.dynamic-locales-shorthand"))}</h2>

<p>${escape($t("configuration.paragraph.dynamic-locales-shorthand-1"))} ${validate_component(CodeInline, "CodeInline").$$render($$result, {}, {}, {
    default: () => {
      return `$locales`;
    }
  })} 
  ${escape($t("configuration.paragraph.dynamic-locales-shorthand-2"))} ${validate_component(CodeInline, "CodeInline").$$render($$result, {}, {}, {
    default: () => {
      return `registerAll`;
    }
  })} ${escape($t("common.and"))} ${validate_component(CodeInline, "CodeInline").$$render($$result, {}, {}, {
    default: () => {
      return `availableLocales`;
    }
  })}.
</p>

<p>${escape($t("configuration.paragraph.dynamic-locales-shorthand-3"))} ${validate_component(CodeInline, "CodeInline").$$render($$result, {}, {}, {
    default: () => {
      return `register(langCode, callback)`;
    }
  })} 
  <!-- HTML_TAG_START -->${$t("configuration.paragraph.dynamic-locales-shorthand-4")}<!-- HTML_TAG_END --></p>

${validate_component(Codeblock, "Codeblock").$$render($$result, { lang: "js" }, {}, {
    default: () => {
      return `${escape(`
  import { init, waitLocale } from 'svelte-intl-precompile';
  import { registerAll, availableLocales } from '$locales';
  
  registerAll();
  
  export async function load() {
    init({ initialLocale: selectBestMatchingLocale(availableLocales) });
    await waitLocale();
  }
`)}`;
    }
  })}

<h2 class="${"text-2xl font-semibold"}" id="${"init"}">${escape($t("configuration.subsection.init"))}</h2>

<p>${escape($t("configuration.paragraph.init-1"))} ${validate_component(CodeInline, "CodeInline").$$render($$result, {}, {}, {
    default: () => {
      return `init(libOptions)`;
    }
  })}
  ${escape($t("configuration.paragraph.init-2"))} ${validate_component(CodeInline, "CodeInline").$$render($$result, {}, {}, {
    default: () => {
      return `initialLocale`;
    }
  })} 
	${escape($t("common.and"))} ${validate_component(CodeInline, "CodeInline").$$render($$result, {}, {}, {
    default: () => {
      return `fallbackLocale`;
    }
  })}${escape($t("configuration.paragraph.init-3"))}</p>

${validate_component(Codeblock, "Codeblock").$$render($$result, { lang: "js" }, {}, {
    default: () => {
      return `${escape(`init({
	initialLocale: 'es',
	fallbackLocale: 'en'
});`)}`;
    }
  })}

<p>${escape($t("configuration.paragraph.init-4"))} ${validate_component(CodeInline, "CodeInline").$$render($$result, {}, {}, {
    default: () => {
      return `initialLocale`;
    }
  })} <!-- HTML_TAG_START -->${$t("configuration.paragraph.init-5")}<!-- HTML_TAG_END --></p>

<h2 class="${"text-xl font-semibold"}" id="${"find-best-locale"}">${escape($t("configuration.subsection.find-locale"))}</h2>

<p>${escape($t("configuration.paragraph.find-locale-1"))} ${validate_component(CodeInline, "CodeInline").$$render($$result, {}, {}, {
    default: () => {
      return `init()`;
    }
  })} ${escape($t("configuration.paragraph.find-locale-2"))}</p>

<dl>${validate_component(DefinitionEntry, "DefinitionEntry").$$render($$result, { background: "gray" }, {}, {
    dd: () => {
      return `${escape($t("configuration.definitions.navigator"))}`;
    },
    dt: () => {
      return `<pre>getLocaleFromNavigator()</pre>`;
    }
  })}${validate_component(DefinitionEntry, "DefinitionEntry").$$render($$result, { background: "white" }, {}, {
    dd: () => {
      return `<!-- HTML_TAG_START -->${$t("configuration.definitions.query")}<!-- HTML_TAG_END -->`;
    },
    dt: () => {
      return `<pre>getLocaleFromQueryString(key)</pre>`;
    }
  })}${validate_component(DefinitionEntry, "DefinitionEntry").$$render($$result, { background: "gray" }, {}, {
    dd: () => {
      return `<!-- HTML_TAG_START -->${$t("configuration.definitions.hash")}<!-- HTML_TAG_END -->`;
    },
    dt: () => {
      return `<pre>getLocaleFromHash(key)</pre>`;
    }
  })}${validate_component(DefinitionEntry, "DefinitionEntry").$$render($$result, { background: "white" }, {}, {
    dd: () => {
      return `<!-- HTML_TAG_START -->${$t("configuration.definitions.path")}<!-- HTML_TAG_END -->`;
    },
    dt: () => {
      return `<pre>getLocaleFromPathname(regex)</pre>`;
    }
  })}${validate_component(DefinitionEntry, "DefinitionEntry").$$render($$result, { background: "gray" }, {}, {
    dd: () => {
      return `<!-- HTML_TAG_START -->${$t("configuration.definitions.host")}<!-- HTML_TAG_END -->`;
    },
    dt: () => {
      return `<pre>getLocaleFromHostname(regex)</pre>`;
    }
  })}${validate_component(DefinitionEntry, "DefinitionEntry").$$render($$result, { background: "gray" }, {}, {
    dd: () => {
      return `<!-- HTML_TAG_START -->${$t("configuration.definitions.acceptLanguage")}<!-- HTML_TAG_END -->`;
    },
    dt: () => {
      return `<pre>getLocaleFromAcceptLanguageHeader(header, availableLocales?)</pre>`;
    }
  })}</dl>

<h2 class="${"text-xl font-semibold"}" id="${"custom-formats"}">${escape($t("configuration.subsection.custom-formats"))}</h2>

<p><!-- HTML_TAG_START -->${$t("configuration.paragraph.custom-formats-1")}<!-- HTML_TAG_END --></p>

${validate_component(Codeblock, "Codeblock").$$render($$result, { lang: "js" }, {}, {
    default: () => {
      return `${escape(`{
  number: {
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
}`)}`;
    }
  })}

<p>${escape($t("configuration.paragraph.custom-formats-2"))} ${validate_component(CodeInline, "CodeInline").$$render($$result, {}, {}, {
    default: () => {
      return `formats`;
    }
  })}
  <!-- HTML_TAG_START -->${$t("configuration.paragraph.custom-formats-3")}<!-- HTML_TAG_END -->
  <a href="${"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat"}" class="${"text-primary underline"}">Intl.DateTimeFormat</a>.
</p>

${validate_component(Codeblock, "Codeblock").$$render($$result, { lang: "js" }, {}, {
    default: () => {
      return `${escape(`init({
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
});`)}`;
    }
  })}

<p>${escape($t("configuration.paragraph.custom-formats-4"))} <a href="${"/" + escape($locale, true) + "/docs/icu-crash-course#crash-course-number-skeletons"}" class="${"text-primary underline"}">${escape($t("configuration.paragraph.custom-formats-5"))}</a></p>`;
});
export {
  Page as default
};
