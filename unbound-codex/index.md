---
title: "The Unbound Codex"
layout: case-study
permalink: /unbound-codex/
---

<section class="case-study-section case-study-intro case-study-intro--hero case-study-intro--theme-dnd case-study-intro--title-only">
  <div class="case-study-hero-bg parallax-hero-bg" aria-hidden="true"></div>
  <div class="case-study-hero-dots parallax-hero-dots" aria-hidden="true"></div>
  <div class="case-study-section-inner">
    <div class="case-study-hero-inner">
      <h1 class="case-study-title">The Unbound Codex</h1>
      <p class="case-study-hero-summary">A passion project I've been building on the side, for Dungeon Masters like me who got tired of running a campaign across seven open tabs and a paper notebook. The Unbound Codex is a living workspace for everything a DM tracks (lore, NPCs, factions, maps, sessions) with an AI archivist named Silias who actually knows the world you've built and helps you keep building it during prep, during play, and after the session ends.</p>
    </div>
  </div>
</section>

<section class="case-study-thesis case-study-thesis--dnd" aria-label="Project thesis">
  <div class="case-study-thesis-inner">
    <p class="case-study-thesis-eyebrow">The Big Idea</p>
    <p class="case-study-thesis-quote">An AI that doesn't write your campaign for you. It remembers it for you.</p>
  </div>
</section>

<nav class="case-study-nav" aria-label="On this page">
  <ul>
    <li><a href="#codex">The Codex</a></li>
    <li><a href="#atlas">The Atlas</a></li>
    <li><a href="#silias">Silias</a></li>
    <li><a href="#proposals">Propose &amp; Approve</a></li>
    <li><a href="#npcs">NPCs</a></li>
    <li><a href="#quests">Quests</a></li>
    <li><a href="#party">The Party</a></li>
    <li><a href="#encounters">Encounters</a></li>
    <li><a href="#battle-maps">Battle Maps</a></li>
    <li><a href="#reference">Reference</a></li>
    <li><a href="#dm-screen">DM Screen</a></li>
    <li><a href="#recap">Session Recap</a></li>
    <li><a href="#my-role">My Role</a></li>
  </ul>
</nav>

<section class="case-study-act case-study-act--dnd" aria-label="Act 1">
  <div class="case-study-act-inner">
    <div class="case-study-act-number">01</div>
    <div class="case-study-act-content">
      <p class="case-study-act-label">Act One</p>
      <p class="case-study-act-title">Build the World</p>
      <p class="case-study-act-intro">Before there's a game, there's a world. Lore, geography, the AI archivist who keeps it all straight.</p>
    </div>
  </div>
</section>

<section id="codex" class="major-section major-section--design-a">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>A world that never forgets</h2>
      <p>The center of the product is the Codex itself. Long-form lore organized by act, with everything cross-referenced. When I write "the Argents," every other mention in the campaign knows what I'm talking about.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/unbound-codex/02-codex-overview.png' | relative_url }}" alt="Codex: Act 1 Overview">
      </figure>
      <p>Smart Links in the right rail let me jump to any entity referenced on the page (an NPC, a location, a faction), and editing one entity propagates the new information everywhere it's referenced. I've been writing my own homebrew campaign, <em>The Unbound Saga, Act I: The Weaver</em>, inside the product as my own dogfood.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/unbound-codex/03-codex-smart-links.png' | relative_url }}" alt="Codex with Smart Links sidebar">
      </figure>
    </div>
  </div>
</section>

<section id="atlas" class="major-section major-section--design-b">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>The Atlas</h2>
      <p>The Atlas is the world made spatial. I commissioned hand-drawn maps for each region and the Atlas lets me drop pins for key locations. Any pin can carry lore that surfaces on hover. The GM/Player toggle at the top is the most important control: it lets me share what the table should see (only the regions they've discovered, only the lore they've earned) without exposing my prep notes.</p>
      <figure class="case-study-screenshot case-study-screenshot--callouts callouts-dnd">
        <div class="cs-screenshot-frame">
          <img src="{{ '/assets/img/unbound-codex/04-atlas-tooltip.png' | relative_url }}" alt="Atlas with location pin tooltip">
          <span class="cs-callout-marker" style="--x: 73%; --y: 7%;">1</span>
          <span class="cs-callout-marker" style="--x: 33%; --y: 75%;">2</span>
          <span class="cs-callout-marker" style="--x: 60%; --y: 45%;">3</span>
        </div>
        <ol class="cs-callout-notes">
          <li><span class="cs-callout-num">1</span> GM/Player toggle is the most important control on the page. One click flips what the table can see. The rest of the design only works because this part works.</li>
          <li><span class="cs-callout-num">2</span> Pin tooltips carry lore on hover. The map is the index into the codex, not a static image. Hovering a location is faster than searching for it.</li>
          <li><span class="cs-callout-num">3</span> Hand-drawn maps were a deliberate choice. A wireframe map saves prep time. A hand-drawn map makes the table feel like they're somewhere real.</li>
        </ol>
      </figure>
    </div>
  </div>
</section>

<section id="silias" class="major-section major-section--design-a">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Silias, the Arcane Intelligence</h2>
      <p>Silias is the AI archivist who lives inside the codex. He's not a generic LLM bolted to the side. He's been given the full Codex as context, so the help he offers is grounded in the specific world I've already built.</p>
      <p>When I asked him to "create me an NPC that lives in @Argent with a personal quest for @Gimble," he pulled from the political tensions I'd already written about Argent and Umber and proposed an NPC whose motivations actually fit the setting. The "@" syntax is the trick. I can reference any entity in the codex and Silias inherits all the context I've already written about it.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/unbound-codex/05-silias-creates-npc.png' | relative_url }}" alt="Silias creating an NPC from Atlas context">
      </figure>
    </div>
  </div>
</section>

<section id="proposals" class="major-section major-section--design-b">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Propose, review, approve</h2>
      <p>The hard part of AI in a creative tool is trust. Silias never writes directly into my campaign. He proposes changes (a new NPC, a new quest, edits to existing lore) and I approve or reject each one in a structured diff view. The decision lives with me. If I want to tweak a field before approving, I can. This is the pattern I most wish other AI tools used, and shaping it was the design call I'm proudest of on this project.</p>
      <figure class="case-study-screenshot case-study-screenshot--callouts callouts-dnd">
        <div class="cs-screenshot-frame">
          <img src="{{ '/assets/img/unbound-codex/06-silias-proposals.png' | relative_url }}" alt="Silias proposal review with NPC and Quest diffs">
          <span class="cs-callout-marker" style="--x: 10%; --y: 18%;">1</span>
          <span class="cs-callout-marker" style="--x: 50%; --y: 50%;">2</span>
          <span class="cs-callout-marker" style="--x: 92%; --y: 41%;">3</span>
        </div>
        <ol class="cs-callout-notes">
          <li><span class="cs-callout-num">1</span> Each proposal is labeled with its type (NPC, Quest, Location). Silias declares his intent before he shows the change.</li>
          <li><span class="cs-callout-num">2</span> Field-level diffs make it easy to see exactly what would change. Trust through transparency. No hidden writes.</li>
          <li><span class="cs-callout-num">3</span> Approve, reject, or edit each field before approving. The decision lives with the DM. This is the pattern I most wish other AI tools used.</li>
        </ol>
      </figure>
    </div>
  </div>
</section>

<section class="case-study-act case-study-act--dnd" aria-label="Act 2">
  <div class="case-study-act-inner">
    <div class="case-study-act-number">02</div>
    <div class="case-study-act-content">
      <p class="case-study-act-label">Act Two</p>
      <p class="case-study-act-title">Prep the Session</p>
      <p class="case-study-act-intro">The week before the table gathers: characters, quests, encounters, maps. Prep that respects your time.</p>
    </div>
  </div>
</section>

<section id="npcs" class="major-section major-section--design-a">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>NPCs that live and breathe</h2>
      <p>Every character in the world gets a profile: identity, personality, history, motivations, the secrets only the GM sees. The profile view is what I use during prep to remind myself who someone actually is, and during play to surface what the party would know about them.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/unbound-codex/07-npc-profile.png' | relative_url }}" alt="NPC profile: Kaelen Vance">
      </figure>
      <p>Editing pulls up a focused modal with everything I might need in one view, including a Generate Portrait button when I need a quick image. The "Visible to players" toggle at the top is the single most important control here. It's the line between what I've planned and what the table has actually seen.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/unbound-codex/08-npc-edit.png' | relative_url }}" alt="Edit Character modal">
      </figure>
    </div>
  </div>
</section>

<section id="quests" class="major-section major-section--design-b">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Quests as story threads</h2>
      <p>A kanban for quests, because that's how the work actually flows in my head. Not Started, In Progress, Complete. Main story, side quest, faction quest, personal quest. Each card links to the lore it references, so I can see where a quest fits in the larger story without leaving the board.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/unbound-codex/09-quests-kanban.png' | relative_url }}" alt="Quests kanban board">
      </figure>
      <p>Opening a quest gives me the full picture: objective, hooks, complications, the NPCs involved, the locations it touches. The Smart Link sidebar on the right means I can read about an entity referenced in the quest without losing my place in the quest itself.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/unbound-codex/10-quest-detail.png' | relative_url }}" alt="Quest detail: The Toll of the Bridge">
      </figure>
    </div>
  </div>
</section>

<section id="party" class="major-section major-section--design-a">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>The Party</h2>
      <p>A character sheet view for the players at my actual table. Stats, HP, AC, inventory, spells, abilities, the whole loadout. The Party screen is where the world meets the people playing in it, and it's the one place a player would log in and see only their own character.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/unbound-codex/11-party.png' | relative_url }}" alt="Party screen with character sheet">
      </figure>
    </div>
  </div>
</section>

<section id="encounters" class="major-section major-section--design-b">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Encounters built from your quests</h2>
      <p>Encounter prep used to be the most time-consuming part of my week. The Encounter Builder starts empty, with Silias open in the side panel ready to help.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/unbound-codex/12-encounters-empty.png' | relative_url }}" alt="Empty Encounter Builder with Silias chat">
      </figure>
      <p>I ask him to "create me an encounter for @Quest 1: The Outcast's Formula" and he proposes one calibrated to the party's level, drawn from the bestiary, with a difficulty rating I can sanity-check. Same propose-review-approve flow as everywhere else. I never lose the final say on what the players actually face.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/unbound-codex/13-encounters-silias.png' | relative_url }}" alt="Silias proposing an encounter for a quest">
      </figure>
    </div>
  </div>
</section>

<section id="battle-maps" class="major-section major-section--design-a">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Battle maps for the moments that matter</h2>
      <p>Some encounters can be run theater-of-the-mind. Others need a grid. New maps start with a biome, a size, and a few words of flavor. Silias generates the layout and I edit from there.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/unbound-codex/14-battle-map-new.png' | relative_url }}" alt="New Battle Map modal">
      </figure>
      <p>For the set-piece encounters, I commissioned hand-drawn dungeons. A wireframe map saves time but a hand-drawn one makes the table feel like they're exploring a real place, and the difference is bigger than I expected when I first commissioned them.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/unbound-codex/15-battle-map-editor.png' | relative_url }}" alt="Battle map editor: Karth Vahl">
      </figure>
      <p>For the in-the-moment encounters that don't need that level of polish, the tactical grid view is what gets pulled up at the table.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/unbound-codex/16-battle-map-tactical.png' | relative_url }}" alt="Tactical battle map: The Echoing Maw">
      </figure>
    </div>
  </div>
</section>

<section id="reference" class="major-section major-section--design-b">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Reference, in the codex</h2>
      <p>Everything I'd otherwise look up in a 300-page sourcebook lives in the codex, searchable and cross-referenced with the rest of the world. The bestiary entries are full stat blocks with abilities, actions, and lore.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/unbound-codex/17-bestiary.png' | relative_url }}" alt="Bestiary: Aboleth stat block">
      </figure>
      <p>The spell list is a visual grid by level and school, with rarity tags so I can tell at a glance what's table-shaking and what's table-flavor. When Silias proposes an encounter that uses a specific creature or spell, the link drops me straight into its entry.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/unbound-codex/18-spells.png' | relative_url }}" alt="Spell list grid">
      </figure>
    </div>
  </div>
</section>

<section class="case-study-act case-study-act--dnd" aria-label="Act 3">
  <div class="case-study-act-inner">
    <div class="case-study-act-number">03</div>
    <div class="case-study-act-content">
      <p class="case-study-act-label">Act Three</p>
      <p class="case-study-act-title">Run &amp; Reflect</p>
      <p class="case-study-act-intro">Game night and the morning after. The live session view, and the recap Silias writes while you sleep.</p>
    </div>
  </div>
</section>

<section id="dm-screen" class="major-section major-section--design-a">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>The DM Screen</h2>
      <p>The DM Screen is the live session view. Everything I want at the table during play, surfaced in one place: the active NPCs in the current scene, the allies and subjects who matter for this arc, major locations, the roleplay panel where I take notes as the session unfolds, a session timer, and an event log. The GM/Player toggle stays at the top so I can flip what's projected to the players in one click.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/unbound-codex/19-dm-screen.png' | relative_url }}" alt="Live DM Screen with active NPCs and roleplay panel">
      </figure>
    </div>
  </div>
</section>

<section id="recap" class="major-section major-section--design-b">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Session recap, with Silias keeping the chronicle</h2>
      <p>After a four-hour session, the last thing I want to do is type a recap from memory. So I drop the audio recording into Silias and he writes the first draft while I'm getting dinner.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/unbound-codex/22-recap-audio.png' | relative_url }}" alt="Generate recap from session audio">
      </figure>
      <p>The recap that comes back isn't just narrative. It includes two kinds of cards I can act on. <strong>Silias Noticed</strong> highlights things from the session that might matter going forward: a player mention that recurred four times, the death of a named NPC, a location the party named on the fly. <strong>Silias Drafted</strong> proposes new entries for the codex based on what happened (a new NPC the party invented at the table, a location they decided to call "the Echoing Maw"). I approve what gets pulled into the codex.</p>
      <figure class="case-study-screenshot case-study-screenshot--callouts callouts-dnd">
        <div class="cs-screenshot-frame">
          <img src="{{ '/assets/img/unbound-codex/21-recap-silias-noticed.png' | relative_url }}" alt="Session recap with Silias Noticed and Drafted cards">
          <span class="cs-callout-marker" style="--x: 75%; --y: 24%;">1</span>
          <span class="cs-callout-marker" style="--x: 75%; --y: 49%;">2</span>
          <span class="cs-callout-marker" style="--x: 90%; --y: 70%;">3</span>
        </div>
        <ol class="cs-callout-notes">
          <li><span class="cs-callout-num">1</span> Silias Noticed surfaces things he heard that might matter going forward, with a confidence score. The DM decides if it's signal or noise.</li>
          <li><span class="cs-callout-num">2</span> Silias Drafted proposes new codex entries based on what happened at the table. Same propose-review-approve pattern as everywhere else.</li>
          <li><span class="cs-callout-num">3</span> One-click "Create NPC" pulls the proposal straight into the codex with all the cited context attached. Zero re-entry.</li>
        </ol>
      </figure>
      <p>Underneath the cards, there's a clean narrative recap I can drop straight into the party's group chat.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/unbound-codex/20-recap-narrative.png' | relative_url }}" alt="Narrative session recap">
      </figure>
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
        <li><strong>Full-surface design and engineering:</strong> Designed the entire product (Codex, Atlas, Silias, NPCs, Quests, Party, Encounters, Battle Maps, Reference, DM Screen, Recap) and built it in code on the side. No PM, no team, just me and Cursor.</li>
        <li><strong>AI as a controllable collaborator:</strong> The propose-review-approve pattern for Silias is the design decision I'm proudest of on this project. I wanted the AI to be useful without being authoritative. The structured diff view and the explicit approve/reject step are what make that work, and they're the thing other AI tools mostly get wrong.</li>
        <li><strong>Designing for ritual:</strong> TTRPG play has rhythms (prep, session, recap) and the product is shaped around them, not around CRUD. The hardest part has been resisting the urge to flatten the experience into "everything in a list."</li>
        <li><strong>Personal dogfood:</strong> I'm running my own homebrew campaign, <em>The Unbound Saga</em>, inside it. Every design call has to survive contact with my actual table, which has changed quite a few of them.</li>
      </ul>
    </div>
  </div>
</section>
