<script>
  import { onMount } from 'svelte';
  export let lang;

  function highlight(node) {
    // @ts-ignore
    window.Prism.highlightElement(node);
  }
</script>

<pre class="p-4 m-12 rounded bg-code overflow-x-auto">
  <code use:highlight class="language-{lang}"><div><slot/></div></code>
</pre>
