<script>
  export let lang;
  export let editable = false;
  function highlight(node) {
    // @ts-ignore
    window.Prism.highlightElement(node);
  }
  function autofocus(node) {
    if (editable) node.focus();
  }
  
</script>
<pre 
  contenteditable={editable} 
  use:autofocus 
  on:change
  class="p-4 m-12 rounded bg-code overflow-x-auto">
  <code use:highlight class="language-{lang}"><div><slot/></div></code>
</pre>
