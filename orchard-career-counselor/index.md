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
        <span>Product Strategy &amp; Design</span>
        <span class="orch-hero-meta-sep" aria-hidden="true">&middot;</span>
        <span>0-to-1</span>
        <span class="orch-hero-meta-sep" aria-hidden="true">&middot;</span>
        <span>Team Size 4</span>
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
  <div class="orch-band-inner">
    <h2 class="orch-section-title">Guiding Principles</h2>
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
  <div class="orch-band-inner">
    <h2 class="orch-section-title">How a question moves through Orchie</h2>

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
  <div class="orch-band-inner">
    <h2 class="orch-section-title">Designing and Testing the Career Readiness Index (CRI)</h2>

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

<section class="case-study-act" id="philosophy" aria-label="Section 3">
  <div class="case-study-act-inner">
    <div class="case-study-act-number">03</div>
    <div class="case-study-act-content">
      <h2 class="case-study-act-title">Explore, Plan, Learn</h2>
      <p class="case-study-act-intro">Our philosophy is simple: Explore the possibilities, Plan out your Goals, and Learn the Real-World Skills to get there. By putting students in the driver's seat, Orchard turns the overwhelming question of "What's next?" into an exciting, confident adventure.</p>
    </div>
  </div>
</section>

<section class="major-section">
  <div class="major-section-inner major-section-inner--wide">
    <div class="subsection">
      <h3 class="case-study-sub-mode">Explore</h3>
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/orchard-screens-v2/explore-plan-learn/explore-01.png' | relative_url }}" alt="Explore screen">
          <span class="cs-callout-marker" style="--x: 88%; --y: 27%;">1</span>
          <span class="cs-callout-marker" style="--x: 20%; --y: 45%;">2</span>
          <span class="cs-callout-marker" style="--x: 18%; --y: 75%;">3</span>
          <span class="cs-callout-marker" style="--x: 56%; --y: 57%;">4</span>
          <span class="cs-callout-marker" style="--x: 17%; --y: 57%;">5</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> The Life Sim card lets a student spend a virtual month at the career's salary against their real rent and bills. A salary number on a page is abstract. Four weeks of actual decisions is concrete.</li>
          <li><span class="cs-callout-num">2</span> National pay numbers don't really answer what a sixteen-year-old wants to know, which is "can I support myself doing this where I live?" Local data pulls in who's actually hiring and what they're paying in the student's city.</li>
          <li><span class="cs-callout-num">3</span> The skills section reflects what the student has already done, not a generic list of requirements. Seeing "three of five ready" turns "this career is out of reach" into "I'm closer than I thought."</li>
          <li><span class="cs-callout-num">4</span> Four-year, bootcamp, and self-taught all live in identical cards on the page. We made each path look equally important so the layout itself reflects the philosophy: there's no "default" path, just paths that fit different students.</li>
          <li><span class="cs-callout-num">5</span> "Day in the Life" translates the career title into the small concrete things you actually do. Sketching a feature, running a thirty-minute test, writing a Slack update. "Product Designer" is abstract. "Today I made a Figma file" is something a high schooler can picture.</li>
        </ol>
      </div>

      <h3 class="case-study-sub-mode">Plan</h3>
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/orchard-screens-v2/explore-plan-learn/plan-01.png' | relative_url }}" alt="Plan screen">
          <span class="cs-callout-marker" style="--x: 17%; --y: 3%;">1</span>
          <span class="cs-callout-marker" style="--x: 67%; --y: 11%;">2</span>
          <span class="cs-callout-marker" style="--x: 16%; --y: 45%;">3</span>
          <span class="cs-callout-marker" style="--x: 16%; --y: 64%;">4</span>
          <span class="cs-callout-marker" style="--x: 63%; --y: 82%;">5</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> Building a career plan in one sitting can paralyze a sixteen-year-old. We designed Plan as a conversation that asks one question at a time, so the student can't see the whole mountain at once and freeze up.</li>
          <li><span class="cs-callout-num">2</span> Orchie reads what's open on the desk and starts the conversation from there. With Saved Careers open, the first question is which career to plan around, not what the student wants help with.</li>
          <li><span class="cs-callout-num">3</span> Three routes laid out side-by-side, same destination. The 2-year, the 4-year, and the bootcamp get identical visual weight on the page. The layout reinforces that all three end at "employed as a Software Engineer."</li>
          <li><span class="cs-callout-num">4</span> The timing question gives the student two options, not a fixed deadline. "Tight but doable" or "comfortable pace with gap-year room." The student picks the stress level that fits their actual life.</li>
          <li><span class="cs-callout-num">5</span> The plan lands at three horizons: a 90-day push, a 1-year horizon, and the graduation target. A goal four years away is hard to act on. A goal ninety days away is something you can do this week. It's a great outline for the student to start. It's a living plan that will grow and change as the student takes more action.</li>
        </ol>
      </div>

      <h3 class="case-study-sub-mode">Learn</h3>
      <div class="case-study-callout-row">
        <figure class="cs-callout-figure">
          <img src="{{ '/assets/img/orchard-screens-v2/explore-plan-learn/learn-01.png' | relative_url }}" alt="Learn screen">
          <span class="cs-callout-marker" style="--x: 54%; --y: 16%;">1</span>
          <span class="cs-callout-marker" style="--x: 79%; --y: 60%;">2</span>
          <span class="cs-callout-marker" style="--x: 32%; --y: 68%;">3</span>
        </figure>
        <ol class="cs-callout-notes-side">
          <li><span class="cs-callout-num">1</span> Skill Quests run ten minutes or less each. Anything longer starts to feel like assigned homework. We made each one short enough to fit into a locker break, so they can practice any time.</li>
          <li><span class="cs-callout-num">2</span> Each quest is tagged with which Growth Report pillar it moves. "Lifts Skills" or "Lifts Focus" shown right on the card. Without that, it's a random activity. With it, the student knows exactly why they're playing.</li>
          <li><span class="cs-callout-num">3</span> The categories are what schools usually skip. Reading a real budget. Spotting a misleading chart. Giving feedback without crushing someone. These show up in every career and every adult life, but rarely in a curriculum.</li>
        </ol>
      </div>
    </div>
  </div>
</section>

<section id="prototype" class="major-section">
  <div class="major-section-inner">
    <div class="subsection subsection--center-title">
      <p class="subsection-cta-center">
        <a href="https://orchie-v2-prototype-git-main-peebs-explorations.vercel.app/desk" target="_blank" rel="noopener noreferrer" class="button button-primary">View the Prototype</a>
      </p>
    </div>
  </div>
</section>

<section id="my-role" class="case-study-section case-study-intro case-study-intro--role-only">
  <div class="case-study-section-inner">
    <h2 class="case-study-title">My Role</h2>
    <div class="case-study-callout case-study-callout--role">
      <p class="case-study-callout__role-title">Head of Product &amp; Design</p>
      <h3 class="case-study-callout__heading">My Contributions</h3>
      <ul>
        <li><strong>0-to-1 product design and strategy:</strong> Defined the surface, the modes, and the philosophy. Designed Orchie, the Career Readiness Index, and the Explore / Plan / Learn structure as one cohesive system.</li>
        <li><strong>AI as a coach, not a doer:</strong> Established the Orchie guidelines: surface options, ask better questions, never produce the student's work. Orchie is there to nudge the student when they get stuck and help keep the momentum when they're on a roll.</li>
        <li><strong>Making growth measurable:</strong> Designed the CRI and its eight pillars so the score moves on real behavior. The hardest design call on the project, and the one that has taken the most iterations.</li>
        <li><strong>Prototyping:</strong> Built the working prototype with AI so stakeholders and test users interact with the same thing.</li>
      </ul>
    </div>
  </div>
</section>
