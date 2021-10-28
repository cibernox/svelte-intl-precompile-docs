import { onMount } from 'svelte';

export default function scrollToHash() {
  onMount(() => {
    if (!window.location.hash) return;
    let header = document.querySelector(window.location.hash);
    header && header.scrollIntoView();
  });
}