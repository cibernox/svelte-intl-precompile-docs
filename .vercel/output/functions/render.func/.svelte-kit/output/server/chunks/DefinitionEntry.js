import { c as create_ssr_component, e as escape } from "./index.js";
const DefinitionEntry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { background } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  return `<div data-testid="${"definition-entry"}" class="${escape(background === "gray" ? "bg-gray-50" : "bg-white", true) + " px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"}"><dt class="${"text-sm font-medium text-gray-500"}" data-testid="${"dt"}">${slots.dt ? slots.dt({}) : ``}</dt>
  <dd class="${"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"}" data-testid="${"dd"}">${slots.dd ? slots.dd({}) : ``}</dd></div>`;
});
export {
  DefinitionEntry as D
};
