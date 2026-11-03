---
layout: default
title: Solving for Ambiguity
description: Private stub page for Aspireship problem framing.
permalink: /aspireship-problem/
robots: "noindex, nofollow, noarchive, nosnippet, noimageindex, notranslate"
x_robots_tag: "noindex, nofollow, noarchive, nosnippet, noimageindex, notranslate"
---

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

  .aspireship-doc {
    max-width: 900px;
    margin: 1.5rem auto 3rem;
    color: #001226;
    font-family: "Poppins", sans-serif;
  }

  .aspireship-doc__title {
    margin: 0 0 1.25rem;
    font-size: 2rem;
    line-height: 1.2;
    font-weight: 700;
    color: #001226;
  }

  .aspireship-doc__callout {
    border: 1px solid #cbd5e1;
    background: #ffffff;
    border-radius: 8px;
    padding: 1.4rem 1.5rem;
    margin: 0;
    box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
  }

  .aspireship-doc__callout h2 {
    margin: 0 0 0.7rem;
    padding-top: 1.5rem;
    text-align: left;
    font-size: 1.15rem;
    line-height: 1.25;
    font-weight: 700;
    color: #001226;
  }

  .aspireship-doc__callout h2:first-of-type {
    padding-top: 0;
  }

  .aspireship-doc p {
    margin: 0 0 0.75rem;
    font-size: 1rem;
    line-height: 1.6;
    color: #001226;
  }

  .aspireship-doc ul {
    margin: 0.35rem 0 0;
    padding-left: 1.15rem;
  }

  .aspireship-doc li {
    margin: 0 0 0.45rem;
    line-height: 1.55;
    color: #001226;
  }

  .aspireship-doc ul ul {
    margin: 0.35rem 0 0.5rem;
    padding-left: 1.25rem;
  }

  @media (max-width: 720px) {
    .aspireship-doc__callout {
      padding: 1rem;
    }
  }
</style>

<div class="aspireship-doc">
  <section class="aspireship-doc__callout">
    <h1 class="aspireship-doc__title">Solving for Ambiguity</h1>
    <h2>The Situation</h2>
    <p>Our CEO noted that course completions were low compared to sign-up numbers, but we didn't have a clear "why" or a map of where users were dropping off.</p>
    <h2>My Approach</h2>
    <p>I started by creating a baseline and then mapping the user journey to identify where the biggest drop-off points were happening.</p>
    <h2>Baseline</h2>
    <p>I got together with Marketing and Engineering to make sure we were all looking at the same data. We defined sign-up criteria and completion criteria and then built a clear report to measure against.</p>
    <h2>User Journey</h2>
    <p>I mapped the user journey to a conversion funnel to identify any bottlenecks or drop-off points.</p>
    <p><strong>Funnel:</strong> Free Sign-up <strong>-&gt;</strong> Paid Conversion (3%) <strong>-&gt;</strong> Graded Assessment <strong>-&gt;</strong> Completion (45%)</p>
    <h2>Hypothesis &amp; Design</h2>
    <p>The data showed two clear drop off points that I addressed through design:</p>
    <ul>
      <li><strong>The Paywall:</strong> Users were hesitant to pay for a product they hadn't tried.
        <ul>
          <li><strong>Solution:</strong> Redesigned the onboarding to offer the first module for free.</li>
        </ul>
      </li>
      <li><strong>Assessment Anxiety:</strong> Users were "stalling" at the final exam out of fear of failure.
        <ul>
          <li><strong>Solution:</strong> Added practice projects and messaging that they would have the option to retake the assessment.</li>
        </ul>
      </li>
    </ul>
    <h2>The Results</h2>
    <ul>
      <li><strong>Paid Conversion:</strong> Jumped from 3% to 15% (5x increase).</li>
      <li><strong>Course Completion:</strong> rose from 45% to 89% (2x increase).</li>
      <li><strong>Net Impact:</strong> ~10x increase in total course completions per sign-up.</li>
    </ul>
    <h2>Conclusion</h2>
    <p>By creating a baseline and analyzing our conversion funnel, I was able to take a vague issue and form concrete hypotheses to design and test against.</p>
  </section>
</div>

<script>
  (function () {
    if (typeof window.clarity === "function") {
      window.clarity("event", "aspireship_problem_stub_view");
    }
  })();
</script>
