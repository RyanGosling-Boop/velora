<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import '../app.css';
  import { page } from '$app/state'; // SvelteKit reactive page state
  import LeftBar from '../components/LeftBar.svelte';

  // Svelte 5 layout render property
  let { children } = $props();

  // Sidebar mounts only on internal map or activities routes
  const isAppRoute = $derived(
    page.url.pathname.startsWith('/map') || 
    page.url.pathname.startsWith('/activities')
  );
</script>

<!-- Main container layout -->
<div class="h-screen w-full flex flex-row overflow-hidden bg-black select-none">
  <!-- Persistent Leftmost Sidebar -->
  {#if isAppRoute}
    <LeftBar />
  {/if}
  
  <!-- Remaining active workspace takes exactly the remaining width -->
  <div class="flex-1 min-h-0 relative overflow-hidden">
    {@render children()}
  </div>
</div>

<style>
  /* Global CSS Reset: Prevents browser scroll-chaining and layout shifts */
  :global(html, body) {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overscroll-behavior: none;
  }
</style>