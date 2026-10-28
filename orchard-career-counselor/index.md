---
title: "Orchard: The AI College and Career Readiness Platform"
layout: case-study
extra_css: [/assets/css/live-work.css, /assets/css/side-project.css]
extra_js: [/assets/js/live-work.js]
---

<section class="case-study-section case-study-intro case-study-intro--orchard-screens-hero case-study-intro--csb-hero">
  <div class="case-study-section-inner">
    <div class="csb-hero">
      <h1 class="csb-hero-title">Orchard</h1>
      <p class="csb-hero-sub">Building an AI <span class="csb-hero-accent">College &amp; Career Readiness</span> Platform</p>
      <p class="csb-hero-meta">
        <span class="csb-hero-meta-label">My Contributions:</span>
        <span>Product Strategy &amp; Design</span>
        <span class="csb-hero-meta-sep" aria-hidden="true">&middot;</span>
        <span>0-to-1</span>
        <span class="csb-hero-meta-sep" aria-hidden="true">&middot;</span>
        <span>Prototype</span>
      </p>
      <figure class="csb-hero-video csb-hero-video--orchard">
        <video controls playsinline preload="none" poster="{{ '/assets/img/orchard-screens-v2/orchard-walkthrough-poster.jpg' | relative_url }}" aria-label="Orchard product walkthrough, about 60 seconds. Silent, with captions.">
          <source src="{{ '/assets/video/orchard-walkthrough.mp4' | relative_url }}" type="video/mp4">
          Your browser cannot play this video.
        </video>
        <div class="csb-hero-video-overlay">
          <button type="button" class="csb-hero-video-play" aria-label="Play the Orchard walkthrough">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
          </button>
        </div>
      </figure>
    </div>
  </div>
</section>

<section class="csb-problem" aria-label="The problem">
  <div class="csb-problem-inner">
    <div class="csb-problem-copy">
      <h2 class="csb-problem-question">How do we prepare students for a labor market that won&rsquo;t stop moving?</h2>
      <p class="csb-problem-body">High schoolers are expected to pick a life path before they're even allowed to rent a car. Meanwhile, career counselors are so outnumbered that most students only get a five-minute check-in once a year. The result? Kids don’t feel prepared so they default to "safe" or "generic" majors like Business or Marketing because they simply don't have a guiding voice to show them anything else.</p>
    </div>
    <ul class="csb-stat-list">
      <li class="csb-stat">
        <span class="csb-stat-lead">1:376</span>
        <div class="csb-stat-body">
          <p class="csb-stat-text">Counselor to student ratio in American public schools</p>
          <p class="csb-stat-source">American School Counselor Association</p>
        </div>
      </li>
      <li class="csb-stat">
        <span class="csb-stat-lead">65%</span>
        <div class="csb-stat-body">
          <p class="csb-stat-text">Of children entering school today will end up working in jobs that don’t even exist yet</p>
          <p class="csb-stat-source">World Economic Forum</p>
        </div>
      </li>
      <li class="csb-stat">
        <span class="csb-stat-lead">72%</span>
        <div class="csb-stat-body">
          <p class="csb-stat-text">Of graduates feel only moderately, slightly, or not at all prepared for life after high school</p>
          <p class="csb-stat-source">YouScience Post-Graduation Readiness Report</p>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="sp-section sp-section--light sp-orchard" id="principles" aria-labelledby="sp-principles-title">
  <div class="sp-wrap">
    <header class="sp-head">
      <span class="sp-kicker">Guiding principles</span>
      <h2 class="sp-title sp-title--sm" id="sp-principles-title">Three rules behind every decision</h2>
    </header>
    <ul class="csb-principles">
      <li class="csb-principle">
        <h3 class="csb-principle-title csb-principle-title--cyan">The Student is the Hero</h3>
        <p class="csb-principle-desc">We design for the student&rsquo;s unique journey, perspective and voice.</p>
      </li>
      <li class="csb-principle">
        <h3 class="csb-principle-title csb-principle-title--green">Nudge, Don&rsquo;t Do</h3>
        <p class="csb-principle-desc">Orchie is a coach, not a crutch. We nudge and empower students to find the answers, but they must do the heavy lifting.</p>
      </li>
      <li class="csb-principle">
        <h3 class="csb-principle-title csb-principle-title--pink">Purpose in Every Action</h3>
        <p class="csb-principle-desc">Every decision we make, and every action the app takes, must contribute directly to student outcomes.</p>
      </li>
    </ul>
  </div>
</section>

<section class="sp-section sp-section--gray sp-orchard" id="orchie" aria-labelledby="sp-orchie-title">
  <div class="sp-wrap">
    <header class="sp-head">
      <div>
        <span class="sp-kicker"><b>01</b>The AI mentor</span>
        <h2 class="sp-title" id="sp-orchie-title">How a question moves through Orchie</h2>
      </div>
      <p class="sp-lead">Every message runs the same path: an intent and safety screen first, then either a skill or a guardrail. Whichever way it goes, Orchie answers with something to do next, because an open-ended question leaves a student stuck.</p>
    </header>

    <div class="sp-stage sp-stage--wide">
      <span class="sp-stage-tag">Try it</span>
      {% include demos/orchie-router.html %}
    </div>

    <div class="sp-flow">
      <h3 class="sp-sub">The logic that powers it</h3>
      <p class="sp-sub-lead">The full flow, from the data sources down to the guardrails. Click to open it full size.</p>
      <div class="sp-chart">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/orchard-screens-v2/Orchie-Flow.png' | relative_url }}" alt="Flow diagram of how Orchie handles a student question. Education and career data sources (College Scorecard, IPEDS, proprietary data, O*NET, and BLS) feed a cited data layer. A student question, or an explicitly invoked slash command, passes through an intent and safety screen. An unclear question gets a clarifying question back. Everything else routes to one of four skills: Conversation, /explore, /compare, or /plan, each of which reads the desk and chat history first. /explore checks with sources and either produces a career list with citations or tells the student there's no data on that career. Anything the screen flags drops into a guardrail lane covering off-topic questions, distress signals, and requests for a verdict. Every path either loops back into the conversation or ends with the session saved.">
        </figure>
      </div>
      <ol class="sp-points sp-points--row">
        <li><span class="sp-num">1</span><div><h4>Screen first, every time</h4><p>The intent and safety screen runs before any skill, so a distress signal never reaches the career flow.</p></div></li>
        <li><span class="sp-num">2</span><div><h4>Skills read the desk</h4><p>All four skills check the desk and chat history first, so a student never has to repeat themselves.</p></div></li>
        <li><span class="sp-num">3</span><div><h4>Cited or not shown</h4><p>Career data comes from College Scorecard, IPEDS, O*NET and BLS, with the source under every number.</p></div></li>
      </ol>
    </div>

    <div class="sp-audit">
      <figure class="cs-callout-figure">
        <img src="{{ '/assets/img/orchard-screens-v2/Orchie-Desk.png' | relative_url }}" alt="Orchie chat on the left with a set of interdisciplinary career suggestions, and the desk open on the right showing the UX Engineer career card with pay, growth, security, skills, and a typical day.">
      </figure>
      <div class="sp-audit-copy">
        <span class="sp-flag">The desk</span>
        <h3 class="sp-sub">One surface, two jobs</h3>
        <p>When information lands on the student&rsquo;s desk, they can dig into the career data without losing their spot in the conversation, and the model stays locked onto the same context, so any follow-up question is instantly understood.</p>
      </div>
    </div>
  </div>
</section>

<section class="sp-section sp-section--light sp-orchard" id="cri" aria-labelledby="sp-cri-title">
  <div class="sp-wrap">
    <header class="sp-head">
      <div>
        <span class="sp-kicker"><b>02</b>The measure</span>
        <h2 class="sp-title" id="sp-cri-title">The Career Readiness Index</h2>
      </div>
      <p class="sp-lead">Think of it as a credit score for career readiness. Instead of test scores or grade compliance, it tracks a student&rsquo;s real-world growth across eight pillars, and we designed and tested it in three steps.</p>
    </header>

    <ol class="sp-cards sp-cards--steps">
      <li>
        <figure class="cs-callout-figure"><img src="{{ '/assets/img/orchard-screens-v2/CRI-Draft.png' | relative_url }}" alt="Three-panel working artboard for the CRI. On the left, a levelled rubric covering Self Awareness, Trajectory Knowledge, Professional Agency, Network Literacy, and Adaptive Goal Setting, with a plain-language description of what Level 1, 3, and 5 look like. In the middle, the eight pillars those criteria distilled into, each with an icon and a one-line definition: Self Awareness, Exploration, Planning, Focus, Goal Setting, Execution, Skills, and Experience. On the right, the eight-sided radar chart that plots a student's score across those pillars."></figure>
        <span class="sp-step">Step 1</span>
        <h4>The rubric</h4>
        <p>We started with a rubric to turn abstract ideas into observable actions, then distilled it into eight pillars and a radar chart anyone can read at a glance.</p>
      </li>
      <li>
        <figure class="cs-callout-figure"><img src="{{ '/assets/img/orchard-screens-v2/CRI-Simulation.png' | relative_url }}" alt="The internal CRI model simulator. Sliders on the left set the model constants, a synthetic week of student activity, a timeline since the last assessment, and the assessment baselines for each pillar. The right side shows the resulting total CRI of 217 out of 400, a radar chart of the eight pillars, and a per-dimension breakdown showing how much each activity lifted each score."></figure>
        <span class="sp-step">Step 2</span>
        <h4>The simulator</h4>
        <p>As the model grew, we built an internal simulator to test how different student actions shift the score, so we could keep it fair before students ever saw it.</p>
      </li>
      <li>
        <figure class="cs-callout-figure"><img src="{{ '/assets/img/orchard-screens-v2/Growth-Report.png' | relative_url }}" alt="The student-facing Growth Report in Orchard. A radar chart of the eight pillars sits next to a score of 203 out of 400, a line naming the strongest and weakest pillars, and a button to build an action plan with Orchie. Below, a card for each pillar shows its score, its definition, and a strength or growing tag."></figure>
        <span class="sp-step">Step 3</span>
        <h4>The Growth Report</h4>
        <p>Students get a simple report with clear next steps, so instead of wondering what to do, they keep moving at their own pace.</p>
      </li>
    </ol>
  </div>
</section>

<section class="sp-section sp-section--gray sp-orchard" id="explore" aria-labelledby="sp-explore-title">
  <div class="sp-wrap">
    <header class="sp-head">
      <div>
        <span class="sp-kicker"><b>03</b>The product</span>
        <h2 class="sp-title" id="sp-explore-title">Exploring careers and making a plan</h2>
      </div>
      <p class="sp-lead">Students discover careers through the people who do them, then Orchie turns the one that sparks their interest into a plan, asking a few questions first so every roadmap fits the student instead of a template.</p>
    </header>

    <ul class="sp-cards sp-cards--two">
      <li>
        <figure class="cs-callout-figure"><img src="{{ '/assets/img/orchard-screens-v2/Explore-Content.png' | relative_url }}" alt="Day-in-the-life video player in Orchard. A full-length interview with two change management consultants plays in the centre, with the career card and a full-video link on the right, and a grid of short-form clips from other professionals below it."></figure>
        <h4>A day in the life</h4>
        <p>We filmed over 100 original interviews, cut as full-length videos and short clips, so a student can passively explore four or five career paths in a single session.</p>
      </li>
      <li>
        <figure class="cs-callout-figure"><img src="{{ '/assets/img/orchard-screens-v2/Plan-Action-Plan.png' | relative_url }}" alt="A finished Change Management Consultant action plan. The plan header shows its outcome, motivation, and challenge dimensions with a progress bar, a roadmap of steps below, and an Orchie panel on the right suggesting follow-up questions the student can ask about their next move."></figure>
        <h4>A plan that adapts</h4>
        <p>Orchie guides students through each milestone, and because real-world paths change, the plan changes with them.</p>
      </li>
    </ul>
  </div>
</section>

<section class="sp-section sp-section--light sp-outro sp-orchard" id="my-role" aria-labelledby="sp-role-title">
  <div class="sp-wrap sp-outro-inner">
    <div>
      <span class="sp-kicker">My role</span>
      <h2 class="sp-title sp-title--sm" id="sp-role-title">Head of Product &amp; Design at a four-person company.</h2>
      <p class="sp-lead">I owned product strategy, design, the prototype and the brand. Over four iterations I framed the problem, tested each hypothesis, and made the case to move on from the ones that failed, from a content library to an AI mentor built around the CRI. Our engineer built the scoring model and chose the LLM behind it.</p>
    </div>
    <div class="sp-outro-actions">
      <a href="{{ '/deck/problem-solving-process.html' | relative_url }}" class="button button-primary">View the Design Process</a>
      <a href="https://orchie-v2-prototype-git-main-peebs-explorations.vercel.app/desk" target="_blank" rel="noopener noreferrer" class="button button-outline">View the Prototype</a>
    </div>
  </div>
</section>

{% include next-project.html %}
