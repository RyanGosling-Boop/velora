<!-- src/routes/settings/+page.svelte -->
<script lang="ts">
  import { Download, Trash2, ChevronLeft } from 'lucide-svelte';
  // Import the correct utilities from your persist file
  import { loadStore, clearAll } from '$lib/persist'; 
  import type { MapStore } from '$lib/persist';

  let confirmReset = $state(false);

  /**
   * Downloads all map progress as a JSON file
   */
  function downloadData() {
    // Uses loadStore to handle the 'velora_v1_' prefix automatically
    const data = loadStore<MapStore>('map', []);
    
    if (!data || data.length === 0) {
      alert("No progress data found to export.");
      return;
    }

    try {
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.body.appendChild(document.createElement('a'));
      
      a.href = url;
      a.download = `velora-pathfinder-backup.json`;
      a.click();
      
      // Cleanup
      URL.revokeObjectURL(url);
      a.remove();
    } catch (e) {
      console.error("Export failed:", e);
      alert("Failed to generate export file.");
    }
  }

  /**
   * Wipes all application data and forces a hard refresh
   */
  function resetData() {
    // 1. Wipe all versioned keys (map, colleges, activities, etc.)
    clearAll();
    
    // 2. Clear anything else just in case
    localStorage.clear();

    // 3. Force a full browser reload to the map. 
    // This wipes the Svelte memory state so the old data isn't re-saved.
    window.location.href = '/map'; 
  }
</script>

<div class="h-full w-full bg-black text-zinc-400 flex flex-col items-center justify-center p-6 selection:bg-zinc-800">
  <div class="w-full max-w-xs space-y-12">
    
    <!-- Header -->
    <div class="flex items-center justify-between">
      <h1 class="text-zinc-100 font-medium text-sm">Settings</h1>
      <a href="/map" class="text-[10px] uppercase tracking-[0.2em] hover:text-white transition-colors flex items-center gap-1">
        <ChevronLeft class="w-3 h-3" /> Back
      </a>
    </div>

    <div class="space-y-10">
      <!-- Export -->
      <button 
        onclick={downloadData}
        class="flex items-center justify-between w-full text-left group"
      >
        <div class="space-y-1">
          <p class="text-xs text-zinc-100 group-hover:text-zinc-300 transition-colors">Export Progress</p>
          <p class="text-[10px] text-zinc-500">Save your data to a JSON file.</p>
        </div>
        <Download class="w-4 h-4 text-zinc-600 group-hover:text-zinc-100 transition-colors" />
      </button>

      <!-- Reset -->
      <div class="pt-10 border-t border-white/5">
        {#if !confirmReset}
          <button 
            onclick={() => confirmReset = true}
            class="flex items-center justify-between w-full text-left group"
          >
            <div class="space-y-1">
              <p class="text-xs text-zinc-100 group-hover:text-zinc-300 transition-colors">Reset Application</p>
              <p class="text-[10px] text-zinc-500">Wipe all local progress.</p>
            </div>
            <Trash2 class="w-4 h-4 text-zinc-600 group-hover:text-zinc-100 transition-colors" />
          </button>
        {:else}
          <div class="flex items-center justify-between w-full">
            <p class="text-[10px] text-zinc-100 font-bold uppercase tracking-widest">Confirm?</p>
            <div class="flex gap-6">
              <button onclick={resetData} class="text-[10px] text-white hover:underline underline-offset-4">Yes, Reset</button>
              <button onclick={() => confirmReset = false} class="text-[10px] text-zinc-500 hover:text-zinc-300">Cancel</button>
            </div>
          </div>
        {/if}
      </div>
    </div>

  </div>
</div>