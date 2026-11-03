---
title: "The Unbound Codex"
layout: case-study
extra_css: [/assets/css/side-project.css]
permalink: /unbound-codex/
---

<section class="case-study-section case-study-intro case-study-intro--unbound-screens-hero case-study-intro--csb-hero case-study-intro--csb-hero-unbound">
  <div class="case-study-section-inner">
    <div class="csb-hero">
      <h1 class="csb-hero-title">The Unbound Codex</h1>
      <p class="csb-hero-sub">An AI That <span class="csb-hero-accent">Remembers</span> Your World</p>
      <p class="csb-hero-meta">
        <span class="csb-hero-meta-label">My Contributions:</span>
        <span>Product Strategy &amp; Design</span>
        <span class="csb-hero-meta-sep" aria-hidden="true">&middot;</span>
        <span>0-to-1</span>
        <span class="csb-hero-meta-sep" aria-hidden="true">&middot;</span>
        <span>Design Engineering</span>
      </p>
      <figure class="csb-hero-video">
        <video controls playsinline preload="metadata" poster="{{ '/assets/img/unbound-codex/portfolio-card.png' | relative_url }}" aria-label="The Unbound Codex walkthrough, about two minutes">
          <source src="https://unboundcodex.com/assets/home-page/walkthrough.webm" type="video/webm">
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
      <h2 class="csb-problem-question">I wanted an AI that remembers my campaign, not one that writes it.</h2>
      <p class="csb-problem-body">Run a campaign long enough and you forget half of what you made up. Most AI tools fill the gaps by inventing more. Unbound Codex is my side project that does the opposite: its archivist, Silias, starts with what you wrote, never makes up facts about your world, and changes nothing until you say yes.</p>
    </div>
    <ul class="csb-stat-list">
      <li class="csb-stat csb-stat--constraint">
        <div class="csb-stat-body">
          <p class="csb-stat-name">Your world comes first</p>
          <p class="csb-stat-text">Silias checks your codex, then the game&rsquo;s rules, then what the model knows about the game.</p>
        </div>
      </li>
      <li class="csb-stat csb-stat--constraint">
        <div class="csb-stat-body">
          <p class="csb-stat-name">Asks before it writes</p>
          <p class="csb-stat-text">Every change shows up as a proposal you approve or toss.</p>
        </div>
      </li>
      <li class="csb-stat csb-stat--constraint">
        <div class="csb-stat-body">
          <p class="csb-stat-name">Remembers the table</p>
          <p class="csb-stat-text">Drop a session recording and it comes back as a recap and codex entry suggestions.</p>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="sp-section sp-section--light sp-unbound" id="silias" aria-labelledby="sp-silias-title">
  <div class="sp-wrap">
    <header class="sp-head">
      <div>
        <span class="sp-kicker"><b>01</b>The AI</span>
        <h2 class="sp-title" id="sp-silias-title">Silias, the archivist</h2>
      </div>
      <p class="sp-lead">Every NPC, place, quest and recap in your codex is indexed, and that&rsquo;s where Silias looks first. Ask him something and the answer is stitched from what you already wrote, with the rules filling in the gaps. Ask him to make something and it comes back as a proposal, not an edit.</p>
    </header>

    <div class="sp-stage">
      <span class="sp-stage-tag">Proposals, not edits</span>
      <div class="sp-shot">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/unbound-codex/uc-silias-plan.png' | relative_url }}" alt="Silias returning a multi-step plan with staged NPC and quest proposals to approve or reject">
        </figure>
        <p class="sp-shot-cap">Asked for an NPC with a quest of their own, Silias drafts both as separate cards. Nothing is written until you approve.</p>
      </div>
    </div>

    <div class="sp-logic sp-logic--square">
      <div class="sp-logic-copy">
        <h3 class="sp-sub">The logic that powers it</h3>
        <p class="sp-sub-lead">Four decisions that keep the AI useful without putting it in charge. The numbers match the diagram.</p>
        <ol class="sp-points">
          <li><span class="sp-num">1</span><div><h4>Your world comes first</h4><p>Silias checks your codex first, then the rules the game ships with, then the model&rsquo;s own knowledge of the game. Facts about your world only ever come from the codex: if it doesn&rsquo;t say, he says so and offers to create it.</p></div></li>
          <li><span class="sp-num">2</span><div><h4>Transcripts stay out of the index</h4><p>A four-hour session log would drown search in noise. It&rsquo;s kept for reference, and only the moments worth keeping get pulled out as proposals.</p></div></li>
          <li><span class="sp-num">3</span><div><h4>One gate: you</h4><p>A chat command, a recording and hand-written lore all end at the same approve-or-reject step. Say no and nothing lands; say yes and the old version is kept for a one-click undo.</p></div></li>
          <li><span class="sp-num">4</span><div><h4>Approved means searchable</h4><p>The moment you approve a change it&rsquo;s re-embedded, so Silias knows about it for the very next question.</p></div></li>
        </ol>
      </div>
      <div class="sp-chart">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/unbound-codex/uc-rag-flow.png' | relative_url }}" alt="Flow diagram of the Unbound Codex grounding loop. A user request (with history) and the embedded codex feed a model decision: answer or act. Answers are grounded and cited and stop there; actions choose a tool and stage a proposal. Two other inputs feed the same staged proposal: a recorded session transcribed to a recap, and manual lore entry with suggested smart links. Every proposal reaches a human 'User approved?' gate. Yes saves it to the codex, chunked and re-embedded, closing the loop. No sends it back to refine or reject, with nothing committed.">
          <span class="cs-callout-marker" style="--x: 44%; --y: 6.7%;">1</span>
          <span class="cs-callout-marker" style="--x: 93.2%; --y: 43.9%;">2</span>
          <span class="cs-callout-marker" style="--x: 51.6%; --y: 58.3%;">3</span>
          <span class="cs-callout-marker" style="--x: 34.5%; --y: 88.3%;">4</span>
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="sp-section sp-section--gray sp-unbound" id="table" aria-labelledby="sp-table-title">
  <div class="sp-wrap">
    <header class="sp-head">
      <div>
        <span class="sp-kicker"><b>02</b>The table</span>
        <h2 class="sp-title" id="sp-table-title">Built for the night itself</h2>
      </div>
      <p class="sp-lead">Everything a DM touches in a week lives in one place: the map, the cast, the plot threads, the encounters. When the session starts, the DM screen decides exactly what the players get to see, and the twist stays in your head.</p>
    </header>

    <div class="sp-stage">
      <span class="sp-stage-tag">The DM screen, live</span>
      <div class="sp-shot">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/unbound-codex/uc-dmscreen.png' | relative_url }}" alt="The live DM Screen with a spotlighted NPC, a session timer, and a running event log">
        </figure>
        <p class="sp-shot-cap">Spotlight a portrait, push a map, keep a running log of the night. Every reveal is a deliberate click, so nothing leaks by accident.</p>
      </div>
    </div>

    <ul class="sp-cards">
      <li>
        <figure class="cs-callout-figure"><img src="{{ '/assets/img/unbound-codex/uc-npc.png' | relative_url }}" alt="An NPC detail page for Elder Corin with at-the-table facts beside GM-only secrets"></figure>
        <h4>Two halves of every NPC</h4>
        <p>What you perform at the table sits right next to the secrets you&rsquo;re keeping, on one screen.</p>
      </li>
      <li>
        <figure class="cs-callout-figure"><img src="{{ '/assets/img/unbound-codex/knowledge-graph-01.png' | relative_url }}" alt="The Weave: a knowledge graph of the campaign showing entities and links, a detail panel for The Living Codex with its relationships and suggested links awaiting review, a session timeline scrubber, and Silias answering from the campaign graph"></figure>
        <h4>The Weave</h4>
        <p>A graph of everything you&rsquo;ve made. Its most useful filter shows the entries that link to nothing yet: the parts of your world you invented and forgot.</p>
      </li>
      <li>
        <figure class="cs-callout-figure"><img src="{{ '/assets/img/unbound-codex/uc-player-shared.png' | relative_url }}" alt="The player's Shared view with the same-campaign player toggle active"></figure>
        <h4>What the players see</h4>
        <p>One toggle flips to the player&rsquo;s view, and Silias follows the same rule: he only sees what you&rsquo;ve shared.</p>
      </li>
    </ul>
  </div>
</section>

<section class="sp-section sp-section--light sp-outro sp-unbound" id="my-role" aria-labelledby="sp-role-title">
  <div class="sp-wrap sp-outro-inner">
    <div>
      <span class="sp-kicker">My role</span>
      <h2 class="sp-title sp-title--sm" id="sp-role-title">Solo design and engineering.</h2>
      <p class="sp-lead">I designed and built the whole thing, from the codex data model to the session pipeline. I also run my own campaign, <em>The Unbound Saga</em>, inside it, so every design call has to survive my actual table.</p>
    </div>
    <div class="sp-outro-actions">
      <a href="https://unboundcodex.com/campaign/85191cdd-79da-4299-b4b9-3af4b44e4ac8/overview" target="_blank" rel="noopener noreferrer" class="button button-primary">Open the live demo</a>
      <a href="https://unboundcodex.com" target="_blank" rel="noopener noreferrer" class="button button-outline">Visit unboundcodex.com</a>
    </div>
  </div>
</section>

{% include next-project.html %}
