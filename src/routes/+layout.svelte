<script lang="ts">
  import "../app.css";
  import "svelte-highlight/styles/github.css";  
  
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>
{@render children?.()}
