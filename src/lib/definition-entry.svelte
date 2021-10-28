<script>
  export let background;
</script>
<div class="bg-{background === 'gray' ? 'gray-50' : 'white'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  <dt class="text-sm font-medium text-gray-500">
    <slot name="dt"/>
  </dt>
  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
    <slot name="dd"></slot>
  </dd>
</div>
