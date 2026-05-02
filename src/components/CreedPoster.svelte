<script>
  let creedRevealed = false;
  let creedInput = '';

  const SECRET = '183492761';

  function checkCreedPassword() {
    if (creedInput === SECRET) creedRevealed = true;
    creedInput = '';
  }
</script>

<style>
  .poster-section {
    margin: 4rem 0;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
  }

  .section-lock {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
  }

  .lock-input {
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(0, 245, 255, 0.4);
    color: #00f5ff;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    letter-spacing: 3px;
    padding: 0.3rem 0.5rem;
    text-align: center;
    width: 160px;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .lock-input::placeholder {
    color: rgba(0, 245, 255, 0.3);
    letter-spacing: 1px;
  }

  .lock-input:focus {
    border-bottom-color: #00f5ff;
    box-shadow: 0 4px 10px rgba(0, 245, 255, 0.1);
  }

  .poster-wrapper {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }

  .buddha-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: buddhaFloat 5s ease-in-out infinite;
  }

  @keyframes buddhaFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
  }

  .buddha-image {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border: 1px solid rgba(0, 245, 255, 0.3);
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 245, 255, 0.15), 0 0 40px rgba(0, 245, 255, 0.05);
    transition: all 0.4s ease;
    filter: saturate(0.8) brightness(0.9);
  }

  .buddha-image:hover {
    transform: scale(1.08) rotate(3deg);
    box-shadow: 0 0 30px rgba(0, 245, 255, 0.3), 0 0 60px rgba(0, 245, 255, 0.1);
    border-color: #00f5ff;
    filter: saturate(1.1) brightness(1.05);
  }

  .buddha-caption {
    color: #00f5ff;
    font-size: 0.85rem;
    margin-top: 1rem;
    letter-spacing: 2px;
    opacity: 0.7;
    font-weight: 500;
  }

  .poster-frame {
    position: relative;
    background: rgba(0, 5, 20, 0.9);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(0, 245, 255, 0.25);
    padding: 3rem 4rem;
    max-width: 700px;
    border-radius: 4px;
    box-shadow:
      0 0 30px rgba(0, 245, 255, 0.1),
      0 0 60px rgba(0, 245, 255, 0.03),
      inset 0 0 30px rgba(0, 245, 255, 0.02);
    transition: all 0.5s ease;
  }

  .poster-frame:hover {
    box-shadow:
      0 0 40px rgba(0, 245, 255, 0.2),
      0 0 80px rgba(0, 245, 255, 0.06),
      inset 0 0 30px rgba(0, 245, 255, 0.04);
    transform: translateY(-4px);
    border-color: rgba(0, 245, 255, 0.5);
  }

  .poster-corner {
    position: absolute;
    width: 20px;
    height: 20px;
    border-color: rgba(0, 245, 255, 0.5);
    border-style: solid;
  }

  .poster-corner.top-left { top: 12px; left: 12px; border-width: 2px 0 0 2px; border-radius: 0; }
  .poster-corner.top-right { top: 12px; right: 12px; border-width: 2px 2px 0 0; border-radius: 0; }
  .poster-corner.bottom-left { bottom: 12px; left: 12px; border-width: 0 0 2px 2px; border-radius: 0; }
  .poster-corner.bottom-right { bottom: 12px; right: 12px; border-width: 0 2px 2px 0; border-radius: 0; }

  .poster-content {
    text-align: center;
  }

  .poster-title {
    color: #e0e8ff;
    font-size: 1.6rem;
    font-weight: 300;
    letter-spacing: 8px;
    text-transform: uppercase;
    margin-bottom: 2rem;
    position: relative;
    font-family: 'JetBrains Mono', monospace;
    text-shadow: 0 0 20px rgba(0, 245, 255, 0.3);
  }

  .poster-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00f5ff, transparent);
    box-shadow: 0 0 8px rgba(0, 245, 255, 0.5);
  }

  .poster-lines {
    margin: 2rem 0;
  }

  .poster-line {
    color: #8892b0;
    font-size: 1.05rem;
    line-height: 2.2;
    margin: 0;
    padding: 0.4rem 0;
    letter-spacing: 0.5px;
    font-weight: 400;
    border-bottom: 1px solid rgba(0, 245, 255, 0.06);
    transition: all 0.3s ease;
  }

  .poster-line:last-child {
    border-bottom: none;
  }

  .poster-line:hover {
    color: #00f5ff;
    transform: translateX(5px);
    text-shadow: 0 0 10px rgba(0, 245, 255, 0.4);
  }

  .poster-line.highlight {
    color: #e0e8ff;
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  .poster-signature {
    color: #00f5ff;
    font-size: 0.95rem;
    font-style: italic;
    letter-spacing: 2px;
    margin-top: 2rem;
    font-weight: 400;
    text-shadow: 0 0 10px rgba(0, 245, 255, 0.4);
  }

  .poster-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background: radial-gradient(ellipse, rgba(0, 245, 255, 0.04) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    .poster-wrapper {
      flex-direction: column;
      gap: 1.5rem;
    }

    .buddha-container {
      order: -1;
    }

    .buddha-image {
      width: 120px;
      height: 120px;
    }

    .poster-frame {
      padding: 2rem 1.5rem;
      margin: 0 1rem;
    }

    .poster-title {
      font-size: 1.3rem;
      letter-spacing: 5px;
    }

    .poster-line {
      font-size: 0.95rem;
    }

    .poster-line.highlight {
      font-size: 1.05rem;
    }
  }
</style>

<div class="poster-section">
  {#if !creedRevealed}
    <div class="section-lock">
      <input
        type="password"
        class="lock-input"
        placeholder="enter password"
        bind:value={creedInput}
        on:keydown={(e) => e.key === 'Enter' && checkCreedPassword()}
      />
    </div>
  {:else}
  <div class="poster-wrapper">
    <div class="buddha-container">
      <img src="images/06773e5a1bb9cd5d73fb3952b4f3ee9b.jpg" alt="Chill Buddha" class="buddha-image" />
      <div class="buddha-caption">just vibing ☯️</div>
    </div>

    <div class="poster-frame">
      <div class="poster-corner top-left"></div>
      <div class="poster-corner top-right"></div>
      <div class="poster-corner bottom-left"></div>
      <div class="poster-corner bottom-right"></div>

      <div class="poster-content">
        <div class="poster-title">My Creed</div>
        <div class="poster-lines">
          <p class="poster-line">I am the unique, irreplaceable being in this world</p>
          <p class="poster-line">I honor and respect myself alone—not gods or others</p>
          <p class="poster-line">I grow, do no harm, and follow my own path</p>
          <p class="poster-line">All are born and die alike, no one is superior</p>
          <p class="poster-line highlight">I compare myself to no one</p>
        </div>
        <div class="poster-signature">— makeitbetter</div>
      </div>

      <div class="poster-glow"></div>
    </div>
  </div>
  {/if}
</div>
