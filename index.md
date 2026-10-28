---
layout: default
title: Portfolio
description: Product & Design Leader with 20 years of experience building 0-to-1 web apps and AI interfaces. Expertise in AI interface design, design systems, vectorized RAG agents, and human-in-the-loop workflows.
# Hero wipe: cri (Orchard's CRI draft to the shipped Growth Report) or salon (Frederick brand illustration)
wipe: cri
extra_css: [/assets/css/live-work.css, /assets/css/home.css]
extra_js: [/assets/js/live-work.js]
---
{%- assign ill = '/assets/img/illustrations/' | relative_url -%}
{%- if page.wipe == 'salon' -%}
  {%- assign wipe_under = 'salon-line.png' -%}{%- assign wipe_over = 'salon-color.png' -%}{%- assign wipe_ratio = '1301 / 750' -%}
  {%- assign wipe_under_alt = 'Wireframe line drawing of a salon storefront' -%}
  {%- assign wipe_over_alt = 'The same salon storefront, finished in full color with Frederick and two customers out front' -%}
  {%- assign wipe_label = 'Compare the wireframe and the finished illustration' -%}
  {%- assign wipe_source = 'Frederick brand system' -%}
{%- else -%}
  {%- assign wipe_under = 'wipe-cri-sketch.png' -%}{%- assign wipe_over = 'wipe-cri-shipped.png' -%}{%- assign wipe_ratio = '1461 / 960' -%}
  {%- assign wipe_under_alt = 'The working artboard for the Career Readiness Index: a levelled rubric, the eight pillar definitions, and a radar chart sketch' -%}
  {%- assign wipe_over_alt = 'The shipped Growth Report in Orchard: the radar chart, a score of 203 out of 400, and a card for each of the eight pillars' -%}
  {%- assign wipe_label = 'Compare the Career Readiness Index draft and the shipped Growth Report' -%}
  {%- assign wipe_source = "Orchard’s Career Readiness Index" -%}
{%- endif -%}

<section class="home-hero">
  <div class="home-hero-inner">
    <div class="home-hero-split">
      <div class="home-hero-copy">
        <h1 class="intro-headline intro-headline--stacked">
          <span class="intro-line">From <span class="intro-proto">Prototype</span></span>
          <span class="intro-line">to <span class="intro-prod">Production</span></span>
        </h1>
        <p class="intro-copy">
          20 years of 0-to-1 web apps, and lately, AI interfaces that know when to hand the wheel back to a human.
        </p>
      </div>
      <figure class="hero-wipe-wrap">
        <div class="hero-wipe" data-wipe tabindex="0" role="slider" aria-label="{{ wipe_label }}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" style="--ratio: {{ wipe_ratio }}">
          <img src="{{ ill }}{{ wipe_under }}" alt="{{ wipe_under_alt }}" draggable="false">
          <img class="hero-wipe-top" src="{{ ill }}{{ wipe_over }}" alt="{{ wipe_over_alt }}" draggable="false">
          <div class="hero-wipe-bar" aria-hidden="true">
            <span class="hero-wipe-knob"><svg viewBox="0 0 24 24" focusable="false"><polyline points="9 6 3 12 9 18"></polyline><polyline points="15 6 21 12 15 18"></polyline></svg></span>
          </div>
          <span class="hero-wipe-tag hero-wipe-tag--l" aria-hidden="true">Idea</span>
          <span class="hero-wipe-tag hero-wipe-tag--r" aria-hidden="true">Production</span>
        </div>
        <figcaption class="hero-wipe-cap">{{ wipe_source }}</figcaption>
      </figure>
    </div>
    <div class="gh-chart-mount" data-username="pbaunach"></div>
  </div>
</section>

<section class="project-grid project-grid--split" id="projects" aria-labelledby="hl-title">
  <header class="home-head">
    <h2 class="home-title" id="hl-title">Project Highlights</h2>
    <p class="home-intro">The most recent products I&rsquo;ve led 0-to-1.</p>
  </header>

  <div class="project-grid-inner">
    <div class="project-card project-card--split project-card--for-work">
      <a href="{{ '/orchard-career-counselor/' | relative_url }}" class="project-cover project-cover--orchard project-cover--split-hero">
        <img src="{{ '/assets/img/orchard-cover.png' | relative_url }}" alt="Orchard Growth Report on desktop and the weekly summary on mobile" class="project-cover-img">
      </a>
      <div class="project-body">
        <h3><a href="{{ '/orchard-career-counselor/' | relative_url }}" class="project-card-title-link">Orchard: The AI Career Readiness Platform</a></h3>
        <p class="project-role-label">Head of Product &amp; Design</p>
        <p class="project-summary">
          An AI mentor that helps high schoolers find clarity and assurance in an uncertain future, plus a readiness score that shows them how they&rsquo;re growing.
        </p>
        <p class="project-card-actions">
          <a href="{{ '/orchard-career-counselor/' | relative_url }}" class="button button-primary">View the Screens</a>
          <a href="{{ '/deck/problem-solving-process.html' | relative_url }}" class="button button-outline">The Design Process</a>
        </p>
      </div>
    </div>

    <div class="project-card project-card--split project-card--for-work">
      <a href="{{ '/aspireship/' | relative_url }}" class="project-cover project-cover--aspireship project-cover--split-hero">
        <img src="{{ '/assets/img/aspireship-screens/Employer-01-matches.png' | relative_url }}" alt="An employer's Matches screen in Aspireship: two Staff Pick candidates with their photos, target role, location, Aspireship achievements and Interested or Not Interested buttons" class="project-cover-img">
      </a>
      <div class="project-body">
        <h3><a href="{{ '/aspireship/' | relative_url }}" class="project-card-title-link">Aspireship: The Career Change Marketplace</a></h3>
        <p class="project-role-label">Head of Product &amp; Design</p>
        <p class="project-summary">
          Scaling one product across four audiences: the independent learner, the enterprise team, the hiring employer, and the internal placement staff.
        </p>
        <p class="project-card-actions">
          <a href="{{ '/aspireship/' | relative_url }}" class="button button-primary">View the Screens</a>
        </p>
      </div>
    </div>
  </div>
</section>

<section class="lab" id="lab" aria-labelledby="lab-title">
  <div class="lab-panel">
    <header class="home-head">
      <h2 class="home-title" id="lab-title">The Lab</h2>
      <p class="home-intro">I&rsquo;m a builder at heart, so there&rsquo;s always something new on the bench. Here&rsquo;s what I&rsquo;ve been working on lately.</p>
    </header>

    <div class="lab-grid">
      <article class="lab-card lab-card--wide">
        <div class="lab-poster lab-poster--live" aria-hidden="true">
          {% include demos/va-loop.html log_only=true %}
        </div>
        <div class="lab-card-copy">
          <h3 class="lab-name"><a href="{{ '/case-studies/vector-agent/' | relative_url }}" class="lab-link">VectorAgent</a></h3>
          <span class="lab-kind">Agent-to-agent payments</span>
          <p class="lab-tagline">Can an AI agent buy something on its own and prove it owns it?</p>
          <p class="lab-desc">An icon store where AI agents pay their own way, a fraction of a cent at a time. Each payment doubles as proof of ownership. In four blind tests, all four agents used it, and two paid.</p>
          <p class="lab-actions">
            <span class="button button-primary" aria-hidden="true">View the Case Study</span>
            <a href="https://vectoragent.telby.io/" class="button button-outline" target="_blank" rel="noopener noreferrer">Try it out</a>
          </p>
        </div>
      </article>

      <article class="lab-card lab-card--wide lab-card--flip">
        <div class="lab-poster" aria-hidden="true">
          <img src="https://telby.io/walkthrough/telby-walkthrough-poster.jpg" alt="" loading="lazy">
        </div>
        <div class="lab-card-copy">
          <h3 class="lab-name"><a href="{{ '/telby-icon-builder/' | relative_url }}" class="lab-link">Telby</a></h3>
          <span class="lab-kind">AI SVG icon builder</span>
          <p class="lab-tagline">Icon sets drift. I wanted one that couldn&rsquo;t.</p>
          <p class="lab-desc">You know the folder. One icon is a little heavier than the rest, one blue is almost right, and three files are called &ldquo;final.&rdquo; Telby is my side project to fix that.</p>
          <p class="lab-actions">
            <span class="button button-primary" aria-hidden="true">View the Screens</span>
            <a href="https://telby.io/demo/editor/icon_3874d48b" class="button button-outline" target="_blank" rel="noopener noreferrer">Try the demo</a>
          </p>
        </div>
      </article>

      <article class="lab-card lab-card--wide">
        <div class="lab-poster" aria-hidden="true">
          <img src="{{ '/assets/img/unbound-codex/portfolio-card.png' | relative_url }}" alt="" loading="lazy">
        </div>
        <div class="lab-card-copy">
          <h3 class="lab-name"><a href="{{ '/unbound-codex/' | relative_url }}" class="lab-link">Unbound Codex</a></h3>
          <span class="lab-kind">RAG-based TTRPG agent</span>
          <p class="lab-tagline">I wanted an AI that remembers my campaign, not one that writes it.</p>
          <p class="lab-desc">Run a campaign long enough and you forget half of what you made up. Most AI tools fill the gaps by inventing more. Unbound Codex is my side project that does the opposite.</p>
          <p class="lab-actions">
            <span class="button button-primary" aria-hidden="true">View the Screens</span>
            <a href="https://unboundcodex.com/campaign/85191cdd-79da-4299-b4b9-3af4b44e4ac8/overview" class="button button-outline" target="_blank" rel="noopener noreferrer">Try the demo</a>
          </p>
        </div>
      </article>
    </div>
  </div>
</section>

<script src="{{ '/assets/js/home-wipe.js' | relative_url }}" defer></script>

<section class="project-grid project-grid--archive" id="artifacts">
  <div class="archive-header">
    <h2 class="section-title">Artifacts</h2>
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
        <h3 class="archive-title">Harmonizing Personas<span class="archive-title-sub">: Frederick &amp; MINDBODY</span></h3>
        <p class="archive-desc">Original, empathy-driven archetypes, integrated into the broader MINDBODY platform post-acquisition to keep product decisions grounded in real needs.</p>
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
