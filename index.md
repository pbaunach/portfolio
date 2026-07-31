---
layout: default
title: Portfolio
description: Product Designer with 20+ years turning ambiguous, early-stage ideas into products people rely on, from startups to Fortune 500 enterprises.
---

<section class="home-hero">
  <div class="home-hero-inner">
    <h1 class="intro-headline">
      Designing from <span class="intro-emphasis">Zero to Scale</span>
    </h1>
    <div class="home-hero-body">
      <p class="intro-copy">
        I am a Product Designer with 20+ years of experience transforming highly ambiguous, early-stage ideas into products people rely on. Whether acting as a founding designer at early-stage startups or leading core product overhauls at Fortune 500 enterprises, I bridge the gap between high-level strategy and technical execution.
      </p>
      <dl class="home-hero-meta">
        <div class="hero-meta-row">
          <dt>What I'm up to</dt>
          <dd>Currently designing <a href="{{ '/orchard-career-counselor/' | relative_url }}" class="hero-meta-link">Orchard</a>, an AI-powered college and career readiness platform.</dd>
        </div>
        <div class="hero-meta-row">
          <dt>My approach</dt>
          <dd>Driven by design-led strategy, rapid AI-assisted prototyping, and hands-on technical tinkering.</dd>
        </div>
      </dl>
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

<section class="project-grid project-grid--split">
  <div class="project-grid-header">
    <h2 class="section-title">Project Highlight</h2>
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

    <!-- Aspireship card – hidden for now. The page itself is live at /aspireship/.
         When restoring this, change the section title above back to "Selected Work".
    <div class="project-card project-card--split project-card--horizontal project-card--for-work">
      <a href="{{ '/aspireship/' | relative_url }}" class="project-cover project-cover--aspireship project-cover--split-hero">
        <img src="{{ '/assets/img/aspireship-screens/Employer-01.png' | relative_url }}" alt="Aspireship product preview" class="project-cover-img">
      </a>
      <div class="project-body">
        <div class="project-meta-row">
          <span class="project-role-label">Head of Product &amp; Design</span>
        </div>
        <h3><a href="{{ '/aspireship/' | relative_url }}" class="project-card-title-link">Aspireship: The Career Change Marketplace</a></h3>
        <p class="project-summary">
          Scaling one product across four audiences: the independent learner, the enterprise team, the hiring employer, and the internal placement staff.
        </p>
        <p class="project-card-actions">
          <a href="{{ '/aspireship/' | relative_url }}" class="button button-primary">View the Screens</a>
        </p>
      </div>
    </div>
    -->
  </div>
</section>

<section class="project-grid project-grid--side">
  <div class="project-grid-header">
    <h2 class="section-title">Side Projects</h2>
    <p class="section-subtitle">
      I'm a builder at heart, so I'm always messing around with something new on the side. Here's a look at what I've been working on lately.
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
          <a href="https://telby.io/demo/editor/icon_3874d48b" class="button button-outline" target="_blank" rel="noopener noreferrer">View the Demo</a>
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
          <a href="https://unboundcodex.com/campaign/85191cdd-79da-4299-b4b9-3af4b44e4ac8/overview" class="button button-outline" target="_blank" rel="noopener noreferrer">View the Demo</a>
        </p>
      </div>
    </div>

  </div>
</section>

<section class="project-grid project-grid--archive">
  <div class="archive-header">
    <h2 class="section-title">Other Notable Projects</h2>
    <span class="archive-meta">03 / Archive</span>
  </div>
  <ol class="archive-list">
    <li class="archive-row">
      <span class="archive-num">01</span>
      <div class="archive-main">
        <h3 class="archive-title">Building a Shared Language <span class="archive-title-sub">(Project BFF)</span></h3>
        <p class="archive-desc">A platform-agnostic, CSS-based design system built from the ground up to unify a fragmented product suite and simplify design-to-eng handoff.</p>
      </div>
      <span class="archive-tag">Design Systems</span>
      <div class="archive-links">
        <a href="{{ '/design-system/' | relative_url }}" class="archive-link">System <span class="archive-link-arrow" aria-hidden="true">&rarr;</span></a>
        <a href="{{ '/bff/index.html' | relative_url }}" class="archive-link" target="_blank" rel="noopener noreferrer">Docs <span class="archive-link-arrow" aria-hidden="true">&#8599;</span></a>
      </div>
    </li>

    <li class="archive-row">
      <span class="archive-num">02</span>
      <div class="archive-main">
        <h3 class="archive-title">Brand Identity<span class="archive-title-sub">: Frederick &amp; Aspireship</span></h3>
        <p class="archive-desc">Brand evolution from a core mission and voice down to the tactical systems of color, type, and illustration. One cohesive, scalable visual story.</p>
      </div>
      <span class="archive-tag">Brand Strategy</span>
      <div class="archive-links">
        <a href="{{ '/brand-guidelines/' | relative_url }}" class="archive-link">Guidelines <span class="archive-link-arrow" aria-hidden="true">&rarr;</span></a>
      </div>
    </li>

    <li class="archive-row">
      <span class="archive-num">03</span>
      <div class="archive-main">
        <h3 class="archive-title">Harmonizing Personas<span class="archive-title-sub">: Frederick &amp; Mindbody</span></h3>
        <p class="archive-desc">Original, empathy-driven archetypes, integrated into the broader Mindbody platform post-acquisition to keep product decisions grounded in real needs.</p>
      </div>
      <span class="archive-tag">Research</span>
      <div class="archive-links">
        <a href="{{ '/user-personas/' | relative_url }}" class="archive-link">Personas <span class="archive-link-arrow" aria-hidden="true">&rarr;</span></a>
      </div>
    </li>

    <li class="archive-row">
      <span class="archive-num">04</span>
      <div class="archive-main">
        <h3 class="archive-title">Demo<span class="archive-title-sub">: Dreamforce '15</span></h3>
        <p class="archive-desc">Salesforce's first industry-vertical product, Financial Services Cloud, taken from story mapping to the live functional prototype presented on a global keynote stage.</p>
      </div>
      <span class="archive-tag">Prototyping</span>
      <div class="archive-links">
        <a href="{{ '/dreamforce-demo/' | relative_url }}" class="archive-link">Workflow <span class="archive-link-arrow" aria-hidden="true">&rarr;</span></a>
        <a href="{{ '/finserv/today/today/index.html' | relative_url }}" class="archive-link" target="_blank" rel="noopener noreferrer">Prototype <span class="archive-link-arrow" aria-hidden="true">&#8599;</span></a>
      </div>
    </li>
  </ol>
</section>
