---
title: "The Unbound Codex"
layout: case-study
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
    </div>
  </div>
</section>

<section class="csb-problem" aria-label="The idea">
  <div class="csb-problem-inner">
    <div class="csb-problem-copy">
      <h2 class="csb-problem-question">An AI that doesn&rsquo;t write your story for you. It remembers it for you.</h2>
      <p class="csb-problem-body">A campaign is thousands of details a person invented and then forgot. The obvious move is to have a model generate more of them, which produces lore nobody wrote and nobody trusts. Silias does the opposite: he reads only what you wrote, proposes rather than writes, and hands every change back to you before it lands.</p>
    </div>
    <ul class="csb-stat-list">
      <li class="csb-stat csb-stat--constraint">
        <div class="csb-stat-body">
          <p class="csb-stat-name">Reads only your codex</p>
          <p class="csb-stat-text">Every entry is chunked and embedded ahead of time, and it is the only place Silias is allowed to look. The panel states that limit before you type, because a grounded answer only feels trustworthy when its edges are visible.</p>
        </div>
      </li>
      <li class="csb-stat csb-stat--constraint">
        <div class="csb-stat-body">
          <p class="csb-stat-name">Proposes, never writes</p>
          <p class="csb-stat-text">Every path (a chat command, a recorded session, hand-written lore) converges on one approval gate. The first time the AI quietly edits the wrong entity, the feature is dead.</p>
        </div>
      </li>
      <li class="csb-stat csb-stat--constraint">
        <div class="csb-stat-body">
          <p class="csb-stat-name">Resolves by id, never by name</p>
          <p class="csb-stat-text">@-mentions and smart links resolve to a specific entry, not a fuzzy match on its name, so you never wire up the wrong &ldquo;Argent.&rdquo;</p>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="csb-band csb-band--principles" aria-label="Three Parts, One Codex">
  <div class="csb-band-head">
    <div class="csb-band-inner">
      <h2 class="csb-section-title">Three Parts, One Codex</h2>
    </div>
  </div>
  <div class="csb-band-inner csb-band-body">
    <ul class="csb-principles">
      <li class="csb-principle">
        <a href="#silias" class="csb-principle-link">
          <h3 class="csb-principle-title csb-principle-title--ucarcane">Silias</h3>
          <p class="csb-principle-desc">An archivist who actually read your codex. Grounded in the world you wrote, never the open internet, and never writing without your yes.</p>
        </a>
      </li>
      <li class="csb-principle">
        <a href="#world" class="csb-principle-link">
          <h3 class="csb-principle-title csb-principle-title--uctide">A world you can run</h3>
          <p class="csb-principle-desc">Atlas, characters, threads, encounters, bestiary. Prep built around the rhythms of a table, not a pile of CRUD forms.</p>
        </a>
      </li>
      <li class="csb-principle">
        <a href="#table" class="csb-principle-link">
          <h3 class="csb-principle-title csb-principle-title--ucember">The table</h3>
          <p class="csb-principle-desc">Broadcast what the party should see, hold back what they shouldn't, and let the session itself write the next entry.</p>
        </a>
      </li>
    </ul>
  </div>
</section>

<section class="csb-band" id="silias" aria-label="silias: the archivist who actually read your codex">
  <div class="csb-band-head">
    <div class="csb-band-inner">
      <h2 class="csb-section-title">Silias: the archivist who actually read your codex</h2>
    </div>
  </div>
  <div class="csb-band-inner csb-band-body">
    <p class="csb-band-lead">Every entry in the codex (every NPC, location, quest, faction, recap, item) is chunked, embedded, and queryable, and Silias treats that canon as the only source of truth for the world. Ask him a question and the answer is stitched from what you already wrote, with the ruleset filling the gaps the lore leaves open, never the open internet. That grounding is the whole point: the AI doesn't bolt onto the side of a world, it lives inside one.</p>

      <h3 class="csb-sub-title">The grounding loop</h3>
      <div class="csb-row">
        <figure class="cs-callout-figure csb-row-media">
          <img src="{{ '/assets/img/unbound-codex/uc-rag-flow.png' | relative_url }}" alt="Flow diagram of the Unbound Codex grounding loop. A user request (with history) and the embedded codex feed a model decision: answer or act. Answers are grounded and cited and stop there; actions choose a tool and stage a proposal. Two other inputs feed the same staged proposal: a recorded session transcribed to a recap, and manual lore entry with suggested smart links. Every proposal reaches a human 'User approved?' gate. Yes saves it to the codex, chunked and re-embedded, closing the loop. No sends it back to refine or reject, with nothing committed.">
          <span class="cs-callout-marker" style="--x: 44%; --y: 6.7%;">1</span>
          <span class="cs-callout-marker" style="--x: 64.3%; --y: 6.7%;">2</span>
          <span class="cs-callout-marker" style="--x: 66.5%; --y: 17.5%;">3</span>
          <span class="cs-callout-marker" style="--x: 76.2%; --y: 31.5%;">4</span>
          <span class="cs-callout-marker" style="--x: 51.5%; --y: 31.5%;">5</span>
          <span class="cs-callout-marker" style="--x: 51.5%; --y: 46.1%;">6</span>
          <span class="cs-callout-marker" style="--x: 51.6%; --y: 58.3%;">7</span>
          <span class="cs-callout-marker" style="--x: 60.8%; --y: 74.7%;">8</span>
          <span class="cs-callout-marker" style="--x: 34.5%; --y: 88.3%;">9</span>
          <span class="cs-callout-marker" style="--x: 93.2%; --y: 19.9%;">10</span>
          <span class="cs-callout-marker" style="--x: 93.2%; --y: 31.5%;">11</span>
          <span class="cs-callout-marker" style="--x: 93.2%; --y: 43.9%;">12</span>
          <span class="cs-callout-marker" style="--x: 93.2%; --y: 60.4%;">13</span>
          <span class="cs-callout-marker" style="--x: 24.8%; --y: 64.6%;">14</span>
          <span class="cs-callout-marker" style="--x: 15.7%; --y: 76.8%;">15</span>
        </figure>
        <ol class="csb-row-notes csb-row-notes--numbered">
          <li class="csb-note"><span class="csb-note-num">1</span> Your whole world, chunked and embedded ahead of time. It's the only place Silias is allowed to look, so answers stay in your campaign, not the open internet.</li>
          <li class="csb-note"><span class="csb-note-num">2</span> A question or command, carried in with the chat history. It rides in next to the retrieved codex, so the model reasons over your canon, not its training data.</li>
          <li class="csb-note"><span class="csb-note-num">3</span> First fork: question or change? Answers retrieve and cite; changes route to a tool. That split keeps reads instant and writes gated.</li>
          <li class="csb-note"><span class="csb-note-num">4</span> A question stops here. The reply is stitched from your own entries and cites them, campaign canon first, SRD only for the gaps. Nothing gets written.</li>
          <li class="csb-note"><span class="csb-note-num">5</span> For a change, the model picks the exact tool: edit an NPC, add a monster, create a quest. Typed tools keep the edit scoped, not freeform.</li>
          <li class="csb-note"><span class="csb-note-num">6</span> The tool proposes; it never writes. Because the first time the AI quietly edits the wrong thing, the feature is dead.</li>
          <li class="csb-note"><span class="csb-note-num">7</span> Every path meets one gate: you. Review the change, approve or don't. The AI stays useful without ever being in charge.</li>
          <li class="csb-note"><span class="csb-note-num">8</span> Say no and nothing lands. It loops back to tweak or toss, so a bad idea costs a click. And every approved edit logs its old state for a one-click undo.</li>
          <li class="csb-note"><span class="csb-note-num">9</span> Approve, and it's chunked and re-embedded on the spot. What you just okayed is searchable for the very next question.</li>
          <li class="csb-note"><span class="csb-note-num">10</span> Second way in: drop in a recording of the real session. Catch the canon that happens at the table and never makes it to the page.</li>
          <li class="csb-note"><span class="csb-note-num">11</span> The audio is transcribed with speakers separated, multi-hour files in one pass. Clean transcript in, trustworthy everything after.</li>
          <li class="csb-note"><span class="csb-note-num">12</span> Kept for reference, deliberately not embedded; a four-hour log would drown retrieval in noise. Only the moments worth keeping get mined out and staged.</li>
          <li class="csb-note"><span class="csb-note-num">13</span> In parallel, the session becomes a readable recap in an in-world voice, saved and folded back in so Silias remembers what happened.</li>
          <li class="csb-note"><span class="csb-note-num">14</span> Third way in: write lore by hand. It's canon by default, but runs the same path so it stays woven into everything else.</li>
          <li class="csb-note"><span class="csb-note-num">15</span> As you write, the model spots names and offers to link or create them. Links resolve by id, never a fuzzy match, so you never wire up the wrong "Argent."</li>
        </ol>
      </div>

      <h3 class="csb-sub-title">Always one keystroke away, always grounded</h3>
      <div class="csb-row">
        <figure class="cs-callout-figure csb-row-media">
          <img src="{{ '/assets/img/unbound-codex/uc-silias-overview.png' | relative_url }}" alt="Campaign overview with the Ask Silias panel and its signature gradient border">
          <span class="cs-callout-marker" style="--x: 83%; --y: 15%;">1</span>
          <span class="cs-callout-marker" style="--x: 83%; --y: 62%;">2</span>
          <span class="cs-callout-marker" style="--x: 83%; --y: 74%;">3</span>
          <span class="cs-callout-marker" style="--x: 30%; --y: 48%;">4</span>
        </figure>
        <ol class="csb-row-notes csb-row-notes--numbered">
          <li class="csb-note"><span class="csb-note-num">1</span> The first thing the panel says is its own limit: "limited to what you have defined in your campaign." Setting the expectation up front is what makes a grounded answer feel trustworthy instead of magic. It can't wander off into generic fantasy trivia, and it says so.</li>
          <li class="csb-note"><span class="csb-note-num">2</span> Typing @ pulls up any codex entry by id; typing / lists commands. Referencing something by id (not a fuzzy name match) hands Silias that entry's exact context, so he never has to guess which "Argent" you meant.</li>
          <li class="csb-note"><span class="csb-note-num">3</span> Summarize, Create, Plan, and How-do-I sit right under the composer. The blank-chat-box problem is real; naming the four things Silias is actually good at gets a stuck DM moving.</li>
          <li class="csb-note"><span class="csb-note-num">4</span> Numbers are display figures with small-caps labels, never icon-tile stat boxes. A campaign's dashboard should read like a ledger, not a SaaS analytics page.</li>
        </ol>
      </div>

      <h3 class="csb-sub-title">Nothing lands without your yes</h3>
      <div class="csb-row">
        <figure class="cs-callout-figure csb-row-media">
          <img src="{{ '/assets/img/unbound-codex/uc-silias-plan.png' | relative_url }}" alt="Silias returning a multi-step plan with staged NPC and quest proposals to approve or reject">
          <span class="cs-callout-marker" style="--x: 74%; --y: 13%;">1</span>
          <span class="cs-callout-marker" style="--x: 74%; --y: 24%;">2</span>
          <span class="cs-callout-marker" style="--x: 74%; --y: 44%;">3</span>
          <span class="cs-callout-marker" style="--x: 88%; --y: 86%;">4</span>
        </figure>
        <ol class="csb-row-notes csb-row-notes--numbered">
          <li class="csb-note"><span class="csb-note-num">1</span> The request is written in the same grammar as everything else: "/plan create me an NPC that lives in @Umber with a personal quest for @Belnir." The @ mentions ground the generation in real entries, so the result fits the world instead of a blank-slate fantasy.</li>
          <li class="csb-note"><span class="csb-note-num">2</span> Silias opens with the reasoning: what the plan does and why. Explaining the intent before the artifacts is what lets a DM judge a proposal in seconds instead of reading every field.</li>
          <li class="csb-note"><span class="csb-note-num">3</span> The plan arrives as separate, staged cards (here an NPC and a linked quest), each with its own Skip. Generating them together keeps them consistent; approving them one at a time keeps me in control.</li>
          <li class="csb-note"><span class="csb-note-num">4</span> Reject the whole plan, refine it, or Approve All. Until I do, nothing is written to the codex. The first time an AI silently edits the wrong thing you stop trusting it, so nothing here writes without showing its work.</li>
        </ol>
      </div>

      <h3 class="csb-sub-title">The codex he reads from</h3>
      <div class="csb-row">
        <figure class="cs-callout-figure csb-row-media">
          <img src="{{ '/assets/img/unbound-codex/uc-lore.png' | relative_url }}" alt="A lore entry rendered as an in-world Folio document with an entry tree">
          <span class="cs-callout-marker" style="--x: 58%; --y: 42%;">1</span>
          <span class="cs-callout-marker" style="--x: 42%; --y: 22%;">2</span>
          <span class="cs-callout-marker" style="--x: 23%; --y: 40%;">3</span>
        </figure>
        <ol class="csb-row-notes csb-row-notes--numbered">
          <li class="csb-note"><span class="csb-note-num">1</span> In-world text gets its own material: gold section rules, flat on the page. It reads like a page from the setting's own archive, which is the opposite of the generic data-form the rest of a tool usually forces lore into.</li>
          <li class="csb-note"><span class="csb-note-num">2</span> Every entry states its visibility in plain words: "DM only," plus when it was last edited. Whether the table can see something is a one-word decision, never buried in a settings modal.</li>
          <li class="csb-note"><span class="csb-note-num">3</span> Entries nest into a tree (factions, quests, acts) and cross-link by id. This is the same canon Silias retrieves against, so what you organize for yourself is exactly what he reasons over.</li>
        </ol>
      </div>
  </div>
</section>

<section class="csb-band" id="world" aria-label="a world you can actually run">
  <div class="csb-band-head">
    <div class="csb-band-inner">
      <h2 class="csb-section-title">A world you can actually run</h2>
    </div>
  </div>
  <div class="csb-band-inner csb-band-body">
    <p class="csb-band-lead">The codex covers everything a DM touches in a week: the Atlas, the cast, the threads in motion, the graph tying them together, the encounter builder, the bestiary. It's shaped around the rituals of play (prep, session, recap) rather than around tables and forms. The design through-line is a set of rules I wrote down and held to: a box means "you can click me," hairlines instead of outlines, category signaled by a tinted icon rather than a bare colored dot. The goal was software that looks designed, not generated.</p>

      <h3 class="csb-sub-title">The Atlas</h3>
      <div class="csb-row">
        <figure class="cs-callout-figure csb-row-media">
          <img src="{{ '/assets/img/unbound-codex/uc-atlas.png' | relative_url }}" alt="The Atlas showing a hand-drawn map of Aethel with location pins">
          <span class="cs-callout-marker" style="--x: 78%; --y: 11%;">1</span>
          <span class="cs-callout-marker" style="--x: 62%; --y: 58%;">2</span>
          <span class="cs-callout-marker" style="--x: 23%; --y: 33%;">3</span>
        </figure>
        <ol class="csb-row-notes csb-row-notes--numbered">
          <li class="csb-note"><span class="csb-note-num">1</span> "View as Player" is the boundary between prep and play. Player view only ever shows what I've marked shared, which is what makes "curated, not leaked" a guarantee instead of a hope. The rest of the product only works because this part does.</li>
          <li class="csb-note"><span class="csb-note-num">2</span> Pins anchor lore to the land and open the entries beneath them. The map is an index into the codex, not a static picture.</li>
          <li class="csb-note"><span class="csb-note-num">3</span> Hand-drawn maps were a deliberate call. A wireframe map saves prep time; a hand-drawn one makes the table feel like they're standing somewhere real. Maps nest (region → city → docks) with a starred default.</li>
        </ol>
      </div>

      <h3 class="csb-sub-title">Characters of the World</h3>
      <div class="csb-row">
        <figure class="cs-callout-figure csb-row-media">
          <img src="{{ '/assets/img/unbound-codex/uc-npc.png' | relative_url }}" alt="An NPC detail page for Elder Corin with at-the-table facts beside GM-only secrets">
          <span class="cs-callout-marker" style="--x: 45%; --y: 23%;">1</span>
          <span class="cs-callout-marker" style="--x: 72%; --y: 39%;">2</span>
          <span class="cs-callout-marker" style="--x: 40%; --y: 57%;">3</span>
          <span class="cs-callout-marker" style="--x: 80%; --y: 11%;">4</span>
        </figure>
        <ol class="csb-row-notes csb-row-notes--numbered">
          <li class="csb-note"><span class="csb-note-num">1</span> The name leads with a single gold role chip. One clear identity line, no icon-tile header, no stat grid competing for attention.</li>
          <li class="csb-note"><span class="csb-note-num">2</span> "At the table" (demeanor, quirks) sits next to a locked "GM only" panel (Elder Corin's real fear, the trap he's really laying). The split is the whole job of an NPC page: what you perform vs. what you're hiding, on one screen.</li>
          <li class="csb-note"><span class="csb-note-num">3</span> History and hooks are prose with a tag row underneath, not a wall of labeled fields. Character reads as character.</li>
          <li class="csb-note"><span class="csb-note-num">4</span> "Generate" invites Silias to draft a new character, but the result always arrives as a proposal you approve, never a silent write into your cast.</li>
        </ol>
      </div>

      <h3 class="csb-sub-title">Threads</h3>
      <div class="csb-row">
        <figure class="cs-callout-figure csb-row-media">
          <img src="{{ '/assets/img/unbound-codex/uc-threads.png' | relative_url }}" alt="The Threads view showing a driver, stakes, secrets and clues, and beats">
          <span class="cs-callout-marker" style="--x: 40%; --y: 23%;">1</span>
          <span class="cs-callout-marker" style="--x: 40%; --y: 52%;">2</span>
          <span class="cs-callout-marker" style="--x: 67%; --y: 52%;">3</span>
        </figure>
        <ol class="csb-row-notes csb-row-notes--numbered">
          <li class="csb-note"><span class="csb-note-num">1</span> A thread is a driver (an NPC with a want), a beat counter, and a "secrets revealed" tally. Modeling a plotline as pressure-plus-progress is what keeps a living campaign from collapsing into a to-do list.</li>
          <li class="csb-note"><span class="csb-note-num">2</span> "Stakes" are the open questions you actually want the table to chase. Writing them as questions keeps prep honest about what's still unresolved.</li>
          <li class="csb-note"><span class="csb-note-num">3</span> "Secrets &amp; clues" and "beats if no one acts" sit side by side, so the world keeps moving whether or not the party takes the bait. This is the DM's private engine room, and the subtitle says so: players never see this.</li>
        </ol>
      </div>

      <h3 class="csb-sub-title">The Weave</h3>
      <div class="csb-row">
        <figure class="cs-callout-figure csb-row-media">
          <img src="{{ '/assets/img/unbound-codex/knowledge-graph-01.png' | relative_url }}" alt="The Weave: a knowledge graph of the campaign showing entities and links, a detail panel for The Living Codex with its relationships and suggested links awaiting review, a session timeline scrubber, and Silias answering from the campaign graph">
          <span class="cs-callout-marker" style="--x: 56%; --y: 16%;">1</span>
          <span class="cs-callout-marker" style="--x: 64%; --y: 26%;">2</span>
          <span class="cs-callout-marker" style="--x: 64%; --y: 67%;">3</span>
          <span class="cs-callout-marker" style="--x: 24%; --y: 95%;">4</span>
          <span class="cs-callout-marker" style="--x: 84%; --y: 32%;">5</span>
        </figure>
        <ol class="csb-row-notes csb-row-notes--numbered">
          <li class="csb-note"><span class="csb-note-num">1</span> "Unconnected &middot; 14" is a filter, not a warning. Fourteen entities link to nothing, which is the most useful thing the graph can tell a DM: here is the part of your world you invented and then forgot about.</li>
          <li class="csb-note"><span class="csb-note-num">2</span> The timeline scrubs the graph back through the campaign. "Through session" rebuilds the world as it stood at any point, which is how you answer the question that actually comes up at the table: what did the party know back in session four?</li>
          <li class="csb-note"><span class="csb-note-num">3</span> Proposed links arrive with a confidence score and the line from the session that suggested them. A link is a claim about your canon, so it runs the same propose-review-approve gate as everything else Silias touches. Nothing gets wired up on a 51% guess without your say-so.</li>
          <li class="csb-note"><span class="csb-note-num">4</span> The review queue batches every pending link with its evidence and the session it came from, so confirming them is a few minutes between sessions instead of an interruption in the middle of prep.</li>
          <li class="csb-note"><span class="csb-note-num">5</span> When Silias answers, he names how many graph entities he drew on. Same principle as the rest of the panel: the citation is what separates an answer you can check from one you have to take on faith.</li>
        </ol>
      </div>

      <h3 class="csb-sub-title">Encounters &amp; bestiary</h3>
      <div class="csb-row">
        <figure class="cs-callout-figure csb-row-media">
          <img src="{{ '/assets/img/unbound-codex/uc-encounters.png' | relative_url }}" alt="The encounter builder with type filters and XP-budgeted encounter cards">
          <span class="cs-callout-marker" style="--x: 40%; --y: 24%;">1</span>
          <span class="cs-callout-marker" style="--x: 27%; --y: 18%;">2</span>
          <span class="cs-callout-marker" style="--x: 88%; --y: 40%;">3</span>
        </figure>
        <ol class="csb-row-notes csb-row-notes--numbered">
          <li class="csb-note"><span class="csb-note-num">1</span> Encounter kind is a color, not a label to read: combat is ember, social is tide, exploration is moss. The stripe on each card tells you what kind of scene it is before you read a word.</li>
          <li class="csb-note"><span class="csb-note-num">2</span> Party size and level sit at the top, so the XP budget is always in frame. A fight is tuned to the actual table, not to a book's assumed party of four.</li>
          <li class="csb-note"><span class="csb-note-num">3</span> Ask Silias to build an encounter for a quest and he draws only from this campaign's own bestiary, holding total monster XP inside the budget. Calibrated, and every piece is a proposal I approve before it saves.</li>
        </ol>
      </div>
      <div class="csb-row">
        <figure class="cs-callout-figure csb-row-media">
          <img src="{{ '/assets/img/unbound-codex/uc-bestiary.png' | relative_url }}" alt="The bestiary with full-art monster cards and challenge-rating ribbons">
          <span class="cs-callout-marker" style="--x: 27%; --y: 30%;">1</span>
          <span class="cs-callout-marker" style="--x: 56%; --y: 42%;">2</span>
          <span class="cs-callout-marker" style="--x: 64%; --y: 68%;">3</span>
        </figure>
        <ol class="csb-row-notes csb-row-notes--numbered">
          <li class="csb-note"><span class="csb-note-num">1</span> Challenge rating rides a small heraldic ribbon rather than a badge, a tiny thing the eye reads as "crafted."</li>
          <li class="csb-note"><span class="csb-note-num">2</span> Full-art portraits lead the card. A bestiary is one of the few screens where the picture is the point, so the art gets the space and the stats stay quiet underneath.</li>
          <li class="csb-note"><span class="csb-note-num">3</span> The full SRD ships in every campaign, filterable by CR, size, type, and alignment, and marked as canonical ("SRD 2024") so you always know what's official versus homebrew you authored.</li>
        </ol>
      </div>
  </div>
</section>

<section class="csb-band" id="table" aria-label="the table, and the story that writes itself back">
  <div class="csb-band-head">
    <div class="csb-band-inner">
      <h2 class="csb-section-title">The table, and the story that writes itself back</h2>
    </div>
  </div>
  <div class="csb-band-inner csb-band-body">
    <p class="csb-band-lead">Prep only matters when the session runs. The DM Screen becomes the live control surface: spotlight a portrait, push a map, keep the twist in your head. What the party sees is curated, not leaked, all the way down to what Silias himself is allowed to know. And when the night is over, the session becomes the next chapter of the world.</p>

      <h3 class="csb-sub-title">The DM Screen, live</h3>
      <div class="csb-row">
        <figure class="cs-callout-figure csb-row-media">
          <img src="{{ '/assets/img/unbound-codex/uc-dmscreen.png' | relative_url }}" alt="The live DM Screen with a spotlighted NPC, a session timer, and a running event log">
          <span class="cs-callout-marker" style="--x: 38%; --y: 26%;">1</span>
          <span class="cs-callout-marker" style="--x: 38%; --y: 52%;">2</span>
          <span class="cs-callout-marker" style="--x: 82%; --y: 20%;">3</span>
          <span class="cs-callout-marker" style="--x: 82%; --y: 47%;">4</span>
        </figure>
        <ol class="csb-row-notes csb-row-notes--numbered">
          <li class="csb-note"><span class="csb-note-num">1</span> The spotlight is what the party's screen shows right now (here, Elder Corin). Highlighting is an explicit act pulled from things that already exist, which is exactly why nothing leaks by accident and nothing gets re-made in the moment.</li>
          <li class="csb-note"><span class="csb-note-num">2</span> Below it, everything else staged for the night (maps, NPCs, battle maps) each with its own show / hide toggle. The DM curates the table's whole field of view from one place.</li>
          <li class="csb-note"><span class="csb-note-num">3</span> A session timer and Roleplay / Exploration / Combat modes keep the live console organized around how a session actually flows, not around a database.</li>
          <li class="csb-note"><span class="csb-note-num">4</span> The event log captures beats as they happen ("the party accepted @quest The Outcast's Formula"). It's the structure of the night in real time, and it's what the recap and Silias's lore-mining build on afterward.</li>
        </ol>
      </div>

      <h3 class="csb-sub-title">What the players see</h3>
      <div class="csb-row">
        <figure class="cs-callout-figure csb-row-media">
          <img src="{{ '/assets/img/unbound-codex/uc-player-shared.png' | relative_url }}" alt="The player's Shared view with the same-campaign player toggle active">
          <span class="cs-callout-marker" style="--x: 84%; --y: 3%;">1</span>
          <span class="cs-callout-marker" style="--x: 84%; --y: 16%;">2</span>
          <span class="cs-callout-marker" style="--x: 45%; --y: 42%;">3</span>
        </figure>
        <ol class="csb-row-notes csb-row-notes--numbered">
          <li class="csb-note"><span class="csb-note-num">1</span> One toggle flips the whole app between the GM workspace and the player view of the same campaign. Building both perspectives into a single surface is what lets a DM verify "will they see this?" without a second account.</li>
          <li class="csb-note"><span class="csb-note-num">2</span> Silias respects the same boundary: in player view he "only sees content your GM marked as shared." The curation guarantee extends to the AI, not just the UI, which is the part most tools get wrong.</li>
          <li class="csb-note"><span class="csb-note-num">3</span> The Shared page is only what's been surfaced: shared quests, lore, and maps. Everything else stays in the DM's half of the world.</li>
        </ol>
      </div>

      <h3 class="csb-sub-title">Recaps that build the world</h3>
      <div class="csb-row">
        <figure class="cs-callout-figure csb-row-media">
          <img src="{{ '/assets/img/unbound-codex/uc-recap.png' | relative_url }}" alt="A session recap rendered as a clean narrative with an audio-recap action">
          <span class="cs-callout-marker" style="--x: 50%; --y: 40%;">1</span>
          <span class="cs-callout-marker" style="--x: 83%; --y: 11%;">2</span>
          <span class="cs-callout-marker" style="--x: 42%; --y: 23%;">3</span>
        </figure>
        <ol class="csb-row-notes csb-row-notes--numbered">
          <li class="csb-note"><span class="csb-note-num">1</span> The recap is written as in-world narrative, not bullet-point minutes. It's something you'd actually want to send your players between sessions.</li>
          <li class="csb-note"><span class="csb-note-num">2</span> "Audio Recap" transcribes a session recording and drafts the summary from it, replacing the ninety minutes of post-session typing that usually just doesn't happen.</li>
          <li class="csb-note"><span class="csb-note-num">3</span> The recap and its transcript live on the same entry, so the polished story and the raw source are always one click apart.</li>
        </ol>
      </div>
  </div>
</section>

<section class="csb-band" id="my-role" aria-label="My role">
  <div class="csb-band-head">
    <div class="csb-band-inner">
      <h2 class="csb-section-title">My Role</h2>
    </div>
  </div>
  <div class="csb-band-inner csb-band-body">
    <p class="csb-band-lead">Solo design and engineering. I designed and built the whole surface: the codex data model, the retrieval and approval loop, the DM screen, and the session pipeline.</p>
    <ul class="csb-reflect csb-reflect--four">
      <li class="csb-reflect-card">
        <h3 class="csb-reflect-title">Full-surface design and engineering.</h3>
        <p class="csb-reflect-desc">Designed the entire product (Codex, Atlas, Silias, Characters, Threads, Quests, Encounters, Battle Maps, Bestiary, DM Screen, Recaps) and built it in code. No PM, no team, just me and Cursor.</p>
      </li>
      <li class="csb-reflect-card">
        <h3 class="csb-reflect-title">AI as a controllable collaborator.</h3>
        <p class="csb-reflect-desc">The propose-review-approve pattern that runs through every Silias surface is the design decision I'm proudest of. I wanted the AI to be useful without being authoritative, and the structured diff and explicit approve/reject step are what make that work. It's the thing other AI tools mostly get wrong.</p>
      </li>
      <li class="csb-reflect-card">
        <h3 class="csb-reflect-title">Designing for ritual.</h3>
        <p class="csb-reflect-desc">TTRPG play has rhythms (prep, session, recap) and the product is shaped around them, not around CRUD. The hardest part was resisting the urge to flatten everything into "another list."</p>
      </li>
      <li class="csb-reflect-card">
        <h3 class="csb-reflect-title">A design system with a spine.</h3>
        <p class="csb-reflect-desc">The three materials and the de-box rules exist so an AI-heavy tool reads as crafted, not generated. Every DM-facing screen had to pick a material and earn its personality.</p>
      </li>
      <li class="csb-reflect-card">
        <h3 class="csb-reflect-title">Personal dogfood.</h3>
        <p class="csb-reflect-desc">I run my own homebrew campaign, <em>The Unbound Saga</em>, inside it. Every design call has to survive contact with my actual table, which has changed quite a few of them.</p>
      </li>
    </ul>
  </div>
</section>
