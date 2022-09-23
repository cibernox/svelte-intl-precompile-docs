import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { t } from "precompile-intl-runtime";
import { P as Playground } from "../../../../../chunks/Playground.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_t();
  return `${$$result.head += `${$$result.title = `<title>${escape($t("playground.title"))}</title>`, ""}`, ""}

<h1 class="${"text-4xl font-semibold"}">${escape($t("playground.title"))}</h1>

${validate_component(Playground, "Playground").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
