---
title: "VectorAgent: Can an Agent Buy It Itself?"
layout: case-study
extra_css: [/assets/css/live-work.css, /assets/css/side-project.css]
extra_js: [/assets/js/live-work.js]
---

<section class="case-study-section case-study-intro case-study-intro--csb-hero case-study-intro--csb-hero-va">
  <div class="case-study-section-inner">
    <div class="csb-hero">
      <h1 class="csb-hero-title">VectorAgent</h1>
      <p class="csb-hero-sub">An icon store where <span class="csb-hero-accent">AI agents</span> pay their own way</p>
      <p class="csb-hero-meta">
        <span class="csb-hero-meta-label">My Contributions:</span>
        <span>Product Strategy &amp; Design</span>
        <span class="csb-hero-meta-sep" aria-hidden="true">&middot;</span>
        <span>0-to-1</span>
        <span class="csb-hero-meta-sep" aria-hidden="true">&middot;</span>
        <span>Design Engineering</span>
      </p>
      <figure class="csb-hero-video csb-hero-video--demo">
        {% include demos/va-loop.html %}
      </figure>
    </div>
  </div>
</section>

<section class="csb-problem" aria-label="The idea">
  <div class="csb-problem-inner">
    <div class="csb-problem-copy">
      <h2 class="csb-problem-question">Can an AI agent buy something on its own and prove it owns it?</h2>
      <p class="csb-problem-body">Agents now assemble interfaces from whatever they can find, and nothing writes down where any of it came from. VectorAgent is my side project to test a narrow idea: let the agent pay for an icon itself, with no human approving the purchase, and make that payment the proof of ownership.</p>
    </div>
    <ul class="csb-stat-list">
      <li class="csb-stat csb-stat--constraint">
        <div class="csb-stat-body">
          <p class="csb-stat-name">Search is free, fetch is paid</p>
          <p class="csb-stat-text">Search and watermarked previews cost nothing, so an agent can judge before it spends.</p>
        </div>
      </li>
      <li class="csb-stat csb-stat--constraint">
        <div class="csb-stat-body">
          <p class="csb-stat-name">The payment is the license</p>
          <p class="csb-stat-text">Every SVG carries the transaction that bought it, checkable on a public ledger.</p>
        </div>
      </li>
      <li class="csb-stat csb-stat--constraint">
        <div class="csb-stat-body">
          <p class="csb-stat-name">No human in the purchase</p>
          <p class="csb-stat-text">The agent signs its own sub-cent payment from a wallet it was given.</p>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="sp-section sp-section--light sp-va" id="loop" aria-labelledby="sp-loop-title">
  <div class="sp-wrap">
    <header class="sp-head">
      <div>
        <span class="sp-kicker"><b>01</b>The loop</span>
        <h2 class="sp-title" id="sp-loop-title">Three standards, stacked</h2>
      </div>
      <p class="sp-lead">I didn&rsquo;t have to invent the hard parts. MCP is how agents find tools, x402 lets a server charge for a request, and Stellar settles cheaply enough that the receipt costs less than the icon. Nobody had stacked them, so I did.</p>
    </header>

    <ul class="sp-stats">
      <li><b>2 of 4</b><span>agents bought something, given funds, a catalog and no instructions.</span></li>
      <li><b>3 prices</b><span>free, $0.002 and $0.010, so every request makes the agent decide whether the better icon is worth paying for.</span></li>
      <li><b>2 transactions</b><span>per purchase: a Soroban payment, then a classic Stellar receipt holding a hash of what was bought.</span></li>
    </ul>

    <div class="sp-flow sp-flow--va">
      <h3 class="sp-sub">How one purchase works</h3>
      <p class="sp-sub-lead">Six steps, from the request to the receipt. It plays through on its own, or hover a step to see where it happens.</p>
      {% include demos/va-flow.html %}
      <p class="sp-flow-actions">
        <a href="https://vectoragent.telby.io/demo.html" target="_blank" rel="noopener noreferrer" class="button button-primary">Try it out</a>
        <a href="https://vectoragent.telby.io/ledger" target="_blank" rel="noopener noreferrer" class="button button-outline">Verify on the ledger</a>
      </p>
    </div>
  </div>
</section>

<section class="sp-section sp-section--gray sp-va" id="finding" aria-labelledby="sp-finding-title">
  <div class="sp-wrap">
    <header class="sp-head">
      <div>
        <span class="sp-kicker"><b>02</b>The finding</span>
        <h2 class="sp-title" id="sp-finding-title">The part I didn&rsquo;t expect</h2>
      </div>
      <p class="sp-lead">I gave four agents that had never seen the project a realistic build task, made the tool available, and said nothing about it. All four used it. Two paid.</p>
    </header>

    <ol class="sp-results">
      <li class="is-no"><span class="sp-result-task">Order tracking</span><span class="sp-result-meta">Common UI &middot; no budget</span><b>Declined</b><p>The free tier was good enough.</p></li>
      <li class="is-yes"><span class="sp-result-task">Replication dashboard</span><span class="sp-result-meta">Specialist &middot; no budget</span><b>Paid $0.016</b><p>The free icons covered it, but looked like the toy version.</p></li>
      <li class="is-no"><span class="sp-result-task">LLM observability</span><span class="sp-result-meta">Specialist &middot; no budget</span><b>Declined</b><p>Found the right paid icons, but nobody had said it could spend.</p></li>
      <li class="is-yes"><span class="sp-result-task">Warehouse fulfillment</span><span class="sp-result-meta">Specialist &middot; $0.10 budget</span><b>Paid $0.016</b><p>Spent 16% of the cap, mixing paid and free.</p></li>
    </ol>

    <figure class="sp-quote">
      <blockquote>&ldquo;Nobody authorised spending, and a payment is a funds transfer, so I would want your yes first.&rdquo;</blockquote>
      <figcaption>The third agent, explaining why it bought nothing</figcaption>
    </figure>

    <p class="sp-takeaway">A sale needs two gates open. <b>Demand:</b> where the free tier is good enough, nothing sells the upgrade, so the revenue lives in specialist icons, not common UI. <b>Authority:</b> tests three and four were the same kind of task, and one line granting a budget decided whether any money moved. Payment code doesn&rsquo;t fix that; the spending grant has to be part of the protocol.</p>

    <div class="sp-notyet">
      <span class="sp-notyet-label">Not proven yet</span>
      <ul>
        <li>It runs on Stellar&rsquo;s test network, so no real money has changed hands, and one agent cited that while deciding to spend.</li>
        <li>The payment and its receipt are two transactions, not one, because Soroban payments can&rsquo;t carry a memo.</li>
        <li>Four tests are a signal, not a result, and there&rsquo;s no creator marketplace yet: every icon is mine.</li>
      </ul>
    </div>
  </div>
</section>

<section class="sp-section sp-section--light sp-outro sp-va" id="my-role" aria-labelledby="sp-role-title">
  <div class="sp-wrap sp-outro-inner">
    <div>
      <span class="sp-kicker">My role</span>
      <h2 class="sp-title sp-title--sm" id="sp-role-title">Solo design and engineering.</h2>
      <p class="sp-lead">I designed and built the whole thing: the MCP tools, the payment flow, the icon library, the settlement dashboard and the live demo.</p>
    </div>
    <div class="sp-outro-actions">
      <a href="https://vectoragent.telby.io/demo.html" target="_blank" rel="noopener noreferrer" class="button button-primary">Try it out</a>
      <a href="https://vectoragent.telby.io/ledger" target="_blank" rel="noopener noreferrer" class="button button-outline">Verify on the ledger</a>
    </div>
  </div>
</section>
