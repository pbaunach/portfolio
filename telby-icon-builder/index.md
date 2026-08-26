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
        <span>Solo Design &amp; Engineering</span>
        <span class="editorial-hero-meta-sep" aria-hidden="true">|</span>
        <span>0-to-1</span>
        <span class="editorial-hero-meta-sep" aria-hidden="true">|</span>
        <span>2026</span>
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
    <p class="case-study-thesis-quote">An icon set isn't a folder of static assets, it's a system that <span class="thesis-accent">drifts out of sync</span> without shared rules.</p>
    <div class="thesis-cards">
      <a href="#ai" class="thesis-card">
        <span class="thesis-card-num">01</span>
        <h3 class="thesis-card-title">An AI that stays in the lines</h3>
        <p class="thesis-card-desc">Describe an icon. A builder drafts it, a vision critic scores it, and it refines until it fits your system.</p>
      </a>
      <a href="#tokens" class="thesis-card">
        <span class="thesis-card-num">02</span>
        <h3 class="thesis-card-title">A living token system</h3>
        <p class="thesis-card-desc">Every icon binds to shared tokens. Change one value and the whole set restyles in place.</p>
      </a>
      <a href="#surface" class="thesis-card">
        <span class="thesis-card-num">03</span>
        <h3 class="thesis-card-title">One surface, draw to ship</h3>
        <p class="thesis-card-desc">The canvas you draw on is the one that publishes. No re-export step, nothing to drift.</p>
      </a>
    </div>
  </div>
</section>

<section class="case-study-act" id="ai" aria-label="Section 1">
  <div class="case-study-act-inner">
    <div class="case-study-act-number">01</div>
    <div class="case-study-act-content">
      <h2 class="case-study-act-title">Build with AI</h2>
      <p class="case-study-act-intro">You shouldn't have to choose between drawing every icon by hand and taking a generic one from a model that ignores your system. Telby's assistant plans, draws, and refines right on the canvas you edit, and everything it makes is bound to your tokens from the first stroke. It's a builder-critic loop: draft, score it against the request, refine, repeat.</p>
    </div>
  </div>
</section>

<section class="major-section">
  <div class="major-section-inner major-section-inner--wide">
    <div class="subsection">
      <h3 class="case-study-sub-mode">Builder-Critic Loop</h3>
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/telby/vision-critic-flow.png' | relative_url }}" alt="Flow diagram of the builder-critic loop, from user request and injected tokens through the planner, builder, vision critic, and the rendered icon">
          <span class="cs-callout-marker" style="--x: 57%; --y: 5%;">1</span>
          <span class="cs-callout-marker" style="--x: 30%; --y: 17%;">2</span>
          <span class="cs-callout-marker" style="--x: 57%; --y: 17%;">3</span>
          <span class="cs-callout-marker" style="--x: 57%; --y: 28%;">4</span>
          <span class="cs-callout-marker" style="--x: 90%; --y: 17%;">5</span>
          <span class="cs-callout-marker" style="--x: 57%; --y: 41%;">6</span>
          <span class="cs-callout-marker" style="--x: 57%; --y: 52%;">7</span>
          <span class="cs-callout-marker" style="--x: 57%; --y: 64%;">8</span>
          <span class="cs-callout-marker" style="--x: 57%; --y: 75%;">9</span>
          <span class="cs-callout-marker" style="--x: 88%; --y: 60%;">10</span>
          <span class="cs-callout-marker" style="--x: 57%; --y: 86%;">11</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> The user types in a prompt and it gets sent to the planner agent along with any history. This could be a brand new prompt like "Create me an up arrow icon" or it can be a revision like "Make it a little smaller."</li>
          <li><span class="cs-callout-num">2</span> The Tokens and Roles are injected in 3 separate ways to ensure the model sticks to the system: first as a reference array for the planner, then as an enum for the tool schema so the builder is properly constrained to what it can produce, and lastly as a precheck at decode time to catch any bad references that may have made it through.</li>
          <li><span class="cs-callout-num">3</span> The planner is a one-shot prompt that takes the initial request and expands it into detailed and ordered instructions to pass to the builder. Temperature sits at 0.4 to add variance, so rejecting a plan and asking again won't return the exact same plan.</li>
          <li><span class="cs-callout-num">4</span> If the user approves the plan, it gets passed on to the builder. If they don't like the plan, they can edit it and send it back through the planner.</li>
          <li><span class="cs-callout-num">5</span> If the user doesn't like the instructions or wants to change something, they can edit the plan and resend it to the planner to verify and adjust.</li>
          <li><span class="cs-callout-num">6</span> The builder is a tool-calling loop that turns a spec into an icon by having the model call validated drawing commands, feeding each command's result back so it can read the scene and correct its own mistakes, all wrapped in a single store transaction so the entire multi-shape build collapses to one undo step. The tokens are injected into the tool schema the builder uses, making it so the design system isn't a guideline in the prompt; it's a constraint on what the model is actually able to output.</li>
          <li><span class="cs-callout-num">7</span> The system makes a rasterization of the icon to pass to the vision critic.</li>
          <li><span class="cs-callout-num">8</span> The Vision Critic compares the rasterized image against the original prompt, judging the visual outcome rather than if the builder produced valid code. Its instructions are "You are a strict icon-design critic… Judge whether the IMAGE actually reads as the intended icon and matches the spec's shapes, proportions, and composition… Set satisfied=true only if it clearly reads as the intended icon." It's given a Temperature of 0.2 here, because this stage is about consistency, not creativity.</li>
          <li><span class="cs-callout-num">9</span> If the Vision Critic is not satisfied with the image vs. the spec, it writes up instructions on why it failed and passes it back to the builder to make the adjustments.</li>
          <li><span class="cs-callout-num">10</span> Since the Critic can't see the nodes, it only sees pixels and the prompt. It writes what's wrong, hands it off to a template to provide rules for addressing it, then it gets sent to the builder to actually adjust it based on the live scene.</li>
          <li><span class="cs-callout-num">11</span> The loop ends when either the Vision Critic is satisfied or the loop has run 3 times. The result is an icon rendered to the canvas that is fully editable by the user to provide any finishing touches.</li>
        </ol>
      </div>

      <h3 class="case-study-sub-mode">Configure the run</h3>
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/telby/ai-1.png' | relative_url }}" alt="The assistant configure panel: token grounding level, builder and critic model pickers, refine-with-vision, target scope, and the plan-first toggle">
          <span class="cs-callout-marker" style="--x: 79%; --y: 15.5%;">1</span>
          <span class="cs-callout-marker" style="--x: 88%; --y: 21%;">2</span>
          <span class="cs-callout-marker" style="--x: 87%; --y: 90%;">3</span>
          <span class="cs-callout-marker" style="--x: 74%; --y: 97%;">4</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> Grounded, Create, and Full set how much freedom the model gets with tokens. This is the Tokens &amp; Roles step from the flow: Grounded pins every value to what already exists, so the system is a hard constraint and not just a suggestion.</li>
          <li><span class="cs-callout-num">2</span> You pick both models in the loop right here, the Builder that draws and the Critic that judges. "Refine with vision" is the toggle that turns a one-shot draw into the full builder-critic loop.</li>
          <li><span class="cs-callout-num">3</span> Target decides what the request acts on: a brand new icon, the one already on the canvas, or the whole set. It's the same fork as the top of the flow, a fresh "up arrow" versus a "make it smaller" revision.</li>
          <li><span class="cs-callout-num">4</span> Plan first is what inserts the human approval gate. With it on, the request goes to the Planner and stops for your review before the Builder ever runs.</li>
        </ol>
      </div>

      <h3 class="case-study-sub-mode">Review the plan</h3>
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure cs-callout-figure--half">
          <img src="{{ '/assets/img/telby/ai-2.png' | relative_url }}" alt="The plan view: the user prompt, a numbered five-step plan, per-step token chips, and the build-or-edit controls">
          <span class="cs-callout-marker" style="--x: 20%; --y: 16.5%;">1</span>
          <span class="cs-callout-marker" style="--x: 90%; --y: 23.5%;">2</span>
          <span class="cs-callout-marker" style="--x: 78%; --y: 36%;">3</span>
          <span class="cs-callout-marker" style="--x: 91%; --y: 89%;">4</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> The request that kicks off the run, carried in with the conversation history so a revision like "make it smaller" still has context. This is the User Request at the top of the flow.</li>
          <li><span class="cs-callout-num">2</span> The Planner's output: your one line expanded into ordered, numbered build steps. This is the Planner node, run once before anything is drawn.</li>
          <li><span class="cs-callout-num">3</span> Every step carries the exact tokens it will use, color.primary, stroke.normal, radius.normal. That's the grounding made visible, the plan is pinned to real tokens instead of raw hex.</li>
          <li><span class="cs-callout-num">4</span> The Human Satisfied? gate. "Build it" sends the plan on to the Builder; "Edit" loops it back through the Planner with your changes. Nothing draws until you approve.</li>
        </ol>
      </div>

      <h3 class="case-study-sub-mode">Build, critique, render</h3>
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/telby/ai-3.png' | relative_url }}" alt="The finished run: the builder's tool calls, the critic-satisfied verdict, the rendered-to-canvas confirmation, and the editable icon with its layers">
          <span class="cs-callout-marker" style="--x: 85%; --y: 38%;">1</span>
          <span class="cs-callout-marker" style="--x: 77%; --y: 42.5%;">2</span>
          <span class="cs-callout-marker" style="--x: 88%; --y: 46.5%;">3</span>
          <span class="cs-callout-marker" style="--x: 42%; --y: 41%;">4</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> The Builder step in motion: rather than emit raw SVG, the model calls validated commands, addRect, addLine, addPath, each result checked as it lands.</li>
          <li><span class="cs-callout-num">2</span> The Vision Critic looked at the rasterized icon and passed it against the spec. Had it failed, this is where Critic Feedback would loop back to the Builder instead.</li>
          <li><span class="cs-callout-num">3</span> The loop ended on its own: the Critic was satisfied inside the round budget, so the run stopped and committed. This is Loop Ends in the flow.</li>
          <li><span class="cs-callout-num">4</span> What lands on the canvas is real, editable geometry, eight named shapes here, not a flattened export. You can take over and add any finishing touches.</li>
        </ol>
      </div>
    </div>
  </div>
</section>

<section class="case-study-act" id="tokens" aria-label="Section 2">
  <div class="case-study-act-inner">
    <div class="case-study-act-number">02</div>
    <div class="case-study-act-content">
      <h2 class="case-study-act-title">A living token system</h2>
      <p class="case-study-act-intro">Most icon libraries bake a color and a stroke width into every file. So a rebrand means opening hundreds of SVGs and editing them by hand. Telby ties each icon to a shared set of tokens instead. Change one token and every icon that uses it updates at once, across every theme, weight, and size.</p>
    </div>
  </div>
</section>

<section class="major-section">
  <div class="major-section-inner major-section-inner--wide">
    <div class="subsection">
      <h3 class="case-study-sub-mode">The token contract</h3>
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/telby/tokens-1.png' | relative_url }}" alt="The Tokens page: colors held per mode with light, dark, and brand as columns, per-token usage counts, and stroke and radius as separate scalar groups">
          <span class="cs-callout-marker" style="--x: 46%; --y: 36%;">1</span>
          <span class="cs-callout-marker" style="--x: 32%; --y: 70%;">2</span>
          <span class="cs-callout-marker" style="--x: 8.5%; --y: 46%;">3</span>
          <span class="cs-callout-marker" style="--x: 91%; --y: 36%;">4</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> Colors hold one value per mode, and the modes sit side by side as columns. Light is the base; dark and brand read down their own column. You build a theme by filling a column, not by forking the whole set into a second file.</li>
          <li><span class="cs-callout-num">2</span> Every token carries a live usage count. "primary" reads 101, it's the ink in nearly every icon, so before you touch a value you can see exactly how much of the set the change will move. No restyling the world by surprise.</li>
          <li><span class="cs-callout-num">3</span> Color is per-mode, but stroke width and corner radius are shared scalars, their own token groups in the rail. One number sets the weight, or the softness of every corner, across the whole family, so "make it all a touch rounder" is a single edit.</li>
          <li><span class="cs-callout-num">4</span> Adding a whole theme is one "+ Add theme" click that appends a column. Cells inherit the base until you override them, so the only thing you maintain in a new theme is the handful of values that actually differ.</li>
        </ol>
      </div>

      <h3 class="case-study-sub-mode">Semantic roles</h3>
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/telby/tokens-2.png' | relative_url }}" alt="The Semantic Roles page: default and accent roles mapped to tokens, with mono, duo, and Neon modes as columns and the accent role re-pointing to the spot hue in duo">
          <span class="cs-callout-marker" style="--x: 20%; --y: 58%;">1</span>
          <span class="cs-callout-marker" style="--x: 62%; --y: 43%;">2</span>
          <span class="cs-callout-marker" style="--x: 60%; --y: 70%;">3</span>
          <span class="cs-callout-marker" style="--x: 91%; --y: 43%;">4</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> Roles are the parts a shape plays, "default" for the body, "accent" for the detail layer. You assign a role in the editor; you map it to a token here. New shapes start on default, so everything you draw is bound to the system from the first stroke, and only a deliberately detached shape follows no role.</li>
          <li><span class="cs-callout-num">2</span> The same modes show up as columns again: mono, duo, Neon. A role doesn't hold a color, it holds a token per mode, so one role can mean different things in different palettes without touching a single drawing.</li>
          <li><span class="cs-callout-num">3</span> This is the whole duotone trick in one cell. The accent role maps to "primary" in mono, then re-points to the "spot" hue in duo. The same 100 drawings render as flat outlines or two-tone, with no second copy to maintain.</li>
          <li><span class="cs-callout-num">4</span> Adding a mode gives every role a fresh set of tokens at once. The Neon column recolors the entire set, primary to Neon-Primary and accent to Neon-Accent, in a single move.</li>
        </ol>
      </div>

      <h3 class="case-study-sub-mode">Label once, swap modes</h3>
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/telby/tokens-3.png' | relative_url }}" alt="The editor in Mono palette: the code-symbol paths selected and assigned the accent role, rendering in the same dark ink as the frame">
          <span class="cs-callout-marker" style="--x: 83%; --y: 49%;">1</span>
          <span class="cs-callout-marker" style="--x: 47%; --y: 61%;">2</span>
          <span class="cs-callout-marker" style="--x: 54%; --y: 17%;">3</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> These three paths, the &lt; / &gt; symbol, are labeled with the accent role, not a color. That label is the only thing tying them to the system; everything downstream reads the role, never a hex.</li>
          <li><span class="cs-callout-num">2</span> In the Mono palette the accent role resolves to "primary," so the symbol renders in the same dark ink as the frame. Selected together, all three edit as one.</li>
          <li><span class="cs-callout-num">3</span> Palette is set to Mono right now. Nothing about the drawing encodes a color; this one control decides how every role resolves. Watch what a single flip does next.</li>
        </ol>
      </div>

      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/telby/tokens-4.png' | relative_url }}" alt="The same icon and selection in the Neon palette on a dark theme: the accent paths now render pink and the frame green, with nothing on the drawing changed">
          <span class="cs-callout-marker" style="--x: 53%; --y: 17%;">1</span>
          <span class="cs-callout-marker" style="--x: 47%; --y: 61%;">2</span>
          <span class="cs-callout-marker" style="--x: 30%; --y: 50%;">3</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> Only two controls moved, Theme to Dark and Palette to Neon. Not one anchor, path, or role assignment changed on the icon itself.</li>
          <li><span class="cs-callout-num">2</span> The same accent-role paths now resolve to Neon-Accent and come through pink, automatically. Because they were labeled and not colored, the swap costs nothing.</li>
          <li><span class="cs-callout-num">3</span> And the default-role frame follows Neon-Primary to green in the same instant. Label once, and every mode you will ever add renders itself for free.</li>
        </ol>
      </div>
    </div>
  </div>
</section>

<section class="case-study-act" id="surface" aria-label="Section 3">
  <div class="case-study-act-inner">
    <div class="case-study-act-number">03</div>
    <div class="case-study-act-content">
      <h2 class="case-study-act-title">The library, audited</h2>
      <p class="case-study-act-intro">A hundred icons only stay a system if you can see the whole set at once and catch the moment one drifts. The library renders every icon live in any theme and palette, and a standing consistency audit watches for the ways an icon quietly stops following the rules. Then you publish a clean, versioned, token-backed package your apps install and tree-shake. Nothing to re-export, nothing to drift.</p>
    </div>
  </div>
</section>

<section class="major-section">
  <div class="major-section-inner major-section-inner--wide">
    <div class="subsection">
      <h3 class="case-study-sub-mode">Preview the whole set in any mode</h3>
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/telby/library-1.png' | relative_url }}" alt="The library grid in light theme and mono palette, with the palette menu open on mono, duo, and Neon">
          <span class="cs-callout-marker" style="--x: 80%; --y: 9.7%;">1</span>
          <span class="cs-callout-marker" style="--x: 92%; --y: 15.5%;">2</span>
          <span class="cs-callout-marker" style="--x: 63%; --y: 36%;">3</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> Theme flips the whole grid between light and dark backgrounds. The point is to review the set the way it will actually ship, not only in the comfortable light preview.</li>
          <li><span class="cs-callout-num">2</span> Palette swaps every icon between mono, duo, and Neon at once. One control re-renders all 102 icons, so you can eyeball an entire mode for outliers in a second.</li>
          <li><span class="cs-callout-num">3</span> Every icon in the grid re-renders live in the chosen theme and palette. There is no separate export to preview: what you are scanning is exactly what publishes.</li>
        </ol>
      </div>

      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/telby/library-2.png' | relative_url }}" alt="The same library grid flipped to dark theme and the Neon palette, every icon recolored to green primaries and pink accents at once">
          <span class="cs-callout-marker" style="--x: 91%; --y: 9.7%;">1</span>
          <span class="cs-callout-marker" style="--x: 63%; --y: 36%;">2</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> Same two dropdowns, now set to Dark and Neon.</li>
          <li><span class="cs-callout-num">2</span> The entire set flips to the Neon palette, green primaries and pink accents, without a single icon being edited. Because every shape rides a role, the mode does all the work, and a wrong color anywhere would jump out immediately.</li>
        </ol>
      </div>

      <h3 class="case-study-sub-mode">The consistency audit</h3>
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/telby/library-3.png' | relative_url }}" alt="The consistency audit flagging one icon on visual weight, the grid filtered to the offender with an amber dot, a one-click fix, and a detail popover showing the stroke value">
          <span class="cs-callout-marker" style="--x: 8%; --y: 42%;">1</span>
          <span class="cs-callout-marker" style="--x: 23.4%; --y: 22.5%;">2</span>
          <span class="cs-callout-marker" style="--x: 90%; --y: 16.3%;">3</span>
          <span class="cs-callout-marker" style="--x: 54%; --y: 79%;">4</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> The audit runs a standing set of checks: hard-coded styles, visual weight, duplicate names, role drift, role parity, contrast. Here two need attention, and Visual Weight has flagged one icon. A living system needs something watching for the moment an icon quietly stops following it.</li>
          <li><span class="cs-callout-num">2</span> Clicking a failing check filters the grid down to just the offenders. One icon, "metadata," sticks out, tagged with an amber dot so the odd one is obvious instead of buried in a wall of 102.</li>
          <li><span class="cs-callout-num">3</span> The audit does not just accuse, it offers the fix. "Match 1 icon to set weight" snaps the stroke back to the set's 2px at 24px in a single click.</li>
          <li><span class="cs-callout-num">4</span> And it shows the receipts: the icon's stroke is 0.533 where the family is 2px. The check isn't a vibe, it's a concrete number you can see and correct.</li>
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
      <p class="case-study-callout__role-title">Solo Design &amp; Engineering</p>
      <h3 class="case-study-callout__heading">My Contributions</h3>
      <ul>
        <li><strong>0-to-1 product design and strategy:</strong> Defined the whole surface, the token model, the editor, and the publish pipeline, as one coherent system rather than a drawing tool with features bolted on.</li>
        <li><strong>The living token model:</strong> Designed the token contract (colors per mode, stroke and radius as shared scalars) and the semantic-role layer on top of it, so one change cascades across an entire set. The hardest and most-iterated part of the project.</li>
        <li><strong>The AI builder-critic loop:</strong> Designed a builder that drafts against your tokens and a vision critic that scores the rendered icon and loops until it fits, with a plan-first review step so the person stays the author.</li>
        <li><strong>Design engineering:</strong> Built the running app end to end, a custom SVG editor, the token compiler, the consistency audits, and a themeable <code>&lt;telby-icon&gt;</code> web-component export.</li>
      </ul>
    </div>
  </div>
</section>
