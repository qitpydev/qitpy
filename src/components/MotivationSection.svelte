<script>
  import { onMount } from 'svelte';
  import { motivationQuotes } from '../data/quotes.js';

  let displayedText = '';
  let isTyping = true;
  let currentQuoteIndex = 0;
  let lightboxSrc = null;
  let lightboxAlt = '';

  function openLightbox(src, alt) {
    lightboxSrc = src;
    lightboxAlt = alt;
  }

  function closeLightbox() {
    lightboxSrc = null;
  }

  function handleLightboxKey(e) {
    if (e.key === 'Escape') closeLightbox();
  }

  onMount(() => {
    const typeQuote = () => {
      const quote = motivationQuotes[currentQuoteIndex];
      const fullText = `"${quote.text}" - ${quote.author}`;

      if (isTyping) {
        if (displayedText.length < fullText.length) {
          displayedText = fullText.slice(0, displayedText.length + 1);
          setTimeout(typeQuote, 50);
        } else {
          isTyping = false;
          setTimeout(typeQuote, 3000);
        }
      } else {
        if (displayedText.length > 0) {
          displayedText = displayedText.slice(0, -1);
          setTimeout(typeQuote, 30);
        } else {
          isTyping = true;
          currentQuoteIndex = (currentQuoteIndex + 1) % motivationQuotes.length;
          setTimeout(typeQuote, 500);
        }
      }
    };
    setTimeout(typeQuote, 2000);
  });
</script>

<style>
  .motivation-section {
    background: rgba(0, 5, 20, 0.85);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(0, 245, 255, 0.2);
    margin: 3rem 0;
    padding: 3rem 2rem;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 245, 255, 0.06);
    position: relative;
    overflow: hidden;
  }

  .motivation-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .motivation-header h2 {
    color: #e0e8ff;
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 6px;
    margin-bottom: 0.5rem;
  }

  .motivation-quote-display {
    background: rgba(0, 245, 255, 0.03);
    border: 1px solid rgba(0, 245, 255, 0.15);
    padding: 2rem;
    margin: 2rem auto;
    max-width: 800px;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    box-shadow: 0 0 15px rgba(0, 245, 255, 0.04), inset 0 0 20px rgba(0, 245, 255, 0.02);
  }

  .quote-text {
    color: #c0c8e8;
    font-size: 1.1rem;
    font-style: italic;
    text-align: center;
    font-weight: 300;
  }

  .cursor {
    color: #00f5ff;
    font-weight: bold;
    animation: cursorBlink 0.8s infinite;
    margin-left: 2px;
    text-shadow: 0 0 8px rgba(0, 245, 255, 0.8);
  }

  @keyframes cursorBlink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  .motivation-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .gif-card {
    position: relative;
    aspect-ratio: 1;
    overflow: hidden;
    border: 1px solid rgba(0, 245, 255, 0.2);
    border-radius: 2px;
    background: #000;
    transition: all 0.4s ease;
    box-shadow: 0 0 10px rgba(0, 245, 255, 0.05);
    /* button reset */
    background: none;
    border: 1px solid rgba(0, 245, 255, 0.2);
    padding: 0;
    cursor: zoom-in;
    /* override none from button reset */
    background: #000;
  }

  .gif-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s ease;
    filter: saturate(0.85) brightness(0.85);
  }

  .gif-card:hover {
    transform: scale(1.03) translateY(-4px);
    border-color: #00f5ff;
    box-shadow: 0 0 25px rgba(0, 245, 255, 0.3), 0 0 50px rgba(0, 245, 255, 0.08);
  }

  .gif-card:hover img {
    filter: saturate(1.3) brightness(1.1);
  }

  /* ── Lightbox ── */
  .lightbox-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.92);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: lb-in 0.2s ease;
  }

  @keyframes lb-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .lightbox-overlay img {
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
    border: 1px solid rgba(0, 245, 255, 0.3);
    box-shadow: 0 0 60px rgba(0, 245, 255, 0.15);
    border-radius: 2px;
    animation: lb-scale 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes lb-scale {
    from { transform: scale(0.85); opacity: 0; }
    to   { transform: scale(1);    opacity: 1; }
  }

  .lightbox-close {
    position: fixed;
    top: 1.25rem;
    right: 1.5rem;
    background: none;
    border: 1px solid rgba(0, 245, 255, 0.4);
    color: #00f5ff;
    font-size: 1.25rem;
    line-height: 1;
    padding: 0.35rem 0.6rem;
    cursor: pointer;
    border-radius: 2px;
    transition: all 0.2s;
  }

  .lightbox-close:hover {
    background: rgba(0, 245, 255, 0.1);
    box-shadow: 0 0 12px rgba(0, 245, 255, 0.3);
  }

  @media (max-width: 768px) {
    .motivation-grid {
      grid-template-columns: 1fr;
    }

    .motivation-header h2 {
      font-size: 1.5rem;
      letter-spacing: 3px;
    }
  }
</style>

<div class="motivation-section">
  <div class="motivation-header">
    <h2>✨ Once Upon a Time ✨</h2>
  </div>

  <div class="motivation-quote-display">
    <span class="quote-text">{displayedText}</span>
    <span class="cursor">|</span>
  </div>

  <div class="motivation-grid">
    <button type="button" class="gif-card" on:click={() => openLightbox('images/medium-mike-tyson-boxer-wallpaper-poster-print-poster-on-13x19-original-imagc5ytjxqtnfur.webp', 'Mike Tyson')}>
      <img src="images/medium-mike-tyson-boxer-wallpaper-poster-print-poster-on-13x19-original-imagc5ytjxqtnfur.webp" alt="Mike Tyson" />
    </button>
    <button type="button" class="gif-card" on:click={() => openLightbox('images/cyberpunk.jpeg', 'Cyberpunk')}>
      <img src="images/cyberpunk.jpeg" alt="Cyberpunk" />
    </button>
    <button type="button" class="gif-card" on:click={() => openLightbox('images/Rosa_Walton_I_Really_Want_to_Stay_at_Your_House.jpg', 'Edgerunners')}>
      <img src="images/Rosa_Walton_I_Really_Want_to_Stay_at_Your_House.jpg" alt="Edgerunners" />
    </button>
    <button type="button" class="gif-card" on:click={() => openLightbox('images/mad.jpg', 'Motivation')}>
      <img src="images/mad.jpg" alt="Motivation" />
    </button>
    <button type="button" class="gif-card" on:click={() => openLightbox('images/unnamed.png', 'Motivation')}>
      <img src="images/unnamed.png" alt="Motivation" />
    </button>
    <button type="button" class="gif-card" on:click={() => openLightbox('images/ranger_training.png', 'Ranger Training')}>
      <img src="images/ranger_training.png" alt="Ranger Training" />
    </button>
    <button type="button" class="gif-card" on:click={() => openLightbox('images/fearless.png', 'Fearless')}>
      <img src="images/fearless.png" alt="Fearless" />
    </button>
  </div>
</div>

{#if lightboxSrc}
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div class="lightbox-overlay" on:click={closeLightbox} on:keydown={handleLightboxKey} role="dialog" aria-modal="true" tabindex="-1">
    <div on:click|stopPropagation role="presentation"><img src={lightboxSrc} alt={lightboxAlt} /></div>
    <button class="lightbox-close" on:click={closeLightbox} aria-label="Close">✕</button>
  </div>
{/if}
