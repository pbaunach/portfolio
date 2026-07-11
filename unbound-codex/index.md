---
title: "The Unbound Codex"
layout: case-study
permalink: /unbound-codex/
---

<section class="case-study-section case-study-intro case-study-intro--hero case-study-intro--theme-dnd case-study-intro--unbound-screens-hero case-study-intro--title-only">
  <div class="case-study-hero-bg parallax-hero-bg" aria-hidden="true"></div>
  <div class="case-study-hero-dots parallax-hero-dots" aria-hidden="true"></div>
  <div class="case-study-section-inner">
    <div class="case-study-hero-inner">
      <h1 class="case-study-title">The Unbound Codex</h1>
    </div>
  </div>
  <figure class="case-study-hero-image">
    <img src="{{ '/assets/img/unbound-codex/card.png' | relative_url }}" alt="The Unbound Codex landing with Silias">
  </figure>
</section>

<section class="case-study-thesis case-study-thesis--dnd" aria-label="Project thesis">
  <div class="case-study-thesis-inner">
    <p class="case-study-thesis-eyebrow">The Big Idea</p>
    <p class="case-study-thesis-quote">An AI that doesn't write your campaign for you. It remembers it for you.</p>
  </div>
</section>

<section class="case-study-act case-study-act--dnd" id="silias" aria-label="Section 1">
  <div class="case-study-act-inner">
    <div class="case-study-act-number">01</div>
    <div class="case-study-act-content">
      <h2 class="case-study-act-title">Silias: the archivist who actually read your codex</h2>
      <p class="case-study-act-intro">Every entry in the codex (every NPC, location, quest, faction, recap, item) is chunked, embedded, and queryable. So when Silias generates a new NPC, the political tensions I've already written about Argent and Umber are already on the page. When I ask for an encounter, the bestiary entries already in scope appear first. The AI doesn't bolt onto the side of a world. It lives inside one.</p>
    </div>
  </div>
</section>

<section class="major-section">
  <div class="major-section-inner major-section-inner--wide">
    <div class="subsection">
      <h3 class="case-study-sub-mode">Smart links</h3>
      <p>Every entity in the codex carries its own embeddings. The "@" syntax lets me reference any of them while writing, and the right rail surfaces what's mentioned on the current view. Edit an entry once and the new information propagates everywhere it's referenced.</p>
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/unbound-codex/03-codex-smart-links.png' | relative_url }}" alt="Codex with Smart Links sidebar showing referenced entities">
          <span class="cs-callout-marker" style="--x: 35%; --y: 60%;">1</span>
          <span class="cs-callout-marker" style="--x: 78%; --y: 25%;">2</span>
          <span class="cs-callout-marker" style="--x: 78%; --y: 65%;">3</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> The "@" syntax references any entity in the codex. Silias inherits the full context I've written about it without me re-explaining anything.</li>
          <li><span class="cs-callout-num">2</span> Smart Links in the right rail expose every entity mentioned on the current page. One click jumps to that entry's full entry.</li>
          <li><span class="cs-callout-num">3</span> Editing one entry propagates everywhere it's referenced. The codex stays consistent without manual cleanup.</li>
        </ol>
      </div>

      <h3 class="case-study-sub-mode">Plan-mode generation</h3>
      <p>I ask Silias for an NPC and they hand back a connected set: an NPC, the location they live in, a quest tied to their backstory, an encounter to play out the quest, and the monster that shows up at the end. All consistent with the world. All proposed for me to review before anything lands in the codex. Image portraits come with each one, themed to the campaign's aesthetic.</p>
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/unbound-codex/06-silias-proposals.png' | relative_url }}" alt="Silias proposal review with NPC and Quest field-level diffs">
          <span class="cs-callout-marker" style="--x: 10%; --y: 17%;">1</span>
          <span class="cs-callout-marker" style="--x: 50%; --y: 50%;">2</span>
          <span class="cs-callout-marker" style="--x: 92%; --y: 41%;">3</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> Silias proposes multiple connected entries at once (NPC, quest, location, encounter, monster), each grounded in the existing codex and consistent with the others.</li>
          <li><span class="cs-callout-num">2</span> Field-level diffs make every proposed change visible before I commit. No hidden writes, no guessing what Silias inferred.</li>
          <li><span class="cs-callout-num">3</span> Approve, reject, or edit each piece independently. The bundle is a suggestion. The world stays mine.</li>
        </ol>
      </div>

      <h3 class="case-study-sub-mode">Audio recaps and lore mining</h3>
      <p>I drop the session recording in, get up to make coffee, and come back to a transcribed recap I can paste into the party chat. Underneath it, Silias surfaces what they heard but didn't write into the recap. A name a player kept using. A place the party named on the fly. A throwaway joke that recurred four times. The session itself becomes a source of lore.</p>
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/unbound-codex/21-recap-silias-noticed.png' | relative_url }}" alt="Session recap with Silias Noticed and Silias Drafted cards">
          <span class="cs-callout-marker" style="--x: 75%; --y: 24%;">1</span>
          <span class="cs-callout-marker" style="--x: 75%; --y: 49%;">2</span>
          <span class="cs-callout-marker" style="--x: 90%; --y: 70%;">3</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> Silias transcribes the audio, writes a clean narrative recap, and notes the moments players reacted to most. Replaces 90 minutes of post-session typing.</li>
          <li><span class="cs-callout-num">2</span> "Silias Noticed" cards surface recurring terms, repeated player questions, and inside jokes the session generated. Lore hooks I'd otherwise lose.</li>
          <li><span class="cs-callout-num">3</span> "Silias Drafted" proposes those noticed moments as new codex entries with one click. The campaign grows from the table, not just my prep.</li>
        </ol>
      </div>
    </div>
  </div>
</section>

<section class="case-study-act case-study-act--dnd" id="prep" aria-label="Section 2">
  <div class="case-study-act-inner">
    <div class="case-study-act-number">02</div>
    <div class="case-study-act-content">
      <h2 class="case-study-act-title">Prep that respects the rest of your week</h2>
      <p class="case-study-act-intro">The codex covers everything a DM actually touches in a week. Atlas, NPCs, quests, encounter builder, battle maps, bestiary, spells, items. Silias sits one keystroke away to answer any question while I prep. When the session runs, a single toggle controls what the party sees vs. what stays in my head.</p>
    </div>
  </div>
</section>

<section class="major-section">
  <div class="major-section-inner major-section-inner--wide">
    <div class="subsection">
      <h3 class="case-study-sub-mode">The Atlas</h3>
      <p>The world made spatial. Hand-drawn maps for each region, pins for locations, lore that surfaces on hover. The GM/Player toggle at the top is the most important control on the page. One click flips what the table can see.</p>
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/unbound-codex/04-atlas-tooltip.png' | relative_url }}" alt="Atlas with a pin tooltip surfacing location lore">
          <span class="cs-callout-marker" style="--x: 73%; --y: 7%;">1</span>
          <span class="cs-callout-marker" style="--x: 33%; --y: 75%;">2</span>
          <span class="cs-callout-marker" style="--x: 60%; --y: 45%;">3</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> GM/Player toggle controls what the table sees with one click. The rest of the design only works because this part works.</li>
          <li><span class="cs-callout-num">2</span> Pin tooltips carry lore on hover. The map is the index into the codex, not a static image.</li>
          <li><span class="cs-callout-num">3</span> Hand-drawn maps were a deliberate choice. A wireframe map saves prep time. A hand-drawn one makes the table feel like they're somewhere real.</li>
        </ol>
      </div>

      <h3 class="case-study-sub-mode">Encounters and battle maps</h3>
      <p>Encounters propose themselves when I ask. I point Silias at a quest and they generate a balanced encounter against the bestiary, calibrated to the party's level. The battle map editor opens with the encounter already loaded so I'm not re-entering anything between prep tabs.</p>
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/unbound-codex/13-encounters-silias.png' | relative_url }}" alt="Silias proposing an encounter tied to a quest">
          <span class="cs-callout-marker" style="--x: 50%; --y: 26%;">1</span>
          <span class="cs-callout-marker" style="--x: 85%; --y: 25%;">2</span>
          <span class="cs-callout-marker" style="--x: 50%; --y: 75%;">3</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> "Create me an encounter for @Quest 1" pulls the quest's context, the party's level, and the bestiary entries in scope. Output is calibrated, not generic.</li>
          <li><span class="cs-callout-num">2</span> Same propose-review-approve flow as every other AI surface in the product. The DM is always the final approver.</li>
          <li><span class="cs-callout-num">3</span> Approved encounters land in the battle map editor with the creatures and stat blocks already attached. Zero re-entry between prep and play.</li>
        </ol>
      </div>

      <h3 class="case-study-sub-mode">Broadcast and live play</h3>
      <p>When the session runs, the DM Screen becomes the live control surface. Active NPCs, allied subjects, current locations, a timer, an event log. Silias is still one keystroke away if a question pops up at the table. And every surface in the codex (a portrait, a stat block, a piece of lore, a battle map) can be broadcast to the players in one click. What the party sees is curated, not leaked.</p>
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/unbound-codex/19-dm-screen.png' | relative_url }}" alt="The live DM Screen with active NPCs and event log">
          <span class="cs-callout-marker" style="--x: 30%; --y: 22%;">1</span>
          <span class="cs-callout-marker" style="--x: 80%; --y: 25%;">2</span>
          <span class="cs-callout-marker" style="--x: 80%; --y: 75%;">3</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> The live play view: active NPCs in the current scene, allies, major locations, plus the roleplay panel where I take notes as the session unfolds.</li>
          <li><span class="cs-callout-num">2</span> The player view toggle at the top controls what the table is shown right now. Highlight a portrait, share a location, push a battle map. The DM curates, the party sees.</li>
          <li><span class="cs-callout-num">3</span> Session timer + event log capture the structure of the session in real time. They feed the audio recap and the lore hooks Silias surfaces after.</li>
        </ol>
      </div>
    </div>
  </div>
</section>

<section id="my-role" class="case-study-section case-study-intro case-study-intro--role-only">
  <div class="case-study-section-inner">
    <h2 class="case-study-title">My Role</h2>
    <div class="case-study-callout case-study-callout--role">
      <p class="case-study-callout__role-title">Solo Product Design and Build</p>
      <h3 class="case-study-callout__heading">My Contributions</h3>
      <ul>
        <li><strong>Full-surface design and engineering:</strong> Designed the entire product (Codex, Atlas, Silias, NPCs, Quests, Encounters, Battle Maps, Reference, DM Screen, Recap) and built it in code on the side. No PM, no team, just me and Cursor.</li>
        <li><strong>AI as a controllable collaborator:</strong> The propose-review-approve pattern that runs through every Silias surface is the design decision I'm proudest of on this project. I wanted the AI to be useful without being authoritative. The structured diff view and the explicit approve/reject step are what make that work, and they're the thing other AI tools mostly get wrong.</li>
        <li><strong>Designing for ritual:</strong> TTRPG play has rhythms (prep, session, recap) and the product is shaped around them, not around CRUD. The hardest part has been resisting the urge to flatten the experience into "everything in a list."</li>
        <li><strong>Personal dogfood:</strong> I'm running my own homebrew campaign, <em>The Unbound Saga</em>, inside it. Every design call has to survive contact with my actual table, which has changed quite a few of them.</li>
      </ul>
    </div>
  </div>
</section>
