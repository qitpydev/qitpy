<!-- src/App.svelte -->
<script>
  import { onMount } from 'svelte';

  let terminalText = '';
  const bootSequence = [
    'Hello...',
    'Hoping you have a good day...',
    'Wishing you all the best of luck...',
    'ACCESS GRANTED - WELCOME TO me!',
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
    { text: "Pain is temporary. Quitting lasts forever.", author: "Lance Armstrong" }
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
          setTimeout(typeQuote, 3000); // Wait before erasing
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
  /* CYBERPUNK THEME */
  :global(body) {
    font-family: 'JetBrains Mono', monospace;
    margin: 0;
    padding: 0;
    background: #0d0221;
    color: #0abdc6;
    overflow-x: hidden;
    min-height: 100vh;
    position: relative;
  }

  /* Cyberpunk grid background */
  :global(body::before) {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      linear-gradient(90deg, rgba(10, 189, 198, 0.03) 1px, transparent 1px),
      linear-gradient(rgba(10, 189, 198, 0.03) 1px, transparent 1px),
      radial-gradient(ellipse at 50% 0%, rgba(255, 42, 109, 0.15) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 50%, rgba(10, 189, 198, 0.1) 0%, transparent 30%),
      radial-gradient(ellipse at 20% 80%, rgba(234, 0, 255, 0.1) 0%, transparent 30%);
    background-size: 50px 50px, 50px 50px, 100% 100%, 100% 100%, 100% 100%;
    pointer-events: none;
    z-index: 1;
  }

  /* Scanlines */
  :global(body::after) {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.1) 2px,
      rgba(0, 0, 0, 0.1) 4px
    );
    pointer-events: none;
    z-index: 1000;
  }

  :global(*) {
    position: relative;
    z-index: 2;
  }

  .terminal-boot {
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(13, 2, 33, 0.95);
    border: 2px solid #0abdc6;
    padding: 15px;
    font-size: 12px;
    max-width: 300px;
    white-space: pre-line;
    border-radius: 0;
    box-shadow:
      0 0 20px rgba(10, 189, 198, 0.5),
      inset 0 0 20px rgba(10, 189, 198, 0.1);
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);
  }

  header {
    background: linear-gradient(180deg, rgba(13, 2, 33, 0.98) 0%, rgba(26, 5, 64, 0.95) 100%);
    border-bottom: 3px solid #ff2a6d;
    padding: 3rem 2rem;
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
    background: linear-gradient(90deg, transparent, rgba(255, 42, 109, 0.3), transparent);
    animation: scan 4s infinite;
  }

  header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #0abdc6, #ff2a6d, #ea00ff, #0abdc6);
    background-size: 300% 100%;
    animation: gradientShift 3s linear infinite;
  }

  @keyframes scan {
    0% { left: -50%; }
    100% { left: 150%; }
  }

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    100% { background-position: 300% 50%; }
  }

  .main-quote {
    color: #ffffff;
    font-size: 1.5rem;
    font-style: italic;
    text-align: center;
    text-shadow:
      0 0 10px #0abdc6,
      0 0 20px #0abdc6,
      0 0 40px rgba(10, 189, 198, 0.5);
    animation: neonPulse 2s ease-in-out infinite alternate;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  @keyframes neonPulse {
    from {
      text-shadow: 0 0 10px #0abdc6, 0 0 20px #0abdc6, 0 0 40px rgba(10, 189, 198, 0.5);
      filter: brightness(1);
    }
    to {
      text-shadow: 0 0 20px #0abdc6, 0 0 40px #0abdc6, 0 0 80px rgba(10, 189, 198, 0.8);
      filter: brightness(1.2);
    }
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
    background: linear-gradient(135deg, rgba(13, 2, 33, 0.9) 0%, rgba(26, 5, 64, 0.9) 100%);
    border: 2px solid #ea00ff;
    padding: 2rem;
    text-align: center;
    box-shadow:
      0 0 30px rgba(234, 0, 255, 0.3),
      inset 0 0 30px rgba(234, 0, 255, 0.1);
    position: relative;
    clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
  }

  .profile-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 48%, #ea00ff 49%, #ea00ff 51%, transparent 52%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .profile-card:hover {
    box-shadow:
      0 0 50px rgba(234, 0, 255, 0.5),
      inset 0 0 50px rgba(234, 0, 255, 0.2);
  }

  img.profile {
    width: 150px;
    height: 150px;
    border-radius: 0;
    border: 3px solid #ff2a6d;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
    box-shadow:
      0 0 20px rgba(255, 42, 109, 0.5),
      0 0 40px rgba(255, 42, 109, 0.3);
    clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);
  }

  img.profile:hover {
    transform: scale(1.1);
    box-shadow:
      0 0 40px rgba(255, 42, 109, 0.8),
      0 0 80px rgba(255, 42, 109, 0.5);
  }

  .name {
    font-size: 1.6rem;
    font-weight: 700;
    color: #ffffff;
    margin: 1rem 0 0.5rem;
    text-shadow: 0 0 10px #0abdc6, 0 0 20px rgba(10, 189, 198, 0.5);
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  .role {
    color: #fcee0a;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-shadow: 0 0 10px rgba(252, 238, 10, 0.5);
  }

  .bio-section {
    background: linear-gradient(135deg, rgba(13, 2, 33, 0.9) 0%, rgba(26, 5, 64, 0.9) 100%);
    border: 2px solid #0abdc6;
    padding: 2rem;
    line-height: 1.8;
    position: relative;
    clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);
  }

  .bio-section::before {
    content: '// ABOUT';
    position: absolute;
    top: -12px;
    left: 20px;
    background: #0d0221;
    padding: 0 10px;
    color: #0abdc6;
    font-size: 0.8rem;
    letter-spacing: 2px;
  }

  .bio-section h3 {
    color: #ff2a6d;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 0 0 10px rgba(255, 42, 109, 0.5);
  }

  .bio-section p {
    margin-bottom: 1.5rem;
    color: #b4a5c7;
  }

  .terminal-section {
    background: linear-gradient(180deg, rgba(13, 2, 33, 0.95) 0%, rgba(5, 10, 26, 0.95) 100%);
    border: 2px solid #0abdc6;
    padding: 2rem;
    margin: 3rem 0;
    font-family: 'JetBrains Mono', monospace;
    position: relative;
    box-shadow:
      0 0 30px rgba(10, 189, 198, 0.2),
      inset 0 0 50px rgba(10, 189, 198, 0.05);
  }

  .terminal-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: linear-gradient(180deg, rgba(10, 189, 198, 0.1) 0%, transparent 100%);
  }

  .terminal-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(10, 189, 198, 0.3);
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
    box-shadow: 0 0 10px currentColor;
  }

  .dot.red { background: #ff2a6d; color: #ff2a6d; }
  .dot.yellow { background: #fcee0a; color: #fcee0a; }
  .dot.green { background: #0abdc6; color: #0abdc6; }

  .terminal-title {
    color: #0abdc6;
    font-size: 0.9rem;
    text-shadow: 0 0 5px rgba(10, 189, 198, 0.5);
  }

  .quotes-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .quotes-list li {
    color: #0abdc6;
    margin-bottom: 1rem;
    padding-left: 2.5rem;
    position: relative;
    transition: all 0.3s ease;
    border-left: 2px solid transparent;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
  }

  .quotes-list li::before {
    content: '>';
    position: absolute;
    left: 0.5rem;
    color: #ff2a6d;
    font-weight: bold;
    text-shadow: 0 0 5px rgba(255, 42, 109, 0.5);
  }

  .quotes-list li:hover {
    color: #ffffff;
    text-shadow: 0 0 10px #0abdc6;
    transform: translateX(10px);
    border-left-color: #ea00ff;
    background: linear-gradient(90deg, rgba(234, 0, 255, 0.1) 0%, transparent 100%);
  }

  .section-title {
    color: #ff2a6d;
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-shadow:
      0 0 10px #ff2a6d,
      0 0 20px rgba(255, 42, 109, 0.5);
  }

  /* Glitch effect */
  .glitch {
    position: relative;
    animation: glitch 2s infinite;
  }

  .glitch::before,
  .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .glitch::before {
    animation: glitchTop 1s infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }

  .glitch::after {
    animation: glitchBottom 1.5s infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  }

  @keyframes glitch {
    2%, 64% { transform: translate(2px, 0) skew(0deg); }
    4%, 60% { transform: translate(-2px, 0) skew(0deg); }
    62% { transform: translate(0, 0) skew(5deg); }
  }

  @keyframes glitchTop {
    2%, 64% { transform: translate(2px, -2px); }
    4%, 60% { transform: translate(-2px, 2px); }
    62% { transform: translate(13px, -1px) skew(-13deg); }
  }

  @keyframes glitchBottom {
    2%, 64% { transform: translate(-2px, 0); }
    4%, 60% { transform: translate(-2px, 0); }
    62% { transform: translate(-22px, 5px) skew(21deg); }
  }

  footer {
    background: linear-gradient(180deg, rgba(13, 2, 33, 0.98) 0%, rgba(5, 2, 15, 1) 100%);
    border-top: 3px solid #ff2a6d;
    color: #0abdc6;
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
    height: 3px;
    background: linear-gradient(90deg, #0abdc6, #ff2a6d, #ea00ff, #0abdc6);
    background-size: 300% 100%;
    animation: gradientShift 3s linear infinite;
  }

  footer p {
    text-shadow: 0 0 10px rgba(10, 189, 198, 0.5);
  }

  .recipe-section {
    background: linear-gradient(135deg, rgba(13, 2, 33, 0.95) 0%, rgba(26, 5, 64, 0.95) 100%);
    border: 2px solid #ea00ff;
    padding: 3rem 2rem;
    margin: 3rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
    clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
  }

  .recipe-section::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background:
      radial-gradient(circle at 30% 30%, rgba(234, 0, 255, 0.1) 0%, transparent 30%),
      radial-gradient(circle at 70% 70%, rgba(10, 189, 198, 0.1) 0%, transparent 30%);
    animation: rotate 30s linear infinite;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .recipe-header h2 {
    color: #fcee0a;
    font-size: 2rem;
    margin-bottom: 2rem;
    text-shadow:
      0 0 10px #fcee0a,
      0 0 20px rgba(252, 238, 10, 0.5);
    position: relative;
    z-index: 2;
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  .recipe-flow {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
  }

  .recipe-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem;
    background: rgba(13, 2, 33, 0.8);
    border: 2px solid #0abdc6;
    transition: all 0.3s ease;
    min-width: 120px;
    clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
  }

  .recipe-step:hover {
    transform: translateY(-10px);
    box-shadow:
      0 20px 40px rgba(10, 189, 198, 0.3),
      0 0 30px rgba(234, 0, 255, 0.2);
    border-color: #ea00ff;
    background: rgba(26, 5, 64, 0.9);
  }

  .step-icon {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
  }

  .step-text {
    color: #ffffff;
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }

  .arrow {
    color: #ff2a6d;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 0 0 15px #ff2a6d;
    animation: arrowPulse 1.5s ease-in-out infinite;
  }

  @keyframes arrowPulse {
    0%, 100% {
      opacity: 0.6;
      transform: scale(1) translateX(0);
      text-shadow: 0 0 15px #ff2a6d;
    }
    50% {
      opacity: 1;
      transform: scale(1.2) translateX(5px);
      text-shadow: 0 0 30px #ff2a6d, 0 0 60px rgba(255, 42, 109, 0.5);
    }
  }

  .recipe-motto {
    position: relative;
    z-index: 2;
  }

  .recipe-motto p {
    color: #b4a5c7;
    font-style: italic;
    font-size: 1.2rem;
    margin: 0 0 1rem 0;
    text-shadow: 0 0 10px rgba(180, 165, 199, 0.3);
  }

  .fun-extras {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .blink {
    animation: neonBlink 1s ease-in-out infinite;
    font-size: 1.5rem;
    filter: drop-shadow(0 0 10px rgba(252, 238, 10, 0.8));
  }

  @keyframes neonBlink {
    0%, 100% { opacity: 1; filter: drop-shadow(0 0 10px rgba(252, 238, 10, 0.8)); }
    50% { opacity: 0.3; filter: drop-shadow(0 0 5px rgba(252, 238, 10, 0.3)); }
  }

  .wiggle {
    color: #ea00ff;
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    animation: cyberWiggle 2s ease-in-out infinite;
    text-shadow: 0 0 10px #ea00ff, 0 0 20px rgba(234, 0, 255, 0.5);
  }

  @keyframes cyberWiggle {
    0%, 100% { transform: rotate(0deg) scale(1); }
    25% { transform: rotate(-2deg) scale(1.02); }
    75% { transform: rotate(2deg) scale(0.98); }
  }

  @media (max-width: 768px) {
    .profile-section {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    h1 {
      font-size: 2rem;
    }

    main {
      padding: 1rem;
    }

    .recipe-flow {
      flex-direction: column;
      gap: 1rem;
    }

    .arrow {
      transform: rotate(90deg);
    }

    .recipe-section {
      padding: 2rem 1rem;
    }

    .terminal-boot {
      position: relative;
      top: auto;
      right: auto;
      margin: 1rem;
      max-width: 100%;
    }

    .motivation-grid {
      grid-template-columns: 1fr 1fr;
    }

    .motivation-stats {
      flex-direction: column;
      gap: 1.5rem;
    }
  }

  /* MOTIVATION SECTION STYLES */
  .motivation-section {
    background: linear-gradient(180deg, rgba(13, 2, 33, 0.98) 0%, rgba(20, 0, 30, 0.98) 50%, rgba(13, 2, 33, 0.98) 100%);
    border: 2px solid #ff2a6d;
    margin: 3rem 0;
    padding: 3rem 2rem;
    position: relative;
    overflow: hidden;
    clip-path: polygon(0 20px, 20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px));
  }

  .motivation-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 20%, rgba(255, 42, 109, 0.15) 0%, transparent 40%),
      radial-gradient(circle at 80% 80%, rgba(234, 0, 255, 0.15) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(10, 189, 198, 0.1) 0%, transparent 50%);
    animation: pulseBackground 5s ease-in-out infinite alternate;
  }

  @keyframes pulseBackground {
    0% { opacity: 0.5; }
    100% { opacity: 1; }
  }

  .motivation-header {
    text-align: center;
    margin-bottom: 2rem;
    position: relative;
    z-index: 2;
  }

  .motivation-header h2 {
    color: #ff2a6d;
    font-size: 2.5rem;
    text-transform: uppercase;
    letter-spacing: 8px;
    margin-bottom: 0.5rem;
    text-shadow:
      0 0 10px #ff2a6d,
      0 0 20px #ff2a6d,
      0 0 40px rgba(255, 42, 109, 0.8),
      0 0 80px rgba(255, 42, 109, 0.4);
    animation: textFlicker 3s infinite;
  }

  @keyframes textFlicker {
    0%, 100% { opacity: 1; }
    92% { opacity: 1; }
    93% { opacity: 0.8; }
    94% { opacity: 1; }
    95% { opacity: 0.9; }
    96% { opacity: 1; }
  }

  .motivation-subtitle {
    color: #fcee0a;
    font-size: 1.2rem;
    letter-spacing: 5px;
    text-transform: uppercase;
    text-shadow: 0 0 10px rgba(252, 238, 10, 0.5);
  }

  .motivation-quote-display {
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid #0abdc6;
    padding: 2rem;
    margin: 2rem auto;
    max-width: 800px;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
  }

  .quote-text {
    color: #ffffff;
    font-size: 1.2rem;
    font-style: italic;
    text-align: center;
    text-shadow: 0 0 10px rgba(10, 189, 198, 0.5);
  }

  .cursor {
    color: #0abdc6;
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
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    margin: 2rem 0;
    position: relative;
    z-index: 2;
  }

  .gif-card {
    position: relative;
    aspect-ratio: 1;
    overflow: hidden;
    border: 2px solid #ea00ff;
    background: #000;
    transition: all 0.3s ease;
    clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
  }

  .gif-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(1.2) contrast(1.1);
    transition: all 0.3s ease;
  }

  .gif-card:hover {
    transform: scale(1.05);
    border-color: #0abdc6;
    box-shadow:
      0 0 30px rgba(234, 0, 255, 0.5),
      0 0 60px rgba(10, 189, 198, 0.3);
  }

  .gif-card:hover img {
    filter: saturate(1.5) contrast(1.2);
  }

  .gif-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(13, 2, 33, 0.95));
    padding: 2rem 1rem 1rem;
    text-align: center;
  }

  .gif-overlay span {
    color: #fcee0a;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-shadow:
      0 0 10px #fcee0a,
      0 0 20px rgba(252, 238, 10, 0.5);
  }

  .motivation-stats {
    display: flex;
    justify-content: center;
    gap: 4rem;
    margin-top: 2rem;
    position: relative;
    z-index: 2;
  }

  .stat-item {
    text-align: center;
    padding: 1.5rem 2rem;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid #0abdc6;
    clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
    transition: all 0.3s ease;
  }

  .stat-item:hover {
    border-color: #ff2a6d;
    box-shadow: 0 0 20px rgba(255, 42, 109, 0.3);
    transform: translateY(-5px);
  }

  .stat-number {
    display: block;
    color: #ff2a6d;
    font-size: 2.5rem;
    font-weight: 700;
    text-shadow:
      0 0 10px #ff2a6d,
      0 0 20px rgba(255, 42, 109, 0.5);
    animation: numberPulse 2s ease-in-out infinite alternate;
  }

  @keyframes numberPulse {
    0% { transform: scale(1); }
    100% { transform: scale(1.05); }
  }

  .stat-label {
    display: block;
    color: #0abdc6;
    font-size: 0.9rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-top: 0.5rem;
    text-shadow: 0 0 5px rgba(10, 189, 198, 0.5);
  }
</style>



{#if terminalText}
  <div class="terminal-boot">{terminalText}</div>
{/if}

<header>
  <div class="main-quote">
    "Curiosity is one of the most valuable talents of humankind."
  </div>
</header>

<main>
  <div class="profile-section">
    <div class="profile-card">
      <img src="https://qitpydevpublic.s3.ap-southeast-1.amazonaws.com/qitpydevpfp010624.jpg" alt="Profile Picture" class="profile" />
      <div class="name">Doan Van Quyet</div>
      <div class="role">DevOps Engineer</div>
    </div>
    
    <div class="bio-section">
      <h3>🤡 A litlle bit</h3>
      <p>DevOps Engineer | Cloud Engineer | Platform Engineer.</p>
      <p>I do everything in this role with the best.</p>
    </div>
  </div>

  <div class="terminal-section">
    <div class="terminal-header">
      <div class="terminal-dots">
        <div class="dot red"></div>
        <div class="dot yellow"></div>
        <div class="dot green"></div>
      </div>
      <div class="terminal-title">~/personal/quotes.txt</div>
    </div>
    
    <div class="section-title glitch">Just quotes for myself, but I hope it helps you too.</div>
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

  <div class="recipe-section">
    <div class="recipe-header">
      <h2>🎯 The Recipe</h2>
    </div>
    <div class="recipe-content">
      <div class="recipe-flow">
        <div class="recipe-step">
          <div class="step-icon">⚡</div>
          <div class="step-text">Challenge</div>
        </div>
        <div class="arrow">→</div>
        <div class="recipe-step">
          <div class="step-icon">🏆</div>
          <div class="step-text">Reward</div>
        </div>
        <div class="arrow">→</div>
        <div class="recipe-step">
          <div class="step-icon">😌</div>
          <div class="step-text">Satisfaction</div>
        </div>
        <div class="arrow">→</div>
        <div class="recipe-step">
          <div class="step-icon">🔄</div>
          <div class="step-text">Repeat</div>
        </div>
      </div>
      <div class="recipe-motto">
        <p>Thank me later 😎</p>
        <div class="fun-extras">
          <span class="blink">✨</span>
          <span class="wiggle">Trust the process</span>
          <span class="blink">✨</span>
        </div>
      </div>
    </div>
  </div>

  <!-- MOTIVATION SECTION -->
  <div class="motivation-section">
    <div class="motivation-header">
      <h2 class="glitch" data-text="STAY HARD">🔥 STAY HARD 🔥</h2>
      <p class="motivation-subtitle">NO EXCUSES. NO LIMITS.</p>
    </div>

    <div class="motivation-quote-display">
      <span class="quote-text">{displayedText}</span>
      <span class="cursor">|</span>
    </div>

    <div class="motivation-grid">
      <div class="gif-card">
        <img src="https://media.giphy.com/media/ZEHkqDMqGbLOop0cMC/giphy.gif" alt="Boxing Training" />
        <div class="gif-overlay">
          <span>FIGHT</span>
        </div>
      </div>
      <div class="gif-card">
        <img src="https://media.giphy.com/media/3oEjHZPivwdJ0syhKE/giphy.gif" alt="Gym Workout" />
        <div class="gif-overlay">
          <span>GRIND</span>
        </div>
      </div>
      <div class="gif-card">
        <img src="https://media.giphy.com/media/l0HlPwMAzh13pcZ20/giphy.gif" alt="Running" />
        <div class="gif-overlay">
          <span>PUSH</span>
        </div>
      </div>
      <div class="gif-card">
        <img src="https://media.giphy.com/media/xUOwGaKseoemyk5P6E/giphy.gif" alt="Strength Training" />
        <div class="gif-overlay">
          <span>RISE</span>
        </div>
      </div>
    </div>

    <div class="motivation-stats">
      <div class="stat-item">
        <span class="stat-number">24/7</span>
        <span class="stat-label">DEDICATION</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">∞</span>
        <span class="stat-label">POTENTIAL</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">0</span>
        <span class="stat-label">EXCUSES</span>
      </div>
    </div>
  </div>
</main>

<footer>
  <p>© 2024 qitpy.com // ...Made with love ❤️ and coffee ☕</p>
</footer>
