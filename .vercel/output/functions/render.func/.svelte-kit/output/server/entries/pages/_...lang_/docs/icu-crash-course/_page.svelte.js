import { c as create_ssr_component, b as subscribe, e as escape, h as add_attribute } from "../../../../../chunks/index.js";
import { t } from "svelte-intl-precompile";
let interpolationKey = "Your favorite color is {chosen}";
let simplePlural = "Your have {numCats, plural, one {one cat} other {# cats}}";
let complexPlural = "Your have {numCats, plural, \n  =0 {no cats at all} \n  =1 {one single cat} \n  =2 {a couple cats} \n  =3 {a trio of cats} \n  =12 {a dozen cats} \n  other {exactly # cats}}";
let offsetPlural = "Mary {guestCount, plural, offset:1 \n  =0 {does not give a party.} \n  =1 {invites {guest} to her party.} \n  =2 {invites {guest} and one other person to her party.} \n  other {invites {guest} and # other people to her party.}}";
let select = "Your {childGender, select, male {son} female {daughter} other {child}} has won an award";
let dateString = "Your next holidays start on {holidayStart, date, full}";
let timeString = "Your doctor's appointment is today at {appointment, time, short}";
let numberString = "Your account balance is {num, number}";
let skeletonCurrency = "Your account balance is {num, number, ::currency/EUR}";
let skeletonCurrencySigned = "Your account balance is {num, number, ::currency/EUR sign-always}";
let skeletonPercentage = "Game progress {num, number, ::percent}";
let skeletonPercentageScaled = "Game progress {num, number, ::percent .00 scale/100}";
let skeletonPercentageTwoDecimals = "Game progress {num, number, ::percent .00}";
let skeletonMeasurementMeter = "Your destination is {num, number, ::unit/meter} away";
let skeletonMeasurementMeterLong = "Your destination is {num, number, ::unit/meter unit-width-full-name} away";
let skeletonCompactShort = "Are you sure you want to bid {num, number, ::K} over asking?";
let skeletonCompactLong = "Are you sure you want to bid {num, number, ::KK} over asking?";
let skeletonScientific = "The chances of winning the lottery are 1 in {num, number, ::scientific/*ee}?";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let interpolation = "orange";
  let guest = "John";
  let plural1 = 0;
  let plural2 = 0;
  let guestCount = 0;
  let childGender = "male";
  let holidaysStart = new Date();
  let appointment = new Date();
  let number = 0;
  let skeletonBalance = 0;
  let skeletonPercentageVal = 0;
  let skeletonMeasurementMeterVal = 0;
  let skeletonCompactVal = 5e3;
  let skeletonScientificVal = 123456789;
  $$unsubscribe_t();
  return `${$$result.head += `${$$result.title = `<title>${escape($t("icu-crash-course.title"))}</title>`, ""}`, ""}

<h1 class="${"text-4xl font-semibold"}">${escape($t("icu-crash-course.title"))}</h1>

<p>${escape($t("icu-crash-course.paragraph.main-1"))}</p>

<h2 class="${"text-2xl font-semibold"}">${escape($t("icu-crash-course.subsection.why"))}</h2>

<p><!-- HTML_TAG_START -->${$t("icu-crash-course.paragraph.why-1")}<!-- HTML_TAG_END --></p>
<p><!-- HTML_TAG_START -->${$t("icu-crash-course.paragraph.why-2")}<!-- HTML_TAG_END --></p>
<p><!-- HTML_TAG_START -->${$t("icu-crash-course.paragraph.why-3")}<!-- HTML_TAG_END --></p>
<p>${escape($t("icu-crash-course.paragraph.why-4"))}</p>

<h2 class="${"text-2xl font-semibold"}">${escape($t("icu-crash-course.subsection.interpolations"))}</h2>
<p><!-- HTML_TAG_START -->${$t("icu-crash-course.paragraph.interpolations-1")}<!-- HTML_TAG_END --></p>

<table class="${"table-auto w-full text-left"}"><thead><tr><th>${escape($t("icu-crash-course.table-heads.definition"))}</th>
      <th>${escape($t("icu-crash-course.table-heads.definition"))}</th>
      <th>${escape($t("icu-crash-course.table-heads.output"))}</th></tr></thead>
  <tbody><tr class="${"bg-gray-50"}"><td><pre><code>${escape(interpolationKey)}</code></pre></td>
      <td><input class="${"shadow border rounded py-2 px-3 text-gray-700 focus:outline-none"}" type="${"text"}" placeholder="${"chosen"}"${add_attribute("value", interpolation, 0)}></td>
      <td>${escape($t("icu-crash-course.table-cells.interpolations", { values: { chosen: interpolation } }))}</td></tr></tbody></table>

<h2 class="${"text-2xl font-semibold"}">${escape($t("icu-crash-course.subsection.plurals"))}</h2>

<p><!-- HTML_TAG_START -->${$t("icu-crash-course.paragraph.plurals-1")}<!-- HTML_TAG_END --></p>

<div>${escape($t("icu-crash-course.paragraph.plurals-2"))}
	<ul class="${"list-disc list-inside ml-8"}"><li>zero</li>
		<li>one ${escape($t("icu-crash-course.list-items.one"))}</li>
		<li>two ${escape($t("icu-crash-course.list-items.two"))}</li>
		<li>few ${escape($t("icu-crash-course.list-items.few"))}</li>
		<li>many ${escape($t("icu-crash-course.list-items.many"))}</li>
		<li>other ${escape($t("icu-crash-course.list-items.other"))}</li></ul>
	${escape($t("icu-crash-course.paragraph.plurals-3"))}</div>

<table class="${"table-auto w-full text-left"}"><thead><tr><th>${escape($t("icu-crash-course.table-heads.definition"))}</th>
      <th>${escape($t("icu-crash-course.table-heads.values"))}</th>
      <th>${escape($t("icu-crash-course.table-heads.output"))}</th></tr></thead>
  <tbody><tr class="${"bg-gray-50"}"><td><pre><code>${escape(simplePlural)}</code></pre></td>
      <td><input class="${"shadow border rounded py-2 px-3 text-gray-700 focus:outline-none"}" type="${"number"}" min="${"0"}"${add_attribute("value", plural1, 0)}></td>
      <td>${escape($t("icu-crash-course.table-cells.plurals-simple", { values: { numCats: plural1 } }))}</td></tr>
    <tr><td><pre><code>${escape(complexPlural)}</code></pre></td>
      <td><input class="${"shadow border rounded py-2 px-3 text-gray-700 focus:outline-none"}" type="${"number"}" min="${"0"}"${add_attribute("value", plural2, 0)}></td>
      <td>${escape($t("icu-crash-course.table-cells.plurals-complex", { values: { count: plural2 } }))}</td></tr>
    <tr class="${"bg-gray-50"}"><td><pre><code>${escape(offsetPlural)}</code></pre></td>
      <td><input class="${"shadow border rounded py-2 px-3 text-gray-700 focus:outline-none"}" type="${"number"}" min="${"0"}"${add_attribute("value", guestCount, 0)}>
				<input class="${"shadow border rounded py-2 px-3 text-gray-700 focus:outline-none"}" type="${"text"}" placeholder="${"guest"}" min="${"0"}"${add_attribute("value", guest, 0)}></td>
      <td>${escape($t("icu-crash-course.table-cells.plurals-offset", { values: { guest, guestCount } }))}</td></tr></tbody></table>

<p><!-- HTML_TAG_START -->${$t("icu-crash-course.paragraph.plurals-4")}<!-- HTML_TAG_END --></p>
<p><!-- HTML_TAG_START -->${$t("icu-crash-course.paragraph.plurals-5")}<!-- HTML_TAG_END --></p>
<p>${escape($t("icu-crash-course.paragraph.plurals-6"))}</p>

<h2 class="${"text-2xl font-semibold"}">${escape($t("icu-crash-course.subsection.select"))}</h2>

<p><!-- HTML_TAG_START -->${$t("icu-crash-course.paragraph.select-1")}<!-- HTML_TAG_END --></p>

<table class="${"table-auto w-full text-left"}"><thead><tr><th>${escape($t("icu-crash-course.table-heads.definition"))}</th>
      <th>${escape($t("icu-crash-course.table-heads.values"))}</th>
      <th>${escape($t("icu-crash-course.table-heads.output"))}</th></tr></thead>
  <tbody><tr class="${"bg-gray-50"}"><td><pre><code>${escape(select)}</code></pre></td>
      <td><select${add_attribute("value", childGender, 0)}><option ${"selected"} value="${"male"}">${escape($t("icu-crash-course.table-cells.select-value-male"))}
					</option><option ${""} value="${"female"}">${escape($t("icu-crash-course.table-cells.select-value-female"))}
					</option><option ${""} value="${"unknown"}">${escape($t("icu-crash-course.table-cells.select-value-unknown"))}</option></select></td>
      <td>${escape($t("icu-crash-course.table-cells.select", { values: { childGender } }))}</td></tr></tbody></table>

<h2 class="${"text-2xl font-semibold"}">${escape($t("icu-crash-course.subsection.date"))}</h2>

<div><!-- HTML_TAG_START -->${$t("icu-crash-course.paragraph.date-1")}<!-- HTML_TAG_END -->
	<ul class="${"list-disc list-inside ml-8"}"><li><code class="${"inline"}">short</code>${escape($t("icu-crash-course.list-items.short"))}</li>
		<li><code class="${"inline"}">medium</code>${escape($t("icu-crash-course.list-items.medium"))}</li>
		<li><code class="${"inline"}">long</code>${escape($t("icu-crash-course.list-items.long"))}</li>
		<li><code class="${"inline"}">full</code>${escape($t("icu-crash-course.list-items.full"))}</li></ul></div>

<table class="${"table-auto w-full text-left"}"><thead><tr><th>${escape($t("icu-crash-course.table-heads.definition"))}</th>
      <th>${escape($t("icu-crash-course.table-heads.values"))}</th>
      <th>${escape($t("icu-crash-course.table-heads.output"))}</th></tr></thead>
  <tbody><tr class="${"bg-gray-50"}"><td><pre><code>${escape(dateString)}</code></pre></td>
      <td><input type="${"date"}"></td>
      <td>${escape($t("icu-crash-course.table-cells.date", { values: { holidaysStart } }))}</td></tr></tbody></table>

<h2 class="${"text-2xl font-semibold"}">${escape($t("icu-crash-course.subsection.time"))}</h2>

<p>${escape($t("icu-crash-course.paragraph.time"))}</p>

<table class="${"table-auto w-full text-left"}"><thead><tr><th>${escape($t("icu-crash-course.table-heads.definition"))}</th>
      <th>${escape($t("icu-crash-course.table-heads.values"))}</th>
      <th>${escape($t("icu-crash-course.table-heads.output"))}</th></tr></thead>
  <tbody><tr class="${"bg-gray-50"}"><td><pre><code>${escape(timeString)}</code></pre></td>
      <td><input type="${"time"}"></td>
      <td>${escape($t("icu-crash-course.table-cells.time", { values: { appointment } }))}</td></tr></tbody></table>

<h2 class="${"text-2xl font-semibold"}" id="${"crash-course-numbers"}">${escape($t("icu-crash-course.subsection.number"))}</h2>

<p>${escape($t("icu-crash-course.paragraph.number"))}</p>

<table class="${"table-auto w-full text-left"}"><thead><tr><th>${escape($t("icu-crash-course.table-heads.definition"))}</th>
      <th>${escape($t("icu-crash-course.table-heads.values"))}</th>
      <th>${escape($t("icu-crash-course.table-heads.output"))}</th></tr></thead>
  <tbody><tr class="${"bg-gray-50"}"><td><pre><code>${escape(numberString)}</code></pre></td>
      <td><input type="${"number"}"${add_attribute("value", number, 0)}></td>
      <td>${escape($t("icu-crash-course.table-cells.number", { values: { num: number } }))}</td></tr></tbody></table>

<p><!-- HTML_TAG_START -->${$t("icu-crash-course.paragraph.number-2")}<!-- HTML_TAG_END --></p>

<table class="${"table-auto w-full text-left"}"><thead><tr><th>${escape($t("icu-crash-course.table-heads.definition"))}</th>
      <th>${escape($t("icu-crash-course.table-heads.values"))}</th>
      <th>${escape($t("icu-crash-course.table-heads.output"))}</th></tr></thead>
  <tbody><tr class="${"bg-gray-50"}"><td><pre><code>${escape(skeletonCurrency)}</code></pre></td>
      <td><input type="${"number"}"${add_attribute("value", skeletonBalance, 0)}></td>
      <td>${escape($t("icu-crash-course.table-cells.skeletonCurrency", { values: { num: skeletonBalance } }))}</td></tr>
    <tr><td><pre><code>${escape(skeletonCurrencySigned)}</code></pre></td>
      <td><input type="${"number"}"${add_attribute("value", skeletonBalance, 0)}></td>
      <td>${escape($t("icu-crash-course.table-cells.skeletonCurrencySigned", { values: { num: skeletonBalance } }))}</td></tr>
    <tr class="${"bg-gray-50"}"><td><pre><code>${escape(skeletonPercentage)}</code></pre></td>
      <td><input type="${"number"}" step="${"0.1"}"${add_attribute("value", skeletonPercentageVal, 0)}></td>
      <td>${escape($t("icu-crash-course.table-cells.skeletonPercentage", { values: { num: skeletonPercentageVal } }))}</td></tr>	
    <tr><td><pre><code>${escape(skeletonPercentageTwoDecimals)}</code></pre></td>
      <td><input type="${"number"}" step="${"0.1"}"${add_attribute("value", skeletonPercentageVal, 0)}></td>
      <td>${escape($t("icu-crash-course.table-cells.skeletonPercentageTwoDecimals", { values: { num: skeletonPercentageVal } }))}</td></tr>
    <tr class="${"bg-gray-50"}"><td><pre><code>${escape(skeletonPercentageScaled)}</code></pre></td>
      <td><input type="${"number"}" step="${"0.1"}"${add_attribute("value", skeletonPercentageVal, 0)}></td>
      <td>${escape($t("icu-crash-course.table-cells.skeletonPercentageScaled", { values: { num: skeletonPercentageVal } }))}</td></tr>			
		<tr><td><pre><code>${escape(skeletonMeasurementMeter)}</code></pre></td>
      <td><input type="${"number"}"${add_attribute("value", skeletonMeasurementMeterVal, 0)}></td>
      <td>${escape($t("icu-crash-course.table-cells.skeletonMeasurementMeter", {
    values: { num: skeletonMeasurementMeterVal }
  }))}</td></tr>		
		<tr class="${"bg-gray-50"}"><td><pre><code>${escape(skeletonMeasurementMeterLong)}</code></pre></td>
      <td><input type="${"number"}"${add_attribute("value", skeletonMeasurementMeterVal, 0)}></td>
      <td>${escape($t("icu-crash-course.table-cells.skeletonMeasurementMeterLong", {
    values: { num: skeletonMeasurementMeterVal }
  }))}</td></tr>
		<tr><td><pre><code>${escape(skeletonCompactShort)}</code></pre></td>
      <td><input type="${"number"}" step="${"100"}"${add_attribute("value", skeletonCompactVal, 0)}></td>
      <td>${escape($t("icu-crash-course.table-cells.skeletonCompactShort", { values: { num: skeletonCompactVal } }))}</td></tr>				
		<tr class="${"bg-gray-50"}"><td><pre><code>${escape(skeletonCompactLong)}</code></pre></td>
      <td><input type="${"number"}" step="${"100"}"${add_attribute("value", skeletonCompactVal, 0)}></td>
      <td>${escape($t("icu-crash-course.table-cells.skeletonCompactLong", { values: { num: skeletonCompactVal } }))}</td></tr>
		<tr><td><pre><code>${escape(skeletonScientific)}</code></pre></td>
      <td><input type="${"number"}" step="${"100"}"${add_attribute("value", skeletonScientificVal, 0)}></td>
      <td>${escape($t("icu-crash-course.table-cells.skeletonScientific", { values: { num: skeletonScientificVal } }))}</td></tr></tbody></table>

<p>${escape($t("icu-crash-course.paragraph.number-3"))}</p>`;
});
export {
  Page as default
};
