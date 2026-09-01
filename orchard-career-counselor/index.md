---
title: "Orchard: The AI College and Career Readiness Platform"
layout: case-study
---

<section class="case-study-section case-study-intro case-study-intro--orchard-screens-hero case-study-intro--orchard-band">
  <div class="case-study-section-inner">
    <div class="orch-hero">
      <h1 class="orch-hero-title">Orchard</h1>
      <p class="orch-hero-sub">Building an AI <span class="orch-hero-accent">College &amp; Career Readiness</span> Platform</p>
      <p class="orch-hero-meta">
        <span class="orch-hero-meta-label">My Contributions:</span>
        <span>Product Strategy &amp; Design</span>
        <span class="orch-hero-meta-sep" aria-hidden="true">&middot;</span>
        <span>0-to-1</span>
        <span class="orch-hero-meta-sep" aria-hidden="true">&middot;</span>
        <span>Prototype</span>
      </p>
    </div>
  </div>
</section>

<section class="orch-problem" aria-label="The problem">
  <div class="orch-problem-inner">
    <div class="orch-problem-copy">
      <h2 class="orch-problem-question">How do we prepare students for a labor market that won&rsquo;t stop moving?</h2>
      <p class="orch-problem-body">High schoolers are expected to pick a life path before they're even allowed to rent a car. Meanwhile, career counselors are so outnumbered that most students only get a five-minute check-in once a year. The result? Kids don’t feel prepared so they default to "safe" or "generic" majors like Business or Marketing because they simply don't have a guiding voice to show them anything else.</p>
    </div>
    <ul class="orch-stat-list">
      <li class="orch-stat">
        <span class="orch-stat-lead">1:376</span>
        <div class="orch-stat-body">
          <p class="orch-stat-text">Counselor to student ratio in American public schools</p>
          <p class="orch-stat-source">American School Counselor Association</p>
        </div>
      </li>
      <li class="orch-stat">
        <span class="orch-stat-lead">13x</span>
        <div class="orch-stat-body">
          <p class="orch-stat-text">More likely to score 1300+ on the SAT if your family is in the top 1% rather than the bottom 20%</p>
          <p class="orch-stat-source">Opportunity Insights, Harvard</p>
        </div>
      </li>
      <li class="orch-stat">
        <span class="orch-stat-lead">72%</span>
        <div class="orch-stat-body">
          <p class="orch-stat-text">Of graduates feel only moderately, slightly, or not at all prepared for life after high school</p>
          <p class="orch-stat-source">YouScience Post-Graduation Readiness Report</p>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="orch-band orch-band--principles" aria-label="Guiding principles">
  <div class="orch-band-head">
    <div class="orch-band-inner">
      <h2 class="orch-section-title">Guiding Principles</h2>
    </div>
  </div>
  <div class="orch-band-inner orch-band-body">
    <ul class="orch-principles">
      <li class="orch-principle">
        <h3 class="orch-principle-title orch-principle-title--cyan">The Student is the Hero</h3>
        <p class="orch-principle-desc">We design for the student&rsquo;s unique journey, perspective and voice.</p>
      </li>
      <li class="orch-principle">
        <h3 class="orch-principle-title orch-principle-title--green">Nudge, Don&rsquo;t Do</h3>
        <p class="orch-principle-desc">Orchie is a coach, not a crutch. We nudge and empower students to find the answers, but they must do the heavy lifting.</p>
      </li>
      <li class="orch-principle">
        <h3 class="orch-principle-title orch-principle-title--pink">Purpose in Every Action</h3>
        <p class="orch-principle-desc">Every decision we make, and every action the app takes, must contribute directly to student outcomes.</p>
      </li>
    </ul>
  </div>
</section>

<section class="orch-band" id="orchie" aria-label="How a question moves through Orchie">
  <div class="orch-band-head">
    <div class="orch-band-inner">
      <h2 class="orch-section-title">How a question moves through Orchie</h2>
    </div>
  </div>
  <div class="orch-band-inner orch-band-body">

    <div class="orch-row">
      <figure class="cs-callout-figure orch-row-media orch-row-media--framed">
        <img src="{{ '/assets/img/orchard-screens-v2/Orchie-Flow.png' | relative_url }}" alt="Flow diagram of how Orchie handles a student question. Education and career data sources (College Scorecard, IPEDS, proprietary data, O*NET, and BLS) feed a cited data layer. A student question, or an explicitly invoked slash command, passes through an intent and safety screen. An unclear question gets a clarifying question back. Everything else routes to one of four skills: Conversation, /explore, /compare, or /plan, each of which reads the desk and chat history first. /explore checks with sources and either produces a career list with citations or tells the student there's no data on that career. Anything the screen flags drops into a guardrail lane covering off-topic questions, distress signals, and requests for a verdict. Every path either loops back into the conversation or ends with the session saved.">
      </figure>
      <div class="orch-row-notes">
        <p class="orch-note">Every message runs the same path, an intent and safety screen first, then either a skill or a guardrail. All four skills read the desk and the chat history before they answer, so a student never has to repeat themselves. The guardrail lane catches everything else, including the conversations Orchie shouldn't be having at all.</p>
        <p class="orch-note">Orchie will always try and respond with an answer and a next step action for the student to keep their momentum going. Having Orchie respond with an open ended question often leaves the student stunned and unsure of what to do next.</p>
      </div>
    </div>

    <div class="orch-row">
      <figure class="cs-callout-figure orch-row-media">
        <img src="{{ '/assets/img/orchard-screens-v2/Orchie-Desk.png' | relative_url }}" alt="Orchie chat on the left with a set of interdisciplinary career suggestions, and the desk open on the right showing the UX Engineer career card with pay, growth, security, skills, and a typical day.">
      </figure>
      <div class="orch-row-notes">
        <p class="orch-note">Having the information a user interacts with appear on their desk serves two purposes. First it allows the student to explore deeper into the content without losing their place in the conversation. Second it provides the model with context for when the student asks a follow up question.</p>
      </div>
    </div>
  </div>
</section>

<section class="orch-band" id="cri" aria-label="Designing and testing the Career Readiness Index">
  <div class="orch-band-head">
    <div class="orch-band-inner">
      <h2 class="orch-section-title">Designing and Testing the Career Readiness Index (CRI)</h2>
    </div>
  </div>
  <div class="orch-band-inner orch-band-body">

    <div class="orch-row">
      <figure class="cs-callout-figure orch-row-media orch-row-media--framed">
        <img src="{{ '/assets/img/orchard-screens-v2/CRI-Draft.png' | relative_url }}" alt="Three-panel working artboard for the CRI. On the left, a levelled rubric covering Self Awareness, Trajectory Knowledge, Professional Agency, Network Literacy, and Adaptive Goal Setting, with a plain-language description of what Level 1, 3, and 5 look like. In the middle, the eight pillars those criteria distilled into, each with an icon and a one-line definition: Self Awareness, Exploration, Planning, Focus, Goal Setting, Execution, Skills, and Experience. On the right, the eight-sided radar chart that plots a student's score across those pillars.">
      </figure>
      <div class="orch-row-notes">
        <p class="orch-note">The CRI acts like a personal credit score for career readiness. Instead of measuring static test scores or grade compliance, it tracks a student's real-world growth across 8 core dimensions.</p>
        <p class="orch-note">We started with a basic rubric to ground abstract ideas into observable actions. From there we distilled them into 8 distinct pillars along with a visual that allows students, counselors and parents an instant snapshot of their growth.</p>
      </div>
    </div>

    <div class="orch-row">
      <figure class="cs-callout-figure orch-row-media">
        <img src="{{ '/assets/img/orchard-screens-v2/CRI-Simulation.png' | relative_url }}" alt="The internal CRI model simulator. Sliders on the left set the model constants, a synthetic week of student activity, a timeline since the last assessment, and the assessment baselines for each pillar. The right side shows the resulting total CRI of 217 out of 400, a radar chart of the eight pillars, and a per-dimension breakdown showing how much each activity lifted each score.">
      </figure>
      <div class="orch-row-notes">
        <p class="orch-note">As we continued to expand and fine tune our CRI model we needed to build an internal tool for simulating how various actions would impact a student's CRI to make sure it was balanced.</p>
      </div>
    </div>

    <div class="orch-row">
      <figure class="cs-callout-figure orch-row-media">
        <img src="{{ '/assets/img/orchard-screens-v2/Growth-Report.png' | relative_url }}" alt="The student-facing Growth Report in Orchard. A radar chart of the eight pillars sits next to a score of 203 out of 400, a line naming the strongest and weakest pillars, and a button to build an action plan with Orchie. Below, a card for each pillar shows its score, its definition, and a strength or growing tag.">
      </figure>
      <div class="orch-row-notes">
        <p class="orch-note">The end result for the student is an easy to understand report that they can use to help continuously improve without guessing what they should do next.</p>
      </div>
    </div>
  </div>
</section>

<section class="orch-band" id="philosophy" aria-label="Exploring careers and making a plan">
  <div class="orch-band-head">
    <div class="orch-band-inner">
      <h2 class="orch-section-title">Exploring Careers &amp; Making a Plan</h2>
    </div>
  </div>
  <div class="orch-band-inner orch-band-body">

    <div class="orch-row">
      <figure class="cs-callout-figure orch-row-media">
        <img src="{{ '/assets/img/orchard-screens-v2/Explore-Content.png' | relative_url }}" alt="Day-in-the-life video player in Orchard. A full-length interview with two change management consultants plays in the centre, with the career card and a full-video link on the right, and a grid of short-form clips from other professionals below it.">
      </figure>
      <div class="orch-row-notes">
        <p class="orch-note">We filmed over 100 original interviews. We built a video experience that has both full length videos and short-form clips. It was designed for students to passively explore 4 or 5 career paths in a single session, allowing them to discover new careers or give fresh context to familiar ones.</p>
      </div>
    </div>

    <div class="orch-row">
      <figure class="cs-callout-figure orch-row-media">
        <img src="{{ '/assets/img/orchard-screens-v2/Explore-Career-Details.png' | relative_url }}" alt="Career detail page for Change Management Consultant. An education pathways bar shows how 100 people in the job got there, broken into bachelor's, graduate, and associate routes, with nearby colleges listed beside it and the O*NET source cited underneath. A quiz card and related careers sit alongside.">
      </figure>
      <div class="orch-row-notes">
        <p class="orch-note">We provide students with in-depth statistics about any career they find. We require Orchie to cite the source of any data to prevent hallucinations and breaking trust.</p>
      </div>
    </div>

    <div class="orch-row">
      <figure class="cs-callout-figure orch-row-media">
        <img src="{{ '/assets/img/orchard-screens-v2/Plan-Orchie.png' | relative_url }}" alt="Orchie building a plan. The chat on the left walks the student through one question at a time, while the desk on the right opens a Choose your education pathway card with Orchie's take and a detailed 4-Year College option showing cost, time, and what it leads to.">
      </figure>
      <div class="orch-row-notes">
        <p class="orch-note">When a student finds a career that sparks their interest, Orchie guides them through creating a personalized action plan. By asking a few initial questions, Orchie tailors a unique roadmap for every user.</p>
      </div>
    </div>

    <div class="orch-row">
      <figure class="cs-callout-figure orch-row-media">
        <img src="{{ '/assets/img/orchard-screens-v2/Plan-Action-Plan.png' | relative_url }}" alt="A finished Change Management Consultant action plan. The plan header shows its outcome, motivation, and challenge dimensions with a progress bar, a roadmap of steps below, and an Orchie panel on the right suggesting follow-up questions the student can ask about their next move.">
      </figure>
      <div class="orch-row-notes">
        <p class="orch-note">Orchie offers ongoing guidance as students work through each milestone. Because real-world paths change, Orchie adapts the plan in real time whenever circumstances evolve.</p>
      </div>
    </div>

  </div>
</section>

<section class="orch-band" id="reflection" aria-label="What I would do differently">
  <div class="orch-band-head">
    <div class="orch-band-inner">
      <h2 class="orch-section-title">What I&rsquo;d Do Differently</h2>
    </div>
  </div>
  <div class="orch-band-inner orch-band-body">
    <ul class="orch-reflect">
      <li class="orch-reflect-card">
        <h3 class="orch-reflect-title">Started exploring how to teach students AI literacy and prompting earlier.</h3>
        <p class="orch-reflect-desc">By defaulting to a single text input, students treated Orchie just like a normal search engine, missing out on the rich content we had curated behind it.</p>
      </li>
      <li class="orch-reflect-card">
        <h3 class="orch-reflect-title">Validate the eight pillars before designing the dashboard.</h3>
        <p class="orch-reflect-desc">We designed the visualization before we knew how the system would track the actions the students take and how it would impact the CRI.</p>
      </li>
      <li class="orch-reflect-card">
        <h3 class="orch-reflect-title">Pivot sooner based on customer value.</h3>
        <p class="orch-reflect-desc">I would move off the video-first interface much sooner. While our original video library was well received by school districts, user research proved it was a &ldquo;nice-to-have&rdquo; rather than a core driver of engagement. The real inflection point came when we introduced the CRI.</p>
      </li>
    </ul>
  </div>
</section>

<section id="prototype" class="orch-band orch-band--cta" aria-label="Prototype">
  <div class="orch-band-inner orch-band-body">
    <a href="https://orchie-v2-prototype-git-main-peebs-explorations.vercel.app/desk" target="_blank" rel="noopener noreferrer" class="button button-primary">View the Prototype</a>
  </div>
</section>
