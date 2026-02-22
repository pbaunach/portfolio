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
        <p>I decided to solve the "Manual Chore" of recaps by using system triggers (dice rolls, combat events, loot gains). By turning raw event logs into a "newspaper" narrative, we remove the post-game "Creative Tax" from the DM.</p>
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
        <h3 class="dnd-logic-callout__title">The Logic</h3>
        <p>I designed the Timeline as a proactive navigation tool. By grouping Lore, NPCs, and "Launch VTT" buttons into a single chronological thread, we allow the DM to "play the campaign" as easily as their players.</p>
      </div>
      <h3>The Timeline Side Panel</h3>
      <div class="dnd-logic-callout">
        <h3 class="dnd-logic-callout__title">The Logic</h3>
        <p>To solve for "Flow Interruption," I implemented a handy side panel. This ensures that when a DM is introducing an event (like The Menagerie Riots), all relevant NPCs and location data can slide in without navigating away from the main timeline. It keeps the DM's "place" secure while providing deep-dive data.</p>
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
        <p>The UX decision was to prioritize "at-a-glance" inspection, ensuring that during an improv-heavy social encounter, the DM isn't stalled by a complex interface.</p>
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
        <p>I kept this simple and decided it shouldn't be a data-heavy dashboard, but a visual "hook" using banner imagery and high-level descriptions to set the tone for players before they dive into the technicalities of their character sheets.</p>
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
        <p>I introduced a hierarchy (Active, Draft, Deactivated). This allows the DM to separate "Live Play" from "World Prep." I also made some visual distinctions for what the users role is in that campaign. Helping them quickly understand if they are a player or a DM for that campaign, reducing visual noise and mental clutter when they are just trying to get a session started.</p>
      </div>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/dnd-campaign-builder/campaign-hall.png' | relative_url }}" alt="Campaign hall">
      </figure>
    </div>
  </div>
</section>
