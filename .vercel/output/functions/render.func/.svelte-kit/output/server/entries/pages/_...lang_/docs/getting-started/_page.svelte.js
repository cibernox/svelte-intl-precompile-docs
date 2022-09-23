import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { t } from "svelte-intl-precompile";
import { C as Codeblock } from "../../../../../chunks/Codeblock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_t();
  return `${$$result.head += `${$$result.title = `<title>${escape($t("getting-started.title"))}</title>`, ""}`, ""}

<h1 class="${"text-4xl font-semibold"}">${escape($t("getting-started.title"))}</h1>

<h2 class="${"text-2xl font-semibold"}">${escape($t("getting-started.subsection.installation"))}</h2>

<p>${escape($t("getting-started.paragraph.installation-1"))}</p>

${validate_component(Codeblock, "Codeblock").$$render($$result, {}, {}, {
    default: () => {
      return `npm install svelte-intl-precompile`;
    }
  })}

<h2 class="${"text-2xl font-semibold"}">${escape($t("getting-started.subsection.create-translations"))}</h2>
<p><!-- HTML_TAG_START -->${$t("getting-started.paragraph.create-translations-1", {
    values: {
      dir1: "/messages",
      or: $t("common.or"),
      dir2: "/locales"
    }
  })}<!-- HTML_TAG_END -->
	${escape($t("getting-started.paragraph.create-translations-2"))}</p>

${validate_component(Codeblock, "Codeblock").$$render($$result, {}, {}, {
    default: () => {
      return `\u251C\u2500\u2500 locales
\u2502\xA0\xA0 \u251C\u2500\u2500 en.json
\u2502\xA0\xA0 \u251C\u2500\u2500 es.json
\u251C\u2500\u2500 src
...
\u251C\u2500\u2500 static
\u251C\u2500\u2500 package.json
\u2514\u2500\u2500 svelte.config.js
`;
    }
  })}

<p>${escape($t("getting-started.paragraph.create-translations-3"))}</p>

${validate_component(Codeblock, "Codeblock").$$render($$result, { lang: "js" }, {}, {
    default: () => {
      return `${escape(`{
	"recent.aria": "Find recently viewed tides",
	"menu": "Menu",
	"foot": "{count} {count, plural, =1 {foot} other {feet}}",
}`)}`;
    }
  })}

<p>${escape($t("getting-started.paragraph.create-translations-4"))}</p>

${validate_component(Codeblock, "Codeblock").$$render($$result, { lang: "js" }, {}, {
    default: () => {
      return `${escape(`{
	"placeholders": {
		"fullname": "John Smith",
		"street-name": "13 Elm Street",
		"subject": "Re: Hello"
	},
	"welcome-hero": "Welcome to Goliath Bank!",
}`)}`;
    }
  })}

<h3 class="${"text-l font-semibold"}">${escape($t("getting-started.paragraph.create-translations-5"))}</h3>

<p><!-- HTML_TAG_START -->${$t("getting-started.paragraph.create-translations-6")}<!-- HTML_TAG_END --></p>

<h3 class="${"text-l font-semibold"}">${escape($t("getting-started.paragraph.create-translations-7"))}</h3>

<p>${escape($t("getting-started.paragraph.create-translations-8"))}</p>

<h3 class="${"text-l font-semibold"}">${escape($t("getting-started.paragraph.create-translations-9"))}</h3>

<p>${escape($t("getting-started.paragraph.create-translations-10"))}</p>

<h2 class="${"text-2xl font-semibold"}">${escape($t("getting-started.subsection.hook-into-sveltekit"))}</h2>

<p><!-- HTML_TAG_START -->${$t("getting-started.paragraph.hook-into-sveltekit-1", { values: { path: "/svelte.config.js" } })}<!-- HTML_TAG_END --></p>

${validate_component(Codeblock, "Codeblock").$$render($$result, { lang: "js" }, {}, {
    default: () => {
      return `${escape(`import precompileIntl from "svelte-intl-precompile/sveltekit-plugin";

const config = {
	kit: {
		target: '#svelte',
		vite: {
			plugins: [
				precompileIntl('locales') // if your translations are defined in /locales/[lang].json
			]			
		}		
	}
};

export default config;`)}`;
    }
  })}

<p>${escape($t("getting-started.paragraph.hook-into-sveltekit-2"))}</p>

<h2 class="${"text-2xl font-semibold"}">${escape($t("getting-started.subsection.hook-into-vite"))}</h2>

<p><!-- HTML_TAG_START -->${$t("getting-started.paragraph.hook-into-vite-1", { values: { path: "/vite.config.js" } })}<!-- HTML_TAG_END --></p>

${validate_component(Codeblock, "Codeblock").$$render($$result, { lang: "js" }, {}, {
    default: () => {
      return `${escape(`import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import precompileIntl from "svelte-intl-precompile/sveltekit-plugin";

export default defineConfig({
  resolve: {
    dedupe: ["svelte"]
  },
  plugins: [
    svelte(),
    precompileIntl("locales"),
  ],
});`)}`;
    }
  })}`;
});
export {
  Page as default
};
