<!-- src/App.svelte -->
<script>
  // Script content can be added here if needed
</script>

<style>
  /* General styles */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #333; /* Dark background color */
    color: #f7f7f7; /* Default text color */
  }

  /* Header styles */
  header {
    background-color: #222; /* Darker header background color */
    color: #fff;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1); /* Adjusted shadow color */
  }

  /* Navigation styles */
  nav a {
    color: #fff;
    margin: 0 1rem;
    text-decoration: none;
    cursor: pointer;
  }
  nav a:hover {
    text-decoration: underline;
  }

  /* Main content styles */
  main {
    padding: 2rem;
  }

  /* Profile image styles */
  img.profile {
    max-width: 150px;
    border-radius: 30%;
    display: block;
    margin: 1rem auto;
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1); /* Adjusted shadow color */
    transition: transform 0.3s ease;
  }
  img.profile:hover {
    transform: scale(1.1);
  }

  /* Paragraph styles */
  p {
    line-height: 1.6; /* Improved readability with slightly increased line height */
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .quote {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
  }

  .intro {
    margin: 2rem 20rem 3rem;
  }

  /* Footer styles */
  footer {
    background-color: #222; /* Darker footer background color */
    color: #fff;
    text-align: center;
    padding: 1rem;
    bottom: 0;
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1); /* Adjusted shadow color */
  }

    header {
    background-color: #222; /* Darker header background color */
    color: #fff;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1); /* Adjusted shadow color */
  }
</style>



<header>
  <h1>Helloo!!</h1>
</header>

<main>
  <section>
      <img src="https://qitpydevpublic.s3.ap-southeast-1.amazonaws.com/qitpydevpfp010624.jpg" alt="Profile Picture" class="profile" />
      <div class='title'>
        <h2><strong>Doan Van Quyet</strong></h2>
        <b>Software Developer</b>
      </div>

      <div class='intro'>
        <p>I am software developer with a focus on DevOps, hailing from Vietnam. Specializing in crafting robust CI/CD pipelines and scalable infrastructure, I am dedicated to streamlining development processes and ensuring reliable deployments.
        <p>Having started my journey as a backend developer, I seamlessly transitioned into the world of DevOps, where I excel in building and automating CI/CD pipelines. With a keen eye for efficiency and security, I leverage the latest open-source tools to create seamless workflows for developers.</p>
        <p>Beyond CI/CD, I am also adept at designing and managing scalable infrastructure. Whether it's deploying applications on AWS, managing containers with Kubernetes, or optimizing cloud resources, I am committed to architecting solutions that are both reliable and scalable, ensuring smooth operations for businesses of all sizes.</p>
      </div>

      <div class='quote'>
        <h4>Notes for me</h4>
        <ul>
          <ol>Do everything with the best.</ol>
          <ol>Keep mind relax.</ol>
          <ol>Keep update.</ol>
          <ol>Change your posture, change your attitude.</ol>
          <ol>Sleep enough before doing anything.</ol>
          <ol>Routines, busy-ness and hope matter a lot.</ol>
          <ol>Proactive when needed.</ol>
          <ol>Have a purpose at least in each period of life.</ol>
          <ol>Find the fun in what you're doing.</ol>
          <ol>balancing intelligence with emotional control, ensuring that rationality, not just insight, dictates how you act.</ol>
        </ul>
      </div>
  </section>
</main>

<footer>
  <p>&copy; 2024 Quyet</p>
  <p>How are you today? ... I don't care 🤣</p>
</footer>
