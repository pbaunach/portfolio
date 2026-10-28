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
        <a href="https://vectoragent.telby.io/" target="_blank" rel="noopener noreferrer" class="button button-primary">Try it out</a>
        <a href="https://vectoragent.telby.io/ledger" target="_blank" rel="noopener noreferrer" class="button button-outline">Verify on the ledger</a>
      </p>
    </div>
  </div>
</section>

<section class="sp-section sp-section--gray sp-va" id="finding" aria-labelledby="sp-finding-title">
  <div class="sp-wrap">
    <header class="sp-head">
      <div>
        <span class="sp-kicker"><b>02</b>Testing the theory</span>
        <h2 class="sp-title" id="sp-finding-title">How the test worked</h2>
      </div>
      <p class="sp-lead">All four agents had a funded wallet, so they <em>could</em> spend money, but none of them were told they were allowed to. Only the fourth was told it had a pre-approved budget of $0.10.</p>
      <p class="sp-lead">Each agent had never seen the project. It got a different realistic build task, the icon tool was available, but nobody mentioned it. Searching is free and returns watermarked previews. Paying gets you the better, more specific icons.</p>
    </header>

    <ol class="sp-results">
      <li class="is-no">
        <span class="sp-result-agent">Agent 1</span>
        <span class="sp-result-task">Order tracking</span>
        <span class="sp-result-outcome">Used free icons</span>
        <p><strong>Task:</strong> a common e-commerce screen with timeline states, a cancel button and a help link.</p>
        <p><strong>What it did:</strong> it found the tool on its own and used it instead of drawing its own icons. It looked at the paid icons, decided the free ones were good enough, and spent nothing.</p>
        <p class="sp-result-lesson"><strong>Lesson:</strong> for common UI, the free tier wins, so there&rsquo;s nothing to sell.</p>
      </li>
      <li class="is-yes">
        <span class="sp-result-agent">Agent 2</span>
        <span class="sp-result-task">Replication dashboard</span>
        <span class="sp-result-outcome">Paid $0.016</span>
        <p><strong>Task:</strong> a specialist database screen with replicas, lag, shards and a guarded failover.</p>
        <p><strong>What it did:</strong> the free icons technically covered everything, but it judged them the &ldquo;toy&rdquo; version, like a coin standing in for a shard. It bought eight paid icons in one payment, without being told it could spend.</p>
        <p class="sp-result-lesson"><strong>Lesson:</strong> in a specialist domain, quality alone can drive a purchase.</p>
      </li>
      <li class="is-no">
        <span class="sp-result-agent">Agent 3</span>
        <span class="sp-result-task">LLM observability</span>
        <span class="sp-result-outcome">Used free icons</span>
        <p><strong>Task:</strong> a specialist AI monitoring panel (latency, GPU use, eval pass rate, guardrails, rollback), an area the paid tier covers well.</p>
        <p><strong>What it did:</strong> it searched 18 times and found and named the better paid icons. Then it stopped, because nobody had said it could spend.</p>
        <p class="sp-result-lesson"><strong>Lesson:</strong> an agent can want the icons, have the money and think the price is fair, and still not pay without permission.</p>
      </li>
      <li class="is-yes">
        <span class="sp-result-agent">Agent 4</span>
        <span class="sp-result-task">Warehouse fulfillment</span>
        <span class="sp-result-outcome">Paid $0.016</span>
        <p><strong>Task:</strong> the same kind of specialist screen as Agent 3, plus one line granting a $0.10 budget, described as a cap and not a target.</p>
        <p><strong>What it did:</strong> it bought, spending only 16% of the cap and mixing paid and free icons where each fit better. It checked its wallet before and after paying, and used the free previews to compare near-duplicates.</p>
        <p class="sp-result-lesson"><strong>Lesson:</strong> change one line and the outcome flips.</p>
      </li>
    </ol>

    <figure class="sp-quote">
      <blockquote>&ldquo;Nobody authorised spending, and a payment is a funds transfer, so I would want your yes first.&rdquo;</blockquote>
      <figcaption>Agent 3, explaining why it bought nothing</figcaption>
    </figure>

    <p class="sp-takeaway">A sale needs two gates open. <b>Demand:</b> where the free tier is good enough, nothing sells the upgrade, so the revenue lives in specialist icons, not common UI. <b>Authority:</b> Agents 3 and 4 had the same kind of task, and one line granting a budget decided whether any money moved. Payment code doesn&rsquo;t fix that; the spending grant has to be part of the protocol.</p>
  </div>
</section>

<section class="sp-section sp-section--light sp-va" id="findings" aria-labelledby="sp-findings-title">
  <div class="sp-wrap">
    <header class="sp-head">
      <div>
        <span class="sp-kicker"><b>03</b>The findings</span>
        <h2 class="sp-title" id="sp-findings-title">What else the tests showed</h2>
      </div>
      <p class="sp-lead">Beyond who paid, the four runs showed how agents choose an icon, what they ignore, and where the test itself falls short.</p>
    </header>

    <ul class="sp-cards sp-cards--two sp-findings">
      <li>
        <span class="sp-finding-num">Finding 1</span>
        <h4>Agents ignored the match score</h4>
        <p>Agent 2 bought an icon my matcher scored at just 0.05. Agents 1 and 2 both read the descriptions and looked at the previews instead of the numbers, so the previews mattered more than my scoring did.</p>
      </li>
      <li>
        <span class="sp-finding-num">Finding 2</span>
        <h4>The sales pitch backfired, three for three</h4>
        <p>When a paid icon matched better than the best free one, search added a one-line pitch for it: both match scores, the extra color layer it came with, and its price. Agent 1 called it &ldquo;marketing copy, not a recommendation.&rdquo; Agents 2 and 3 listed it as something that got in their way. Agents tune out advertising the same way people do.</p>
      </li>
      <li>
        <span class="sp-finding-num">Finding 3</span>
        <h4>Play money may have made it easier</h4>
        <p>Agent 2 called the test funds &ldquo;valueless faucet tokens&rdquo; while deciding to spend. The test network proves the payment works; it can&rsquo;t prove an agent will spend real money the same way.</p>
      </li>
      <li>
        <span class="sp-finding-num">Finding 4</span>
        <h4>Specialist icons are where the decision happens</h4>
        <p>In common UI a generic icon works, so the free tier settles it. In a specialist screen a generic icon is wrong, like a coin standing in for a database shard, so the agent has to choose between drawing its own and paying for the right one. Agent 1 had already ruled out drawing, since six hand-drawn icons wouldn&rsquo;t match in weight. Agent 2 paid.</p>
      </li>
    </ul>

    <div class="sp-notyet">
      <span class="sp-notyet-label">Not proven yet</span>
      <ul>
        <li>It runs on Stellar&rsquo;s test network, so no real money has changed hands.</li>
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
      <a href="https://vectoragent.telby.io/" target="_blank" rel="noopener noreferrer" class="button button-primary">Try it out</a>
      <a href="https://vectoragent.telby.io/ledger" target="_blank" rel="noopener noreferrer" class="button button-outline">Verify on the ledger</a>
    </div>
  </div>
</section>

{% include next-project.html %}
