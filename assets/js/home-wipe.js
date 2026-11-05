/* Home hero before/after wipe. Rests one-third open and follows the pointer
   while dragged. Works as a slider from the keyboard too. */
(function () {
  'use strict';

  var START = 33;

  document.querySelectorAll('[data-wipe]').forEach(function (el) {
    var value = START;
    var dragging = false;

    function set(v) {
      value = Math.max(0, Math.min(100, v));
      el.style.setProperty('--x', value + '%');
      el.setAttribute('aria-valuenow', String(Math.round(value)));
    }
    function fromPointer(e) {
      var r = el.getBoundingClientRect();
      set(((e.clientX - r.left) / r.width) * 100);
    }

    set(START);

    el.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      e.preventDefault();
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
      set(value + step);
    });
  });
})();
