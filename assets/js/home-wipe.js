/* Home hero before/after wipe. Idles with a slow CSS sweep until someone
   touches it, then follows the pointer for good. Works as a slider from the
   keyboard too. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-wipe]').forEach(function (el) {
    var value = 50;
    var dragging = false;

    function set(v) {
      value = Math.max(0, Math.min(100, v));
      el.style.setProperty('--x', value + '%');
      el.setAttribute('aria-valuenow', String(Math.round(value)));
    }
    function stopIdle() { el.classList.remove('is-idle'); }
    function fromPointer(e) {
      var r = el.getBoundingClientRect();
      set(((e.clientX - r.left) / r.width) * 100);
    }

    set(50);
    if (!reduceMotion) el.classList.add('is-idle');

    el.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      e.preventDefault();
      stopIdle();
      dragging = true;
      el.focus({ preventScroll: true });
      fromPointer(e);
    });
    window.addEventListener('pointermove', function (e) { if (dragging) fromPointer(e); });
    window.addEventListener('pointerup', function () { dragging = false; });
    // A vertical swipe on touch scrolls the page instead (touch-action: pan-y).
    window.addEventListener('pointercancel', function () { dragging = false; });

    el.addEventListener('keydown', function (e) {
      var step = { ArrowLeft: -5, ArrowDown: -5, ArrowRight: 5, ArrowUp: 5 }[e.key];
      if (e.key === 'Home') step = -100;
      if (e.key === 'End') step = 100;
      if (step === undefined) return;
      e.preventDefault();
      stopIdle();
      set(value + step);
    });
  });
})();
