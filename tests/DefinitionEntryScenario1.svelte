<script>import DefinitionEntry from '$lib/DefinitionEntry.svelte';</script>
<DefinitionEntry background="gray">
  {#snippet dt()}
    I'm the description term
  {/snippet}
  {#snippet dd()}
    I'm the description definition
  {/snippet}    
</DefinitionEntry>