<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { ArrowRight } from 'lucide-svelte';
  import { fly, fade } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import BgDarkTiles from '../components/BgDarkTiles.svelte';
</script>

<div class="h-full w-full bg-black text-zinc-100 overflow-hidden flex flex-col relative select-none">
  
  <!-- Static Grid Background -->
  <BgDarkTiles />

  <!-- Vignette Mask -->
  <div class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.85)_100%)] z-10"></div>
  
  <!-- Floating Logo -->
  <div 
    in:fade={{ duration: 1500, delay: 200 }}
    class="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-3.5 z-20 select-none"
  >
    <div class="h-5 w-5 bg-zinc-100 text-black flex items-center justify-center font-bold text-xs rounded-sm">
      V
    </div>
    <span class="text-sm font-semibold tracking-tight text-white">Velora</span>
  </div>

  <!-- Main Workspace -->
  <main class="flex-1 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 lg:px-16 select-text relative z-20 min-h-0 w-full gap-8 lg:gap-12">
    
    <!-- Left Column: Staggered slow entrance -->
    <div class="w-full md:w-[35%] max-w-sm space-y-6 md:space-y-8 my-auto py-8 shrink-0 md:shrink">
      
      <div in:fly={{ y: 30, duration: 1200, delay: 400, easing: cubicOut }}>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-zinc-100 leading-[0.95] select-none">
          Academic<br />
          guidance.<br />
          Decentralized.
        </h1>
      </div>

      <div in:fly={{ y: 20, duration: 1200, delay: 600, easing: cubicOut }}>
        <p class="text-xs md:text-sm text-zinc-400 leading-relaxed select-text">
          Velora is an open-access roadmap system for independent student planning. Establish target benchmarks, structure extracurricular activities, and track college readiness on a completely free, local-first platform.
        </p>
      </div>

      <div 
        in:fly={{ y: 20, duration: 1200, delay: 800, easing: cubicOut }}
        class="flex gap-4 justify-start select-none"
      >
        <a 
          href="/onboarding" 
          class="h-10 px-6 bg-white hover:bg-zinc-200 text-black font-semibold text-xs rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg"
        >
          Sign up
          <ArrowRight class="w-3.5 h-3.5" />
        </a>
        <a 
          href="/map" 
          class="h-10 px-6 bg-zinc-950 hover:bg-zinc-900 border border-white/5 text-zinc-300 font-semibold text-xs rounded-lg flex items-center justify-center transition-all"
        >
          Login
        </a>
      </div>
    </div>

    <!-- Right Column: Safari Browser Mockup -->
    <div 
      in:fly={{ y: 40, duration: 1600, delay: 500, easing: cubicOut }}
      class="hidden md:flex h-full md:w-[65%] items-center justify-center relative py-8"
    >
      <div 
        class="relative w-full max-w-4xl aspect-[16/10] bg-zinc-950 border-2 border-zinc-800 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col select-none"
      >
        <!-- Safari Header Bar -->
        <div class="h-10 w-full bg-zinc-900 border-b border-white/5 flex items-center justify-between px-4 shrink-0">
          <div class="flex items-center gap-1.5 w-1/4">
            <div class="h-3 w-3 rounded-full bg-[#ff5f56]"></div>
            <div class="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
            <div class="h-3 w-3 rounded-full bg-[#27c93f]"></div>
          </div>
          
          <div class="flex items-center justify-center gap-1.5 bg-zinc-950 border border-white/5 rounded-md w-48 lg:w-56 h-6 px-3 text-[10px] text-zinc-500 font-mono">
            <svg class="w-2.5 h-2.5 text-zinc-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0110 0v4"/>
            </svg>
            <span class="truncate">velora.com/map</span>
          </div>
          
          <div class="w-1/4"></div>
        </div>

        <!-- Safari Viewport -->
        <div class="flex-1 bg-black relative overflow-hidden">
          <!-- 
            FIXED GRID: Using a CSS background instead of a loop. 
            This ensures it covers the entire area smoothly regardless of zoom/size.
          -->
          <div class="absolute inset-0 opacity-20 inner-grid-pattern"></div>
          
          <!-- Optional: subtle inner glow to add depth to the "screen" -->
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
        </div>
      </div>
    </div>
  </main>
</div>

<style>
  /* 
    This creates a sharp, clean grid that extends infinitely 
    without needing 150+ DOM elements.
  */
  .inner-grid-pattern {
    background-size: 30px 30px;
    background-image: 
      linear-gradient(to right, #18181b 1px, transparent 1px),
      linear-gradient(to bottom, #18181b 1px, transparent 1px);
  }
</style>