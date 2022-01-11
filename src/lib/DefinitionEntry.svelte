<script>
  export let background;
</script>
<div 
  data-testid="definition-entry"
  class="{background === 'gray' ? 'bg-gray-50' : 'bg-white'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
  <dt class="text-sm font-medium text-gray-500" data-testid="dt">
    <slot name="dt"/>
  </dt>
  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" data-testid="dd">
    <slot name="dd"></slot>
  </dd>
</div>
