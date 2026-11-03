/* ============================================================
   Orchard v-next — deck navigation controller
   ------------------------------------------------------------
   Dependency-free replacement for the prototype's <deck-stage>.
   Responsibilities:
     - scale the fixed 1920x1080 canvas to fit the viewport,
       letterboxed on near-black (CSS handles the centering)
     - one slide visible at a time (cross-fade via CSS)
     - keyboard / click-half / touch-swipe navigation
     - current slide synced to the URL (?slide=N, 1-indexed) so
       reloads and deep links land on the right slide
     - nav chrome (arrows + dots) that fades out when idle
     - reduced-motion + screen-reader announcements
   Slide markup lives in index.html; this file never generates it.
   ============================================================ */
(function () {
  'use strict';

  var DESIGN_W = 1920;
  var DESIGN_H = 1080;
  var IDLE_MS = 2600;          // hide nav chrome after this much inactivity

  var deck   = document.getElementById('deck');
  var stage  = document.getElementById('stage');
  var canvas = document.getElementById('canvas');
  var nav    = document.getElementById('nav');
  var live   = document.getElementById('deck-live');
  var hint   = document.getElementById('deck-hint');
  var lightbox = document.getElementById('deck-lightbox');
  var lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  var lightboxOpen = false;
  if (!deck || !canvas) return;

  var slides = Array.prototype.slice.call(canvas.querySelectorAll('.deck-slide'));
  var total  = slides.length;
  var index  = 0;
  var idleTimer = null;

  // Precise pointing device (mouse/trackpad). When true we DON'T treat a
  // click on the stage as a navigation tap — desktop uses arrows/buttons.
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  // Anything the author may drop into a slide that should keep its own click
  // (links to the prototype, buttons, etc.) instead of advancing the deck.
  var INTERACTIVE = 'a[href],button,input,select,textarea,summary,label,' +
                    'video[controls],audio[controls],[role="button"],[onclick],' +
                    '[contenteditable]:not([contenteditable="false"])';

  /* ---- Scaling -------------------------------------------------------- */
  function fit() {
    var s = Math.min(window.innerWidth / DESIGN_W, window.innerHeight / DESIGN_H);
    canvas.style.transform = 'scale(' + s + ')';
  }

  /* ---- Build the dot indicators -------------------------------------- */
  var dots = [];
  (function buildDots() {
    var rail = nav && nav.querySelector('.deck-dots');
    if (!rail) return;
    for (var i = 0; i < total; i++) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'deck-dot';
      var label = slides[i].getAttribute('data-label') || ('Slide ' + (i + 1));
      b.setAttribute('aria-label', 'Go to slide ' + (i + 1) + ': ' + label);
      b.dataset.index = i;
      b.addEventListener('click', (function (n) {
        return function () { go(n); };
      })(i));
      rail.appendChild(b);
      dots.push(b);
    }
  })();

  /* ---- Navigation ----------------------------------------------------- */
  function go(n, opts) {
    opts = opts || {};
    n = Math.max(0, Math.min(total - 1, n));
    index = n;

    for (var i = 0; i < total; i++) {
      var active = i === n;
      var s = slides[i];
      if (active) s.setAttribute('data-deck-active', '');
      else s.removeAttribute('data-deck-active');
      s.setAttribute('aria-hidden', active ? 'false' : 'true');
      if (dots[i]) {
        dots[i].classList.toggle('is-active', active);
        if (active) dots[i].setAttribute('aria-current', 'true');
        else dots[i].removeAttribute('aria-current');
      }
    }

    if (!opts.silent) syncURL();
    announce();
    wake();
  }

  function next() { if (index < total - 1) go(index + 1); }
  function prev() { if (index > 0) go(index - 1); }

  /* ---- URL state (?slide=N, 1-indexed) ------------------------------- */
  function syncURL() {
    try {
      var url = new URL(window.location.href);
      url.searchParams.set('slide', String(index + 1));
      url.hash = '';
      history.replaceState({ slide: index }, '', url);
    } catch (e) { /* file:// or older browser — nav still works */ }
  }

  function readURL() {
    var n = NaN;
    try {
      var p = new URLSearchParams(window.location.search);
      if (p.has('slide')) n = parseInt(p.get('slide'), 10) - 1;
    } catch (e) {}
    if (isNaN(n)) {
      var m = (window.location.hash || '').match(/^#(\d+)$/); // tolerate #N
      if (m) n = parseInt(m[1], 10) - 1;
    }
    return (!isNaN(n) && n >= 0 && n < total) ? n : 0;
  }

  /* ---- Accessibility announce ---------------------------------------- */
  function announce() {
    if (!live) return;
    var label = slides[index].getAttribute('data-label') || '';
    live.textContent = 'Slide ' + (index + 1) + ' of ' + total +
                       (label ? ': ' + label : '');
  }

  /* ---- Idle fade of nav chrome --------------------------------------- */
  function wake() {
    deck.classList.remove('is-idle');
    if (idleTimer) clearTimeout(idleTimer);
    idleTimer = setTimeout(function () { deck.classList.add('is-idle'); }, IDLE_MS);
  }

  /* ---- Keyboard ------------------------------------------------------- */
  window.addEventListener('keydown', function (e) {
    if (lightboxOpen) { if (e.key === 'Escape') { e.preventDefault(); closeLightbox(); } return; }
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) return;
    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
      case 'Spacebar':
        e.preventDefault(); next(); break;
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault(); prev(); break;
      case 'Home':
        e.preventDefault(); go(0); break;
      case 'End':
        e.preventDefault(); go(total - 1); break;
      default:
        if (/^[1-9]$/.test(e.key)) {        // direct jump 1..9
          var n = parseInt(e.key, 10) - 1;
          if (n < total) { e.preventDefault(); go(n); }
        }
    }
  });

  /* ---- Click / tap navigation (touch + coarse pointers only) --------- */
  stage.addEventListener('click', function (e) {
    if (finePointer.matches) return;                    // desktop: ignore
    if (e.target.closest && e.target.closest(INTERACTIVE)) return; // let links work
    var rect = stage.getBoundingClientRect();
    if (e.clientX - rect.left < rect.width / 2) prev();
    else next();
  });

  /* ---- Touch swipe ---------------------------------------------------- */
  (function swipe() {
    var x0 = null, y0 = null;
    stage.addEventListener('touchstart', function (e) {
      if (e.touches.length !== 1) { x0 = null; return; }
      x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
    }, { passive: true });
    stage.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var t = e.changedTouches[0];
      var dx = t.clientX - x0, dy = t.clientY - y0;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.4) {
        if (dx < 0) next(); else prev();
      }
      x0 = y0 = null;
    }, { passive: true });
  })();

  /* ---- Wake on activity, refit on resize ----------------------------- */
  ['mousemove', 'pointerdown', 'touchstart'].forEach(function (ev) {
    window.addEventListener(ev, wake, { passive: true });
  });
  nav && nav.addEventListener('mouseenter', function () {
    deck.classList.remove('is-idle');
    if (idleTimer) clearTimeout(idleTimer);
  });

  var nextBtn = nav && nav.querySelector('.deck-next');
  var prevBtn = nav && nav.querySelector('.deck-prev');
  if (nextBtn) nextBtn.addEventListener('click', next);
  if (prevBtn) prevBtn.addEventListener('click', prev);

  window.addEventListener('resize', fit);
  if (window.visualViewport) window.visualViewport.addEventListener('resize', fit);
  window.addEventListener('popstate', function () { go(readURL(), { silent: true }); });

  // Dismiss the first-run hint once the user does anything.
  if (hint) {
    ['keydown', 'pointerdown', 'touchstart'].forEach(function (ev) {
      window.addEventListener(ev, function () { hint.classList.add('is-gone'); },
        { once: true, passive: true });
    });
  }

  /* ---- Lightbox: click any screenshot to view it full-size ------------ */
  function openLightbox(src, alt) {
    if (!lightbox) return;
    lightboxImg.src = src; lightboxImg.alt = alt || '';
    lightbox.classList.add('is-open');
    lightboxOpen = true;
    var btn = lightbox.querySelector('.deck-lightbox-close');
    if (btn) btn.focus();
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightboxOpen = false;
  }
  function setupLightbox() {
    if (!lightbox) return;
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || (e.target.closest && e.target.closest('.deck-lightbox-close'))) closeLightbox();
    });
    Array.prototype.forEach.call(canvas.querySelectorAll('.shot-frame, .shot img'), function (img) {
      img.classList.add('zoomable');
      img.setAttribute('role', 'button');
      img.setAttribute('tabindex', '0');
      img.setAttribute('aria-label', (img.alt || 'Screenshot') + ', click to expand');
      img.addEventListener('click', function (e) { e.stopPropagation(); openLightbox(img.currentSrc || img.src, img.alt); });
      img.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(img.currentSrc || img.src, img.alt); }
      });
    });
  }

  /* ---- Boot ----------------------------------------------------------- */
  fit();
  go(readURL(), { silent: true });
  deck.classList.remove('is-preboot'); // JS owns visibility now; drop the
                                       // fallback so only the active slide shows
  setupLightbox();
  wake();
  // Reveal once fonts settle so the first paint has real typography.
  function reveal() { deck.classList.add('is-ready'); }
  if (document.fonts && document.fonts.ready) {
    Promise.race([
      document.fonts.ready,
      new Promise(function (r) { setTimeout(r, 1500); })
    ]).then(reveal, reveal);
  } else { reveal(); }
})();
