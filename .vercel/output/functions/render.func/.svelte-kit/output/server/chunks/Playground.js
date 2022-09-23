import { c as create_ssr_component, e as escape, h as add_attribute } from "./index.js";
const Playground = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let output;
  let sizeChange;
  let translations = JSON.stringify(
    {
      "header": "Svelte Intl Precompile is {adjective}",
      "posted-on": "Posted on {postDate, date, long}",
      "invite-friend": "{name} has joined Svelte! Give {gender, select, male {him} female {her} other {your friend}} a warm welcome!",
      "friends-msg": "You have {count, plural, zero {no friend} one {just # friend} other {# friends}}",
      "show-friend-profile": "Click to show {gender, select, male {his profile} female {her profile} other {the profile}}"
    },
    null,
    2
  );
  let transformedTranslations = "";
  let minifiedTranslations = "";
  let showMinified = false;
  let timer;
  function transform(code) {
    fetch("/playground", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: code
    }).then((r) => {
      if (r.ok) {
        return r.json();
      } else {
        throw new Error("Invalid syntax");
      }
    }).then(({ transformed, minified }) => {
      [transformedTranslations, minifiedTranslations] = [transformed, minified];
    }).catch(() => {
    });
  }
  function debouncedTransform(code) {
    clearTimeout(timer);
    timer = setTimeout(() => transform(code), 750);
  }
  output = transformedTranslations;
  {
    transformedTranslations === "" ? transform(translations) : debouncedTransform(translations);
  }
  sizeChange = Math.round(output.length / translations.length * 100, 0) - 100;
  return `<div><label for="${"email"}" class="${"text-sm block mb-2"}">Translations</label>
	<pre contenteditable class="${"p-4 m-2 rounded bg-code overflow-x-auto text-sm border "}">${(($$value) => $$value === void 0 ? `		<code><div>${escape(translations)}</div></code>
	` : $$value)(translations)}</pre>
	${escape(translations.length)} bytes	
</div>

<div><div class="${"flex justify-between"}"><label for="${"email"}" class="${"text-sm block mb-2"}">Output</label>

		<label for="${"show-minified"}" class="${"flex items-center"}"><input type="${"checkbox"}" id="${"show-minified"}"${add_attribute("checked", showMinified, 1)}>
			<span class="${"ml-2 text-sm"}">Show minified output</span></label></div>

	<pre class="${"p-4 mt-2 rounded bg-code overflow-x-auto text-sm"}">		<code><div>${escape(output)}</div></code>
	</pre>
	${escape(output.length)} bytes (${escape(Math.abs(sizeChange))}% ${escape(sizeChange > 0 ? "bigger" : "smaller")} than the source translations)
</div>`;
});
export {
  Playground as P
};
