---
title: "Telby: The Living Icon Design System"
layout: case-study
---

<section class="case-study-section case-study-intro case-study-intro--telby-screens-hero case-study-intro--editorial">
  <div class="case-study-section-inner">
    <div class="editorial-hero">
      <h1 class="editorial-hero-title">
        Telby: the <span class="editorial-hero-accent">living</span> icon design system
      </h1>
      <p class="editorial-hero-meta">
        <span>Solo &mdash; Design &amp; Engineering</span>
        <span class="editorial-hero-meta-sep" aria-hidden="true">|</span>
        <span>0&rarr;1</span>
        <span class="editorial-hero-meta-sep" aria-hidden="true">|</span>
        <span>2025&ndash;26</span>
      </p>
    </div>
  </div>
  <figure class="case-study-hero-image">
    <img src="{{ '/assets/img/telby/hero.png' | relative_url }}" alt="Telby landing: one token change, every icon updates with it">
  </figure>
</section>

<section class="case-study-thesis case-study-thesis--editorial" aria-label="Project thesis">
  <div class="case-study-thesis-inner">
    <p class="case-study-thesis-eyebrow">The Drift Problem</p>
    <p class="case-study-thesis-quote">An icon set isn't a folder of SVGs. It's a system, and systems <span class="thesis-accent">drift</span>.</p>
    <div class="thesis-cards">
      <a href="#tokens" class="thesis-card">
        <span class="thesis-card-num">01</span>
        <h3 class="thesis-card-title">A living token system</h3>
        <p class="thesis-card-desc">Every icon binds to shared tokens. Change one value and the whole set restyles in place.</p>
      </a>
      <a href="#ai" class="thesis-card">
        <span class="thesis-card-num">02</span>
        <h3 class="thesis-card-title">An AI that stays in the lines</h3>
        <p class="thesis-card-desc">Describe an icon. A builder drafts it, a vision critic scores it, and it refines until it fits your system.</p>
      </a>
      <a href="#surface" class="thesis-card">
        <span class="thesis-card-num">03</span>
        <h3 class="thesis-card-title">One surface, draw to ship</h3>
        <p class="thesis-card-desc">The canvas you draw on is the one that publishes. No re-export step, nothing to drift.</p>
      </a>
    </div>
  </div>
</section>

<section class="case-study-act" id="tokens" aria-label="Section 1">
  <div class="case-study-act-inner">
    <div class="case-study-act-number">01</div>
    <div class="case-study-act-content">
      <h2 class="case-study-act-title">A living token system</h2>
      <p class="case-study-act-intro">Most icon libraries bake a hex value and a stroke width into every file, so a rebrand means editing hundreds of SVGs by hand. Telby binds each icon to a shared contract of tokens instead. Change a token once and every icon that references it restyles together, across every theme, weight, and size.</p>
    </div>
  </div>
</section>

<section class="major-section">
  <div class="major-section-inner major-section-inner--wide">
    <div class="subsection">
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/telby/tokens-ledger.png' | relative_url }}" alt="Token ledger with modes as columns">
          <span class="cs-callout-marker" style="--x: 20%; --y: 19%;">1</span>
          <span class="cs-callout-marker" style="--x: 45%; --y: 32%;">2</span>
          <span class="cs-callout-marker" style="--x: 15%; --y: 44%;">3</span>
          <span class="cs-callout-marker" style="--x: 60%; --y: 57%;">4</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> The ledger is the contract every icon binds to. I made "edit a value and it cascades to every icon using it" the headline of the page, because that single behavior is the entire reason Telby exists.</li>
          <li><span class="cs-callout-num">2</span> Modes are columns, not separate files. Light, dark, and brand sit side by side so you author a theme by scanning down a column, and a new theme is one "＋ Add theme" away instead of a fork of the whole set.</li>
          <li><span class="cs-callout-num">3</span> Every token shows its usage count. "primary" reads 100, it's the ink in all hundred icons, so before you touch a value you can see exactly how much of the set it moves instead of restyling everything by surprise.</li>
          <li><span class="cs-callout-num">4</span> Cells inherit until overridden. "secondary" simply follows "primary" (the ↳), and dark only diverges where you say so, so the common case is empty and the exceptions are the only thing you maintain.</li>
        </ol>
      </div>

      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/telby/tokens-roles.png' | relative_url }}" alt="Semantic roles mapping shape parts to tokens, with a duotone mode">
          <span class="cs-callout-marker" style="--x: 20%; --y: 12%;">1</span>
          <span class="cs-callout-marker" style="--x: 28%; --y: 24%;">2</span>
          <span class="cs-callout-marker" style="--x: 42%; --y: 30%;">3</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> Roles are the parts a shape plays, "the accent," "the outline," assigned in the editor and mapped to a token here. This is the layer that lets the assistant and bulk edits reason about an icon instead of poking at raw hex values.</li>
          <li><span class="cs-callout-num">2</span> There's a "where new shapes start" default, so every shape you draw is already system-bound. You opt out of the system deliberately (a detached shape follows no role); you never have to remember to opt in.</li>
          <li><span class="cs-callout-num">3</span> Adding a mode to a role is how duotone works. The accent role maps to "secondary" in mono and re-points to the "spot" hue in duo, so the same 100 drawings render as flat outlines or two-tone without a second copy. It replaced an earlier hack that faked two-color icons with token aliases.</li>
        </ol>
      </div>

      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/telby/tokens-ladder.png' | relative_url }}" alt="Stroke width tokens, corner radius, and the stroke-ladder crispness validator">
          <span class="cs-callout-marker" style="--x: 24%; --y: 27%;">1</span>
          <span class="cs-callout-marker" style="--x: 12%; --y: 52%;">2</span>
          <span class="cs-callout-marker" style="--x: 12%; --y: 76%;">3</span>
          <span class="cs-callout-marker" style="--x: 50%; --y: 86%;">4</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> Stroke weight is a token too, "thin / normal / thick," not a number typed into each path. An icon set with a coherent weight ramp is one of the things that separates a real library from a pile of exports.</li>
          <li><span class="cs-callout-num">2</span> Radius is a shared scalar on the same footing as color and stroke. The softness of every corner in the set is one value, so "make the whole family a touch rounder" is a single edit.</li>
          <li><span class="cs-callout-num">3</span> The stroke ladder validates the whole weight scale at once. A green/amber/red dot per weight per size answers the question icon designers actually lose sleep over: does this stay pixel-crisp when it's shrunk to 16?</li>
          <li><span class="cs-callout-num">4</span> When weights collide on the pixel grid, it says so plainly and offers to retune the values in one undo, instead of leaving you to discover the blur in production.</li>
        </ol>
      </div>
    </div>
  </div>
</section>

<section class="case-study-act" id="ai" aria-label="Section 2">
  <div class="case-study-act-inner">
    <div class="case-study-act-number">02</div>
    <div class="case-study-act-content">
      <h2 class="case-study-act-title">Build with AI</h2>
      <p class="case-study-act-intro">You shouldn't have to choose between drawing every icon by hand and getting a generic one from a model that ignores your system. Telby's assistant plans, draws, and refines on the same canvas you edit, and everything it makes is bound to your tokens from the first stroke. It's a builder&ndash;critic loop: draft, score against the request, refine, repeat.</p>
    </div>
  </div>
</section>

<section class="major-section">
  <div class="major-section-inner major-section-inner--wide">
    <div class="subsection">
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/telby/ai.png' | relative_url }}" alt="The assistant panel: plan-first, builder and vision critic, token authoring modes">
          <span class="cs-callout-marker" style="--x: 82%; --y: 97%;">1</span>
          <span class="cs-callout-marker" style="--x: 87%; --y: 37%;">2</span>
          <span class="cs-callout-marker" style="--x: 85%; --y: 26%;">3</span>
          <span class="cs-callout-marker" style="--x: 87%; --y: 87%;">4</span>
          <span class="cs-callout-marker" style="--x: 81%; --y: 55%;">5</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> Plan first is on by default. The assistant proposes a numbered plan you can read, edit, and approve before a single anchor is drawn. The person stays the author; the model is the pair of hands.</li>
          <li><span class="cs-callout-num">2</span> This is the critic half of the loop. The builder draws, then a vision model looks at the actual rendered icon and scores it against the request, and the build refines until it passes or hits the round limit. A model that never sees its own output just confidently hands you the wrong thing.</li>
          <li><span class="cs-callout-num">3</span> Token authoring has three explicit levels, Grounded, Create, Full. Grounded (the default) can only use tokens you already have, so the safe setting is also the default and the assistant can't quietly invent a fourth blue.</li>
          <li><span class="cs-callout-num">4</span> Every build targets a new icon or the one on the canvas. "Fix this corner" edits in place; "a bell" mints and names a fresh icon, so the assistant is equally a drafting tool and an editing tool.</li>
          <li><span class="cs-callout-num">5</span> The context card shows exactly what the run is grounded in, the current icon, its size, a live thumbnail, so there's no guessing which icon a follow-up like "make it heavier" will change.</li>
        </ol>
      </div>
    </div>
  </div>
</section>

<section class="case-study-act" id="surface" aria-label="Section 3">
  <div class="case-study-act-inner">
    <div class="case-study-act-number">03</div>
    <div class="case-study-act-content">
      <h2 class="case-study-act-title">Draw it. Ship it.</h2>
      <p class="case-study-act-intro">The same surface where you draft is the one that publishes. Draw with a real pen, shapes, and boolean operations on a snapping grid built for icons, not general illustration, audit the whole set for consistency, then publish a clean, versioned, token-backed package your apps install and tree-shake. Nothing to re-export, nothing to drift.</p>
    </div>
  </div>
</section>

<section class="major-section">
  <div class="major-section-inner major-section-inner--wide">
    <div class="subsection">
      <h3 class="case-study-sub-mode">Draw</h3>
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/telby/editor.png' | relative_url }}" alt="The Telby editor: drafting grid, tool rail, layers, and a token-bound inspector">
          <span class="cs-callout-marker" style="--x: 31%; --y: 26%;">1</span>
          <span class="cs-callout-marker" style="--x: 3%; --y: 34%;">2</span>
          <span class="cs-callout-marker" style="--x: 87%; --y: 61%;">3</span>
          <span class="cs-callout-marker" style="--x: 83%; --y: 76%;">4</span>
          <span class="cs-callout-marker" style="--x: 25%; --y: 89%;">5</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> A snapping drafting grid, not an infinite art board. The whole editor is scoped to what icon work actually needs, so the constraints do the aligning for you instead of a floating pixel you have to nudge.</li>
          <li><span class="cs-callout-num">2</span> The tool rail is icon-specific: pen, shapes, boolean ops, per-corner radius, construction guides. I judged every feature by one test, does it survive being exported as a flat SVG, which is why there are no vector networks and there is per-corner radius.</li>
          <li><span class="cs-callout-num">3</span> A shape's role is assigned right in the inspector, this arrow's head sits on the "accent" role. Pick a role and the shape inherits that role's token everywhere, in every theme and both the mono and duotone palettes, forever.</li>
          <li><span class="cs-callout-num">4</span> Stroke and fill read a token, not a hex. Width says "normal," not "2px," so this icon rides the whole set's weight ramp instead of freezing a number that a rebrand would strand.</li>
          <li><span class="cs-callout-num">5</span> A live preview at 16, 24, and 48 sits on the canvas the entire time. Icons are drawn big and used small, so the small size is never an afterthought you discover is broken later.</li>
        </ol>
      </div>

      <h3 class="case-study-sub-mode">Ship</h3>
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/telby/library.png' | relative_url }}" alt="The 100-icon library with sets, a consistency audit, theme and palette filters, and publish">
          <span class="cs-callout-marker" style="--x: 6%; --y: 43%;">1</span>
          <span class="cs-callout-marker" style="--x: 6%; --y: 18%;">2</span>
          <span class="cs-callout-marker" style="--x: 94%; --y: 15%;">3</span>
          <span class="cs-callout-marker" style="--x: 95%; --y: 8%;">4</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> The consistency audit is the library's conscience: hard-coded styles, visual weight, duplicate names, role drift, role parity. A living system needs a way to catch the moment an icon quietly stops following it, so the checks are always on and always visible, "all checks passing" across the whole 100.</li>
          <li><span class="cs-callout-num">2</span> Sets, categories, and tags organize the library without moving anything. An icon can sit in a set and carry tags at once, which is how a real team finds "the outline navigation icons" without a rigid folder tree.</li>
          <li><span class="cs-callout-num">3</span> You can render the whole grid in any theme and either palette. Auditing the set the way it will actually ship, in dark, in brand, in duotone, is the point; a library that only ever previews in light is hiding half its bugs.</li>
          <li><span class="cs-callout-num">4</span> Publish produces a versioned, token-backed package apps install and tree-shake, and the editor is the source of truth. There is no separate export-and-hope step, which is the step where drift is born.</li>
        </ol>
      </div>
    </div>
  </div>
</section>

<section id="prototype" class="major-section">
  <div class="major-section-inner">
    <div class="subsection subsection--center-title">
      <p class="subsection-cta-center">
        <a href="https://telby.io/demo" target="_blank" rel="noopener noreferrer" class="button button-primary">Open the live demo</a>
        <a href="https://telby.io" target="_blank" rel="noopener noreferrer" class="button button-outline">Visit telby.io</a>
      </p>
    </div>
  </div>
</section>

<section id="my-role" class="case-study-section case-study-intro case-study-intro--role-only">
  <div class="case-study-section-inner">
    <h2 class="case-study-title">My Role</h2>
    <div class="case-study-callout case-study-callout--role">
      <p class="case-study-callout__role-title">Solo &mdash; Design &amp; Engineering</p>
      <h3 class="case-study-callout__heading">My Contributions</h3>
      <ul>
        <li><strong>0&rarr;1 product design and strategy:</strong> Defined the whole surface, the token model, the editor, and the publish pipeline, as one coherent system rather than a drawing tool with features bolted on.</li>
        <li><strong>The living token model:</strong> Designed the token contract (colors per mode, stroke and radius as shared scalars) and the semantic-role layer on top of it, so one change cascades across an entire set. The hardest and most-iterated part of the project.</li>
        <li><strong>The AI builder&ndash;critic loop:</strong> Designed a builder that drafts against your tokens and a vision critic that scores the rendered icon and loops until it fits, with a plan-first review step so the person stays the author.</li>
        <li><strong>Design engineering:</strong> Built the running app end to end, a custom SVG editor, the token compiler, the consistency audits, and a themeable <code>&lt;telby-icon&gt;</code> web-component export.</li>
      </ul>
    </div>
  </div>
</section>
