import { c as create_ssr_component, b as subscribe, h as add_attribute, v as validate_component, e as escape } from "../../../../chunks/index.js";
import { locale, t } from "svelte-intl-precompile";
import { p as page } from "../../../../chunks/stores.js";
const NavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { href } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  isActive = $page.url.pathname === href;
  $$unsubscribe_page();
  return `<li class="${"p-0 mb-2"}"><a${add_attribute("href", href, 0)} class="${["uppercase font-bold", isActive ? "underline" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</a>
  ${slots.submenu ? slots.submenu({}) : ``}</li>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $locale, $$unsubscribe_locale;
  let $t, $$unsubscribe_t;
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_locale();
  $$unsubscribe_t();
  return `<nav class="${"fixed w-76 h-screen shadow-xl bg-gray-500"}"><ul class="${"pt-4 pl-8 pr-8 text-white"}">${validate_component(NavLink, "NavLink").$$render(
    $$result,
    {
      href: "/" + $locale + "/docs/introduction"
    },
    {},
    {
      default: () => {
        return `${escape($t("introduction.title"))}`;
      }
    }
  )}
    ${validate_component(NavLink, "NavLink").$$render(
    $$result,
    {
      href: "/" + $locale + "/docs/icu-crash-course"
    },
    {},
    {
      default: () => {
        return `${escape($t("icu-crash-course.title"))}`;
      }
    }
  )}
    ${validate_component(NavLink, "NavLink").$$render(
    $$result,
    {
      href: "/" + $locale + "/docs/getting-started"
    },
    {},
    {
      default: () => {
        return `${escape($t("getting-started.title"))}`;
      }
    }
  )}
    ${validate_component(NavLink, "NavLink").$$render(
    $$result,
    {
      href: "/" + $locale + "/docs/configuration"
    },
    {},
    {
      submenu: () => {
        return `<ul slot="${"submenu"}" class="${"pb-2 pl-4"}"><li><a href="${"/" + escape($locale, true) + "/docs/configuration#sample-config"}">${escape($t("configuration.link.example"))}</a></li>
        <li><a href="${"/" + escape($locale, true) + "/docs/configuration#static-locales"}">${escape($t("configuration.subsection.static-locales"))}</a></li>
        <li><a href="${"/" + escape($locale, true) + "/docs/configuration#dynamic-locales"}">${escape($t("configuration.subsection.dynamic-locales"))}</a></li>
        <li><a href="${"/" + escape($locale, true) + "/docs/configuration#init"}">${escape($t("configuration.subsection.init"))}</a></li>
        <li><a href="${"/" + escape($locale, true) + "/docs/configuration#find-best-locale"}">${escape($t("configuration.subsection.find-locale"))}</a></li>
        <li><a href="${"/" + escape($locale, true) + "/docs/configuration#custom-formats"}">${escape($t("configuration.subsection.custom-formats"))}</a></li></ul>`;
      },
      default: () => {
        return `${escape($t("configuration.title"))}`;
      }
    }
  )}
    ${validate_component(NavLink, "NavLink").$$render($$result, { href: "/" + $locale + "/docs/usage" }, {}, {
    submenu: () => {
      return `<ul slot="${"submenu"}" class="${"pb-2 pl-4"}"><li><a href="${"/" + escape($locale, true) + "/docs/usage#basic-translation"}">${escape($t("usage.link.basic-translations"))}</a></li>
        <li><a href="${"/" + escape($locale, true) + "/docs/usage#passing-arguments"}">${escape($t("usage.subsection.passing-arguments"))}</a></li>
        <li><a href="${"/" + escape($locale, true) + "/docs/usage#formatting"}">${escape($t("usage.subsection.formatting"))}</a></li>
        <li><a href="${"/" + escape($locale, true) + "/docs/usage#other-stores"}">${escape($t("usage.subsection.other-stores"))}</a></li></ul>`;
    },
    default: () => {
      return `${escape($t("usage.title"))}`;
    }
  })}
    ${validate_component(NavLink, "NavLink").$$render($$result, { href: "/docs/playground" }, {}, {
    default: () => {
      return `${escape($t("playground.title"))}`;
    }
  })}</ul></nav>
<div class="${"ml-76"}"><article class="${"px-14 py-8 space-y-8"}">${slots.default ? slots.default({}) : ``}</article></div>`;
});
export {
  Layout as default
};
