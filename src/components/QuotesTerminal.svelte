<script>
  let quotesRevealed = false;
  let dotSequence = [];
  let quotesInput = '';

  const SECRET = '183492761';

  function handleDotClick(color) {
    const code = ['red', 'green', 'yellow'];
    dotSequence = [...dotSequence, color];
    if (dotSequence.length > code.length) dotSequence = dotSequence.slice(-code.length);
    if (dotSequence.length === code.length && dotSequence.every((c, i) => c === code[i])) {
      quotesRevealed = !quotesRevealed;
      dotSequence = [];
    }
  }

  function checkQuotesPassword() {
    if (quotesInput === SECRET) quotesRevealed = true;
    quotesInput = '';
  }
</script>

<style>
  .terminal-section {
    background: rgba(0, 5, 20, 0.85);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(0, 245, 255, 0.2);
    padding: 2.5rem;
    margin: 3rem 0;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 245, 255, 0.06);
    position: relative;
  }

  .terminal-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(0, 245, 255, 0.12);
  }

  .terminal-dots {
    display: flex;
    gap: 8px;
    margin-right: 1rem;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .dot:active {
    transform: scale(0.8);
  }

  .dot.red { background: #ff006e; box-shadow: 0 0 6px rgba(255, 0, 110, 0.7); }
  .dot.yellow { background: #f7ff00; box-shadow: 0 0 6px rgba(247, 255, 0, 0.7); }
  .dot.green { background: #00f5ff; box-shadow: 0 0 6px rgba(0, 245, 255, 0.7); }

  .terminal-title {
    color: #00f5ff;
    font-size: 0.85rem;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 500;
  }

  .section-title {
    color: #c0c8e8;
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 300;
    letter-spacing: 1px;
    font-style: italic;
  }

  .quotes-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .quotes-list li {
    color: #8892b0;
    margin-bottom: 0.8rem;
    padding: 0.5rem 0 0.5rem 2.5rem;
    position: relative;
    transition: all 0.3s ease;
    border-left: 2px solid transparent;
    border-radius: 0;
    font-weight: 400;
  }

  .quotes-list li::before {
    content: '›';
    position: absolute;
    left: 0.8rem;
    color: #00f5ff;
    font-weight: 600;
    font-size: 1.2rem;
  }

  .quotes-list li:hover {
    color: #e0e8ff;
    transform: translateX(8px);
    border-left-color: #00f5ff;
    background: rgba(0, 245, 255, 0.04);
    text-shadow: 0 0 8px rgba(0, 245, 255, 0.2);
  }

  .quotes-collapsed {
    padding-bottom: 1rem !important;
  }

  .quotes-collapsed .terminal-header {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  .terminal-locked {
    margin-left: auto;
    font-size: 0.7rem;
    font-family: 'JetBrains Mono', monospace;
    color: #ff006e;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-shadow: 0 0 8px rgba(255, 0, 110, 0.5);
  }

  .terminal-lock-row {
    display: flex;
    justify-content: center;
    padding: 0.75rem 0 0.5rem;
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

  .quotes-content {
    animation: quotesReveal 0.5s ease-out;
  }

  @keyframes quotesReveal {
    from { opacity: 0; max-height: 0; transform: translateY(-10px); }
    to { opacity: 1; max-height: 800px; transform: translateY(0); }
  }
</style>

<div class="terminal-section" class:quotes-collapsed={!quotesRevealed}>
  <div class="terminal-header">
    <div class="terminal-dots">
      <button type="button" class="dot red" aria-label="red dot" on:click={() => handleDotClick('red')}></button>
      <button type="button" class="dot yellow" aria-label="yellow dot" on:click={() => handleDotClick('yellow')}></button>
      <button type="button" class="dot green" aria-label="green dot" on:click={() => handleDotClick('green')}></button>
    </div>
    <div class="terminal-title">~/personal/quotes.txt</div>
    {#if !quotesRevealed}
      <div class="terminal-locked">locked</div>
    {/if}
  </div>
  {#if !quotesRevealed}
    <div class="terminal-lock-row">
      <input
        type="password"
        class="lock-input"
        placeholder="enter password"
        bind:value={quotesInput}
        on:keydown={(e) => e.key === 'Enter' && checkQuotesPassword()}
      />
    </div>
  {/if}

  {#if quotesRevealed}
    <div class="quotes-content">
      <div class="section-title">Just quotes for myself, but I hope it helps you too.</div>
      <ul class="quotes-list">
        <li>Do everything with the love, and the best.</li>
        <li>Keep mind relax, stress will destroy us by time.</li>
        <li>Keep update, knowledge is power.</li>
        <li>Change your posture, change your attitude.</li>
        <li>Sleep enough before doing anything.</li>
        <li>Routines, busy-ness and hope matter a lot.</li>
        <li>Proactive when needed.</li>
        <li>Have a purpose at least in each period of life.</li>
        <li>Find the fun in what you're doing.</li>
        <li>Balancing intelligence with emotional control, ensuring that rationality, not just insight, dictates how you act.</li>
        <li>Free your mind from prison with knowledge.</li>
        <li>What you think shapes who you are — it makes you better or worse.</li>
        <li>Unlock your unlimited potential by challenging yourself and recovering to grow day by day.</li>
        <li>Forget the mountain, just upgrade the gear. Fascination leads faster than any plan.</li>
      </ul>
    </div>
  {/if}
</div>
