<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { t } from 'svelte-intl-precompile';
	let interpolation = 'orange';
	let guest = 'John';
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
	let skeletonCompactVal = 5000;
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
	let skeletonPercentageTwoDecimals = "Game progress {num, number, ::percent .00}";
	let skeletonMeasurementMeter = "Your destination is {num, number, ::unit/meter} away";
	let skeletonMeasurementMeterLong = "Your destination is {num, number, ::unit/meter unit-width-full-name} away";
	let skeletonCompactShort = "Are you sure you want to bid {num, number, ::K} over asking?";
	let skeletonCompactLong = "Are you sure you want to bid {num, number, ::KK} over asking?";

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

<p>{$t('icu-crash-course.paragraph.main-1')}</p>

<h2 class="text-2xl font-semibold">{$t('icu-crash-course.subsection.why')}</h2>

<p>{@html $t('icu-crash-course.paragraph.why-1')}</p>
<p>{@html $t('icu-crash-course.paragraph.why-2')}</p>
<p>{@html $t('icu-crash-course.paragraph.why-3')}</p>
<p>{$t('icu-crash-course.paragraph.why-4')}</p>

<h2 class="text-2xl font-semibold">{$t('icu-crash-course.subsection.interpolations')}</h2>
<p>{@html $t('icu-crash-course.paragraph.interpolations-1')}</p>

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
					bind:value={interpolation} 
					placeholder="chosen">
			</td>
      <td>{$t('icu-crash-course.table-cells.interpolations', { values: { chosen: interpolation } })}</td>
    </tr>
	</tbody>
</table>

<h2 class="text-2xl font-semibold">{$t('icu-crash-course.subsection.plurals')}</h2>

<p>{@html $t('icu-crash-course.paragraph.plurals-1')}</p>

<div>
	{$t('icu-crash-course.paragraph.plurals-2')}
	<ul class="list-disc list-inside ml-8">
		<li>zero</li>
		<li>one {$t('icu-crash-course.list-items.one')}</li>
		<li>two {$t('icu-crash-course.list-items.two')}</li>
		<li>few {$t('icu-crash-course.list-items.few')}</li>
		<li>many {$t('icu-crash-course.list-items.many')}</li>
		<li>other {$t('icu-crash-course.list-items.other')}</li>
	</ul>
	{$t('icu-crash-course.paragraph.plurals-3')}
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

<p>{@html $t('icu-crash-course.paragraph.plurals-4')}</p>
<p>{@html $t('icu-crash-course.paragraph.plurals-5')}</p>
<p>{$t('icu-crash-course.paragraph.plurals-6')}</p>

<h2 class="text-2xl font-semibold">{$t('icu-crash-course.subsection.select')}</h2>

<p>{@html $t('icu-crash-course.paragraph.select-1')}</p>

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
	{@html $t('icu-crash-course.paragraph.date-1')}
	<ul class="list-disc list-inside ml-8">
		<li><code class="inline">short</code>{$t('icu-crash-course.list-items.short')}</li>
		<li><code class="inline">medium</code>{$t('icu-crash-course.list-items.medium')}</li>
		<li><code class="inline">long</code>{$t('icu-crash-course.list-items.long')}</li>
		<li><code class="inline">full</code>{$t('icu-crash-course.list-items.full')}</li>
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

<p>{$t('icu-crash-course.paragraph.time')}</p>

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

<p>{$t('icu-crash-course.paragraph.number')}</p>

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

<p>There's also an advanced feature called number skeletons that allow you to customize to great lengths how you want your numbers formatted</p>

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
				<pre><code>{skeletonCurrency}</code></pre>
			</td>
      <td>
				<input type="number" bind:value={skeletonBalance}>
			</td>
      <td>{$t('icu-crash-course.table-cells.skeletonCurrency', { values: { num: skeletonBalance } })}</td>
    </tr>
    <tr>
      <td>
				<pre><code>{skeletonCurrencySigned}</code></pre>
			</td>
      <td>
				<input type="number" bind:value={skeletonBalance}>
			</td>
      <td>{$t('icu-crash-course.table-cells.skeletonCurrencySigned', { values: { num: skeletonBalance } })}</td>
    </tr>
    <tr class="bg-gray-50">
			<td>
				<pre><code>{skeletonPercentage}</code></pre>
			</td>
      <td>
				<input type="number" step="0.1" bind:value={skeletonPercentageVal}>
			</td>
      <td>{$t('icu-crash-course.table-cells.skeletonPercentage', { values: { num: skeletonPercentageVal } })}</td>
    </tr>
    <tr>
			<td>
				<pre><code>{skeletonPercentageTwoDecimals}</code></pre>
			</td>
      <td>
				<input type="number" step="0.1" bind:value={skeletonPercentageVal}>
			</td>
      <td>{$t('icu-crash-course.table-cells.skeletonPercentageTwoDecimals', { values: { num: skeletonPercentageVal } })}</td>
    </tr>
		<tr class="bg-gray-50">
      <td>
				<pre><code>{skeletonMeasurementMeter}</code></pre>
			</td>
      <td>
				<input type="number" bind:value={skeletonMeasurementMeterVal}>
			</td>
      <td>{$t('icu-crash-course.table-cells.skeletonMeasurementMeter', { values: { num: skeletonMeasurementMeterVal } })}</td>
    </tr>		
		<tr>
      <td>
				<pre><code>{skeletonMeasurementMeterLong}</code></pre>
			</td>
      <td>
				<input type="number" bind:value={skeletonMeasurementMeterVal}>
			</td>
      <td>{$t('icu-crash-course.table-cells.skeletonMeasurementMeterLong', { values: { num: skeletonMeasurementMeterVal } })}</td>
    </tr>
		<tr class="bg-gray-50">
      <td>
				<pre><code>{skeletonCompactShort}</code></pre>
			</td>
      <td>
				<input type="number" step="100" bind:value={skeletonCompactVal}>
			</td>
      <td>{$t('icu-crash-course.table-cells.skeletonCompactShort', { values: { num: skeletonCompactVal } })}</td>
    </tr>				
		<tr>
      <td>
				<pre><code>{skeletonCompactLong}</code></pre>
			</td>
      <td>
				<input type="number" step="100" bind:value={skeletonCompactVal}>
			</td>
      <td>{$t('icu-crash-course.table-cells.skeletonCompactLong', { values: { num: skeletonCompactVal } })}</td>
    </tr>				
	</tbody>
</table>

<p>The possibilities of number skeletons are limitless.</p>