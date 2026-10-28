---
title: "Telby: The Living Icon Design System"
layout: case-study
extra_css: [/assets/css/live-work.css, /assets/css/side-project.css]
extra_js: [/assets/js/live-work.js]
---

<section class="case-study-section case-study-intro case-study-intro--telby-screens-hero case-study-intro--csb-hero case-study-intro--csb-hero-telby">
  <div class="case-study-section-inner">
    <div class="csb-hero">
      <h1 class="csb-hero-title">Telby</h1>
      <p class="csb-hero-sub">The <span class="csb-hero-accent">Living</span> Icon Design System</p>
      <p class="csb-hero-meta">
        <span class="csb-hero-meta-label">My Contributions:</span>
        <span>Product Strategy &amp; Design</span>
        <span class="csb-hero-meta-sep" aria-hidden="true">&middot;</span>
        <span>0-to-1</span>
        <span class="csb-hero-meta-sep" aria-hidden="true">&middot;</span>
        <span>Design Engineering</span>
      </p>
      <figure class="csb-hero-video csb-hero-video--telby">
        <video controls playsinline preload="none" poster="https://telby.io/walkthrough/telby-walkthrough-poster.jpg" aria-label="Telby walkthrough, about 90 seconds. Silent, with captions.">
          <source src="https://telby.io/walkthrough/telby-walkthrough.mp4" type="video/mp4">
          Your browser cannot play this video.
        </video>
        <div class="csb-hero-video-overlay">
          <button type="button" class="csb-hero-video-play" aria-label="Play the walkthrough video">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
          </button>
        </div>
      </figure>
    </div>
  </div>
</section>

<section class="csb-problem" aria-label="The idea">
  <div class="csb-problem-inner">
    <div class="csb-problem-copy">
      <h2 class="csb-problem-question">Icon sets drift. I wanted one that couldn&rsquo;t.</h2>
      <p class="csb-problem-body">You know the folder. One icon is a little heavier than the rest, one blue is almost right, and three files are called &ldquo;final.&rdquo; Telby is my side project to fix that: every icon is built from shared tokens, so the set stays consistent on its own, and an AI assistant can draw new ones without going off-script.</p>
    </div>
    <ul class="csb-stat-list">
      <li class="csb-stat csb-stat--constraint">
        <div class="csb-stat-body">
          <p class="csb-stat-name">Describe it or draw it</p>
          <p class="csb-stat-text">Sketch on the canvas or ask the assistant. Either way, it works from your tokens.</p>
        </div>
      </li>
      <li class="csb-stat csb-stat--constraint">
        <div class="csb-stat-body">
          <p class="csb-stat-name">Label shapes, not colors</p>
          <p class="csb-stat-text">Each part of an icon gets a role, so a new palette restyles the whole set.</p>
        </div>
      </li>
      <li class="csb-stat csb-stat--constraint">
        <div class="csb-stat-body">
          <p class="csb-stat-name">Catch the drift</p>
          <p class="csb-stat-text">An audit watches the set and flags the one icon that wanders off.</p>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="sp-section sp-section--light" id="ai" aria-labelledby="sp-ai-title">
  <div class="sp-wrap">
    <header class="sp-head">
      <div>
        <span class="sp-kicker"><b>01</b>The AI</span>
        <h2 class="sp-title" id="sp-ai-title">The builder-critic loop</h2>
      </div>
      <p class="sp-lead">Describe an icon and approve the plan, and Telby&rsquo;s assistant draws it on the same canvas you edit, bound to your tokens from the first stroke. Then a vision critic looks at the render and either passes it or sends notes back to the builder.</p>
    </header>

    <div class="sp-stage">
      <span class="sp-stage-tag"><i></i>In action</span>
      {% include demos/telby-loop.html %}
    </div>

    <div class="sp-logic">
      <div class="sp-logic-copy">
        <h3 class="sp-sub">The logic that powers it</h3>
        <p class="sp-sub-lead">Four decisions that make the loop trustworthy. The numbers match the diagram.</p>
        <ol class="sp-points">
          <li><span class="sp-num">1</span><div><h4>Warm planner, cold critic</h4><p>The planner runs at temperature 0.4, so a rejected plan comes back different. The critic runs at 0.2, because a judge should be consistent.</p></div></li>
          <li><span class="sp-num">2</span><div><h4>No raw SVG</h4><p>The builder calls validated drawing commands and reads the scene back after each one, so it can catch its own mistakes. The whole build lands as a single undo step.</p></div></li>
          <li><span class="sp-num">3</span><div><h4>The critic only sees pixels</h4><p>It gets the render and the prompt, never the shapes. A template turns its notes into rules the builder can apply to the live scene.</p></div></li>
          <li><span class="sp-num">4</span><div><h4>A pass, or three rounds</h4><p>The loop ends when the critic is satisfied or after three rounds. Either way you get real, editable shapes on the canvas, not a flattened export.</p></div></li>
        </ol>
      </div>
      <div class="sp-chart">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/telby/vision-critic-flow.png' | relative_url }}" alt="Flow diagram of the builder-critic loop: the user request and the tokens and roles feed the planner; the user approves or edits the plan; the builder draws; the icon is rasterized for the vision critic; a failing verdict sends critic feedback back to the builder, and a pass ends the loop with the icon rendered on the canvas">
          <span class="cs-callout-marker" style="--x: 57%; --y: 17%;">1</span>
          <span class="cs-callout-marker" style="--x: 57%; --y: 41%;">2</span>
          <span class="cs-callout-marker" style="--x: 88%; --y: 60%;">3</span>
          <span class="cs-callout-marker" style="--x: 57%; --y: 86%;">4</span>
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="sp-section sp-section--gray" id="tokens" aria-labelledby="sp-tokens-title">
  <div class="sp-wrap">
    <header class="sp-head">
      <div>
        <span class="sp-kicker"><b>02</b>The system</span>
        <h2 class="sp-title" id="sp-tokens-title">A living token system</h2>
      </div>
      <p class="sp-lead">Every stroke and fill is labeled with a role, not a color: &ldquo;default&rdquo; for the body of an icon, &ldquo;accent&rdquo; for the detail. Roles point at tokens, and tokens hold the values, so one change at the top cascades through the whole set at once.</p>
    </header>

    <div class="sp-stage">
      <span class="sp-stage-tag"><i></i>Change once, update everywhere</span>
      {% include demos/telby-tokens.html %}
    </div>

    <div class="sp-audit">
      <figure class="cs-callout-figure">
        <img src="{{ '/assets/img/telby/library-3.png' | relative_url }}" alt="The consistency audit flagging one icon on visual weight, the grid filtered to the offender with an amber dot, a one-click fix, and a detail popover showing the stroke value">
      </figure>
      <div class="sp-audit-copy">
        <span class="sp-flag">Consistency audit</span>
        <h3 class="sp-sub">Catching the drift</h3>
        <p>A standing audit watches for the icons that drift anyway. Here it flags one whose stroke is 0.533 against the set&rsquo;s 2px, and snaps it back with one click.</p>
      </div>
    </div>
  </div>
</section>

<section class="sp-section sp-section--light sp-outro" id="my-role" aria-labelledby="sp-role-title">
  <div class="sp-wrap sp-outro-inner">
    <div>
      <span class="sp-kicker">My role</span>
      <h2 class="sp-title sp-title--sm" id="sp-role-title">Solo design and engineering.</h2>
      <p class="sp-lead">I designed and built the whole surface: the token model, the editor, the AI loop, and the publish pipeline.</p>
    </div>
    <div class="sp-outro-actions">
      <a href="https://telby.io/demo" target="_blank" rel="noopener noreferrer" class="button button-primary">Open the live demo</a>
      <a href="https://telby.io" target="_blank" rel="noopener noreferrer" class="button button-outline">Visit telby.io</a>
    </div>
  </div>
</section>
