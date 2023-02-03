import { registerAll, availableLocales } from '$locales';
import { waitLocale, init } from 'svelte-intl-precompile';
import type { LayoutLoad } from './$types';

registerAll();
let defaultLang = 'en';
let initialized = false;

export const _localeRegex = new RegExp(`^/(${availableLocales.join('|')})(/|$)`);
export function _extractLanguageFromPath(path) {
  return (_localeRegex.exec(path) || [null, defaultLang])[1];
}
export const load: LayoutLoad =  async function({ url: { pathname } }) {
  if (!initialized) {      
    const lang = _extractLanguageFromPath(pathname);
    init({
      initialLocale: lang,
      fallbackLocale: defaultLang
    });
    initialized = true;
    await waitLocale()
  }
}
