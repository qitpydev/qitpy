<!-- src/App.svelte -->
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
    // Boot sequence
    let i = 0;
    const typeWriter = () => {
      if (i < bootSequence.length) {
        terminalText += bootSequence[i] + '\n';
        i++;
        setTimeout(typeWriter, 800);
      }
    };
    setTimeout(typeWriter, 1000);

    // Motivation quote typewriter
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
  /* BEATLESS / LACIA THEME */
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
      radial-gradient(ellipse at 30% 20%, rgba(74, 124, 247, 0.06) 0%, transparent 50%),
      radial-gradient(ellipse at 70% 80%, rgba(232, 160, 191, 0.06) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }

  :global(*) {
    position: relative;
    z-index: 1;
  }

  .terminal-boot {
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(74, 124, 247, 0.3);
    border-left: 4px solid #4a7cf7;
    padding: 15px 20px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    max-width: 300px;
    white-space: pre-line;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(74, 124, 247, 0.1);
    color: #2a2a3a;
    z-index: 100;
  }

  header {
    background: linear-gradient(180deg, rgba(74, 124, 247, 0.08) 0%, rgba(248, 249, 252, 0.95) 100%);
    border-bottom: 1px solid rgba(192, 200, 216, 0.5);
    padding: 4rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  header::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(74, 124, 247, 0.08), transparent);
    animation: shimmer 6s ease-in-out infinite;
  }

  header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #4a7cf7, #e8a0bf, #4a7cf7, transparent);
  }

  @keyframes shimmer {
    0% { left: -50%; }
    100% { left: 150%; }
  }

  .main-quote {
    color: #2a2a3a;
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 300;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
    letter-spacing: 0.5px;
  }

  main {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .profile-section {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
    align-items: start;
  }

  .profile-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(192, 200, 216, 0.5);
    padding: 2rem;
    text-align: center;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
    border-radius: 16px;
    transition: all 0.3s ease;
  }

  .profile-card:hover {
    box-shadow: 0 12px 40px rgba(74, 124, 247, 0.12);
    transform: translateY(-2px);
  }

  img.profile {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid rgba(74, 124, 247, 0.4);
    margin-bottom: 1rem;
    transition: all 0.4s ease;
    box-shadow: 0 4px 20px rgba(74, 124, 247, 0.15);
    object-fit: cover;
  }

  img.profile:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(74, 124, 247, 0.25);
    border-color: #4a7cf7;
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
    font-size: 0.95rem;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .bio-section {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(192, 200, 216, 0.5);
    padding: 2rem;
    line-height: 1.8;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
    position: relative;
  }

  .bio-section::before {
    content: 'ABOUT';
    position: absolute;
    top: -10px;
    left: 20px;
    background: linear-gradient(135deg, #f8f9fc, #eef0f7);
    padding: 2px 12px;
    color: #4a7cf7;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 2px;
    border-radius: 4px;
  }

  .bio-section h3 {
    color: #4a7cf7;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    letter-spacing: 1px;
    font-weight: 600;
  }

  .bio-section p {
    margin-bottom: 1.5rem;
    color: #4a4a5a;
    line-height: 1.8;
  }

  .terminal-section {
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(192, 200, 216, 0.5);
    padding: 2rem;
    margin: 3rem 0;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
    position: relative;
  }

  .terminal-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(192, 200, 216, 0.4);
  }

  .terminal-dots {
    display: flex;
    gap: 8px;
    margin-right: 1rem;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .dot.red { background: #e8a0bf; }
  .dot.yellow { background: #f0d080; }
  .dot.green { background: #4a7cf7; }

  .terminal-title {
    color: #4a7cf7;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    font-weight: 500;
  }

  .quotes-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .quotes-list li {
    color: #3a3a4a;
    margin-bottom: 0.8rem;
    padding-left: 2.5rem;
    position: relative;
    transition: all 0.3s ease;
    border-left: 2px solid transparent;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    border-radius: 4px;
    line-height: 1.6;
  }

  .quotes-list li::before {
    content: '>';
    position: absolute;
    left: 0.5rem;
    color: #4a7cf7;
    font-family: 'JetBrains Mono', monospace;
    font-weight: bold;
  }

  .quotes-list li:hover {
    color: #1a1a2e;
    transform: translateX(8px);
    border-left-color: #4a7cf7;
    background: rgba(74, 124, 247, 0.04);
  }

  .section-title {
    color: #4a7cf7;
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 2rem;
    letter-spacing: 1px;
    font-weight: 600;
  }

  footer {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-top: 2px solid transparent;
    border-image: linear-gradient(90deg, transparent, #4a7cf7, #e8a0bf, #4a7cf7, transparent) 1;
    color: #4a4a5a;
    text-align: center;
    padding: 2rem;
    margin-top: 3rem;
  }

  footer p {
    font-weight: 400;
    letter-spacing: 1px;
  }

  .recipe-section {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(192, 200, 216, 0.5);
    padding: 3rem 2rem;
    margin: 3rem 0;
    text-align: center;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
    position: relative;
    overflow: hidden;
  }

  .recipe-header h2 {
    color: #1a1a2e;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
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
    background: rgba(192, 200, 216, 0.3);
    border: 1px solid rgba(192, 200, 216, 0.5);
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
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 2px;
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
    gap: 0.3rem;
    padding: 1.2rem 1rem;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(192, 200, 216, 0.5);
    border-left: 4px solid #4a7cf7;
    min-width: 130px;
    transition: all 0.3s ease;
    border-radius: 12px;
  }

  .cycle-step:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(74, 124, 247, 0.12);
  }

  .cycle-step .step-number {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 24px;
    height: 24px;
    background: #4a7cf7;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(74, 124, 247, 0.3);
  }

  .cycle-step .step-icon {
    font-size: 2rem;
  }

  .cycle-step .step-text {
    color: #1a1a2e;
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
  }

  .cycle-step .step-desc {
    color: #6a6a7a;
    font-size: 0.75rem;
    text-align: center;
  }

  .cycle-step.damage {
    border-left-color: #e8a0bf;
  }

  .cycle-step.damage .step-number {
    background: #e8a0bf;
  }

  .cycle-step.growth {
    border-left-color: #5cb85c;
  }

  .cycle-step.growth .step-number {
    background: #5cb85c;
  }

  .cycle-step.next-level {
    border-left-color: #f0d080;
    animation: nextLevelGlow 3s ease-in-out infinite alternate;
  }

  .cycle-step.next-level .step-number {
    background: #f0d080;
    color: #2a2a3a;
  }

  @keyframes nextLevelGlow {
    0% { box-shadow: 0 4px 16px rgba(240, 208, 128, 0.1); }
    100% { box-shadow: 0 8px 24px rgba(240, 208, 128, 0.25); }
  }

  .cycle-arrow {
    color: #c0c8d8;
    font-size: 1.5rem;
    font-weight: bold;
    animation: arrowPulse 2s ease-in-out infinite;
  }

  @keyframes arrowPulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.1); }
  }

  .loop-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    background: rgba(74, 124, 247, 0.04);
    border: 1px solid rgba(74, 124, 247, 0.15);
    border-radius: 12px;
  }

  .loop-arrow {
    font-size: 2rem;
    color: #4a7cf7;
    animation: loopSpin 4s linear infinite;
  }

  @keyframes loopSpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .loop-text {
    color: #6a6a7a;
    font-size: 0.95rem;
    font-style: italic;
  }

  /* MOTIVATION SECTION STYLES */
  .motivation-section {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(192, 200, 216, 0.5);
    margin: 3rem 0;
    padding: 3rem 2rem;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
    position: relative;
    overflow: hidden;
  }

  .motivation-header {
    text-align: center;
    margin-bottom: 2rem;
    position: relative;
    z-index: 2;
  }

  .motivation-header h2 {
    color: #1a1a2e;
    font-size: 2rem;
    letter-spacing: 3px;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  .motivation-subtitle {
    color: #4a7cf7;
    font-size: 1rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 400;
  }

  .motivation-quote-display {
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(192, 200, 216, 0.5);
    padding: 2rem;
    margin: 2rem auto;
    max-width: 800px;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
    position: relative;
    z-index: 2;
  }

  .quote-text {
    color: #2a2a3a;
    font-size: 1.15rem;
    font-style: italic;
    text-align: center;
    line-height: 1.6;
  }

  .cursor {
    color: #4a7cf7;
    font-family: 'JetBrains Mono', monospace;
    font-weight: bold;
    animation: cursorBlink 1s infinite;
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
    position: relative;
    z-index: 2;
  }

  .gif-card {
    position: relative;
    aspect-ratio: 1;
    overflow: hidden;
    border: 1px solid rgba(192, 200, 216, 0.5);
    border-radius: 14px;
    background: #fff;
    transition: all 0.4s ease;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  }

  .gif-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s ease;
    border-radius: 13px;
  }

  .gif-card:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 32px rgba(74, 124, 247, 0.15);
  }

  .gif-card:hover img {
    filter: brightness(1.05);
  }

  .motivation-stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-top: 2rem;
    position: relative;
    z-index: 2;
  }

  .stat-item {
    text-align: center;
    padding: 1.5rem 2rem;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(192, 200, 216, 0.5);
    border-radius: 14px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  }

  .stat-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(74, 124, 247, 0.12);
  }

  .stat-number {
    display: block;
    color: #4a7cf7;
    font-size: 2.2rem;
    font-weight: 700;
  }

  .stat-label {
    display: block;
    color: #6a6a7a;
    font-size: 0.85rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 0.5rem;
  }

  /* WALL POSTER / MANIFESTO STYLES */
  .poster-section {
    margin: 4rem 0;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .poster-wrapper {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .buddha-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: buddhaFloat 5s ease-in-out infinite;
  }

  @keyframes buddhaFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  .buddha-image {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border: 2px solid rgba(74, 124, 247, 0.3);
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(74, 124, 247, 0.12);
    transition: all 0.4s ease;
  }

  .buddha-image:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 40px rgba(74, 124, 247, 0.2);
    border-color: #4a7cf7;
  }

  .buddha-caption {
    color: #6a6a7a;
    font-size: 0.9rem;
    margin-top: 1rem;
    letter-spacing: 1px;
    font-style: italic;
  }

  .poster-frame {
    position: relative;
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(192, 200, 216, 0.5);
    padding: 3rem 4rem;
    max-width: 700px;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
    transition: all 0.4s ease;
  }

  .poster-frame:hover {
    box-shadow: 0 12px 40px rgba(74, 124, 247, 0.12);
    transform: translateY(-2px);
  }

  .poster-corner {
    position: absolute;
    width: 20px;
    height: 20px;
    border-color: rgba(74, 124, 247, 0.3);
    border-style: solid;
  }

  .poster-corner.top-left {
    top: 10px;
    left: 10px;
    border-width: 2px 0 0 2px;
    border-radius: 4px 0 0 0;
  }

  .poster-corner.top-right {
    top: 10px;
    right: 10px;
    border-width: 2px 2px 0 0;
    border-radius: 0 4px 0 0;
  }

  .poster-corner.bottom-left {
    bottom: 10px;
    left: 10px;
    border-width: 0 0 2px 2px;
    border-radius: 0 0 0 4px;
  }

  .poster-corner.bottom-right {
    bottom: 10px;
    right: 10px;
    border-width: 0 2px 2px 0;
    border-radius: 0 0 4px 0;
  }

  .poster-content {
    position: relative;
    z-index: 2;
    text-align: center;
  }

  .poster-title {
    color: #1a1a2e;
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: 6px;
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
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #4a7cf7, transparent);
  }

  .poster-lines {
    margin: 2rem 0;
  }

  .poster-line {
    color: #3a3a4a;
    font-size: 1.1rem;
    line-height: 2.2;
    margin: 0;
    padding: 0.5rem 0;
    letter-spacing: 0.5px;
    border-bottom: 1px solid rgba(192, 200, 216, 0.2);
    transition: all 0.3s ease;
  }

  .poster-line:last-child {
    border-bottom: none;
  }

  .poster-line:hover {
    color: #4a7cf7;
    transform: translateX(4px);
  }

  .poster-line.highlight {
    color: #4a7cf7;
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  .poster-signature {
    color: #4a7cf7;
    font-size: 1rem;
    font-style: italic;
    letter-spacing: 2px;
    margin-top: 2rem;
  }

  .poster-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background: radial-gradient(ellipse, rgba(74, 124, 247, 0.03) 0%, transparent 70%);
    pointer-events: none;
  }

  /* HANGING SCROLL STYLES */
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
    animation: scrollSway 8s ease-in-out infinite;
    filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.1));
  }

  @keyframes scrollSway {
    0%, 100% { transform: rotate(-0.5deg); }
    50% { transform: rotate(0.5deg); }
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
    background: linear-gradient(180deg,
      #f5f5dc 0%,
      #faf0e6 10%,
      #f5f5dc 50%,
      #faf0e6 90%,
      #f5f5dc 100%
    );
    border-left: 3px solid #8b4513;
    border-right: 3px solid #8b4513;
    padding: 1rem 1.2rem;
    position: relative;
    box-shadow:
      inset 0 0 20px rgba(139, 69, 19, 0.1),
      0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .scroll-body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 10px,
        rgba(139, 69, 19, 0.03) 10px,
        rgba(139, 69, 19, 0.03) 11px
      );
    pointer-events: none;
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
    text-shadow: 0 0 8px rgba(139, 0, 0, 0.3);
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
    box-shadow: 0 4px 12px rgba(232, 160, 191, 0.3);
  }

  .scroll-translation {
    margin-top: 2rem;
    color: #5a5a6a;
    font-size: 1rem;
    font-style: italic;
    text-align: center;
    letter-spacing: 0.5px;
  }

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

    .motivation-stats {
      flex-direction: column;
      gap: 1.5rem;
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
      letter-spacing: 3px;
    }

    .poster-line {
      font-size: 0.95rem;
      line-height: 2;
    }

    .poster-line.highlight {
      font-size: 1.1rem;
    }

    .hanging-scroll {
      transform: scale(0.8);
    }
  }
</style>



{#if terminalText}
  <div class="terminal-boot">{terminalText}</div>
{/if}

<header>
  <div class="main-quote">
    "Do you trust me even without understanding me?" — Beatless
  </div>
</header>

<main>
  <div class="profile-section">
    <div class="profile-card">
      <img src="images/avatar_022025.jpeg" alt="Profile Picture" class="profile" />
      <div class="name">Quyet Doan</div>
      <div class="role">DevOps Engineer</div>
    </div>
    
    <div class="bio-section">
      <h3>ABOUT ME</h3>
      <p>DevSecOps Engineer</p>
      <p>Building secure, automated infrastructure. Bridging development, security, and operations to deliver reliable systems at scale.</p>
    </div>
  </div>

  <div class="recipe-section">
    <div class="recipe-header">
      <h2>🎮 Game of Life</h2>
      <p class="recipe-subtitle">Play it right — level up every cycle</p>
    </div>
    <div class="recipe-content">
      <div class="level-system">
        <!-- Level indicator -->
        <div class="level-indicator">
          <div class="level-bar">
            <div class="level-progress"></div>
          </div>
          <span class="level-text">LVL ∞</span>
        </div>

        <!-- The cycle -->
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

        <!-- Loop indicator -->
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
          <div class="poster-title">MY CREED</div>
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
  <p>© 2024 qitpy.com // Analog Hack 🤍</p>
</footer>
