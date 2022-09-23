import { c as create_ssr_component, h as add_attribute, e as escape } from "./index.js";
const Codeblock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lang } = $$props;
  let { editable = false } = $$props;
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.editable === void 0 && $$bindings.editable && editable !== void 0)
    $$bindings.editable(editable);
  return `<pre${add_attribute("contenteditable", editable, 0)} class="${"p-4 m-12 rounded bg-code overflow-x-auto"}">  <code class="${"language-" + escape(lang, true)}"><div>${slots.default ? slots.default({}) : ``}</div></code>
</pre>`;
});
export {
  Codeblock as C
};
