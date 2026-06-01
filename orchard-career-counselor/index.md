---
title: "Orchard Career Counselor – Screens"
layout: case-study
---

<section class="case-study-section case-study-intro case-study-intro--hero case-study-intro--theme-orchard case-study-intro--orchard-screens-hero case-study-intro--title-only">
  <div class="case-study-hero-bg parallax-hero-bg" aria-hidden="true"></div>
  <div class="case-study-hero-dots parallax-hero-dots" aria-hidden="true"></div>
  <div class="case-study-section-inner">
    <div class="case-study-hero-inner">
      <h1 class="case-study-title">Orchard: The AI Career Readiness Platform</h1>
      <p class="case-study-hero-summary">A walkthrough of the in-progress design, from a student's first login to the day they submit their applications. Orchie, the AI agent at the center, lives across every screen as connective tissue. She remembers what a student saved last week, what they journaled this morning, what they got stuck on yesterday, so the next prompt is always specific to them.</p>
      <p class="case-study-hero-cta">
        <a href="https://orchie-v2-prototype-git-main-peebs-explorations.vercel.app/desk" target="_blank" rel="noopener noreferrer" class="button button-primary">View the Live Prototype</a>
      </p>
    </div>
  </div>
</section>

<section class="case-study-thesis" aria-label="Project thesis">
  <div class="case-study-thesis-inner">
    <p class="case-study-thesis-eyebrow">The Big Idea</p>
    <p class="case-study-thesis-quote">Career counseling that works the way a sixteen-year-old actually thinks. Through conversation, not quizzes.</p>
  </div>
</section>

<nav class="case-study-nav" aria-label="On this page">
  <ul>
    <li><a href="#welcome-desk">Welcome Desk</a></li>
    <li><a href="#discover">Discover Careers</a></li>
    <li><a href="#career-deep-dive">Career Deep Dive</a></li>
    <li><a href="#life-sim">Try Before You Commit</a></li>
    <li><a href="#industries">Explore Industries</a></li>
    <li><a href="#compare-careers">Compare Careers</a></li>
    <li><a href="#paths">Every Path Forward</a></li>
    <li><a href="#compare-schools">Compare Schools</a></li>
    <li><a href="#plan">Turn It Into a Plan</a></li>
    <li><a href="#growth-report">Growth Report</a></li>
    <li><a href="#applications">Application Tracker</a></li>
    <li><a href="#essays">Workshop Essays</a></li>
    <li><a href="#money">Plan the Money</a></li>
    <li><a href="#bio-sheet">Bio Sheet</a></li>
    <li><a href="#prototype">View Prototype</a></li>
    <li><a href="#my-role">My Role</a></li>
  </ul>
</nav>

<section class="case-study-act" aria-label="Act 1">
  <div class="case-study-act-inner">
    <div class="case-study-act-number">01</div>
    <div class="case-study-act-content">
      <p class="case-study-act-label">Act One</p>
      <p class="case-study-act-title">Discover</p>
      <p class="case-study-act-intro">Help the student figure out what's even out there, in their own words instead of a quiz.</p>
    </div>
  </div>
</section>

<section id="welcome-desk" class="major-section major-section--design-a">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Welcome to your desk</h2>
      <p>I wanted the home screen to feel like the student's own workspace, not a marketing page. Pinned items, saved careers, plans they're partway through, and Orchie's suggestions all sit on the same surface, so picking up where you left off is the default behavior. The right rail is where everything they've built collects. Orchie greets the student by name, and the prompts she offers are pulled from things they've actually done, not generic icebreakers.</p>
      <figure class="case-study-screenshot case-study-screenshot--callouts">
        <div class="cs-screenshot-frame">
          <img src="{{ '/assets/img/orchard-screens-v2/01-welcome-desk.png' | relative_url }}" alt="Orchard welcome desk with Orchie and workspace sidebar">
          <span class="cs-callout-marker" style="--x: 12%; --y: 75%;">1</span>
          <span class="cs-callout-marker" style="--x: 35%; --y: 60%;">2</span>
          <span class="cs-callout-marker" style="--x: 82%; --y: 55%;">3</span>
        </div>
        <ol class="cs-callout-notes">
          <li><span class="cs-callout-num">1</span> "Recents" in the left rail aren't generic. They pull from what this student has actually opened. Onboarding by behavior, not configuration.</li>
          <li><span class="cs-callout-num">2</span> Suggested prompts reference real things in the student's saved careers ("Compare Product Design vs. Software Engineer"). The first action is never cold.</li>
          <li><span class="cs-callout-num">3</span> The right rail is the workspace. Every artifact the student has built lives here, ready to pick up where they left off.</li>
        </ol>
      </figure>
    </div>
  </div>
</section>

<section id="discover" class="major-section major-section--design-b">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Discover careers through conversation</h2>
      <p>Quizzes felt wrong here. Sixteen-year-olds aren't great at picking from canned options, and the results tend to read like horoscopes. So instead, students just describe what they care about ("I want to work outside," "I'm thinking about college but want to know what else is out there"), and Orchie pulls from their own words to surface careers, rather than from how a database has tagged the jobs.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/orchard-screens-v2/02-career-discovery-chat.png' | relative_url }}" alt="Career discovery chat with Orchie">
      </figure>
      <p>Tapping any career in the chat opens a side panel with the essentials: pay, growth, security, skills, and a typical day. The chat stays put, so students can keep asking questions while they read.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/orchard-screens-v2/03-chat-side-panel.png' | relative_url }}" alt="Career detail panel opening from chat">
      </figure>
    </div>
  </div>
</section>

<section id="career-deep-dive" class="major-section major-section--design-a">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Career deep dive</h2>
      <p>The full career page is where curiosity has to convert into a next step or it dies. I gave each career three "try it on" entry points: a 4-week skill path, a one-week audition, and a one-month life sim. The "Why this might fit you" block above them is written fresh by Orchie from the student's own journal entries and Growth Report, so it reads like a personal note instead of a template.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/orchard-screens-v2/04-career-deep-dive.png' | relative_url }}" alt="Product Design career deep dive page">
      </figure>
      <p>Scroll past the fold and the page switches to live labor data for the student's city. Median pay, who's hiring this month, the skills they already have vs. the ones they'd need to build, and the typical routes in (degrees, bootcamps, hybrid paths). Same career, different feeling once it's grounded in their zip code.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/orchard-screens-v2/05-career-labor-data.png' | relative_url }}" alt="Live labor data and routes for a career">
      </figure>
    </div>
  </div>
</section>

<section id="life-sim" class="major-section major-section--design-b">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Try the career before you commit to it</h2>
      <p>A career page describes the job. A life sim makes you feel it. The student picks a career and a city, and the sim runs four weeks of real moments at that salary: rent due, taxes withheld, then a plot twist. The car needs $800 of brake work and there's $1,200 in checking. What do you do? The end-of-month balance answers the "is this enough" question that numbers on a salary card never quite do.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/orchard-screens-v2/06-life-sim.png' | relative_url }}" alt="One-month life sim as a Product Designer in Austin">
      </figure>
    </div>
  </div>
</section>

<section class="case-study-act" aria-label="Act 2">
  <div class="case-study-act-inner">
    <div class="case-study-act-number">02</div>
    <div class="case-study-act-content">
      <p class="case-study-act-label">Act Two</p>
      <p class="case-study-act-title">Decide</p>
      <p class="case-study-act-intro">Narrow it down with the student's own data, not a magic quiz score.</p>
    </div>
  </div>
</section>

<section id="industries" class="major-section major-section--design-a">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Explore by industry</h2>
      <p>Not every student walks in with a job in mind. Plenty have a kind of <em>place</em> they want to work, the vibe of an industry, before they have a role. Industries give them a way in: companies they recognize, the clusters of jobs inside, common ways people actually broke in, and a few day-in-the-life clips. Any career inside the industry opens straight to its deep dive.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/orchard-screens-v2/07-industry-deep-dive.png' | relative_url }}" alt="Design × Tech industry page">
      </figure>
    </div>
  </div>
</section>

<section id="compare-careers" class="major-section major-section--design-b">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Line them up. Pick a winner.</h2>
      <p>Comparison was missing from every other career tool I looked at, which felt like a strange gap given that's mostly what teenagers do in their heads anyway. Students pull two or three saved careers into one view, and the page lines them up by pay, growth, security, top route in, core skills, and fit score against their Growth Report. Orchie closes with a "read" at the bottom. It's not a verdict, more like a friend's honest take, grounded in the student's own data: "Product Design wins on pay and the fit you've built so far. HVAC Specialist has a faster on-ramp."</p>
      <figure class="case-study-screenshot case-study-screenshot--callouts">
        <div class="cs-screenshot-frame">
          <img src="{{ '/assets/img/orchard-screens-v2/08-career-compare.png' | relative_url }}" alt="Career side-by-side comparison">
          <span class="cs-callout-marker" style="--x: 70%; --y: 22%;">1</span>
          <span class="cs-callout-marker" style="--x: 85%; --y: 73%;">2</span>
          <span class="cs-callout-marker" style="--x: 38%; --y: 88%;">3</span>
        </div>
        <ol class="cs-callout-notes">
          <li><span class="cs-callout-num">1</span> Three careers fit at a time. More options is paralysis. This is how teenagers actually narrow down in their heads.</li>
          <li><span class="cs-callout-num">2</span> CRI fit score uses the same benchmark across the whole app. The number stays comparable from the Growth Report to here to the school list.</li>
          <li><span class="cs-callout-num">3</span> Orchie's read at the bottom isn't a verdict. It's a friend's honest take, grounded in what the student has actually built so far.</li>
        </ol>
      </figure>
    </div>
  </div>
</section>

<section id="paths" class="major-section major-section--design-a">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Every path forward, in one place</h2>
      <p>Four-year colleges, community colleges, trade schools, apprenticeships, military academies. Most platforms treat one of these as the default and the rest as exceptions. Putting them on equal footing was an explicit call. Orchie ranks paths by fit against the student's Growth Report, but the student is the one who tells Orchie what "fit" should actually weight.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/orchard-screens-v2/09-schools-listing.png' | relative_url }}" alt="Schools listing with all path types">
      </figure>
      <p>Opening any path gives the same depth as a career page: net cost, what the program is actually known for, what students do after they finish, and the outcomes that matter (graduation rate, employed at 6 months, median early salary), instead of the glossy copy schools usually lead with.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/orchard-screens-v2/10-school-deep-dive.png' | relative_url }}" alt="IEC Electrical Apprenticeship deep dive">
      </figure>
    </div>
  </div>
</section>

<section id="compare-schools" class="major-section major-section--design-b">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Compare schools the same way</h2>
      <p>The comparison engine runs the same across schools as it does careers. An electrician apprenticeship can sit on the same row as a 4-year design school without one of them feeling like a consolation prize. Cost, acceptance, grad rate, median salary, the vibe at the school. Orchie's read at the bottom names the safer bet and the stretch, and shows the work behind the call.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/orchard-screens-v2/11-school-compare.png' | relative_url }}" alt="School side-by-side comparison">
      </figure>
    </div>
  </div>
</section>

<section class="case-study-act" aria-label="Act 3">
  <div class="case-study-act-inner">
    <div class="case-study-act-number">03</div>
    <div class="case-study-act-content">
      <p class="case-study-act-label">Act Three</p>
      <p class="case-study-act-title">Apply</p>
      <p class="case-study-act-intro">Turn the choice into a real, tracked plan they can actually finish.</p>
    </div>
  </div>
</section>

<section id="plan" class="major-section major-section--design-a">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Turn it into a plan</h2>
      <p>Plan is where exploration becomes commitment. The left rail scaffolds the whole stretch under two headings (Decide and Apply), and each item in those groups opens into a working surface, not a static checklist. Applications, Deadline Radar, Essay workshop, LOR tracker, Bio sheet, Activity log. Real artifacts the student fills in as they go.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/orchard-screens-v2/12-plan-home.png' | relative_url }}" alt="Plan home with active plans and careers ready to plan">
      </figure>
      <p>Starting a new plan stays in the chat. Orchie asks which career, lays out two or three typical routes ("2-year college route, 4-year degree direct, bootcamp + self-taught"), then asks when they want to be ready. Three questions, then the plan starts drafting itself.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/orchard-screens-v2/13-plan-builder-chat.png' | relative_url }}" alt="Plan builder chat with route options">
      </figure>
    </div>
  </div>
</section>

<section id="growth-report" class="major-section major-section--design-b">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>The Growth Report</h2>
      <p>Eight pillars of career readiness (Self Awareness, Exploration, Planning, Focus, Goal Setting, Execution, Skills, Experience), scored continuously from everything the student does in Orchard. The radar shows the shape of their readiness in one glance. The pillar cards below tell them what to grow next, and how. Every fit score, comparison, and "Orchie's read" anywhere else in the app is benchmarked against this.</p>
      <figure class="case-study-screenshot case-study-screenshot--callouts">
        <div class="cs-screenshot-frame">
          <img src="{{ '/assets/img/orchard-screens-v2/14-growth-report.png' | relative_url }}" alt="Growth Report with 8-pillar radar chart">
          <span class="cs-callout-marker" style="--x: 32%; --y: 38%;">1</span>
          <span class="cs-callout-marker" style="--x: 63%; --y: 33%;">2</span>
          <span class="cs-callout-marker" style="--x: 75%; --y: 75%;">3</span>
        </div>
        <ol class="cs-callout-notes">
          <li><span class="cs-callout-num">1</span> Eight pillars chosen to be observable through real behavior, not self-reported quiz answers. Picking the right axes was the hardest part of the design.</li>
          <li><span class="cs-callout-num">2</span> 203/400 isn't a final score. It's where you are this week, and the shape of the radar shows what to grow next.</li>
          <li><span class="cs-callout-num">3</span> "Strength" and "growing" tags do the emotional work. Nobody wants to be told they're "low" on something. Framing matters here.</li>
        </ol>
      </figure>
    </div>
  </div>
</section>

<section id="applications" class="major-section major-section--design-a">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Every application, one board</h2>
      <p>Kanban for the apply stretch, because that's how this work actually flows in a student's head: Considering, Applying, Submitted, Decision. Each card shows the deadline, cost, decision type (ED, RD, Rolling), and a live to-do list Orchie keeps current. Slipped deadlines get flagged. Acceptances and denials move the card on their own.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/orchard-screens-v2/15-applications-board.png' | relative_url }}" alt="Applications kanban board">
      </figure>
    </div>
  </div>
</section>

<section id="essays" class="major-section major-section--design-b">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Workshop your essays</h2>
      <p>Every essay sits in its own workspace with full version history. Drafts auto-save. The prompt and word count stay visible while the student writes. Orchie never types into the draft, by design. The voice in the essay has to be theirs, or the whole thing collapses.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/orchard-screens-v2/16-essay-workshop-draft.png' | relative_url }}" alt="Essay workshop draft view">
      </figure>
      <p>When the student asks for feedback, Orchie reads the draft against a rubric (hook, voice, show-don't-tell, cliché check, structure) and returns a score and a specific, actionable note for each one. "Para 4 leans abstract. Could you replace the 'design problem' sentence with one example?" Notes, not rewrites.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/orchard-screens-v2/17-essay-rubric.png' | relative_url }}" alt="Orchie's read: rubric-scored essay feedback">
      </figure>
    </div>
  </div>
</section>

<section id="money" class="major-section major-section--design-a">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>Plan the money</h2>
      <p>The "what does this actually cost" question, answered up front. A cost projector that separates sticker from real net price, a scholarship pipeline with deadlines and fit notes ("National merit + service. Your tutoring + leadership are exactly the profile."), and FAFSA progress all in one view. Money stops being the thing that ambushes a family in spring of senior year.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/orchard-screens-v2/18-money-plan.png' | relative_url }}" alt="Money plan with scholarships and FAFSA">
      </figure>
    </div>
  </div>
</section>

<section id="bio-sheet" class="major-section major-section--design-b">
  <div class="major-section-inner">
    <div class="subsection">
      <h2>The version of you teachers should know</h2>
      <p>A single artifact that pulls together what Orchie has actually seen across the student's chats, journal entries, plans, auditions, and brain games. The student edits anything they don't like. They send it along with their LOR asks so teachers have something real and specific to write from, instead of a vague memory of "good student." Every section cites the sources Orchie pulled from, so the student can trace any claim back to where it came from.</p>
      <figure class="case-study-screenshot">
        <img src="{{ '/assets/img/orchard-screens-v2/19-bio-sheet.png' | relative_url }}" alt="Bio sheet: the version of you teachers should know">
      </figure>
    </div>
  </div>
</section>

<section id="prototype" class="major-section major-section--design-a">
  <div class="major-section-inner">
    <div class="subsection subsection--center-title">
      <h2>See it in motion</h2>
      <p class="subsection-cta-center">The prototype is live and getting built in the open. Start at the Desk to retrace the flow above.</p>
      <div class="case-study-cta-wrapper">
        <a href="https://orchie-v2-prototype-git-main-peebs-explorations.vercel.app/desk" target="_blank" rel="noopener noreferrer" class="button button-primary">View the Live Prototype</a>
      </div>
    </div>
  </div>
</section>

<section id="my-role" class="case-study-section case-study-intro case-study-intro--role-only">
  <div class="case-study-section-inner">
    <h2 class="case-study-title">My Role</h2>
    <div class="case-study-callout case-study-callout--role">
      <p class="case-study-callout__role-title">Product Design and Strategy</p>
      <h3 class="case-study-callout__heading">My Contributions</h3>
      <ul>
        <li><strong>0&rarr;1 product design:</strong> Designed the whole surface (discovery, research, comparison, planning, applications, essays, money) as one connected workspace. Avoiding the "ten disconnected tabs that don't know about each other" pattern was a deliberate goal from day one.</li>
        <li><strong>AI as a continuous companion:</strong> Defined how Orchie behaves across the whole product. She's never a chatbot you have to remember to open. She's already there with context, knowing what the student has been doing and where they're trying to go next.</li>
        <li><strong>Strategic pivots:</strong> Led the shift from a content-library + quiz model to a conversational, evidence-driven discovery platform. Also pushed for ranking every path (4-year, 2-year, trade, apprenticeship, military) on equal footing, instead of defaulting to the four-year college frame everyone else uses.</li>
        <li><strong>Live prototyping:</strong> Built the working prototype in code instead of stopping at static screens. Stakeholders, partners, and test users all interact with the same thing, which has changed the quality of feedback we get back.</li>
      </ul>
    </div>
  </div>
</section>
