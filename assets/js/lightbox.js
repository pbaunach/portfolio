(function () {
  'use strict';

  var lightbox = document.getElementById('lightbox');
  var screenshotFigures = document.querySelectorAll('.case-study-screenshot');

  if (!lightbox || screenshotFigures.length === 0) return;

  var backdrop = lightbox.querySelector('.lightbox-backdrop');
  var closeBtn = lightbox.querySelector('.lightbox-close');
  var prevBtn = lightbox.querySelector('.lightbox-prev');
  var nextBtn = lightbox.querySelector('.lightbox-next');
  var imgWrap = lightbox.querySelector('.lightbox-img-wrap');
  var img = lightbox.querySelector('.lightbox-img');
  var counterEl = lightbox.querySelector('.lightbox-counter');

  var items = [];
  screenshotFigures.forEach(function (figure) {
    var im = figure.querySelector('img');
    if (im && im.src) {
      items.push({ src: im.src, alt: im.alt || 'Enlarged view', figure: figure });
    }
  });

  if (items.length === 0) return;

  var currentIndex = 0;
  var lastFocused = null;

  function setImage(index) {
    currentIndex = index;
    var item = items[currentIndex];
    img.src = item.src;
    img.alt = item.alt;
    lightbox.classList.remove('is-zoomed');
    updateNav();
    updateCounter();
  }

  function updateNav() {
    if (prevBtn) {
      prevBtn.classList.toggle('is-hidden', items.length <= 1 || currentIndex <= 0);
    }
    if (nextBtn) {
      nextBtn.classList.toggle('is-hidden', items.length <= 1 || currentIndex >= items.length - 1);
    }
  }

  function updateCounter() {
    if (!counterEl || items.length === 0) return;
    counterEl.textContent = (currentIndex + 1) + ' / ' + items.length;
  }

  function openLightbox(index, trigger) {
    var i = Math.max(0, Math.min(index, items.length - 1));
    lastFocused = trigger;
    lightbox.scrollTop = 0;
    lightbox.scrollLeft = 0;
    setImage(i);
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open', 'is-zoomed');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    img.src = '';
    img.alt = '';
    if (lastFocused && lastFocused.focus) lastFocused.focus();
    lastFocused = null;
  }

  function goPrev() {
    if (currentIndex <= 0) return;
    setImage(currentIndex - 1);
  }

  function goNext() {
    if (currentIndex >= items.length - 1) return;
    setImage(currentIndex + 1);
  }

  function onKeydown(e) {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      closeLightbox();
      return;
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrev();
      return;
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNext();
      return;
    }
  }

  items.forEach(function (item, index) {
    var figure = item.figure;
    figure.setAttribute('role', 'button');
    figure.setAttribute('tabindex', '0');
    figure.setAttribute('aria-label', 'View image ' + (index + 1) + ' of ' + items.length);

    function handleOpen(e) {
      if (e.key && e.key !== 'Enter' && e.key !== ' ') return;
      if (e.key) e.preventDefault();
      openLightbox(index, figure);
    }

    figure.addEventListener('click', function (e) {
      e.preventDefault();
      openLightbox(index, figure);
    });

    figure.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') handleOpen(e);
    });
  });

  if (imgWrap) {
    imgWrap.addEventListener('click', function (e) {
      e.stopPropagation();
      lightbox.classList.toggle('is-zoomed');
    });
  }

  if (backdrop) backdrop.addEventListener('click', closeLightbox);
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', function (e) { e.preventDefault(); goPrev(); });
  if (nextBtn) nextBtn.addEventListener('click', function (e) { e.preventDefault(); goNext(); });
  document.addEventListener('keydown', onKeydown);
})();
