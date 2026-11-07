---
title: "Telby: The Living Icon Design System"
description: "Telby is a living icon design system. Shared tokens for color, stroke weight and corner radius keep every icon in a set consistent, and one change updates the whole set."
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
        <video controls playsinline preload="none" poster="{{ '/assets/img/telby/telby-walkthrough-poster.jpg' | relative_url }}" aria-label="Telby walkthrough, 1 minute 24 seconds. Silent, with captions. Waits on the AI model are sped up and labeled in the frame.">
          <source src="{{ '/assets/video/telby-walkthrough.mp4' | relative_url }}" type="video/mp4">
          Your browser cannot play this video.
        </video>
        <div class="csb-hero-video-overlay">
          <button type="button" class="csb-hero-video-play" aria-label="Play the Telby walkthrough">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
          </button>
        </div>
      </figure>
      <p class="csb-hero-video-note">Recorded in the real app. Time spent waiting on the AI model is sped up.</p>
    </div>
  </div>
</section>

<section class="csb-problem" aria-label="The idea">
  <div class="csb-problem-inner">
    <div class="csb-problem-copy">
      <h2 class="csb-problem-question">Icon sets drift. I wanted one that couldn&rsquo;t.</h2>
      <p class="csb-problem-body">You know the folder. One icon is a little heavier than the rest, one blue is almost right, and three files are called &ldquo;final.&rdquo; Every icon is its own file, so every icon drifts on its own. Telby is my side project to fix that. Colors, stroke weights and corner radii live in shared tokens instead of inside each icon, so the whole set moves together.</p>
    </div>
    <ul class="csb-stat-list">
      <li class="csb-stat csb-stat--constraint">
        <div class="csb-stat-body">
          <p class="csb-stat-name">Bind, don&rsquo;t hardcode</p>
          <p class="csb-stat-text">Every part of an icon points at a named token, never a raw hex value or pixel width.</p>
        </div>
      </li>
      <li class="csb-stat csb-stat--constraint">
        <div class="csb-stat-body">
          <p class="csb-stat-name">Change it once</p>
          <p class="csb-stat-text">Edit a token and every icon bound to it restyles with it, not one file at a time.</p>
        </div>
      </li>
      <li class="csb-stat csb-stat--constraint">
        <div class="csb-stat-body">
          <p class="csb-stat-name">Catch the drift</p>
          <p class="csb-stat-text">A validator checks the whole set for the icons that slip through anyway.</p>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="sp-section sp-section--light" id="editor" aria-labelledby="sp-editor-title">
  <div class="sp-wrap">
    <header class="sp-head">
      <div>
        <span class="sp-kicker"><b>01</b>The editor</span>
        <h2 class="sp-title" id="sp-editor-title">Made for icons, not illustration</h2>
      </div>
      <p class="sp-lead">Telby is built for people who maintain an icon set, not for general illustration. If you want a full-blown vector editor, it will feel narrow on purpose. If you want your icons to behave like part of a design system, it should feel like the right amount of tool.</p>
    </header>

    <div class="sp-stage">
      <span class="sp-stage-tag">The editor</span>
      <div class="sp-shot">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/telby/editor-1360.webp' | relative_url }}" width="1360" height="860" alt="The Telby editor with a gift icon on a 24px artboard, keyline guides on, layers and a 16, 24 and 48px preview on the left, the assistant panel in the middle and the icon's tokens and color mapping on the right">
        </figure>
      </div>
    </div>

    <ul class="sp-cards sp-findings sp-cards--after-stage">
      <li>
        <h4>Pen, shapes and booleans</h4>
        <p>Draw with the pen or with shapes, combine them with boolean operations, and set the radius of each corner on its own.</p>
      </li>
      <li>
        <h4>Construction guides</h4>
        <p>Parametric keyline grids, circles and other guides sit on the snapping pixel grid. Save a set of guides as a template and reuse it.</p>
      </li>
      <li>
        <h4>Real sizes while you draw</h4>
        <p>A live preview shows the icon at 16, 24 and 48px as you work, so you see how it reads where it will actually be used.</p>
      </li>
    </ul>
  </div>
</section>

<section class="sp-section sp-section--gray" id="tokens" aria-labelledby="sp-tokens-title">
  <div class="sp-wrap">
    <header class="sp-head">
      <div>
        <span class="sp-kicker"><b>02</b>The system</span>
        <h2 class="sp-title" id="sp-tokens-title">One token change. Every icon updates with it.</h2>
      </div>
      <p class="sp-lead">Color, stroke width and corner radius are named tokens. The shapes inside an icon don&rsquo;t point at a color directly. They get a role, like &ldquo;default&rdquo; for the body and &ldquo;accent&rdquo; for the detail, and each palette maps those roles to tokens. Colors hold one value per theme. A new theme, a new palette or a thinner stroke is one edit, and the set follows.</p>
    </header>

    <div class="sp-stage">
      <span class="sp-stage-tag">Change once, update everywhere</span>
      {% include demos/telby-tokens.html %}
    </div>

    <ul class="sp-cards sp-findings sp-cards--after-stage">
      <li>
        <h4>Two views of the tokens</h4>
        <p>A grouped table for colors, semantic roles, stroke widths and corner radii, and a studio view that previews the whole set live as you edit.</p>
      </li>
      <li>
        <h4>The stroke ladder</h4>
        <p>Change a stroke weight and the ladder reports whether it still lands crisp on the pixel grid at 1x, 2x and 3x.</p>
      </li>
      <li>
        <h4>The library validator</h4>
        <p>It flags colors that bypass tokens, uneven stroke weights, duplicate names, unassigned roles and low contrast across the whole set.</p>
      </li>
    </ul>
  </div>
</section>

<section class="sp-section sp-section--light" id="ai" aria-labelledby="sp-ai-title">
  <div class="sp-wrap">
    <header class="sp-head">
      <div>
        <span class="sp-kicker"><b>03</b>The AI</span>
        <h2 class="sp-title" id="sp-ai-title">The builder-critic loop</h2>
      </div>
      <p class="sp-lead">Describe an icon and approve the plan, and Telby&rsquo;s assistant builds it on the same canvas you edit, with the project&rsquo;s existing tokens. Then a vision critic looks at the render and either passes it or sends corrections back to the builder. It can also review the whole set and apply fixes in bulk.</p>
    </header>

    <div class="sp-stage">
      <span class="sp-stage-tag">In action</span>
      {% include demos/telby-loop.html %}
    </div>

    <div class="sp-logic">
      <div class="sp-logic-copy">
        <h3 class="sp-sub">The logic that powers it</h3>
        <p class="sp-sub-lead">Four decisions that make the loop trustworthy. The numbers match the diagram.</p>
        <ol class="sp-points">
          <li><span class="sp-num">1</span><div><h4>Warm planner, cold critic</h4><p>The planner runs at temperature 0.4, so a rejected plan comes back different. The critic runs at 0.2, because a judge should be consistent.</p></div></li>
          <li><span class="sp-num">2</span><div><h4>No raw SVG</h4><p>The builder calls validated drawing commands and reads the scene back after each one, so it can catch its own mistakes. The whole run lands as a single undo step.</p></div></li>
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

<section class="sp-section sp-section--gray sp-outro" id="my-role" aria-labelledby="sp-role-title">
  <div class="sp-wrap sp-outro-inner">
    <div>
      <span class="sp-kicker">My role</span>
      <h2 class="sp-title sp-title--sm" id="sp-role-title">Solo design and engineering.</h2>
      <p class="sp-lead">I designed and built the whole surface: the editor, the system and the AI loop.</p>
    </div>
    <div class="sp-outro-actions">
      <a href="https://telby.io/demo" target="_blank" rel="noopener noreferrer" class="button button-primary">Open the live demo</a>
      <a href="https://telby.io" target="_blank" rel="noopener noreferrer" class="button button-outline">Visit telby.io</a>
    </div>
  </div>
</section>

{% include next-project.html %}
