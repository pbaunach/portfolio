---
layout: default
title: Portfolio
description: Staff Product Designer focused on 0→1 AI products. 20+ years bridging strategy and execution across startups and Fortune 500 enterprises.
---

<section class="home-hero">
  <div class="home-hero-gradient" aria-hidden="true"></div>
  <div class="home-hero-dots parallax-hero-dots" aria-hidden="true"></div>
  <div class="home-hero-inner">
    <div class="intro">
      <h1 class="intro-headline">
        I design and build the <span class="intro-emphasis">0 &rarr; 1</span> products that don't exist yet.
      </h1>
      <p class="intro-copy">
        20+ years bridging strategy and execution, from early-stage startups to Fortune 500 enterprises. Currently designing <span class="intro-emphasis">Orchard</span>, an AI College and Career Readiness counselor for high schoolers. Big believer in design-led strategy, rapid AI-assisted prototyping, and tinkering with the latest technology.
      </p>
    </div>

    <div class="project-grid project-grid--split">
      <div class="project-grid-header">
        <h2 class="section-title">Project Highlights</h2>
      </div>

      <div class="project-grid-inner">
        <div class="project-card project-card--split project-card--horizontal project-card--for-work">
          <a href="{{ '/orchard-career-counselor/' | relative_url }}" class="project-cover project-cover--orchard project-cover--split-hero">
            <img src="{{ '/assets/img/orchard-screens-v2/Orchard-Card.png' | relative_url }}" alt="Orchard product preview" class="project-cover-img">
          </a>
          <div class="project-body">
            <div class="project-meta-row">
              <span class="project-role-label">Head of Product &amp; Design</span>
            </div>
            <h3><a href="{{ '/orchard-career-counselor/' | relative_url }}" class="project-card-title-link">Orchard: The AI Career Readiness Platform</a></h3>
            <p class="project-summary">
              Leading 0&rarr;1 design for an AI mentor that helps high schoolers find clarity and assurance in an uncertain future.
            </p>
            <p class="project-card-actions">
              <a href="{{ '/orchard-career-counselor/' | relative_url }}" class="button button-primary">View the Screens</a>
              <a href="https://orchie-v2-prototype-git-main-peebs-explorations.vercel.app/desk" class="button button-outline" target="_blank" rel="noopener noreferrer">View the Prototype</a>
            </p>
          </div>
        </div>

        <!--
        Hidden for now: Unbound Codex card. Uncomment to restore.
        <a href="{{ '/unbound-codex/' | relative_url }}" class="project-card project-card--split project-card--for-fun">
          <div class="project-cover project-cover--unbound project-cover--split-hero">
            <img src="{{ '/assets/img/unbound-codex/card.png' | relative_url }}" alt="The Unbound Codex" class="project-cover-img">
          </div>
          <div class="project-body">
            <div class="project-meta-row">
              <span class="project-status-chip project-status-chip--exploring">Exploring</span>
              <span class="project-role-label">Self-Directed</span>
            </div>
            <h3>The Unbound Codex</h3>
            <p class="project-summary">
              A living campaign codex for D&amp;D Dungeon Masters, with an AI archivist named Silias who keeps prep and play in one workflow.
            </p>
            <span class="button button-explore">View the Story</span>
          </div>
        </a>
        -->
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

<section class="project-grid project-grid--side">
  <div class="project-grid-header">
    <h2 class="section-title">Side Projects</h2>
    <p class="section-subtitle">
      Nights-and-weekends builds where I push on agent architectures and AI-assisted workflows. Shipped, live, and still evolving.
    </p>
  </div>
  <div class="project-grid-inner project-grid-inner--side">

    <div class="side-card">
      <a href="{{ '/telby-icon-builder/' | relative_url }}" class="side-card-cover side-card-cover--telby" aria-label="View the Telby deep dive">
        <span class="side-card-placeholder">Telby<span class="side-card-placeholder-dot">.</span></span>
        <img src="{{ '/assets/img/telby/card.png' | relative_url }}" alt="Telby.io icon editor" class="side-card-img" onerror="this.remove()">
      </a>
      <div class="side-card-body">
        <div class="side-card-meta">
          <span class="side-card-role">AI SVG Icon Builder</span>
        </div>
        <h3 class="side-card-title">
          <a href="{{ '/telby-icon-builder/' | relative_url }}">Telby</a>
        </h3>
        <p class="side-card-summary">
          A builder&ndash;critic agent loop: an enriched prompt is human-reviewed, generated, then scored by a vision model against a temperature threshold. Shipped on pass, or looped back with notes to iterate.
        </p>
        <p class="project-card-actions side-card-actions">
          <a href="{{ '/telby-icon-builder/' | relative_url }}" class="button button-primary">View the Deep Dive</a>
          <a href="https://telby.io/demo/editor/icon_3874d48b" class="button button-outline" target="_blank" rel="noopener noreferrer">Visit telby.io</a>
        </p>
      </div>
    </div>

    <div class="side-card">
      <a href="{{ '/unbound-codex/' | relative_url }}" class="side-card-cover side-card-cover--unbound" aria-label="View the Unbound Codex deep dive">
        <span class="side-card-placeholder">Unbound Codex<span class="side-card-placeholder-dot">.</span></span>
        <img src="{{ '/assets/img/unbound-codex/portfolio-card.png' | relative_url }}" alt="The Unbound Codex campaign dashboard" class="side-card-img" onerror="this.remove()">
      </a>
      <div class="side-card-body">
        <div class="side-card-meta">
          <span class="side-card-role">RAG-Based TTRPG Agent</span>
        </div>
        <h3 class="side-card-title">
          <a href="{{ '/unbound-codex/' | relative_url }}">Unbound Codex</a>
        </h3>
        <p class="side-card-summary">
          A game-mastering agent using vectorized rulesets and human-in-the-loop workflows to minimize hallucinations and co-author a cohesive narrative.
        </p>
        <p class="project-card-actions side-card-actions">
          <a href="{{ '/unbound-codex/' | relative_url }}" class="button button-primary">View the Deep Dive</a>
          <a href="https://unboundcodex.com" class="button button-outline" target="_blank" rel="noopener noreferrer">Visit the Site</a>
        </p>
      </div>
    </div>

  </div>
</section>

<section class="project-grid">
  <div class="project-grid-header">
    <h2 class="section-title">Other Notable Projects</h2>
    <p class="section-subtitle">
      Foundation work across design systems, brand strategy, research, and prototyping.
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
