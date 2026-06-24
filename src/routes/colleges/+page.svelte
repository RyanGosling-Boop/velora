<!-- src/routes/colleges/+page.svelte -->
<script lang="ts">
  import { Plus, Trash2, ExternalLink, ChevronDown, Check } from 'lucide-svelte';
  import { Switch } from "bits-ui";

  interface College {
    id: number;
    name: string;
    status: 'Reach' | 'Target' | 'Safety';
    cost: string;
    avgGpa: string;
    avgTest: string;
    testOptional: boolean;
    url: string;
  }

  const statusOptions = [
    { value: "Reach", label: "Reach", color: "text-red-400", bg: "hover:bg-red-500/10" },
    { value: "Target", label: "Target", color: "text-yellow-400", bg: "hover:bg-yellow-500/10" },
    { value: "Safety", label: "Safety", color: "text-emerald-400", bg: "hover:bg-emerald-500/10" },
  ] as const;

  let colleges = $state<College[]>([
    { id: 1, name: 'Stanford University', status: 'Reach', cost: '$82,412', avgGpa: '3.96', avgTest: '1540', testOptional: true, url: 'https://stanford.edu' },
    { id: 2, name: 'University of Florida', status: 'Target', cost: '$28,210', avgGpa: '3.90', avgTest: '1380', testOptional: false, url: 'https://ufl.edu' },
  ]);

  // Track which row has its status dropdown open
  let openDropdownId = $state<number | null>(null);

  function addRow() {
    colleges.push({
      id: Date.now(),
      name: '',
      status: 'Target',
      cost: '',
      avgGpa: '',
      avgTest: '',
      testOptional: true,
      url: ''
    });
  }

  function removeRow(id: number) {
    colleges = colleges.filter(c => c.id !== id);
  }

  function toggleDropdown(id: number, e: MouseEvent) {
    e.stopPropagation();
    openDropdownId = openDropdownId === id ? null : id;
  }

  function selectStatus(id: number, status: 'Reach' | 'Target' | 'Safety') {
    const index = colleges.findIndex(c => c.id === id);
    if (index !== -1) colleges[index].status = status;
    openDropdownId = null;
  }

  function getStatusColor(status: string) {
    return statusOptions.find(opt => opt.value === status)?.color || "text-zinc-400";
  }

  // Close dropdown when clicking anywhere else
  if (typeof window !== 'undefined') {
    window.onclick = () => (openDropdownId = null);
  }
</script>

<div class="h-full w-full flex flex-col bg-black text-zinc-300">
  <!-- Header -->
  <div class="px-6 py-5 border-b border-zinc-800 flex justify-between items-center bg-black">
    <div>
      <h1 class="text-lg font-bold text-white tracking-tight">University Spreadsheet</h1>
      <p class="text-[10px] text-zinc-500 font-mono uppercase tracking-[0.2em] mt-0.5">Application tracker</p>
    </div>
    <button 
      onclick={addRow}
      class="h-8 px-4 bg-white hover:bg-zinc-200 text-black text-[11px] font-bold rounded-sm flex items-center gap-2 transition-all active:scale-95"
    >
      <Plus class="w-3.5 h-3.5" strokeWidth={3} />
      Add row
    </button>
  </div>

  <!-- Spreadsheet -->
  <div class="flex-1 overflow-auto bg-black">
    <table class="w-full border-separate border-spacing-0 table-fixed min-w-[1000px]">
      <thead>
        <tr class="bg-zinc-950">
          <th class="w-[30%] sticky top-0 z-20 py-3 px-4 text-left text-[10px] font-mono uppercase text-zinc-500 border-b border-r border-zinc-800 bg-zinc-950">College name</th>
          <th class="w-[14%] sticky top-0 z-20 py-3 px-4 text-left text-[10px] font-mono uppercase text-zinc-500 border-b border-r border-zinc-800 bg-zinc-950">Status</th>
          <th class="w-[12%] sticky top-0 z-20 py-3 px-4 text-left text-[10px] font-mono uppercase text-zinc-500 border-b border-r border-zinc-800 bg-zinc-950">Est. cost</th>
          <th class="w-[10%] sticky top-0 z-20 py-3 px-4 text-left text-[10px] font-mono uppercase text-zinc-500 border-b border-r border-zinc-800 bg-zinc-950">Avg GPA</th>
          <th class="w-[10%] sticky top-0 z-20 py-3 px-4 text-left text-[10px] font-mono uppercase text-zinc-500 border-b border-r border-zinc-800 bg-zinc-950">Avg Test</th>
          <th class="w-[10%] sticky top-0 z-20 py-3 px-4 text-center text-[10px] font-mono uppercase text-zinc-500 border-b border-r border-zinc-800 bg-zinc-950">Test opt</th>
          <th class="w-[14%] sticky top-0 z-20 py-3 px-4 text-left text-[10px] font-mono uppercase text-zinc-500 border-b border-zinc-800 bg-zinc-950">Website</th>
        </tr>
      </thead>
      <tbody>
        {#each colleges as college (college.id)}
          <tr class="group relative hover:bg-zinc-900/40 transition-colors">
            <!-- College Name -->
            <td class="p-0 border-b border-r border-zinc-800">
              <input 
                bind:value={college.name} 
                class="w-full h-11 bg-transparent px-4 text-[13px] outline-none text-zinc-200 focus:bg-zinc-900/50"
                placeholder="University name..."
              />
            </td>
            
            <!-- Custom Status Dropdown -->
            <td class="p-0 border-b border-r border-zinc-800 relative overflow-visible">
              <button 
                onclick={(e) => toggleDropdown(college.id, e)}
                class="w-full h-11 flex items-center justify-between px-4 text-[12px] font-medium outline-none hover:bg-zinc-900/50 transition-colors"
              >
                <span class={getStatusColor(college.status)}>{college.status}</span>
                <ChevronDown class="w-3.5 h-3.5 text-zinc-600 transition-transform {openDropdownId === college.id ? 'rotate-180' : ''}" />
              </button>

              {#if openDropdownId === college.id}
                <div 
                  class="absolute left-0 top-[100%] w-full z-50 bg-zinc-950 border border-zinc-800 rounded-md shadow-2xl p-1 overflow-hidden animate-in fade-in zoom-in-95 duration-100"
                  onclick={(e) => e.stopPropagation()}
                >
                  {#each statusOptions as opt}
                    <button 
                      onclick={() => selectStatus(college.id, opt.value)}
                      class="w-full flex items-center justify-between px-3 py-2 text-[12px] rounded-sm transition-colors {opt.bg}"
                    >
                      <span class={opt.color}>{opt.label}</span>
                      {#if college.status === opt.value}
                        <Check class="w-3 h-3 text-white" />
                      {/if}
                    </button>
                  {/each}
                </div>
              {/if}
            </td>

            <!-- Cost -->
            <td class="p-0 border-b border-r border-zinc-800">
              <input 
                bind:value={college.cost} 
                class="w-full h-11 bg-transparent px-4 text-[12px] outline-none font-mono text-zinc-400"
                placeholder="—"
              />
            </td>

            <!-- GPA -->
            <td class="p-0 border-b border-r border-zinc-800">
              <input 
                bind:value={college.avgGpa} 
                class="w-full h-11 bg-transparent px-4 text-[12px] outline-none font-mono text-zinc-100"
                placeholder="0.00"
              />
            </td>

            <!-- Test Score -->
            <td class="p-0 border-b border-r border-zinc-800">
              <input 
                bind:value={college.avgTest} 
                class="w-full h-11 bg-transparent px-4 text-[12px] outline-none font-mono text-zinc-400"
                placeholder="0"
              />
            </td>

            <!-- Test Optional (Bits Switch) -->
            <td class="p-0 border-b border-r border-zinc-800">
              <div class="w-full h-11 flex items-center justify-center">
                <Switch.Root
                  bind:checked={college.testOptional}
                  class="inline-flex h-4 w-8 shrink-0 cursor-pointer items-center rounded-full border border-zinc-700 transition-colors focus-visible:outline-none data-[state=checked]:bg-emerald-600 data-[state=unchecked]:bg-zinc-900"
                >
                  <Switch.Thumb
                    class="pointer-events-none block h-2.5 w-2.5 rounded-full bg-white shadow-lg transition-transform data-[state=checked]:translate-x-[16px] data-[state=unchecked]:translate-x-[3px]"
                  />
                </Switch.Root>
              </div>
            </td>

            <!-- Website & Floating Delete -->
            <td class="p-0 border-b border-zinc-800 relative">
              <div class="flex items-center w-full h-11 px-3 group/cell">
                <input 
                  bind:value={college.url} 
                  class="flex-1 min-w-0 bg-transparent text-[10px] text-zinc-500 outline-none truncate mr-12"
                  placeholder="URL..."
                />
                
                <!-- Action Group: Absolute right, only shows on row hover -->
                <div class="absolute right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  {#if college.url}
                    <a href={college.url} target="_blank" class="p-1.5 hover:bg-zinc-800 rounded text-zinc-500 hover:text-white transition-colors">
                      <ExternalLink class="w-3.5 h-3.5" />
                    </a>
                  {/if}
                  <button 
                    onclick={() => removeRow(college.id)}
                    class="p-1.5 hover:bg-red-500/10 rounded text-zinc-600 hover:text-red-500 transition-colors"
                  >
                    <Trash2 class="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style>
  /* Fix for intersection dots: use solid hex */
  td, th {
    border-color: #27272a; 
  }

  /* Thin scrollbar */
  .overflow-auto::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  .overflow-auto::-webkit-scrollbar-thumb {
    background: #27272a;
    border-radius: 10px;
  }
</style>