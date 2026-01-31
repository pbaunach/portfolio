(function () {
  'use strict';

  var lightbox = document.getElementById('lightbox');
  var screenshots = document.querySelectorAll('.case-study-screenshot img');

  if (!lightbox || screenshots.length === 0) return;

  var backdrop = lightbox.querySelector('.lightbox-backdrop');
  var closeBtn = lightbox.querySelector('.lightbox-close');
  var img = lightbox.querySelector('.lightbox-img');
  var lastFocused = null;

  function openLightbox(src, alt, trigger) {
    lastFocused = trigger;
    img.src = src;
    img.alt = alt || 'Enlarged view';
    lightbox.scrollTop = 0;
    lightbox.scrollLeft = 0;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    img.src = '';
    img.alt = '';
    if (lastFocused && lastFocused.focus) lastFocused.focus();
    lastFocused = null;
  }

  function onKeydown(e) {
    if (e.key !== 'Escape' || !lightbox.classList.contains('is-open')) return;
    e.preventDefault();
    closeLightbox();
  }

  screenshots.forEach(function (screenshot) {
    var figure = screenshot.closest('.case-study-screenshot');
    if (!figure) return;

    figure.setAttribute('role', 'button');
    figure.setAttribute('tabindex', '0');
    figure.setAttribute('aria-label', 'View image full size');

    function handleOpen(e) {
      if (e.key && e.key !== 'Enter' && e.key !== ' ') return;
      if (e.key) e.preventDefault();
      openLightbox(screenshot.src, screenshot.alt, e.currentTarget);
    }

    figure.addEventListener('click', function (e) {
      if (e.target === closeBtn) return;
      e.preventDefault();
      openLightbox(screenshot.src, screenshot.alt, figure);
    });

    figure.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') handleOpen(e);
    });
  });

  if (backdrop) backdrop.addEventListener('click', closeLightbox);
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', onKeydown);
})();
