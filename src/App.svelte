<!-- src/App.svelte -->
<script>
  import { onMount } from 'svelte';
  
  let terminalText = '';
  const bootSequence = [
    'INITIALIZING SYSTEM...',
    'LOADING NEURAL NETWORK...',
    'ESTABLISHING SECURE CONNECTION...',
    'ACCESS GRANTED - WELCOME TO qitpy.dev',
    '> _'
  ];
  
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
  });
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
  }

  :global(*) {
    position: relative;
    z-index: 2;
  }

  .terminal-boot {
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid #00ff41;
    padding: 10px;
    font-size: 12px;
    max-width: 300px;
    white-space: pre-line;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
  }

  header {
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(26, 10, 26, 0.9) 100%);
    border-bottom: 2px solid #ff0080;
    padding: 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  header::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 0, 128, 0.1), transparent);
    animation: scan 3s infinite;
  }

  @keyframes scan {
    0% { left: -100%; }
    100% { left: 100%; }
  }

  h1 {
    font-size: 3rem;
    margin: 0;
    color: #ffffff;
    font-weight: 500;
  }

  .prompt {
    color: #00ff41;
    font-size: 1.2rem;
    margin-top: 10px;
  }

  .main-quote {
    color: #ffffff;
    font-size: 1.4rem;
    font-style: italic;
    margin-top: 2rem;
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
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid #00ff41;
    border-radius: 8px;
    padding: 2rem;
    text-align: center;
    box-shadow: 
      0 0 20px rgba(0, 255, 65, 0.2),
      inset 0 0 20px rgba(0, 255, 65, 0.1);
    position: relative;
  }

  .profile-card::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #00ff41, #ff0080, #00ff41);
    border-radius: 8px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .profile-card:hover::before {
    opacity: 1;
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
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid #ff0080;
    border-radius: 8px;
    padding: 2rem;
    line-height: 1.8;
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
    border-radius: 8px;
    padding: 2rem;
    margin: 3rem 0;
    font-family: 'JetBrains Mono', monospace;
    position: relative;
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

  .glitch {
    animation: glitch 0.3s infinite;
  }

  @keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
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
  }
</style>



{#if terminalText}
  <div class="terminal-boot">{terminalText}</div>
{/if}

<header>
  <h1>qitpydev.com</h1>
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
      <h3>// System Information</h3>
      <p>DevOps Engineer | Cloud Engineer | Platform Engineer.</p>
      <p>I architect and automate scalable infrastructure solutions.</p>
    </div>
  </div>

  <div class="terminal-section">
    <div class="terminal-header">
      <div class="terminal-dots">
        <div class="dot red"></div>
        <div class="dot yellow"></div>
        <div class="dot green"></div>
      </div>
      <div class="terminal-title">~/personal/notes.txt</div>
    </div>
    
    <div class="section-title">// Personal Directives</div>
    <ul class="quotes-list">
      <li>Do everything with the best.</li>
      <li>Keep mind relax.</li>
      <li>Keep update.</li>
      <li>Change your posture, change your attitude.</li>
      <li>Sleep enough before doing anything.</li>
      <li>Routines, busy-ness and hope matter a lot.</li>
      <li>Proactive when needed.</li>
      <li>Have a purpose at least in each period of life.</li>
      <li>Find the fun in what you're doing.</li>
      <li>balancing intelligence with emotional control, ensuring that rationality, not just insight, dictates how you act.</li>
      <li>No rest time, just do something else!!!</li>
    </ul>
  </div>
</main>

<footer>
  <p>© 2024 qitpy.dev // Connection Terminated</p>
</footer>
