(function () {
  'use strict';

  var bg = document.querySelector('.parallax-hero-bg');
  var dots = document.querySelector('.parallax-hero-dots');
  if (!bg) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var maxOffset = 20;
  var dotsMultiplier = 1.35;
  var ease = 0.06;
  var mouseX = 0;
  var mouseY = 0;
  var currentX = 0;
  var currentY = 0;
  var rafId = null;

  function lerp() {
    currentX += (mouseX - currentX) * ease;
    currentY += (mouseY - currentY) * ease;
    var tx = Math.round(currentX * 10) / 10;
    var ty = Math.round(currentY * 10) / 10;
    bg.style.transform = 'translate(' + tx + 'px, ' + ty + 'px)';
    if (dots) {
      dots.style.transform = 'translate(' + (tx * dotsMultiplier) + 'px, ' + (ty * dotsMultiplier) + 'px)';
    }
    var settled = Math.abs(mouseX - currentX) < 0.2 && Math.abs(mouseY - currentY) < 0.2;
    if (!settled) rafId = requestAnimationFrame(lerp);
    else rafId = null;
  }

  function onMove(e) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var x = (e.clientX - w / 2) / (w / 2);
    var y = (e.clientY - h / 2) / (h / 2);
    mouseX = x * maxOffset;
    mouseY = y * maxOffset;
    if (rafId === null) rafId = requestAnimationFrame(lerp);
  }

  function onLeave() {
    mouseX = 0;
    mouseY = 0;
  }

  window.addEventListener('mousemove', onMove, { passive: true });
  window.addEventListener('mouseleave', onLeave, { passive: true });
})();
