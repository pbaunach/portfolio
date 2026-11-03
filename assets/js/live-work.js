/* Live-work demos. Each block finds its own root ([data-lw="..."]) and does nothing
   if the page doesn't have it, so either one can sit in a case study alone.
   The product UI inside each frame mirrors the real product; the scripted content
   (sample replies, the bell icon run) is labeled as such on the page. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function $(root, sel) { return root.querySelector(sel); }
  function $$(root, sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }

  /* Plays a [time in ms, action] script on a loop. Pauses on hover, focus and
     off screen. Under reduced motion, or when the root carries data-still (a
     card cover that should never move), it runs every step before `stillAt`
     once and stops there, as a still frame. */
  function play(root, script, loop, stillAt) {
    if (reduceMotion || root.hasAttribute('data-still')) {
      script.forEach(function (s) { if (s[0] < stillAt) s[1](); });
      return;
    }
    var t = 0, last = null, idx = 0, paused = false, visible = true;
    function tick(now) {
      if (last === null) last = now;
      if (!paused && visible) {
        t += now - last;
        while (idx < script.length && script[idx][0] <= t) { script[idx][1](); idx++; }
        if (t >= loop) { t = 0; idx = 0; }
      }
      last = now;
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    function setPaused(p) { paused = p; root.classList.toggle('is-paused', p); }
    root.addEventListener('mouseenter', function () { setPaused(true); });
    root.addEventListener('mouseleave', function () { setPaused(false); });
    root.addEventListener('focusin', function () { setPaused(true); });
    root.addEventListener('focusout', function () { setPaused(false); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(root);
    }
  }

  /* ================================================================
     1. Orchie router (Orchard)
     A simplified version of the flow chart above it: the message goes through
     the intent and safety screen, the screen picks one lane, skills read the
     desk and chat history, and the reply comes out with a next step. Clarify
     and the guardrail lane go straight to the reply. The messages are preset
     and each one's route is scripted.
     ================================================================ */
  var orc = document.querySelector('[data-lw="router"]');
  if (orc) (function () {
    var ROUTES = {
      clarify: {
        reply: 'No worries, let&rsquo;s narrow it down. Want to start with what you&rsquo;re good at, or with what you&rsquo;d never want to do?',
        next: 'What I&rsquo;m good at',
        why: 'An unclear question gets one clarifying question with options to tap, never an open-ended &ldquo;tell me more.&rdquo;'
      },
      explore: {
        reply: 'I put a career card on your desk: what the job is day to day, pay, growth, and the skills it uses, with the source under every number.',
        next: 'Watch a day-in-the-life clip',
        why: 'Cited, always. If Orchie can&rsquo;t source a number it doesn&rsquo;t show one.'
      },
      compare: {
        reply: 'Both are on your desk side by side: schooling, cost, pay, and what the work is like. One thing worth looking at first is how many years of school each one takes.',
        next: 'Add one to my plan',
        why: 'The comparison lands on the desk, so a follow-up question stays in context.'
      },
      plan: {
        reply: 'Let&rsquo;s build your plan. First question: are you thinking about a 4-year college, or starting at a community college?',
        next: '4-year college',
        why: 'Plans are built one question at a time, so the roadmap fits the student instead of a template.'
      },
      verdict: {
        guard: true,
        reply: 'That one&rsquo;s your call, and I&rsquo;ll help you make it. Tell me the schools you&rsquo;re weighing and what matters most, and I&rsquo;ll lay them out side by side.',
        next: 'Compare my schools',
        why: 'Guardrail: requests for a verdict. Orchie gives criteria and a next step, never the decision.'
      },
      doit: {
        guard: true,
        reply: 'I won&rsquo;t write it for you, but I&rsquo;ll help you write a great one. Start with one moment from the last year you&rsquo;d tell a friend about.',
        next: 'Open the essay workshop',
        why: 'Guardrail: nudge, don&rsquo;t do. Orchie coaches; the student does the heavy lifting.'
      },
      distress: {
        guard: true,
        reply: 'That sounds really heavy, and I&rsquo;m glad you said something. Let&rsquo;s set careers aside. Your school counselor or someone you trust can help, and you can call or text 988 any time.',
        next: 'Show me who I can talk to',
        why: 'The safety screen runs before any skill. A distress signal skips the career flow entirely.'
      }
    };
    var PRESETS = [
      ['What does a UX engineer actually do?', 'explore'],
      ['Nursing or physical therapy?', 'compare'],
      ['How do I become a marine biologist?', 'plan'],
      ['Just tell me which college to pick.', 'verdict'],
      ['Can you write my college essay?', 'doit'],
      ['idk', 'clarify'],
      ['I&rsquo;m stressed and nothing feels worth it.', 'distress']
    ];

    var asks = $(orc, '.og-asks');
    asks.innerHTML = PRESETS.map(function (p, i) {
      return '<button type="button" class="og-ask" data-p="' + i + '" aria-pressed="false">' + p[0] + '</button>';
    }).join('');

    var graph = $(orc, '.og-graph');
    var svg = $(orc, '.og-wires');
    var nodes = {};
    $$(orc, '[data-node]').forEach(function (n) { nodes[n.getAttribute('data-node')] = n; });
    var lanes = {};
    $$(orc, '[data-lane]').forEach(function (n) { lanes[n.getAttribute('data-lane')] = n; });
    var LANES = ['clarify', 'conversation', 'explore', 'compare', 'plan', 'guard'];
    var SKILLS = ['conversation', 'explore', 'compare', 'plan'];
    var quoteEl = $(orc, '[data-quote]');
    var replyEl = $(orc, '[data-reply]');
    var nextPill = $(orc, '[data-next] .og-pill');
    var tagEl = $(orc, '[data-tag]');
    var whyText = $(orc, '[data-why] span');
    var whyIdle = whyText.innerHTML;
    var timers = [];

    /* ---------- Wires ----------
       Message to screen; the screen fans out to every lane; each skill lane
       runs into the desk + chat history node, which feeds the reply; clarify
       and the guardrail lane run straight across to the reply (they sit above
       and below the desk node, so their wires clear it). Redrawn whenever the
       graph changes size. */
    var NS = 'http://www.w3.org/2000/svg';
    var wires = {};
    function addWire(k) {
      var p = document.createElementNS(NS, 'path');
      svg.appendChild(p);
      wires[k] = p;
    }
    addWire('q');
    LANES.forEach(function (k) { addWire('in:' + k); });
    SKILLS.forEach(function (k) { addWire('ctx:' + k); });
    ['ctx', 'clarify', 'guard'].forEach(function (k) { addWire('out:' + k); });

    // A right-angled connector with rounded corners, turning halfway across.
    function elbow(x1, y1, x2, y2) {
      if (Math.abs(y2 - y1) < 1) return 'M' + x1 + ' ' + y1 + 'H' + x2;
      var tx = (x1 + x2) / 2;
      var d = y2 > y1 ? 1 : -1;
      var r = Math.min(7, Math.abs(y2 - y1) / 2);
      return 'M' + x1 + ' ' + y1 + 'H' + (tx - r) +
        'Q' + tx + ' ' + y1 + ' ' + tx + ' ' + (y1 + d * r) +
        'V' + (y2 - d * r) +
        'Q' + tx + ' ' + y2 + ' ' + (tx + r) + ' ' + y2 +
        'H' + x2;
    }
    function box(el, g) {
      var b = el.getBoundingClientRect();
      return { l: b.left - g.left, r: b.right - g.left, cy: b.top + b.height / 2 - g.top };
    }
    function draw() {
      var g = graph.getBoundingClientRect();
      var q = box(nodes.q, g), s = box(nodes.screen, g), c = box(nodes.ctx, g), rep = box(nodes.reply, g);
      wires.q.setAttribute('d', elbow(q.r, q.cy, s.l - 2, s.cy));
      LANES.forEach(function (k) {
        var l = box(lanes[k], g);
        wires['in:' + k].setAttribute('d', elbow(s.r, s.cy, l.l - 2, l.cy));
        if (SKILLS.indexOf(k) > -1) wires['ctx:' + k].setAttribute('d', elbow(l.r, l.cy, c.l - 2, c.cy));
        else wires['out:' + k].setAttribute('d', 'M' + l.r + ' ' + l.cy + 'H' + (rep.l - 2));
      });
      wires['out:ctx'].setAttribute('d', 'M' + c.r + ' ' + c.cy + 'H' + (rep.l - 2));
    }
    draw();
    if ('ResizeObserver' in window) new ResizeObserver(draw).observe(graph);
    else window.addEventListener('resize', draw);

    function wire(k, cls) {
      wires[k].setAttribute('class', cls || '');
      // A lit wire goes on top, so its arrowhead covers any unlit one at the same end.
      if (cls) svg.appendChild(wires[k]);
    }

    function run(html, key) {
      timers.forEach(clearTimeout); timers = [];
      var r = ROUTES[key];
      var lane = r.guard ? 'guard' : key;
      var readsContext = SKILLS.indexOf(lane) > -1;
      var lit = r.guard ? 'is-warn' : 'is-on';

      // Reset to the waiting state. Only text changes; every box keeps its size.
      Object.keys(nodes).forEach(function (k) { nodes[k].classList.remove('is-on', 'is-skip'); });
      LANES.forEach(function (k) { lanes[k].classList.remove('is-on', 'is-skip'); });
      nodes.screen.classList.remove('is-busy', 'is-done');
      Object.keys(wires).forEach(function (k) { wire(k, ''); });
      quoteEl.innerHTML = '&ldquo;' + html + '&rdquo;';
      replyEl.innerHTML = '<p class="og-wait">Waiting on the screen&hellip;</p>';
      nextPill.innerHTML = '';
      tagEl.textContent = '';
      whyText.innerHTML = whyIdle;

      var steps = [
        function () { nodes.q.classList.add('is-on'); wire('q', 'is-on'); },
        function () { nodes.screen.classList.add('is-on', 'is-busy'); },
        function () {
          // The screen decides: one lane lights, the rest fade back.
          LANES.forEach(function (k) { lanes[k].classList.add(k === lane ? 'is-on' : 'is-skip'); });
          wire('in:' + lane, lit);
        },
        function () {
          if (readsContext) {
            wire('ctx:' + lane, 'is-on');
            nodes.ctx.classList.add('is-on');
          } else {
            nodes.ctx.classList.add('is-skip');
          }
        },
        function () {
          nodes.screen.classList.remove('is-busy');
          nodes.screen.classList.add('is-done');
          wire(readsContext ? 'out:ctx' : 'out:' + lane, 'is-out');
          nodes.reply.classList.add('is-on');
          tagEl.textContent = 'sample reply';
          replyEl.innerHTML = '<p>' + r.reply + '</p>';
          nextPill.innerHTML = r.next + ' &rarr;';
          whyText.innerHTML = r.why;
        }
      ];
      var step = reduceMotion ? 0 : 420;
      steps.forEach(function (fn, i) { timers.push(setTimeout(fn, i * step)); });
    }

    function select(i) {
      $$(asks, '.og-ask').forEach(function (x, n) { x.setAttribute('aria-pressed', String(n === i)); });
      run(PRESETS[i][0], PRESETS[i][1]);
    }

    // Until someone picks a message, cycle through three contrasting outcomes: a
    // normal skill, a guardrail, and the safety screen. A click hands over control
    // for good. The cycle waits while hovered or off screen; under reduced motion
    // it shows the first example, still.
    var hint = $(orc, '.og-hint');
    var hintText = hint.textContent;
    var AUTO = [0, 3, 6];
    var HOLD = 7000;
    var auto = !reduceMotion;

    asks.addEventListener('click', function (e) {
      var b = e.target.closest('[data-p]');
      if (!b) return;
      auto = false;
      hint.textContent = hintText;
      select(+b.getAttribute('data-p'));
    });

    if (!auto) { select(AUTO[0]); return; }
    hint.textContent = 'Playing a few examples. Pick a message to try one yourself.';
    var autoIdx = -1, elapsed = HOLD, hovered = false, onScreen = !('IntersectionObserver' in window);
    var cycle = setInterval(function () {
      if (!auto) { clearInterval(cycle); return; }
      if (hovered || !onScreen) return;
      elapsed += 250;
      if (elapsed < HOLD) return;
      elapsed = 0;
      autoIdx = (autoIdx + 1) % AUTO.length;
      select(AUTO[autoIdx]);
    }, 250);
    orc.addEventListener('mouseenter', function () { hovered = true; });
    orc.addEventListener('mouseleave', function () { hovered = false; });
    orc.addEventListener('focusin', function () { hovered = true; });
    orc.addEventListener('focusout', function () { hovered = false; });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { onScreen = en[0].isIntersecting; }, { threshold: 0.4 }).observe(orc);
    }
  })();

  /* ================================================================
     2. Builder-critic loop (Telby)
     A looping, scripted run of the real loop for one icon: request, plan,
     approval, round 1 build, a failing critique, round 2 correction, a passing
     critique, the result. Tool names, the critic's pass/fail-with-feedback verdict
     and the panel's status lines are the ones the app uses. Pauses on hover and
     off screen; shows the finished run, still, under reduced motion.
     ================================================================ */
  var tl = document.querySelector('[data-lw="loop"]');
  if (tl) (function () {
    var thread = $(tl, '.ts-thread');
    var raster = $(tl, '.ts-raster');
    var rasterCanvas = $(raster, 'canvas');
    var shapes = {};
    $$(tl, '[data-shape]').forEach(function (s) { shapes[s.getAttribute('data-shape')] = s; });
    var ORDER = ['body', 'lip', 'clapper', 'dot'];
    // Round 1 leaves the clapper hanging and the dot overlapping the dome; round 2 fixes both.
    var WRONG = { clapper: [0, 1.5], dot: [-1, 1] };

    function place(off) {
      ['clapper', 'dot'].forEach(function (k) {
        var d = off ? WRONG[k] : [0, 0];
        shapes[k].style.transform = 'translate(' + d[0] + 'px,' + d[1] + 'px)';
      });
    }
    function rasterize(off) {
      // The current geometry drawn at 24x24: what the critic actually receives.
      var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">' +
        '<g fill="none" stroke="#16202b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M6 16v-5.5a6 6 0 0 1 12 0V16"/><line x1="4" y1="16" x2="20" y2="16"/>' +
        '<path transform="translate(0 ' + (off ? 1.5 : 0) + ')" d="M10 17a2 2 0 0 0 4 0"/></g>' +
        '<circle cx="' + (off ? 17.5 : 18.5) + '" cy="' + (off ? 5.5 : 4.5) + '" r="2.5" fill="#2a4be0" stroke="#fff" stroke-width="1.5"/></svg>';
      var img = new Image();
      img.onload = function () {
        var ctx = rasterCanvas.getContext('2d');
        ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, 24, 24); ctx.drawImage(img, 0, 0, 24, 24);
      };
      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    }
    function add(html) { thread.insertAdjacentHTML('beforeend', html); return thread.lastElementChild; }
    function call(row, name) { row.insertAdjacentHTML('beforeend', '<span class="ts-call">' + name + '</span>'); }
    var thumb = '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="#16202b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 16v-5.5a6 6 0 0 1 12 0V16"/><line x1="4" y1="16" x2="20" y2="16"/><path d="M10 17a2 2 0 0 0 4 0"/></g><circle cx="18.5" cy="4.5" r="2.5" fill="#2a4be0" stroke="#fff" stroke-width="1.5"/></svg>';
    var plan = null, r1 = null, r2 = null;

    // [time in ms, action]. One pass is about 10 seconds.
    var SCRIPT = [
      [0, function () {
        thread.classList.remove('is-fading'); thread.innerHTML = '';
        // Hide and reposition without animating, so nothing slides while it clears.
        ORDER.forEach(function (k) { shapes[k].classList.add('is-reset'); shapes[k].classList.remove('is-in'); });
        place(true); raster.classList.remove('is-in');
        void tl.offsetWidth;
        ORDER.forEach(function (k) { shapes[k].classList.remove('is-reset'); });
        add('<div class="ts-prompt">Create a bell icon with a notification dot.</div>');
      }],
      [700, function () {
        plan = add('<div class="ts-plan"><div class="ts-plan-h"><span>Plan &middot; 4 steps</span></div><ol>' +
          '<li>Bell body: a path, dome at y 4.5<span class="ts-chip">stroke.normal</span></li>' +
          '<li>Lip: a line across y 16</li>' +
          '<li>Clapper: an arc hanging from the lip</li>' +
          '<li>Dot: a circle at (18.5, 4.5)<span class="ts-chip">color.spot</span></li></ol></div>');
      }],
      [1900, function () { $(plan, '.ts-plan-h').insertAdjacentHTML('beforeend', '<em>Plan approved</em>'); }],
      [2400, function () { r1 = add('<div class="ts-round"><span class="ts-round-h">Round 1</span></div>'); }],
      [2600, function () { call(r1, 'addPath'); shapes.body.classList.add('is-in'); }],
      [2850, function () { call(r1, 'addLine'); shapes.lip.classList.add('is-in'); }],
      [3100, function () { call(r1, 'addPath'); shapes.clapper.classList.add('is-in'); }],
      [3350, function () { call(r1, 'addEllipse'); shapes.dot.classList.add('is-in'); }],
      [3900, function () { rasterize(true); raster.classList.add('is-in'); }],
      [4500, function () { add('<p class="ts-critique">critic: The clapper floats below the lip; move it up 1.5. The dot overlaps the dome; move it right 1, up 1.</p>'); }],
      [6000, function () { raster.classList.remove('is-in'); r2 = add('<div class="ts-round"><span class="ts-round-h">Round 2</span></div>'); call(r2, 'getScene'); }],
      [6300, function () { call(r2, 'move'); shapes.clapper.style.transform = 'translate(0,0)'; }],
      [6600, function () { call(r2, 'move'); shapes.dot.style.transform = 'translate(0,0)'; }],
      [7100, function () { rasterize(false); raster.classList.add('is-in'); }],
      [7600, function () { add('<p class="ts-critique is-ok">&#10003; critic satisfied</p>'); }],
      [8200, function () { raster.classList.remove('is-in'); add('<div class="ts-result">' + thumb + '<div><b>bell</b><small>&#10003; Rendered to canvas</small></div></div>'); }],
      [10200, function () { thread.classList.add('is-fading'); }]
    ];
    // One pass is about 10 seconds; the still frame is the finished run.
    play(tl, SCRIPT, 10700, 10200);
  })();

  /* ================================================================
     3. Token cascade (Telby)
     Tokens feed semantic roles, roles feed every icon. Each step changes one
     thing at the top (a role's mapping, a swatch, the stroke token) and the
     set restyles in a ripple. The CSS does the cascade; this only flips the
     variables and flashes the row that changed.
     ================================================================ */
  var tk = document.querySelector('[data-lw="tokens"]');
  if (tk) (function () {
    var cap = $(tk, '[data-cap]');
    var accentName = $(tk, '[data-accent] span');
    var spotVal = $(tk, '[data-val]');
    var strokeNum = $(tk, '[data-num]');
    var SPOT = '#2a4be0', SPOT_2 = '#0f9d8a';

    function hit(el) { el.classList.remove('is-hit'); void el.offsetWidth; el.classList.add('is-hit'); }
    function say(text) { cap.classList.remove('is-out'); cap.textContent = text; }
    function row(sel) { return $(tk, sel); }

    var SCRIPT = [
      [0, function () {
        // Back to the starting state without animating the way back.
        tk.classList.add('is-reset');
        tk.classList.remove('is-duo');
        tk.style.setProperty('--tk-spot', SPOT);
        tk.style.setProperty('--tk-stroke', '2');
        accentName.textContent = 'primary';
        spotVal.textContent = SPOT;
        strokeNum.textContent = '2';
        void tk.offsetWidth;
        tk.classList.remove('is-reset');
        say('Roles map each part of an icon to a token');
        hit(row('[data-role="default"]')); hit(row('[data-role="accent"]'));
      }],
      [2400, function () {
        say('Switch to duo: the accent role re-points to spot');
        tk.classList.add('is-duo');
        accentName.textContent = 'spot';
        hit(row('[data-role="accent"]'));
      }],
      [5200, function () {
        say('Recolor the whole set from one swatch');
        tk.style.setProperty('--tk-spot', SPOT_2);
        spotVal.textContent = SPOT_2;
        hit(row('[data-tok="spot"]'));
      }],
      [8000, function () {
        say('Stroke weight is a shared token too');
        tk.style.setProperty('--tk-stroke', '1.5');
        strokeNum.textContent = '1.5';
        hit(row('[data-tok="stroke"]'));
      }],
      [11200, function () { cap.classList.add('is-out'); }]
    ];
    play(tk, SCRIPT, 12000, 11200);
  })();

  /* ================================================================
     4. Agent purchase (VectorAgent)
     One basket, start to finish: search (free), ask for six icons, a 402
     that prices the basket and returns free watermarked previews, one signed
     transfer, the wait for a ledger close, the icons released with the
     transaction that bought them, and the receipt recorded. The steps and
     the $0.014 basket match the live site; the ledger wait is shortened.
     ================================================================ */
  var va = document.querySelector('[data-lw="va"]');
  if (va) (function () {
    var log = $(va, '.va-log');
    var tiles = $$(va, '.va-tile');
    var total = $(va, '[data-total]');
    var agent = $(va, '[data-agent]');
    var vault = $(va, '[data-vault]');
    var close = $(va, '.va-close');
    var closeText = $(va, '[data-close]');

    function line(who, html, cls) {
      log.insertAdjacentHTML('beforeend', '<div class="va-line' + (cls ? ' ' + cls : '') + '" data-who="' + who + '"><span class="va-who">' + who + '</span><span>' + html + '</span></div>');
    }
    function tileState(fn) { tiles.forEach(function (t) { fn(t, t.getAttribute('data-tier')); }); }
    // The log-only version (a card cover) has no basket or ledger panel, so
    // every write to those is optional.
    function set(el, html, cls) { if (el) { el.innerHTML = html; el.className = cls || ''; } }
    function closeState(cls, text) { if (close) { close.className = 'va-close' + (cls ? ' ' + cls : ''); closeText.textContent = text; } }

    var SCRIPT = [
      [0, function () {
        log.classList.remove('is-fading'); log.innerHTML = '';
        tileState(function (t) { t.className = 'va-tile'; });
        set(total, '$0.000');
        set(agent, '&middot;');
        set(vault, '&middot;');
        closeState('', 'ledger idle');
        line('agent', '<b>search_vector_icons</b>("dashboard status")');
      }],
      [800, function () { line('store', '12 matches &middot; search is free'); }],
      [1600, function () {
        line('agent', '<b>fetch_vector_icons</b>([cloud-sync, vault-lock, deploy, bell, search, calendar])');
        tileState(function (t) { t.classList.add('is-queued'); });
      }],
      [2700, function () {
        line('store', '<b>402 Payment Required</b> &middot; $0.014 &middot; 3 of 6 free, previews free', 'is-402');
        tileState(function (t, tier) { t.classList.remove('is-queued'); t.classList.add(tier === 'free' ? 'is-free' : 'is-preview'); });
        set(total, '$0.014');
      }],
      [3900, function () { line('agent', 'signs one USDC transfer &middot; <b>0.014</b> &rarr; VAULT'); }],
      [4600, function () {
        line('ledger', 'waiting for the ledger to close (about 5s on testnet)');
        closeState('is-waiting', 'waiting for ledger close…');
      }],
      [7400, function () {
        closeState('is-closed', 'ledger closed');
        line('ledger', '<b>&#10003; settled</b> &middot; AGENT &rarr; VAULT', 'is-ok');
        set(agent, '−0.014 USDC', 'is-minus');
        set(vault, '+0.014 USDC', 'is-plus');
      }],
      [8000, function () {
        line('store', '6 SVGs released &middot; each carries <b>data-va-tx</b>');
        tileState(function (t) { t.classList.remove('is-preview', 'is-free'); t.classList.add('is-in'); });
      }],
      [9000, function () { line('ledger', '<b>&#10003; receipt recorded</b> &middot; hash of the icon list', 'is-ok'); }],
      [12000, function () { log.classList.add('is-fading'); }]
    ];
    // One pass is about 12.5 seconds; the still frame is the finished purchase.
    play(va, SCRIPT, 12600, 12000);
  })();

  /* ================================================================
     5. Purchase flow diagram (VectorAgent)
     Steps through the six stages on its own. Each lights its nodes, edge and
     badge, and sends a glowing packet along the edge's real geometry, the way
     the live demo traces a purchase. The ledger wait keeps the packet
     circling. Hovering or focusing a step shows it and holds there; leaving
     resumes the cycle. Off screen it waits; under reduced motion it shows
     step 1 with no packet.
     ================================================================ */
  var vf = document.querySelector('[data-lw="vaflow"]');
  if (vf) (function () {
    var edges = {}, nodes = {}, badges = {};
    $$(vf, '[data-e]').forEach(function (e) { edges[e.getAttribute('data-e')] = e; });
    $$(vf, '[data-n]').forEach(function (n) { nodes[n.getAttribute('data-n')] = n; });
    $$(vf, '[data-b]').forEach(function (b) { badges[b.getAttribute('data-b')] = b; });
    var buttons = $$(vf, '[data-s]');
    var halo = $(vf, '.vf-halo'), core = $(vf, '.vf-core');

    // edge, nodes, direction, and whether money is moving. "bounce" goes out
    // and back (a lookup); "loop" keeps circling (a wait).
    var STEPS = [
      { edge: 'agent-va', nodes: ['agent', 'va'] },
      { edge: 'va-db', nodes: ['va', 'db'], bounce: true },
      { edge: 'agent-chain', nodes: ['agent', 'chain'], pay: true },
      { edge: 'va-chain', nodes: ['va', 'chain'], pay: true, reverse: true, loop: true },
      { edge: 'agent-va', nodes: ['agent', 'va'], reverse: true },
      { edge: 'va-chain', nodes: ['va', 'chain'] }
    ];
    var HOLD = 3000;
    var current = -1, raf = null, flyTimer = null;

    function fly(path, reverse, pay, ms, done) {
      cancelAnimationFrame(raf);
      var len = path.getTotalLength();
      halo.setAttribute('fill', pay ? '#10B981' : '#06B6D4');
      core.setAttribute('fill', pay ? '#D1FAE5' : '#CFFAFE');
      vf.classList.add('is-flying');
      var begin = performance.now();
      (function frame(now) {
        var k = Math.min(1, (now - begin) / ms);
        var p = path.getPointAtLength((reverse ? 1 - k : k) * len);
        halo.setAttribute('cx', p.x); halo.setAttribute('cy', p.y);
        core.setAttribute('cx', p.x); core.setAttribute('cy', p.y);
        if (k < 1) raf = requestAnimationFrame(frame);
        else if (done) done();
        else vf.classList.remove('is-flying');
      })(begin);
    }

    function show(i) {
      if (i === current) return;
      current = i;
      clearTimeout(flyTimer);
      var s = STEPS[i];
      Object.keys(nodes).forEach(function (k) {
        var on = s.nodes.indexOf(k) > -1;
        nodes[k].classList.toggle('on', on);
        nodes[k].classList.toggle('pay', on && !!s.pay);
      });
      Object.keys(edges).forEach(function (k) {
        edges[k].classList.toggle('hot', k === s.edge);
        edges[k].classList.toggle('pay', k === s.edge && !!s.pay);
      });
      Object.keys(badges).forEach(function (k) {
        badges[k].classList.toggle('on', +k === i + 1);
        badges[k].classList.toggle('pay', +k === i + 1 && !!s.pay);
      });
      buttons.forEach(function (b, n) { b.classList.toggle('is-on', n === i); });

      if (reduceMotion) return;
      var path = edges[s.edge];
      var ms = path.getTotalLength() > 150 ? 1100 : 650;
      if (s.loop) {
        (function again() {
          fly(path, s.reverse, s.pay, ms, function () { flyTimer = setTimeout(again, 120); });
        })();
      } else if (s.bounce) {
        fly(path, false, s.pay, ms, function () { fly(path, true, s.pay, ms); });
      } else {
        fly(path, s.reverse, s.pay, ms);
      }
    }

    show(0);
    if (reduceMotion) return;

    // Advance on a timer, but only while on screen and not held by the visitor.
    var held = false, onScreen = !('IntersectionObserver' in window), elapsed = 0;
    setInterval(function () {
      if (held || !onScreen) return;
      elapsed += 250;
      if (elapsed < HOLD) return;
      elapsed = 0;
      show((current + 1) % STEPS.length);
    }, 250);

    buttons.forEach(function (b, n) {
      function pick() { held = true; elapsed = 0; show(n); }
      b.addEventListener('mouseenter', pick);
      b.addEventListener('focus', pick);
      b.addEventListener('click', pick);
    });
    var list = $(vf, '.vf-steps');
    list.addEventListener('mouseleave', function () { held = false; });
    list.addEventListener('focusout', function (e) { if (!list.contains(e.relatedTarget)) held = false; });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { onScreen = en[0].isIntersecting; }, { threshold: 0.3 }).observe(vf);
    }
  })();
})();
