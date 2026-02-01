<!-- src/App.svelte — Beatless Theme -->
<script>
  import { onMount } from 'svelte';

  let terminalText = '';
  const bootSequence = [
    '[hIE] Initializing...',
    '[hIE] Behavioral model loaded...',
    '[hIE] Owner registration: confirmed',
    'ACCESS GRANTED — Welcome, visitor.',
    '> _ <'
  ];

  // Motivation quotes
  const motivationQuotes = [
    { text: "Discipline is doing what you hate to do, but doing it like you love it.", author: "Mike Tyson" },
    { text: "Everyone has a plan until they get punched in the mouth.", author: "Mike Tyson" },
    { text: "I'm not the same person I was when I bit that guy's ear off.", author: "Mike Tyson" },
    { text: "The pain you feel today will be the strength you feel tomorrow.", author: "Unknown" },
    { text: "Your only limit is your mind.", author: "Unknown" },
    { text: "Be brutal with your effort, patient with your results.", author: "Unknown" },
    { text: "Champions aren't made in gyms. Champions are made from something deep inside.", author: "Muhammad Ali" },
    { text: "Pain is temporary. Quitting lasts forever.", author: "Lance Armstrong" },
    { text: "Any sufficiently advanced technology is indistinguishable from magic.", author: "Arthur C. Clarke" }
  ];

  let currentQuoteIndex = 0;
  let displayedText = '';
  let isTyping = true;

  onMount(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < bootSequence.length) {
        terminalText += bootSequence[i] + '\n';
        i++;
        setTimeout(typeWriter, 800);
      }
    };
    setTimeout(typeWriter, 1000);

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
  /* ═══════════════════════════════════════════
     BEATLESS THEME — Elegant hIE Aesthetic
     ═══════════════════════════════════════════ */

  :global(body) {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #f8f9fc 0%, #eef0f7 50%, #f0f2fa 100%);
    color: #2a2a3a;
    overflow-x: hidden;
    min-height: 100vh;
    position: relative;
  }

  /* Subtle geometric background */
  :global(body::before) {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      radial-gradient(ellipse at 50% 0%, rgba(74, 124, 247, 0.06) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 80%, rgba(232, 160, 191, 0.05) 0%, transparent 40%),
      radial-gradient(ellipse at 20% 60%, rgba(74, 124, 247, 0.03) 0%, transparent 40%);
    pointer-events: none;
    z-index: 0;
  }

  :global(*) {
    position: relative;
    z-index: 1;
  }

  /* ── hIE Interface Panel (Boot Terminal) ── */
  .terminal-boot {
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(74, 124, 247, 0.25);
    padding: 16px 20px;
    font-size: 12px;
    font-family: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
    max-width: 300px;
    white-space: pre-line;
    border-radius: 12px;
    box-shadow:
      0 4px 24px rgba(74, 124, 247, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.05);
    color: #4a7cf7;
    z-index: 100;
  }

  /* ── Header ── */
  header {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(238, 240, 247, 0.9) 100%);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(74, 124, 247, 0.15);
    padding: 4rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #4a7cf7, #e8a0bf, #4a7cf7, transparent);
    background-size: 200% 100%;
    animation: shimmer 6s linear infinite;
  }

  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  .main-quote {
    color: #2a2a3a;
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 300;
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
    letter-spacing: 0.5px;
  }

  .main-quote .attribution {
    display: block;
    margin-top: 0.8rem;
    font-size: 0.9rem;
    color: #4a7cf7;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 2px;
  }

  /* ── Main ── */
  main {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* ── Profile Section ── */
  .profile-section {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
    align-items: start;
  }

  .profile-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(74, 124, 247, 0.15);
    padding: 2.5rem 2rem;
    text-align: center;
    border-radius: 16px;
    box-shadow:
      0 4px 24px rgba(74, 124, 247, 0.08),
      0 1px 3px rgba(0, 0, 0, 0.04);
    transition: all 0.4s ease;
  }

  .profile-card:hover {
    box-shadow:
      0 8px 40px rgba(74, 124, 247, 0.15),
      0 2px 6px rgba(0, 0, 0, 0.06);
    transform: translateY(-4px);
  }

  img.profile {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid rgba(74, 124, 247, 0.3);
    margin-bottom: 1.2rem;
    transition: all 0.4s ease;
    box-shadow: 0 4px 20px rgba(74, 124, 247, 0.15);
    object-fit: cover;
  }

  img.profile:hover {
    transform: scale(1.08);
    border-color: #4a7cf7;
    box-shadow: 0 8px 30px rgba(74, 124, 247, 0.25);
  }

  .name {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1a1a2e;
    margin: 1rem 0 0.5rem;
    letter-spacing: 1px;
  }

  .role {
    color: #4a7cf7;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  /* ── Bio Section ── */
  .bio-section {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(74, 124, 247, 0.15);
    padding: 2.5rem;
    line-height: 1.8;
    border-radius: 16px;
    box-shadow:
      0 4px 24px rgba(74, 124, 247, 0.08),
      0 1px 3px rgba(0, 0, 0, 0.04);
    position: relative;
  }

  .bio-section::before {
    content: 'ABOUT';
    position: absolute;
    top: -10px;
    left: 24px;
    background: linear-gradient(135deg, #f8f9fc, #eef0f7);
    padding: 2px 12px;
    color: #4a7cf7;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 3px;
    border-radius: 4px;
  }

  .bio-section h3 {
    color: #1a1a2e;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .bio-section p {
    margin-bottom: 1rem;
    color: #555568;
    font-weight: 400;
  }

  /* ── Game of Life Section ── */
  .recipe-section {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(74, 124, 247, 0.15);
    padding: 3rem 2rem;
    margin: 3rem 0;
    text-align: center;
    border-radius: 20px;
    box-shadow: 0 4px 24px rgba(74, 124, 247, 0.08);
    position: relative;
    overflow: hidden;
  }

  .recipe-header h2 {
    color: #1a1a2e;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    letter-spacing: 2px;
  }

  .recipe-subtitle {
    color: #4a7cf7;
    font-size: 0.95rem;
    letter-spacing: 2px;
    margin-bottom: 2rem;
    font-weight: 400;
  }

  .level-system {
    position: relative;
  }

  .level-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .level-bar {
    width: 200px;
    height: 8px;
    background: rgba(74, 124, 247, 0.1);
    border: 1px solid rgba(74, 124, 247, 0.2);
    border-radius: 4px;
    overflow: hidden;
  }

  .level-progress {
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, #4a7cf7, #e8a0bf, #4a7cf7);
    background-size: 200% 100%;
    animation: progressShift 4s linear infinite;
    border-radius: 4px;
  }

  @keyframes progressShift {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }

  .level-text {
    color: #4a7cf7;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 3px;
  }

  .cycle-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .cycle-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .cycle-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    padding: 1.2rem 1.2rem;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(74, 124, 247, 0.15);
    min-width: 130px;
    transition: all 0.3s ease;
    position: relative;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  }

  .cycle-step:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(74, 124, 247, 0.15);
    border-color: #4a7cf7;
  }

  .cycle-step .step-number {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 24px;
    height: 24px;
    background: #4a7cf7;
    color: #fff;
    font-size: 0.75rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .cycle-step .step-icon {
    font-size: 1.8rem;
  }

  .cycle-step .step-text {
    color: #1a1a2e;
    font-weight: 600;
    font-size: 0.85rem;
    letter-spacing: 1px;
  }

  .cycle-step .step-desc {
    color: #888;
    font-size: 0.7rem;
    text-align: center;
  }

  .cycle-step.damage {
    border-color: rgba(232, 160, 191, 0.4);
    background: rgba(232, 160, 191, 0.08);
  }

  .cycle-step.damage .step-number {
    background: #e8a0bf;
  }

  .cycle-step.growth {
    border-color: rgba(76, 175, 80, 0.3);
    background: rgba(76, 175, 80, 0.06);
  }

  .cycle-step.growth .step-number {
    background: #4caf50;
  }

  .cycle-step.next-level {
    border-color: rgba(74, 124, 247, 0.3);
    background: rgba(74, 124, 247, 0.06);
    animation: softGlow 3s ease-in-out infinite alternate;
  }

  .cycle-step.next-level .step-number {
    background: #1a1a2e;
  }

  @keyframes softGlow {
    0% { box-shadow: 0 2px 12px rgba(74, 124, 247, 0.08); }
    100% { box-shadow: 0 4px 24px rgba(74, 124, 247, 0.2); }
  }

  .cycle-arrow {
    color: #4a7cf7;
    font-size: 1.3rem;
    font-weight: 300;
    opacity: 0.6;
    animation: arrowPulse 2s ease-in-out infinite;
  }

  @keyframes arrowPulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.8; }
  }

  .loop-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    background: rgba(74, 124, 247, 0.05);
    border: 1px solid rgba(74, 124, 247, 0.12);
    border-radius: 12px;
  }

  .loop-arrow {
    font-size: 1.5rem;
    color: #4a7cf7;
    animation: loopSpin 4s linear infinite;
  }

  @keyframes loopSpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .loop-text {
    color: #555568;
    font-size: 0.9rem;
    font-style: italic;
  }

  /* ── Motivation Section ── */
  .motivation-section {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(74, 124, 247, 0.15);
    margin: 3rem 0;
    padding: 3rem 2rem;
    border-radius: 20px;
    box-shadow: 0 4px 24px rgba(74, 124, 247, 0.08);
    position: relative;
    overflow: hidden;
  }

  .motivation-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .motivation-header h2 {
    color: #1a1a2e;
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 6px;
    margin-bottom: 0.5rem;
  }

  .motivation-quote-display {
    background: rgba(74, 124, 247, 0.04);
    border: 1px solid rgba(74, 124, 247, 0.12);
    padding: 2rem;
    margin: 2rem auto;
    max-width: 800px;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
  }

  .quote-text {
    color: #2a2a3a;
    font-size: 1.1rem;
    font-style: italic;
    text-align: center;
    font-weight: 300;
  }

  .cursor {
    color: #4a7cf7;
    font-weight: bold;
    animation: cursorBlink 0.8s infinite;
    margin-left: 2px;
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
    border: 1px solid rgba(74, 124, 247, 0.15);
    border-radius: 14px;
    background: #fff;
    transition: all 0.4s ease;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .gif-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s ease;
  }

  .gif-card:hover {
    transform: scale(1.03) translateY(-4px);
    border-color: #4a7cf7;
    box-shadow: 0 12px 40px rgba(74, 124, 247, 0.2);
  }

  .gif-card:hover img {
    filter: saturate(1.2) brightness(1.05);
  }

  /* ── Hanging Scroll ── */
  .scroll-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 2rem;
    margin: 3rem 0;
  }

  .hanging-scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: scrollSway 6s ease-in-out infinite;
    filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.12));
  }

  @keyframes scrollSway {
    0%, 100% { transform: rotate(-1deg); }
    50% { transform: rotate(1deg); }
  }

  .scroll-rod {
    width: 120px;
    height: 10px;
    background: linear-gradient(180deg, #8b4513 0%, #654321 50%, #4a3520 100%);
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    position: relative;
  }

  .scroll-rod.top::before,
  .scroll-rod.top::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 16px;
    background: linear-gradient(180deg, #d4af37 0%, #b8960c 50%, #8b7500 100%);
    border-radius: 2px;
  }

  .scroll-rod.top::before { left: 4px; }
  .scroll-rod.top::after { right: 4px; }

  .scroll-body {
    width: auto;
    background: linear-gradient(180deg, #f5f5dc 0%, #faf0e6 10%, #f5f5dc 50%, #faf0e6 90%, #f5f5dc 100%);
    border-left: 3px solid #8b4513;
    border-right: 3px solid #8b4513;
    padding: 1rem 1.2rem;
    position: relative;
  }

  .scroll-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.1rem;
  }

  .scroll-text.two-col {
    flex-direction: row;
    gap: 1rem;
  }

  .scroll-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.1rem;
  }

  .scroll-text span {
    font-family: 'Noto Serif SC', 'SimSun', serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a1a1a;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    line-height: 1.2;
  }

  .scroll-text span:hover {
    color: #8b0000;
  }

  .scroll-rod.bottom {
    position: relative;
  }

  .scroll-tassel {
    width: 4px;
    height: 40px;
    background: linear-gradient(180deg, #8b4513, #654321);
    position: relative;
    margin-top: -2px;
  }

  .scroll-tassel::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 30px;
    background: linear-gradient(180deg, #e8a0bf 0%, #c47a9e 100%);
    clip-path: polygon(50% 0%, 100% 20%, 80% 100%, 20% 100%, 0% 20%);
  }

  .scroll-translation {
    margin-top: 2rem;
    color: #555568;
    font-size: 1rem;
    font-style: italic;
    text-align: center;
    letter-spacing: 1px;
  }

  /* ── Wall Poster / Manifesto ── */
  .poster-section {
    margin: 4rem 0;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
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
    border: 2px solid rgba(74, 124, 247, 0.25);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(74, 124, 247, 0.12);
    transition: all 0.4s ease;
  }

  .buddha-image:hover {
    transform: scale(1.08) rotate(3deg);
    box-shadow: 0 12px 40px rgba(74, 124, 247, 0.2);
    border-color: #4a7cf7;
  }

  .buddha-caption {
    color: #4a7cf7;
    font-size: 0.85rem;
    margin-top: 1rem;
    letter-spacing: 2px;
    opacity: 0.7;
    font-weight: 500;
  }

  .poster-frame {
    position: relative;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(74, 124, 247, 0.2);
    padding: 3rem 4rem;
    max-width: 700px;
    border-radius: 20px;
    box-shadow:
      0 8px 40px rgba(74, 124, 247, 0.1),
      0 2px 6px rgba(0, 0, 0, 0.04);
    transition: all 0.5s ease;
  }

  .poster-frame:hover {
    box-shadow:
      0 12px 50px rgba(74, 124, 247, 0.18),
      0 4px 10px rgba(0, 0, 0, 0.06);
    transform: translateY(-4px);
  }

  .poster-corner {
    position: absolute;
    width: 20px;
    height: 20px;
    border-color: rgba(74, 124, 247, 0.3);
    border-style: solid;
  }

  .poster-corner.top-left { top: 12px; left: 12px; border-width: 2px 0 0 2px; border-radius: 4px 0 0 0; }
  .poster-corner.top-right { top: 12px; right: 12px; border-width: 2px 2px 0 0; border-radius: 0 4px 0 0; }
  .poster-corner.bottom-left { bottom: 12px; left: 12px; border-width: 0 0 2px 2px; border-radius: 0 0 0 4px; }
  .poster-corner.bottom-right { bottom: 12px; right: 12px; border-width: 0 2px 2px 0; border-radius: 0 0 4px 0; }

  .poster-content {
    text-align: center;
  }

  .poster-title {
    color: #1a1a2e;
    font-size: 1.6rem;
    font-weight: 300;
    letter-spacing: 8px;
    text-transform: uppercase;
    margin-bottom: 2rem;
    position: relative;
  }

  .poster-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #4a7cf7, transparent);
  }

  .poster-lines {
    margin: 2rem 0;
  }

  .poster-line {
    color: #555568;
    font-size: 1.05rem;
    line-height: 2.2;
    margin: 0;
    padding: 0.4rem 0;
    letter-spacing: 0.5px;
    font-weight: 400;
    border-bottom: 1px solid rgba(74, 124, 247, 0.06);
    transition: all 0.3s ease;
  }

  .poster-line:last-child {
    border-bottom: none;
  }

  .poster-line:hover {
    color: #4a7cf7;
    transform: translateX(5px);
  }

  .poster-line.highlight {
    color: #1a1a2e;
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  .poster-signature {
    color: #4a7cf7;
    font-size: 0.95rem;
    font-style: italic;
    letter-spacing: 2px;
    margin-top: 2rem;
    font-weight: 400;
  }

  .poster-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background: radial-gradient(ellipse, rgba(74, 124, 247, 0.04) 0%, transparent 70%);
    pointer-events: none;
  }

  /* ── Quotes Terminal Section ── */
  .terminal-section {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(74, 124, 247, 0.15);
    padding: 2.5rem;
    margin: 3rem 0;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(74, 124, 247, 0.08);
    position: relative;
  }

  .terminal-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(74, 124, 247, 0.1);
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
  }

  .dot.red { background: #e8a0bf; }
  .dot.yellow { background: #f0c878; }
  .dot.green { background: #4a7cf7; }

  .terminal-title {
    color: #4a7cf7;
    font-size: 0.85rem;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 500;
  }

  .section-title {
    color: #1a1a2e;
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
    color: #555568;
    margin-bottom: 0.8rem;
    padding: 0.5rem 0 0.5rem 2.5rem;
    position: relative;
    transition: all 0.3s ease;
    border-left: 2px solid transparent;
    border-radius: 4px;
    font-weight: 400;
  }

  .quotes-list li::before {
    content: '›';
    position: absolute;
    left: 0.8rem;
    color: #4a7cf7;
    font-weight: 600;
    font-size: 1.2rem;
  }

  .quotes-list li:hover {
    color: #1a1a2e;
    transform: translateX(8px);
    border-left-color: #4a7cf7;
    background: rgba(74, 124, 247, 0.04);
  }

  /* ── Footer ── */
  footer {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(16px);
    border-top: 1px solid rgba(74, 124, 247, 0.12);
    color: #555568;
    text-align: center;
    padding: 2rem;
    margin-top: 3rem;
    position: relative;
  }

  footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #4a7cf7, #e8a0bf, #4a7cf7, transparent);
    background-size: 200% 100%;
    animation: shimmer 6s linear infinite;
  }

  footer p {
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 0.9rem;
  }

  .cv-download-btn {
    display: inline-block;
    margin-bottom: 1.2rem;
    padding: 0.7rem 2rem;
    background: linear-gradient(135deg, #4a7cf7, #6c5ce7);
    color: #fff;
    text-decoration: none;
    border-radius: 999px;
    font-size: 0.95rem;
    font-weight: 500;
    letter-spacing: 1px;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 12px rgba(74, 124, 247, 0.25);
  }

  .cv-download-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(74, 124, 247, 0.4);
  }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .profile-section {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    main {
      padding: 1rem;
    }

    .cycle-row {
      flex-direction: column;
      gap: 1rem;
    }

    .cycle-arrow {
      transform: rotate(90deg);
    }

    .cycle-step {
      min-width: 100%;
    }

    .recipe-section {
      padding: 2rem 1rem;
    }

    .loop-indicator {
      flex-direction: column;
      text-align: center;
    }

    .terminal-boot {
      position: relative;
      top: auto;
      right: auto;
      margin: 1rem;
      max-width: 100%;
    }

    .motivation-grid {
      grid-template-columns: 1fr;
    }

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

    .hanging-scroll {
      transform: scale(0.8);
    }

    .motivation-header h2 {
      font-size: 1.5rem;
      letter-spacing: 3px;
    }
  }
</style>


{#if terminalText}
  <div class="terminal-boot">{terminalText}</div>
{/if}

<header>
  <div class="main-quote">
    "Do you trust me even without understanding me?"
    <span class="attribution">— Beatless</span>
  </div>
</header>

<main>
  <div class="profile-section">
    <div class="profile-card">
      <img src="images/avatar_022025.jpeg" alt="Profile Picture" class="profile" />
      <div class="name">Quyet Doan</div>
      <div class="role">DevSecOps Engineer</div>
    </div>

    <div class="bio-section">
      <h3>About Me</h3>
      <p>DevOps → DevSecOps</p>
      <p>Building secure, automated infrastructure. Bridging development, security, and operations — currently deepening my security expertise to deliver reliable and hardened systems at scale.</p>
    </div>
  </div>

  <div class="recipe-section">
    <div class="recipe-header">
      <h2>🎮 Game of Life</h2>
      <p class="recipe-subtitle">Play it right — level up every cycle</p>
    </div>
    <div class="recipe-content">
      <div class="level-system">
        <div class="level-indicator">
          <div class="level-bar">
            <div class="level-progress"></div>
          </div>
          <span class="level-text">LVL ∞</span>
        </div>

        <div class="cycle-container">
          <div class="cycle-row">
            <div class="cycle-step">
              <div class="step-number">1</div>
              <div class="step-icon">⚔️</div>
              <div class="step-text">Challenge</div>
              <div class="step-desc">Face the hard things</div>
            </div>
            <div class="cycle-arrow">→</div>
            <div class="cycle-step damage">
              <div class="step-number">2</div>
              <div class="step-icon">💔</div>
              <div class="step-text">Break</div>
              <div class="step-desc">Get damaged, fail</div>
            </div>
            <div class="cycle-arrow">→</div>
            <div class="cycle-step">
              <div class="step-number">3</div>
              <div class="step-icon">🛌</div>
              <div class="step-text">Recover</div>
              <div class="step-desc">Rest and heal</div>
            </div>
          </div>

          <div class="cycle-row">
            <div class="cycle-step growth">
              <div class="step-number">4</div>
              <div class="step-icon">🌱</div>
              <div class="step-text">Growth</div>
              <div class="step-desc">Adapt and learn</div>
            </div>
            <div class="cycle-arrow">→</div>
            <div class="cycle-step">
              <div class="step-number">5</div>
              <div class="step-icon">⬆️</div>
              <div class="step-text">Level Up</div>
              <div class="step-desc">Become stronger</div>
            </div>
            <div class="cycle-arrow">→</div>
            <div class="cycle-step next-level">
              <div class="step-number">6</div>
              <div class="step-icon">⚔️</div>
              <div class="step-text">Harder Challenge</div>
              <div class="step-desc">Repeat at higher level</div>
            </div>
          </div>
        </div>

        <div class="loop-indicator">
          <span class="loop-arrow">↻</span>
          <span class="loop-text">The cycle continues — each time you're stronger than before</span>
        </div>
      </div>
    </div>
  </div>

  <!-- MOTIVATION SECTION -->
  <div class="motivation-section">
    <div class="motivation-header">
      <h2>✨ Once Upon a Time ✨</h2>
    </div>

    <div class="motivation-quote-display">
      <span class="quote-text">{displayedText}</span>
      <span class="cursor">|</span>
    </div>

    <div class="motivation-grid">
      <div class="gif-card">
        <img src="images/medium-mike-tyson-boxer-wallpaper-poster-print-poster-on-13x19-original-imagc5ytjxqtnfur.webp" alt="Mike Tyson" />
      </div>
      <div class="gif-card">
        <img src="images/cyberpunk.jpeg" alt="Cyberpunk" />
      </div>
      <div class="gif-card">
        <img src="images/Rosa_Walton_I_Really_Want_to_Stay_at_Your_House.jpg" alt="Edgerunners" />
      </div>
      <div class="gif-card">
        <img src="images/mad.jpg" alt="Motivation" />
      </div>
      <div class="gif-card">
        <img src="images/unnamed.png" alt="Motivation" />
      </div>
    </div>
  </div>

  <!-- HANGING SCROLL -->
  <div class="scroll-section">
    <div class="hanging-scroll">
      <div class="scroll-rod top"></div>
      <div class="scroll-body">
        <div class="scroll-text two-col">
          <div class="scroll-col">
            <span>天</span>
            <span>上</span>
            <span>天</span>
            <span>下</span>
          </div>
          <div class="scroll-col">
            <span>唯</span>
            <span>我</span>
            <span>独</span>
            <span>尊</span>
          </div>
        </div>
      </div>
      <div class="scroll-rod bottom"></div>
      <div class="scroll-tassel"></div>
    </div>
    <div class="scroll-translation">
      "In heaven and on earth, I alone am the honored one"
    </div>
  </div>

  <!-- WALL POSTER / MANIFESTO -->
  <div class="poster-section">
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
          <div class="poster-signature">— qitpy</div>
        </div>

        <div class="poster-glow"></div>
      </div>
    </div>
  </div>

  <!-- QUOTES SECTION -->
  <div class="terminal-section">
    <div class="terminal-header">
      <div class="terminal-dots">
        <div class="dot red"></div>
        <div class="dot yellow"></div>
        <div class="dot green"></div>
      </div>
      <div class="terminal-title">~/personal/quotes.txt</div>
    </div>

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
    </ul>
  </div>
</main>

<footer>
  <a href="cv/download" class="cv-download-btn">
    ↓ Download CV
  </a>
  <p>© 2024 qitpy.com · Analog Hack 🤍</p>
</footer>
