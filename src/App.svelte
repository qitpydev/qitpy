<!-- src/App.svelte -->
<script>
  import { onMount } from 'svelte';

  let terminalText = '';
  const bootSequence = [
    'Yo what\'s up! 👊',
    'Ready to vibe? 🔥',
    'Let\'s get it! 💪',
    'ACCESS GRANTED - LET\'S GO!',
    '> _ <'
  ];

  let particles = [];
  let matrixColumns = [];
  let sakuraPetals = [];
  let floatingEmojis = [];
  let cursorTrail = [];
  let rainbowStars = [];

  onMount(() => {
    // Boot sequence animation
    let i = 0;
    const typeWriter = () => {
      if (i < bootSequence.length) {
        terminalText += bootSequence[i] + '\n';
        i++;
        setTimeout(typeWriter, 800);
      }
    };
    setTimeout(typeWriter, 1000);

    // Create particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.3
      });
    }
    particles = particles;

    // Create matrix rain columns
    const columnCount = Math.floor(window.innerWidth / 20);
    for (let i = 0; i < columnCount; i++) {
      matrixColumns.push({
        x: i * 20,
        y: Math.random() * -100,
        speed: Math.random() * 2 + 1,
        chars: generateMatrixChars()
      });
    }
    matrixColumns = matrixColumns;

    // Animate matrix rain
    setInterval(() => {
      matrixColumns = matrixColumns.map(col => ({
        ...col,
        y: col.y > window.innerHeight ? -50 : col.y + col.speed,
        chars: col.y > window.innerHeight ? generateMatrixChars() : col.chars
      }));
    }, 50);

    // Animate particles
    setInterval(() => {
      particles = particles.map(p => ({
        ...p,
        x: (p.x + p.speedX + 100) % 100,
        y: (p.y + p.speedY + 100) % 100
      }));
    }, 50);

    // Create sakura petals
    for (let i = 0; i < 20; i++) {
      sakuraPetals.push({
        x: Math.random() * 100,
        y: Math.random() * -100,
        rotation: Math.random() * 360,
        speed: Math.random() * 1 + 0.5,
        sway: Math.random() * 2 - 1,
        size: Math.random() * 15 + 10
      });
    }
    sakuraPetals = sakuraPetals;

    // Animate sakura petals
    setInterval(() => {
      sakuraPetals = sakuraPetals.map(petal => ({
        ...petal,
        y: petal.y > 110 ? -10 : petal.y + petal.speed,
        x: petal.x + Math.sin(petal.y / 10) * petal.sway * 0.1,
        rotation: petal.rotation + 2
      }));
    }, 50);

    // Create floating emojis
    const emojis = ['✨', '💫', '⭐', '🌟', '💖', '💕', '🎀', '🌸', '🦋', '🌈'];
    for (let i = 0; i < 15; i++) {
      floatingEmojis.push({
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 15 + 15,
        duration: Math.random() * 3 + 2
      });
    }
    floatingEmojis = floatingEmojis;

    // Create rainbow stars
    for (let i = 0; i < 8; i++) {
      rainbowStars.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: i * 0.5
      });
    }
    rainbowStars = rainbowStars;

    // Cursor trail effect
    document.addEventListener('mousemove', (e) => {
      const trail = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now()
      };
      cursorTrail = [...cursorTrail, trail].slice(-15);

      setTimeout(() => {
        cursorTrail = cursorTrail.filter(t => t.id !== trail.id);
      }, 500);
    });

    // 3D tilt effect for cards
    const cards = document.querySelectorAll('.profile-card, .bio-section, .terminal-section, .recipe-section');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      });
    });
  });

  function generateMatrixChars() {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';
    return Array(10).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
  }
</script>

<style>
  :global(body) {
    font-family: 'JetBrains Mono', monospace;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a0a1a 50%, #0a1a0a 100%);
    color: #00ff41;
    overflow-x: hidden;
    min-height: 100vh;
    position: relative;
  }

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
        rgba(0, 255, 65, 0.03) 2px,
        rgba(0, 255, 65, 0.03) 4px
      );
    pointer-events: none;
    z-index: 1;
    animation: scanlines 8s linear infinite;
  }

  @keyframes scanlines {
    0% { transform: translateY(0); }
    100% { transform: translateY(4px); }
  }

  :global(*) {
    position: relative;
    z-index: 2;
  }

  /* Matrix Rain */
  .matrix-rain {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    opacity: 0.15;
  }

  .matrix-column {
    position: absolute;
    font-size: 14px;
    color: #00ff41;
    text-shadow: 0 0 5px #00ff41;
    font-family: 'JetBrains Mono', monospace;
    white-space: pre;
    opacity: 0.8;
  }

  /* Particle System */
  .particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  }

  .particle {
    position: absolute;
    background: radial-gradient(circle, #00ff41 0%, transparent 70%);
    border-radius: 50%;
    filter: blur(1px);
    animation: particleFloat 3s ease-in-out infinite;
  }

  @keyframes particleFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  /* Sakura Petals */
  .sakura-petals {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 3;
  }

  .sakura-petal {
    position: absolute;
    font-size: 20px;
    filter: drop-shadow(0 0 3px rgba(255, 182, 193, 0.8));
    animation: sakuraFloat 1s ease-in-out infinite;
  }

  @keyframes sakuraFloat {
    0%, 100% { transform: translateX(0) scale(1); }
    50% { transform: translateX(10px) scale(1.1); }
  }

  /* Floating Emojis */
  .floating-emojis {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 3;
  }

  .floating-emoji {
    position: absolute;
    animation: floatBounce 3s ease-in-out infinite;
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
  }

  @keyframes floatBounce {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    25% {
      transform: translateY(-20px) rotate(5deg);
    }
    50% {
      transform: translateY(0) rotate(0deg);
    }
    75% {
      transform: translateY(-15px) rotate(-5deg);
    }
  }

  /* Rainbow Stars */
  .rainbow-stars {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 3;
  }

  .rainbow-star {
    position: absolute;
    font-size: 30px;
    animation: rainbowPulse 2s ease-in-out infinite, starRotate 4s linear infinite;
  }

  @keyframes rainbowPulse {
    0%, 100% {
      filter: hue-rotate(0deg) drop-shadow(0 0 10px currentColor);
      transform: scale(1);
    }
    50% {
      filter: hue-rotate(180deg) drop-shadow(0 0 20px currentColor);
      transform: scale(1.3);
    }
  }

  @keyframes starRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Cursor Trail */
  .cursor-trail {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
  }

  .trail-dot {
    position: absolute;
    width: 10px;
    height: 10px;
    background: radial-gradient(circle, #ff0080 0%, transparent 70%);
    border-radius: 50%;
    animation: trailFade 0.5s ease-out forwards;
  }

  @keyframes trailFade {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  /* Glitch Effect */
  .glitch {
    position: relative;
  }

  .glitch:hover {
    animation: glitch 0.3s ease-in-out;
  }

  @keyframes glitch {
    0% {
      text-shadow: 0.05em 0 0 #00ff41, -0.05em -0.025em 0 #ff0080;
    }
    14% {
      text-shadow: 0.05em 0 0 #00ff41, -0.05em -0.025em 0 #ff0080;
    }
    15% {
      text-shadow: -0.05em -0.025em 0 #00ff41, 0.05em 0.025em 0 #ff0080;
    }
    49% {
      text-shadow: -0.05em -0.025em 0 #00ff41, 0.05em 0.025em 0 #ff0080;
    }
    50% {
      text-shadow: 0.025em 0.05em 0 #00ff41, 0.05em 0 0 #ff0080;
    }
    99% {
      text-shadow: 0.025em 0.05em 0 #00ff41, 0.05em 0 0 #ff0080;
    }
    100% {
      text-shadow: -0.025em 0 0 #00ff41, -0.025em -0.025em 0 #ff0080;
    }
  }

  .terminal-boot {
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.9);
    border: 2px solid #00ff41;
    padding: 15px;
    font-size: 12px;
    max-width: 300px;
    white-space: pre-line;
    border-radius: 8px;
    box-shadow:
      0 0 20px rgba(0, 255, 65, 0.4),
      0 0 40px rgba(0, 255, 65, 0.2),
      inset 0 0 20px rgba(0, 255, 65, 0.1);
    animation: neonPulse 2s ease-in-out infinite;
    backdrop-filter: blur(10px);
  }

  @keyframes neonPulse {
    0%, 100% {
      box-shadow:
        0 0 20px rgba(0, 255, 65, 0.4),
        0 0 40px rgba(0, 255, 65, 0.2),
        inset 0 0 20px rgba(0, 255, 65, 0.1);
    }
    50% {
      box-shadow:
        0 0 30px rgba(0, 255, 65, 0.6),
        0 0 60px rgba(0, 255, 65, 0.3),
        inset 0 0 30px rgba(0, 255, 65, 0.2);
    }
  }

  /* Pop-in animations */
  @keyframes popIn {
    0% {
      opacity: 0;
      transform: scale(0.5) rotate(-10deg);
    }
    50% {
      transform: scale(1.1) rotate(3deg);
    }
    100% {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Rainbow text effect */
  .rainbow-text {
    background: linear-gradient(90deg, #ff0080, #ff6b00, #ffd700, #00ff41, #00d4ff, #a020f0, #ff0080);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: rainbowWave 3s linear infinite;
  }

  @keyframes rainbowWave {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }

  header {
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(26, 10, 26, 0.9) 100%);
    border-bottom: 3px solid #ff0080;
    padding: 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 5px 30px rgba(255, 0, 128, 0.3);
    animation: slideUp 0.6s ease-out;
  }

  header::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 0, 128, 0.3), transparent);
    animation: scan 3s infinite;
  }

  header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #00ff41, #ff0080, #00ff41);
    background-size: 200% 100%;
    animation: borderFlow 3s linear infinite;
  }

  @keyframes scan {
    0% { left: -100%; }
    100% { left: 100%; }
  }

  @keyframes borderFlow {
    0% { background-position: 0% 0%; }
    100% { background-position: 200% 0%; }
  }


  .main-quote {
    color: #ffffff;
    font-size: 1.4rem;
    font-style: italic;
    /* margin-top: 2rem; */
    text-align: center;
    text-shadow: 0 0 15px #00ff41;
    animation: fadeGlow 3s ease-in-out infinite alternate;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  @keyframes fadeGlow {
    from { text-shadow: 0 0 15px #00ff41; }
    to { text-shadow: 0 0 25px #00ff41, 0 0 35px rgba(0, 255, 65, 0.5); }
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
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid #00ff41;
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    box-shadow:
      0 0 30px rgba(0, 255, 65, 0.3),
      inset 0 0 30px rgba(0, 255, 65, 0.1);
    position: relative;
    transition: all 0.4s ease;
    backdrop-filter: blur(10px);
    animation: popIn 0.8s ease-out 0.2s both;
  }

  .profile-card::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(45deg, #00ff41, #ff0080, #00ff41, #ff0080);
    background-size: 400% 400%;
    border-radius: 12px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s;
    animation: gradientShift 8s ease infinite;
  }

  .profile-card:hover::before {
    opacity: 1;
  }

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  img.profile {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid #ff0080;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 0 20px rgba(255, 0, 128, 0.5);
  }

  img.profile:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 0 30px rgba(255, 0, 128, 0.8);
  }

  .name {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
    margin: 1rem 0 0.5rem;
    text-shadow: 0 0 10px #00ff41;
  }

  .role {
    color: #ff0080;
    font-size: 1.1rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .bio-section {
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid #ff0080;
    border-radius: 12px;
    padding: 2rem;
    line-height: 1.8;
    box-shadow:
      0 0 30px rgba(255, 0, 128, 0.3),
      inset 0 0 30px rgba(255, 0, 128, 0.1);
    transition: all 0.4s ease;
    backdrop-filter: blur(10px);
    position: relative;
    animation: popIn 0.8s ease-out 0.4s both;
  }

  .bio-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    padding: 2px;
    background: linear-gradient(45deg, #ff0080, #00ff41, #ff0080);
    background-size: 400% 400%;
    animation: gradientShift 8s ease infinite;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s;
  }

  .bio-section:hover::before {
    opacity: 1;
  }

  .bio-section h3 {
    color: #00ff41;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .bio-section p {
    margin-bottom: 1.5rem;
    color: #cccccc;
  }

  .terminal-section {
    background: rgba(0, 0, 0, 0.9);
    border: 2px solid #00ff41;
    border-radius: 12px;
    padding: 2rem;
    margin: 3rem 0;
    font-family: 'JetBrains Mono', monospace;
    position: relative;
    box-shadow:
      0 0 40px rgba(0, 255, 65, 0.3),
      inset 0 0 30px rgba(0, 255, 65, 0.05);
    transition: all 0.4s ease;
    backdrop-filter: blur(10px);
    animation: slideUp 0.8s ease-out 0.6s both;
  }

  .terminal-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #333;
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

  .dot.red { background: #ff5f56; }
  .dot.yellow { background: #ffbd2e; }
  .dot.green { background: #27ca3f; }

  .terminal-title {
    color: #00ff41;
    font-size: 0.9rem;
  }

  .quotes-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .quotes-list li {
    color: #00ff41;
    margin-bottom: 0.8rem;
    padding-left: 2rem;
    position: relative;
    transition: all 0.3s ease;
  }

  .quotes-list li::before {
    content: '>';
    position: absolute;
    left: 0;
    color: #ff0080;
    font-weight: bold;
  }

  .quotes-list li:hover {
    color: #ffffff;
    text-shadow: 0 0 5px #00ff41;
    transform: translateX(10px);
  }

  .section-title {
    color: #ff0080;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-shadow: 0 0 10px #ff0080;
  }

  footer {
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(26, 10, 26, 0.9) 100%);
    border-top: 2px solid #00ff41;
    color: #00ff41;
    text-align: center;
    padding: 2rem;
    margin-top: 3rem;
  }


  .recipe-section {
    background: linear-gradient(135deg, rgba(255, 0, 128, 0.15) 0%, rgba(0, 255, 65, 0.15) 100%);
    border: 3px solid #ff0080;
    border-radius: 16px;
    padding: 3rem 2rem;
    margin: 3rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow:
      0 0 50px rgba(255, 0, 128, 0.3),
      inset 0 0 40px rgba(0, 255, 65, 0.1);
    backdrop-filter: blur(10px);
    transition: all 0.4s ease;
    animation: popIn 0.8s ease-out 0.8s both;
  }

  .recipe-section::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(0, 255, 65, 0.05) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .recipe-header h2 {
    color: #ff0080;
    font-size: 2rem;
    margin-bottom: 2rem;
    text-shadow: 0 0 15px #ff0080;
    position: relative;
    z-index: 2;
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
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid #00ff41;
    border-radius: 8px;
    transition: all 0.3s ease;
    min-width: 120px;
  }

  .recipe-step:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 255, 65, 0.3);
    border-color: #ff0080;
  }

  .step-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .step-text {
    color: #ffffff;
    font-weight: 500;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .arrow {
    color: #00ff41;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 0 0 10px #00ff41;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.7; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.1); }
  }

  .recipe-motto {
    position: relative;
    z-index: 2;
  }

  .recipe-motto p {
    color: #cccccc;
    font-style: italic;
    font-size: 1.2rem;
    margin: 0 0 1rem 0;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }

  .fun-extras {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .blink {
    animation: blink 1.5s ease-in-out infinite;
    font-size: 1.5rem;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    25%, 75% { opacity: 0.3; }
  }

  .wiggle {
    color: #00ff41;
    font-weight: 500;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    animation: wiggle 2s ease-in-out infinite;
    text-shadow: 0 0 10px #00ff41;
  }

  @keyframes wiggle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-2deg); }
    75% { transform: rotate(2deg); }
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
  }
</style>



<!-- Matrix Rain Effect -->
<div class="matrix-rain">
  {#each matrixColumns as column}
    <div class="matrix-column" style="left: {column.x}px; top: {column.y}px;">
      {column.chars}
    </div>
  {/each}
</div>

<!-- Particle System -->
<div class="particles">
  {#each particles as particle}
    <div
      class="particle"
      style="
        left: {particle.x}%;
        top: {particle.y}%;
        width: {particle.size}px;
        height: {particle.size}px;
        opacity: {particle.opacity};
      "
    />
  {/each}
</div>

<!-- Sakura Petals -->
<div class="sakura-petals">
  {#each sakuraPetals as petal}
    <div
      class="sakura-petal"
      style="
        left: {petal.x}%;
        top: {petal.y}%;
        transform: rotate({petal.rotation}deg);
        font-size: {petal.size}px;
      "
    >
      🌸
    </div>
  {/each}
</div>

<!-- Floating Emojis -->
<div class="floating-emojis">
  {#each floatingEmojis as emoji, i}
    <div
      class="floating-emoji"
      style="
        left: {emoji.x}%;
        top: {emoji.y}%;
        font-size: {emoji.size}px;
        animation-duration: {emoji.duration}s;
        animation-delay: {i * 0.2}s;
      "
    >
      {emoji.emoji}
    </div>
  {/each}
</div>

<!-- Rainbow Stars -->
<div class="rainbow-stars">
  {#each rainbowStars as star}
    <div
      class="rainbow-star"
      style="
        left: {star.x}%;
        top: {star.y}%;
        animation-delay: {star.delay}s;
      "
    >
      ⭐
    </div>
  {/each}
</div>

<!-- Cursor Trail -->
<div class="cursor-trail">
  {#each cursorTrail as trail}
    <div
      class="trail-dot"
      style="
        left: {trail.x}px;
        top: {trail.y}px;
      "
    />
  {/each}
</div>

{#if terminalText}
  <div class="terminal-boot">{terminalText}</div>
{/if}

<header>
  <div class="main-quote glitch rainbow-text">
    "Stay curious, stay hungry, keep crushing it 🔥"
  </div>
</header>

<main>
  <div class="profile-section">
    <div class="profile-card">
      <img src="https://qitpydevpublic.s3.ap-southeast-1.amazonaws.com/qitpydevpfp010624.jpg" alt="Profile Picture" class="profile" />
      <div class="name glitch">Doan Van Quyet</div>
      <div class="role glitch">DevOps Engineer</div>
    </div>
    
    <div class="bio-section">
      <h3>🤡 A little bit about me</h3>
      <p>DevOps Engineer | Cloud Engineer | Platform Engineer.</p>
      <p>Just a dude who loves crushing code, building sick infrastructure, and making things work like magic. Let's go! 💪</p>
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
    
    <div class="section-title glitch">Real talk - lessons I live by 💯</div>
    <ul class="quotes-list">
      <li>Do everything with love, or don't do it at all. Go hard or go home! 🔥</li>
      <li>Chill out bro, stress is the silent killer. Keep your mind zen.</li>
      <li>Never stop learning - knowledge is literally power, no cap.</li>
      <li>Stand tall, think big. Your posture affects your attitude for real.</li>
      <li>Get your sleep, king. Can't conquer the world on 4 hours.</li>
      <li>Routines keep you sharp. Stay busy, stay hopeful, stay winning.</li>
      <li>Be proactive, not reactive. Make moves before you have to.</li>
      <li>Have a purpose, always. Even small goals keep you moving forward.</li>
      <li>If you're not having fun, you're doing it wrong. Period.</li>
      <li>Smart is good, but staying cool under pressure? That's the real flex.</li>
      <li>Knowledge sets you free - unlock that mental prison, bro.</li>
      <li>Your thoughts become your reality. Choose wisely. 🧠</li>
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
</main>

<footer>
  <p>© 2024 qitpy.com // ...Made with love ❤️ and coffee ☕</p>
</footer>
