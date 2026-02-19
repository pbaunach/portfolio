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
        Well hello!<br><br>
        I'm <span class="intro-emphasis">Peter Baunach</span>, a <span class="intro-emphasis">Product Designer</span> and <span class="intro-emphasis">Strategist</span>. I'm a big believer in design-led strategy, rapid AI-assisted prototyping, and the philosophy that every iteration is another step toward finding the right answer.
      </p>
    </div>

    <div class="project-grid project-grid--case-study">
      <div class="project-grid-header">
        <h2 class="section-title">Product Case Study</h2>
      </div>

      <div class="project-grid-inner">
        <a href="{{ '/case-studies/orchard/' | relative_url }}" class="project-card project-card--feature">
          <div class="project-cover project-cover--orchard project-cover--logo-left">
            <img src="{{ '/assets/img/orchard-cover.png' | relative_url }}" alt="Orchard" class="project-cover-img">
          </div>
          <div class="project-body">
            <h3>Orchard: Embracing the Turbulence</h3>
            <p class="project-summary">
              Building a supportive mentor that helps students find clarity and assurance in an uncertain future.
            </p>
            <span class="button button-primary">Read Case Study</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

<section class="project-grid">
  <div class="project-grid-header">
    <h2 class="section-title">Other notable projects</h2>
    <p class="section-subtitle">
      This is a small selection of work focused on Design Systems, Brand Guidelines, Personas and Demos.
    </p>
  </div>
  <div class="project-grid-inner">
    <a href="{{ '/design-system/' | relative_url }}" class="project-card">
      <div class="project-cover project-cover--bff">
        <img src="{{ '/assets/img/bff-cover.png' | relative_url }}" alt="" class="project-cover-img">
      </div>
      <div class="project-body">
        <h3>Building a Shared Language (Project BFF)</h3>
        <p class="project-summary">
          I built a platform-agnostic, CSS-based design system from the ground up to unify a fragmented product suite. This project details how I established the architecture and components that scaled across our entire ecosystem, drastically simplifying the handoff between design and engineering.
        </p>
        <span class="button button-primary">View Design System</span>
      </div>
    </a>

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
        <h3>The Human Side of Acquisition: Frederick &amp; Mindbody</h3>
        <p class="project-summary">
          I developed original, empathy-driven archetypes at Frederick to ensure we truly understood our customers. After our acquisition, I led the work to integrate these personas into the broader Mindbody platform, ensuring our product decisions remained grounded in real user needs during the transition.
        </p>
        <span class="button button-primary">View Personas</span>
      </div>
    </a>

    <a href="{{ '/dreamforce-demo/' | relative_url }}" class="project-card">
      <div class="project-cover project-cover--financial">
        <img src="{{ '/assets/img/dreamforce-cover.png' | relative_url }}" alt="" class="project-cover-img">
      </div>
      <div class="project-body">
        <h3>Demo: Dreamforce '15</h3>
        <p class="project-summary">
          A high-profile demonstration of the Financial Services Cloud, Salesforce's first industry-vertical product. This project tracks the journey from initial story mapping and architecture to the live, high-fidelity functional prototype presented on stage for a global keynote audience.
        </p>
        <span class="button button-primary">View the Demo</span>
      </div>
    </a>
  </div>
</section>
