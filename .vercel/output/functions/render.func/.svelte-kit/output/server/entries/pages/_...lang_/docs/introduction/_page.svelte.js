import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { P as Playground } from "../../../../../chunks/Playground.js";
import { t } from "precompile-intl-runtime";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_t();
  return `${$$result.head += `${$$result.title = `<title>${escape($t("introduction.title"))}</title>`, ""}`, ""}

<h1 class="${"text-4xl font-semibold"}">${escape($t("introduction.title"))}</h1>

<h2 class="${"text-2xl font-semibold"}">${escape($t("introduction.subsection.why-use-it"))}</h2>

<p>${escape($t("introduction.paragraph.why-use-it-1"))}</p>
<p><!-- HTML_TAG_START -->${$t("introduction.paragraph.why-use-it-2")}<!-- HTML_TAG_END --></p>
<p>${escape($t("introduction.paragraph.why-use-it-3"))}</p>
<p>${escape($t("introduction.paragraph.why-use-it-4"))}</p>

<h2 class="${"text-2xl font-semibold"}">${escape($t("introduction.subsection.playground"))}</h2>

<p>${escape($t("introduction.paragraph.playground-preface"))}</p>

${validate_component(Playground, "Playground").$$render($$result, {}, {}, {})}

<h2 class="${"text-2xl font-semibold"}">${escape($t("introduction.subsection.features"))}</h2>

<p><!-- HTML_TAG_START -->${$t("introduction.paragraph.features-1")}<!-- HTML_TAG_END --> <a class="${"text-primary underline"}" href="${"https://github.com/kaisermann/svelte-i18n"}">svelte-i18n</a> ${escape($t("introduction.paragraph.features-2"))}</p>

<p>${escape($t("introduction.paragraph.features-3"))}</p>

<ul class="${"list-disc list-inside px-8"}"><li>${escape($t("introduction.list-items.features-1"))}</li>
	<li>${escape($t("introduction.list-items.features-2"))}</li>
	<li>${escape($t("introduction.list-items.features-3"))}</li>
	<li>${escape($t("introduction.list-items.features-4"))}</li>
	<li>${escape($t("introduction.list-items.features-5"))}</li></ul>`;
});
export {
  Page as default
};
