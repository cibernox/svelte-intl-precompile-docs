<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { t } from 'svelte-intl-precompile';
	import scrollToHash from '$lib/scroll-to-hash';

	scrollToHash();
	let interpolation = 'orange';
	let guest = 'John';
	let plural1 = 0;
	let plural2 = 0;
	let guestCount = 0;
	let childGender = "male";
	let holidaysStart = new Date();
	let appointment = new Date();
	let number = 0;
	let interpolationKey = "Your have {numCats, plural, one {one cat} other {# cats}}";
	let simplePlural = "Your have {numCats, plural, one {one cat} other {# cats}}";
	let complexPlural = "Your have {numCats, plural, \n  =0 {no cats at all} \n  =1 {one single cat} \n  =2 {a couple cats} \n  =3 {a trio of cats} \n  =12 {a dozen cats} \n  other {exactly # cats}}";
	let offsetPlural = "Mary {guestCount, plural, offset:1 \n  =0 {does not give a party.} \n  =1 {invites {guest} to her party.} \n  =2 {invites {guest} and one other person to her party.} \n  other {invites {guest} and # other people to her party.}}";
	let select = "Your {childGender, select, male {son} female {daughter} other {child}} has won an award";
	let dateString = "Your next holidays start on {holidayStart, date, full}";
	let timeString = "Your doctor's appointment is today at {appointment, time, short}";
	let numberString = "Your account balance is {num, number}";

	function onDateChange(e) {
		holidaysStart = new Date(e.srcElement.value)
	}
	function onTimeChange(e) {
		let [h, m] = e.srcElement.value.split(':');
		let d = new Date();
		d.setHours(h, m)
		appointment = d;
	}
</script>

<svelte:head>
	<title>{$t('icu-crash-course.title')}</title>
</svelte:head>

<h1 class="text-4xl font-semibold">{$t('icu-crash-course.title')}</h1>

<p>
	This library analyzes and compiles the translations authored in the ICU message syntax. While the ICU message syntax is
	an independent proyect this is an accelerated course on why it's good and how to use the main features.
</p>

<h2 class="text-2xl font-semibold">{$t('icu-crash-course.subsection.why')}</h2>

<p>
	ICU stands for <em class="italic">International Components for Unicode</em>. While its popularity begun in C/C++ and Java,
	it's the javascript ecosystem where it has become the defacto standard for internationalization, although it's also popular
	in Python and PHP.
</p>

<p>
	Internationalizing apps is a whole lot more than just mapping some keys to the appropiate translated string in a dictionary. Properly 
	internationalized apps must handle all aspects of translation, including the way dates and times are formatted, what delimiters are used
	in numbers to separate the thousands or the decimals, currencies and support gendered languages.
</p>

<p>
	Even something as simple as plurals can get very complex depending on the language. English, German and Spanish have singular and plural, 
	but some slavic languages have 3, and other languages like Arabic have 6 depending on the number of items being pluralized. Sometimes the threshold 
	where we have to change from one plural form to the next varies depending on the reginal variant. <br>
	English doesn't have many gendered words but French or Italian do, and the adjectives must match the noun's gender.<br>
	<code class="inline">123456789</code> formatted in US regional variante of English will be <code class="inline">123,456,789</code> but in the Indian 
	variant will be <code class="inline">12,34,56,789</code>. <br>
	Formatting currencies the $ symbol goes before the amount, but the € goes after.
</p>

<p>
	The ICU abstracts all this complexity from the developers and gives the real professional translators a meta language expressive enough to 
	handle all the subtleties on they side.
</p>

<h2 class="text-2xl font-semibold">{$t('icu-crash-course.subsection.interpolations')}</h2>

<p>
	ICU messages support interpolating values, which will be properly sanitized so passing <code class="inline">undefined</code> will not interpolate 
	as "undefined".
</p>

<table class="table-auto w-full text-left">
  <thead>
    <tr>
      <th>{$t('icu-crash-course.table-heads.definition')}</th>
      <th>{$t('icu-crash-course.table-heads.definition')}</th>
      <th>{$t('icu-crash-course.table-heads.output')}</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-gray-50">
      <td>
				<pre><code>{interpolationKey}</code></pre>
			</td>
      <td>
				<input 
					class="shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" 
					type="text" 
					bind:value={childGender} 
					placeholder="chosen">
			</td>
      <td>{$t('icu-crash-course.table-cells.interpolations-2', { values: { chosen: interpolation } })}</td>
    </tr>
	</tbody>
</table>

<h2 class="text-2xl font-semibold">{$t('icu-crash-course.subsection.plurals')}</h2>

<p>
	The second most used feature in any app is pluralization. The ICU syntax has a dedicated <code class="inline">plural</code>
	helper to define plural translations that from very simple to quite complicated, all within the translation itself.
</p>

<div>
	Each path for the plural is prefixed with the numeric qualifier. The possible qualifiers are:
	<ul class="list-disc list-inside ml-8">
		<li>zero</li>
		<li>one (singular)</li>
		<li>two (dual)</li>
		<li>few (paucal)</li>
		<li>many (also used for fractions)</li>
		<li>other (general plural form. The one used on languages with only one plural)</li>
	</ul>
	Let's se some examples first:
</div>

<table class="table-auto w-full text-left">
  <thead>
    <tr>
      <th>{$t('icu-crash-course.table-heads.definition')}</th>
      <th>{$t('icu-crash-course.table-heads.values')}</th>
      <th>{$t('icu-crash-course.table-heads.output')}</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-gray-50">
      <td>
				<pre><code>{simplePlural}</code></pre>
			</td>
      <td>
				<input 
					class="shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" 
					type="number" 
					bind:value={plural1} 
					min="0">
			</td>
      <td>{$t('icu-crash-course.table-cells.plurals-simple', { values: { numCats: plural1 } })}</td>
    </tr>
    <tr>
      <td>
				<pre><code>{complexPlural}</code></pre>
			</td>
      <td>
				<input 
					class="shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" 
					type="number" 
					bind:value={plural2} 
					min="0">
			</td>
      <td>{$t('icu-crash-course.table-cells.plurals-complex', { values: { count: plural2 } })}</td>
    </tr>
    <tr class="bg-gray-50">
      <td>
				<pre><code>{offsetPlural}</code></pre>
			</td>
      <td>
				<input 
					class="shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" 
					type="number" 
					bind:value={guestCount} 
					min="0">
				<input 
					class="shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" 
					type="text" 
					bind:value={guest} 
					placeholder="guest"
					min="0">
			</td>
      <td>{$t('icu-crash-course.table-cells.plurals-offset', { values: { guest, guestCount } })}</td>
    </tr>
	</tbody>
</table>

<p>
	Some languages like English only leverage <code class="inline">one</code> and <code class="inline">other</code> but others
	will be able to use the best plural form. In particular threshold value that divides <code class="inline">few</code> and <code class="inline">many</code>
	is heavily cultural.
</p>

<p>
	You can also specify translations for exact values using <code class="inline">=N</code>. When a number is specified
	that way that translation will supersede the language's default behavior. <br>
	For instance, in english you could use <code class="inline">=2</code> or <code class="inline">=12</code> to have different
	translations specifically for a couple and a dozen instead of using the generic plural.
</p>

<p>
	Lastly, plurals can also make us of the hashtag to print as number the value being used in the plural, and
	optionally the helper can receive an offset that will be substracted to the value in the hashtag.
</p>

<h2 class="text-2xl font-semibold">{$t('icu-crash-course.subsection.select')}</h2>

<p>
	The <code class="inline">select</code> helper is used to choose among several translation paths depending on an argument.<br>
	While it has many possible uses the most common one is for having gendered translations.
</p>

<table class="table-auto w-full text-left">
  <thead>
    <tr>
      <th>{$t('icu-crash-course.table-heads.definition')}</th>
      <th>{$t('icu-crash-course.table-heads.values')}</th>
      <th>{$t('icu-crash-course.table-heads.output')}</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-gray-50">
      <td>
				<pre><code>{select}</code></pre>
			</td>
      <td>
				<select value={childGender} on:change={(e) => childGender = e.target.value}>
					<option selected={childGender === "male"} value="male">
						{$t('icu-crash-course.table-cells.select-value-male')}
					</option>
					<option selected={childGender === "female"} value="female">
						{$t('icu-crash-course.table-cells.select-value-female')}
					</option>
					<option selected={childGender === "unknown"} value="unknown">
						{$t('icu-crash-course.table-cells.select-value-unknown')}
					</option>
				</select>
			</td>
      <td>{$t('icu-crash-course.table-cells.select', { values: { childGender } })}</td>
    </tr>
	</tbody>
</table>

<h2 class="text-2xl font-semibold">{$t('icu-crash-course.subsection.date')}</h2>

<div>
	This helper is used to format dates according to the current locale one of the default formats
	or the custom ones you added when configuring the app.<br>
	The default format are:
	<ul class="list-disc list-inside ml-8">
		<li><code class="inline">short</code>: The most compact date representation</li>
		<li><code class="inline">medium</code>: Abbreviated textual representation</li>
		<li><code class="inline">long</code>: Long textual representation</li>
		<li><code class="inline">full</code>: The most verbose and complete date</li>
	</ul>	
</div>

<table class="table-auto w-full text-left">
  <thead>
    <tr>
      <th>{$t('icu-crash-course.table-heads.definition')}</th>
      <th>{$t('icu-crash-course.table-heads.values')}</th>
      <th>{$t('icu-crash-course.table-heads.output')}</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-gray-50">
      <td>
				<pre><code>{dateString}</code></pre>
			</td>
      <td>
				<input type="date" on:change={onDateChange}>
			</td>
      <td>{$t('icu-crash-course.table-cells.date', { values: { holidaysStart } })}</td>
    </tr>
	</tbody>
</table>

<h2 class="text-2xl font-semibold">{$t('icu-crash-course.subsection.time')}</h2>

<div>
	Just like the date helpers but for formatting only the time part of a date.
</div>

<table class="table-auto w-full text-left">
  <thead>
    <tr>
      <th>{$t('icu-crash-course.table-heads.definition')}</th>
      <th>{$t('icu-crash-course.table-heads.values')}</th>
      <th>{$t('icu-crash-course.table-heads.output')}</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-gray-50">
      <td>
				<pre><code>{timeString}</code></pre>
			</td>
      <td>
				<input type="time" on:change={onTimeChange}>
			</td>
      <td>{$t('icu-crash-course.table-cells.time', { values: { appointment } })}</td>
    </tr>
	</tbody>
</table>

<h2 class="text-2xl font-semibold">{$t('icu-crash-course.subsection.number')}</h2>

<p>
	Formats a number according to the rules of the current locale.
</p>

<table class="table-auto w-full text-left">
  <thead>
    <tr>
      <th>{$t('icu-crash-course.table-heads.definition')}</th>
      <th>{$t('icu-crash-course.table-heads.values')}</th>
      <th>{$t('icu-crash-course.table-heads.output')}</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-gray-50">
      <td>
				<pre><code>{numberString}</code></pre>
			</td>
      <td>
				<input type="number" bind:value={number}>
			</td>
      <td>{$t('icu-crash-course.table-cells.number', { values: { num: number } })}</td>
    </tr>
	</tbody>
</table>
