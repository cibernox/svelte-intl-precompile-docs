import { registerAll, availableLocales } from '$locales';
import { waitLocale, init } from 'svelte-intl-precompile';
import type { LayoutLoad } from './$types';

registerAll();
let defaultLang = 'en';
let initialized = false;

export const localeRegex = new RegExp(`^/(${availableLocales.join('|')})(/|$)`);
export function extractLanguageFromPath(path) {
  return (localeRegex.exec(path) || [null, defaultLang])[1];
}
export const load: LayoutLoad =  async function({ url: { pathname } }) {
  if (!initialized) {      
    const lang = extractLanguageFromPath(pathname);
    init({
      initialLocale: lang,
      fallbackLocale: defaultLang
    });
    initialized = true;
    await waitLocale()
  }
}
