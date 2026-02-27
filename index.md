---
layout: default
title: Portfolio
description: Senior-level product design portfolio featuring 0-to-1 product work and high-impact case studies.
---

<section class="home-hero">
  <div class="home-hero-gradient" aria-hidden="true"></div>
  <div class="home-hero-dots parallax-hero-dots" aria-hidden="true"></div>
  <div class="home-hero-inner">
    <div class="intro">
      <p class="intro-copy">
        Greetings!<br><br>
        I'm <span class="intro-emphasis">Peter Baunach</span>, a <span class="intro-emphasis">Product Designer</span> and <span class="intro-emphasis">Strategist</span>. I'm a big believer in design-led strategy, rapid AI-assisted prototyping, and the philosophy that every iteration is another step toward finding the right answer.
      </p>
    </div>

    <div class="project-grid project-grid--case-study">
      <div class="project-grid-header">
        <h2 class="section-title">Project Highlight</h2>
      </div>

      <div class="project-grid-inner">
        <div class="project-card project-card--feature">
          <a href="{{ '/case-studies/orchard/' | relative_url }}" class="project-cover project-cover--orchard project-cover--logo-left">
            <img src="{{ '/assets/img/orchard-cover.png' | relative_url }}" alt="Orchard" class="project-cover-img">
          </a>
          <div class="project-body">
            <h3><a href="{{ '/case-studies/orchard/' | relative_url }}" class="project-card-title-link">Orchard: The AI Career Readiness Platform</a></h3>
            <p class="project-summary">
              Building a supportive mentor that helps students find clarity and assurance in an uncertain future.
            </p>
            <p class="project-card-actions">
              <a href="{{ '/orchard-career-counselor/' | relative_url }}" class="button button-primary">View the Screens</a>
            </p>
            <p class="project-card-actions">
              <a href="{{ '/case-studies/orchard/' | relative_url }}" class="button button-outline">Read the Case Study</a>
              <a href="{{ '/orchard-prototype/gate.html' | relative_url }}" class="button button-outline" target="_blank" rel="noopener noreferrer">View the Prototype</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Passion Project / DnD builder – hidden for now, add back later
<section class="project-grid">
  <div class="project-grid-header">
    <h2 class="section-title">Passion Project</h2>
    <p class="section-subtitle">
      I'm a builder at heart and I enjoy letting my curiosity run free during my off time. Here is a "What if?" exploration where I used my own hobbies as a playground to test new patterns and imagine better futures for the products I love.
    </p>
  </div>
  <div class="project-grid-inner">
    <a href="{{ '/dnd-campaign-builder/' | relative_url }}" class="project-card project-card--dnd">
      <div class="project-cover project-cover--dnd">
        <img src="{{ '/assets/img/dnd-cover.png' | relative_url }}" alt="" class="project-cover-img">
      </div>
      <div class="project-body">
        <h3>The Storyteller's Codex: Optimizing Lore and Logic</h3>
        <p class="project-summary">
          I started this project with a simple question: How can we make world-building more immersive while keeping essential data instantly accessible? This concept explores a unified interface that bridges the gap between lore and mechanics.
        </p>
        <span class="button button-campaign">View the Story</span>
      </div>
    </a>
  </div>
</section>
-->

<section class="project-grid">
  <div class="project-grid-header">
    <h2 class="section-title">Other notable projects</h2>
    <p class="section-subtitle">
      This is a small selection of work focused on Design Systems, Brand Guidelines, Personas and Demos.
    </p>
  </div>
  <div class="project-grid-inner">
    <div class="project-card">
      <div class="project-cover project-cover--bff">
        <img src="{{ '/assets/img/bff-cover.png' | relative_url }}" alt="" class="project-cover-img">
      </div>
      <div class="project-body">
        <h3>Building a Shared Language (Project BFF)</h3>
        <p class="project-summary">
          I built a platform-agnostic, CSS-based design system from the ground up to unify a fragmented product suite. This project details how I established the architecture and components that scaled across our entire ecosystem, drastically simplifying the handoff between design and engineering.
        </p>
        <p class="project-card-actions">
          <a href="{{ '/design-system/' | relative_url }}" class="button button-primary">View Design System</a>
          <a href="{{ '/bff/index.html' | relative_url }}" class="button button-outline" target="_blank" rel="noopener noreferrer">View Documentation</a>
        </p>
      </div>
    </div>

    <a href="{{ '/brand-guidelines/' | relative_url }}" class="project-card">
      <div class="project-cover project-cover--frederick">
        <img src="{{ '/assets/img/fred+aspire-cover.png' | relative_url }}" alt="" class="project-cover-img">
      </div>
      <div class="project-body">
        <h3>Brand Identity: Frederick &amp; Aspireship</h3>
        <p class="project-summary">
          I led the evolution of our brand from a core mission and voice down to the tactical systems of color, type, and illustration. This project shows how I created a cohesive visual story that aligns our high-level business goals with a scalable, everyday design language.
        </p>
        <span class="button button-primary">View Brand Guidelines</span>
      </div>
    </a>

    <a href="{{ '/user-personas/' | relative_url }}" class="project-card">
      <div class="project-cover project-cover--personas">
        <img src="{{ '/assets/img/personas-cover.png' | relative_url }}" alt="" class="project-cover-img">
      </div>
      <div class="project-body">
        <h3>Harmonizing Personas for an Evolving Ecosystem: Frederick &amp; Mindbody</h3>
        <p class="project-summary">
          I developed original, empathy-driven archetypes at Frederick to ensure we truly understood our customers. After our acquisition, I led the work to integrate these personas into the broader Mindbody platform, ensuring our product decisions remained grounded in real user needs during the transition.
        </p>
        <span class="button button-primary">View Personas</span>
      </div>
    </a>

    <div class="project-card">
      <div class="project-cover project-cover--financial">
        <img src="{{ '/assets/img/dreamforce-cover.png' | relative_url }}" alt="" class="project-cover-img">
      </div>
      <div class="project-body">
        <h3>Demo: Dreamforce '15</h3>
        <p class="project-summary">
          A high-profile demonstration of the Financial Services Cloud, Salesforce's first industry-vertical product. This project tracks the journey from initial story mapping and architecture to the live, high-fidelity functional prototype presented on stage for a global keynote audience.
        </p>
        <p class="project-card-actions">
          <a href="{{ '/dreamforce-demo/' | relative_url }}" class="button button-primary">View Workflow</a>
          <a href="{{ '/finserv/today/today/gate.html' | relative_url }}" class="button button-outline" target="_blank" rel="noopener noreferrer">View Prototype</a>
        </p>
      </div>
    </div>
  </div>
</section>
