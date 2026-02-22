---
title: "The Unified Campaign Codex"
layout: case-study
---

<section class="case-study-section case-study-intro case-study-intro--hero case-study-intro--theme-dnd case-study-intro--title-only">
  <div class="case-study-hero-bg parallax-hero-bg" aria-hidden="true"></div>
  <div class="case-study-hero-dots parallax-hero-dots" aria-hidden="true"></div>
  <div class="case-study-section-inner">
    <div class="case-study-hero-inner">
      <h1 class="case-study-title">The Unified Campaign Codex</h1>
      <p class="case-study-hero-summary">A design exploration into keeping Dungeon Masters in the moment. By bridging the gap between official D&D rules and the "scattered" nature of homebrew lore, this project creates a unified world-building interface. It's designed to eliminate the distraction of searching through disjointed notes, allowing spatial mapping and session history to live exactly where the story happens.</p>
    </div>
  </div>
</section>

<nav class="case-study-nav" aria-label="On this page">
  <ul>
    <li><a href="#design-problem">Design Problem</a></li>
    <li><a href="#session-recap">The Hero's Herald</a></li>
    <li><a href="#timeline">The Chronicle</a></li>
    <li><a href="#npcs">Characters of the World</a></li>
    <li><a href="#atlas">The Atlas</a></li>
    <li><a href="#overview">Forging a Realm</a></li>
    <li><a href="#create-campaign">Create a Campaign</a></li>
    <li><a href="#campaign-hall">The Campaign Hall</a></li>
  </ul>
</nav>

<section id="design-problem" class="major-section major-section--design-a">
  <div class="major-section-inner">
    <div class="subsection">
      <p class="dnd-pdf-button-wrap">
        <a href="{{ '/assets/pdf/Design-Problem_Campaign-Builder.pdf' | relative_url }}" class="button button-primary" target="_blank" rel="noopener noreferrer">View the PDF Version</a>
      </p>
      <h2>Design Problem</h2>
      <div class="dnd-callouts-row">
        <div class="dnd-callout dnd-callout--problem">
          <h3 class="dnd-callout__title">The Problem:<br>Fragmented Campaign Management.</h3>
          <p class="dnd-callout__blurb">Dungeon Masters expend immense creative energy "forging realms," but that world becomes a burden to manage during live play. Lore is often scattered across physical notebooks, disparate text files, and external world-building apps.</p>
        </div>
        <div class="dnd-callout dnd-callout--opportunity">
          <h3 class="dnd-callout__title">The Opportunity:<br>Unified Campaign Codex</h3>
          <p class="dnd-callout__blurb">By integrating an Atlas, NPC, Timeline and Recap system into a unified interface, we allow DMs to access any piece of world data, from NPC motivations to regional history, without ever leaving their primary campaign workflow.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="session-recap" class="major-section major-section--design-b">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>The Hero's Herald</h2>
      <div class="dnd-logic-callout">
        <h3 class="dnd-logic-callout__title">The Logic</h3>
        <p>I chose to address the creative tax of post-session recaps by leveraging existing system triggers, such as dice rolls, combat events, and loot gains. By transforming raw event logs into a thematic newspaper narrative, The Hero's Herald performs the heavy lifting of documentation while leaving the DM in creative control.</p>
        <p>Having the system produce the first-draft, allows the DM to spend their energy on personal flair and capturing nuanced roleplay moments that an event log cannot track.</p>
        <p>To drive player engagement, and provide some moments of delight, the system intentionally highlights Natural 20s and Critical Failures, surfacing those high-stakes moments that define the session's emotional arc and solidify the party's shared legacy.</p>
      </div>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/dnd-campaign-builder/session-recap.png' | relative_url }}" alt="Session recap">
      </figure>
    </div>
  </div>
</section>

<section id="timeline" class="major-section major-section--design-a">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>The Chronicle</h2>
      <div class="dnd-logic-callout">
        <h3 class="dnd-logic-callout__title">The Logic - The Chronicle</h3>
        <p>I designed The Chronicle as a proactive navigation tool that organizes the campaign into chapters, providing a natural narrative path regardless of the direction the party takes. By grouping events into a logical order, the DM can maintain story momentum even when the players deviate from the expected route.</p>
        <p>To reduce downtime, each event card unifies an atmospheric image, map data, encounter data and narrative notes in a single view. The inclusion of a "Launch VTT" button acts as a shortcut to action, allowing the DM to transition from theater-of-the-mind to tactical combat without the friction of searching a database for the correct map.</p>
      </div>
      <div class="dnd-logic-callout">
        <h3 class="dnd-logic-callout__title">The Logic - Data Panel</h3>
        <p>To solve for flow interruption, I implemented a persistent data panel. This ensures that when introducing an event, the DM is immediately equipped with all relevant NPC and location data without ever leaving the primary view.</p>
        <p>By interacting with contextual tokens, the panel updates to provide deep-dive information while keeping the DM's place in the timeline secure. This design choice eliminates the cognitive cost of context-switching, allowing the DM to provide detailed world-data while staying present in the performance.</p>
      </div>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/dnd-campaign-builder/timeline.png' | relative_url }}" alt="Timeline">
      </figure>
    </div>
  </div>
</section>

<section id="npcs" class="major-section major-section--design-b">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Characters of the World</h2>
      <div class="dnd-logic-callout">
        <h3 class="dnd-logic-callout__title">The Logic</h3>
        <p>I optimized the NPC interface for high-speed retrieval during live play. My primary goals were:</p>
        <ul>
          <li>Easy information retrieval eliminating the need to flip through physical notebooks for character details.</li>
          <li>Simplified inspection with an "at-a-glance" summary of pivotal character traits.</li>
          <li>Sustained immersion ensuring the DM remains present in the social encounter rather than getting lost in the UI.</li>
        </ul>
      </div>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/dnd-campaign-builder/npcs.png' | relative_url }}" alt="NPCs">
      </figure>
    </div>
  </div>
</section>

<section id="atlas" class="major-section major-section--design-a">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>The Atlas</h2>
      <div class="dnd-logic-callout">
        <h3 class="dnd-logic-callout__title">The Logic</h3>
        <p>I identified that lore is often lost because it's untethered. The decision here was to link "the where" (maps) to "the what" (lore), ensuring that a DM can retrieve location-specific homebrew without breaking their flow to search a separate document.</p>
        <p>Each dot is interactive, clicking through to the next map. Leaving a breadcrumb for easy navigation back and a nested location hierarchy.</p>
      </div>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/dnd-campaign-builder/atlas.png' | relative_url }}" alt="Atlas">
      </figure>
    </div>
  </div>
</section>

<section id="overview" class="major-section major-section--design-b">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Forging a Realm</h2>
      <div class="dnd-logic-callout">
        <h3 class="dnd-logic-callout__title">The Logic</h3>
        <p>I kept this simple and decided it shouldn't be a data-heavy dashboard, we can leave the stats and recap for the Hero's Herald. The overview can be a visual "hook" using banner imagery and high-level descriptions to set the tone for players before they dive into the technicalities of their character sheets.</p>
      </div>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/dnd-campaign-builder/overview.png' | relative_url }}" alt="Overview">
      </figure>
    </div>
  </div>
</section>

<section id="create-campaign" class="major-section major-section--design-a">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Create a Campaign</h2>
      <div class="dnd-logic-callout">
        <h3 class="dnd-logic-callout__title">The Logic</h3>
        <p>I moved away from multiple buttons to launch different versions of creating a campaign to just one button for a cleaner interface. By creating a distinct "Fork in the Road" between Forging a Realm and Selecting a Premade, the UI helps guide a DM deciding which option lets them homebrew or run a premade module.</p>
      </div>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/dnd-campaign-builder/create-campaign.png' | relative_url }}" alt="Create campaign">
      </figure>
    </div>
  </div>
</section>

<section id="campaign-hall" class="major-section major-section--design-b">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>The Campaign Hall</h2>
      <div class="dnd-logic-callout">
        <h3 class="dnd-logic-callout__title">The Logic</h3>
        <p>I introduced a hierarchy (Active, Draft, Deactivated). This allows the DM to separate "Live Play" from "World Prep." I made some visual distinctions for what the users role is in that campaign. Helping them quickly understand if they are a player or a DM for that campaign, reducing mental clutter when they are just trying to get a session started.</p>
      </div>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/dnd-campaign-builder/campaign-hall.png' | relative_url }}" alt="Campaign hall">
      </figure>
    </div>
  </div>
</section>
