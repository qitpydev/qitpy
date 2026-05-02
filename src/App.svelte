<!-- src/App.svelte — Root layout -->
<script>
  import Sidebar from './components/Sidebar.svelte';
  import News from './pages/News.svelte';
  import AboutMe from './pages/AboutMe.svelte';

  let activeTab = 'news';
</script>

<style>
  /* ═══════════════════════════════════════════
     CYBERPUNK THEME — Global Body Styles
     ═══════════════════════════════════════════ */

  :global(body) {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    margin: 0;
    padding: 0;
    background: #050510;
    color: #c0c8e8;
    overflow-x: hidden;
    min-height: 100vh;
    position: relative;
  }

  /* Scanlines + neon glow overlay */
  :global(body::before) {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 245, 255, 0.012) 2px,
        rgba(0, 245, 255, 0.012) 4px
      ),
      radial-gradient(ellipse at 50% 0%, rgba(0, 245, 255, 0.08) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 80%, rgba(255, 0, 110, 0.06) 0%, transparent 50%),
      radial-gradient(ellipse at 20% 60%, rgba(0, 245, 255, 0.04) 0%, transparent 40%);
    pointer-events: none;
    z-index: 0;
  }

  :global(*) {
    position: relative;
    z-index: 1;
  }

  /* ── Layout shell ── */
  .app-shell {
    display: flex;
    min-height: 100vh;
  }

  /* Offset for the fixed 220px sidebar */
  .content-area {
    margin-left: 220px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
  }

  @media (max-width: 768px) {
    .content-area {
      margin-left: 0;
    }
  }
</style>

<div class="app-shell">
  <Sidebar bind:activeTab />

  <div class="content-area">
    {#if activeTab === 'news'}
      <News />
    {:else if activeTab === 'aboutme'}
      <AboutMe />
    {/if}
  </div>
</div>
