<script>
  import { cvData as cv } from './cvData.js';
</script>

<div class="cv-root">

  <!-- HEADER -->
  <div class="cv-header">
    <h1>{cv.name}</h1>
    <p class="cv-subtitle">{cv.title}</p>
    <p class="cv-contact">
      {cv.contact.email} &nbsp;|&nbsp; {cv.contact.phone} &nbsp;|&nbsp; {cv.contact.location}
    </p>
    <p class="cv-contact">
      LinkedIn: {cv.contact.linkedin} &nbsp;|&nbsp; GitHub: {cv.contact.github}
    </p>
  </div>

  <!-- PROFESSIONAL SUMMARY -->
  <section>
    <div class="cv-section-head">
      <h2>Professional Summary</h2>
      <hr />
    </div>
    <p class="cv-summary">{cv.summary}</p>
  </section>

  <!-- TECHNICAL SKILLS -->
  <section>
    <div class="cv-section-head">
      <h2>Technical Skills</h2>
      <hr />
    </div>
    {#each cv.skills as group}
      <div class="skill-group-label">{group.group}</div>
      {#each group.items as skill}
        <div class="skill-row">
          <span class="skill-bullet">&bull;</span>
          <span><strong>{skill.label}:</strong> {skill.detail}</span>
        </div>
      {/each}
    {/each}
  </section>

  <!-- PROFESSIONAL EXPERIENCE -->
  <section>
    <div class="cv-section-head">
      <h2>Professional Experience</h2>
      <hr />
    </div>
    {#each cv.experience as job}
      <div class="entry">
        <div class="entry-title">{job.title}</div>
        <div class="entry-meta"><em>{job.company}</em> &nbsp;|&nbsp; {job.period}</div>
        <ul>
          {#each job.bullets as b}
            <li>{b}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </section>

  <!-- SIDE PROJECTS -->
  <section>
    <div class="cv-section-head">
      <h2>Side Projects</h2>
      <hr />
    </div>
    {#each cv.projects as proj}
      <div class="entry">
        <div class="entry-title">{proj.title}</div>
        <div class="entry-meta">
          <em>{proj.company}</em> &nbsp;|&nbsp; {proj.period}
          {#if proj.description}<br/><em class="entry-desc">{proj.description}</em>{/if}
        </div>
        <ul>
          {#each proj.bullets as b}
            <li>{b}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </section>

  <!-- ADDITIONAL INFORMATION -->
  <section>
    <div class="cv-section-head">
      <h2>Additional Information</h2>
      <hr />
    </div>
    {#each cv.additional as line}
      <div class="skill-row">
        <span class="skill-bullet">&bull;</span>
        <span>{line}</span>
      </div>
    {/each}
  </section>

</div>

<style>
  /* Override the cyberpunk global rule that sets position:relative on all elements */
  .cv-root :global(*) {
    position: static !important;
    z-index: auto !important;
    animation: none !important;
    text-shadow: none !important;
    box-shadow: none !important;
  }

  .cv-root {
    width: 210mm;
    min-height: 297mm;
    padding: 16mm 20mm;
    background: #ffffff;
    color: #1a1a1a;
    font-family: Calibri, 'Segoe UI', Arial, sans-serif;
    font-size: 10.5pt;
    line-height: 1.5;
    box-sizing: border-box;
  }

  /* ── Header ── */
  .cv-header {
    text-align: center;
    margin-bottom: 16px;
  }

  .cv-header h1 {
    font-size: 24pt;
    font-weight: 700;
    color: #1a4fa0;
    margin: 0 0 2px;
    letter-spacing: 1px;
  }

  .cv-subtitle {
    color: #555555;
    font-size: 12pt;
    margin: 2px 0;
  }

  .cv-contact {
    color: #444444;
    font-size: 9.5pt;
    margin: 2px 0;
  }

  /* ── Section headers ── */
  section {
    margin-bottom: 14px;
  }

  .cv-section-head {
    margin-bottom: 6px;
  }

  .cv-section-head h2 {
    font-size: 11pt;
    font-weight: 700;
    color: #1a4fa0;
    margin: 0 0 2px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .cv-section-head hr {
    border: none;
    border-top: 1.5px solid #1a4fa0;
    margin: 0;
  }

  /* ── Summary ── */
  .cv-summary {
    margin: 6px 0 0;
    font-size: 10pt;
    text-align: justify;
  }

  /* ── Skills ── */
  .skill-group-label {
    font-weight: 700;
    font-size: 10pt;
    margin: 6px 0 2px;
  }

  .skill-row {
    display: flex;
    gap: 6px;
    margin: 1px 0;
    font-size: 10pt;
  }

  .skill-bullet {
    flex-shrink: 0;
    padding-left: 8px;
  }

  /* ── Experience / Projects ── */
  .entry {
    margin-bottom: 10px;
    page-break-inside: avoid;
  }

  .entry-title {
    font-weight: 700;
    font-size: 10.5pt;
  }

  .entry-meta {
    font-size: 9.5pt;
    color: #444444;
    margin-bottom: 3px;
  }

  .entry-desc {
    color: #666666;
    font-size: 9pt;
  }

  ul {
    margin: 2px 0 0 8px;
    padding: 0;
    list-style: none;
  }

  ul li {
    font-size: 10pt;
    margin-bottom: 1px;
    padding-left: 12px;
    text-indent: -12px;
  }

  ul li::before {
    content: '\2022  ';
  }

  p {
    margin: 3px 0;
  }
</style>
