import { register, init, waitLocale } from "svelte-intl-precompile";
function registerAll() {
  register("en", () => import("./en.js"));
  register("es", () => import("./es.js"));
  register("gl", () => import("./gl.js"));
  register("ja", () => import("./ja.js"));
}
const availableLocales = ["en", "es", "gl", "ja"];
registerAll();
let defaultLang = "en";
let initialized = false;
const localeRegex = new RegExp(`^/(${availableLocales.join("|")})(/|$)`);
function extractLanguageFromPath(path) {
  return (localeRegex.exec(path) || [null, defaultLang])[1];
}
const load = async function({ url: { pathname } }) {
  if (!initialized) {
    const lang = extractLanguageFromPath(pathname);
    init({
      initialLocale: lang,
      fallbackLocale: defaultLang
    });
    initialized = true;
    await waitLocale();
  }
};
export {
  availableLocales as a,
  load as b,
  extractLanguageFromPath as e,
  localeRegex as l
};
