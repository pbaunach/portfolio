(function () {
  'use strict';

  var openBtn = document.querySelector('.js-screens-carousel-open');
  var modal = document.getElementById('screens-carousel-modal');
  if (!openBtn || !modal) return;

  var backdrop = modal.querySelector('.screens-carousel-backdrop');
  var closeBtn = modal.querySelector('.screens-carousel-close');
  var prevBtn = modal.querySelector('.screens-carousel-prev');
  var nextBtn = modal.querySelector('.screens-carousel-next');
  var slidesContainer = modal.querySelector('.screens-carousel-slides');
  var counterEl = modal.querySelector('.screens-carousel-counter');

  var slides = [];
  var currentIndex = 0;
  var lastFocused = null;

  function getScreenImages() {
    var imgs = document.querySelectorAll('.case-study-screenshot img');
    var list = [];
    imgs.forEach(function (img) {
      var src = img.src || img.getAttribute('src');
      if (!src || src.indexOf('orchard-hero') !== -1) return;
      list.push({ src: src, alt: img.alt || 'Screenshot' });
    });
    return list;
  }

  function buildSlides() {
    slides = getScreenImages();
    slidesContainer.innerHTML = '';
    if (slides.length === 0) return;
    slides.forEach(function (item, i) {
      var slide = document.createElement('div');
      slide.className = 'screens-carousel-slide' + (i === 0 ? ' is-current' : '');
      slide.setAttribute('role', 'listitem');
      slide.setAttribute('aria-hidden', i !== 0);
      var img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt;
      img.className = 'screens-carousel-slide-img';
      slide.appendChild(img);
      slidesContainer.appendChild(slide);
    });
    currentIndex = 0;
    updateCounter();
  }

  function showSlide(index) {
    var total = slides.length;
    if (total === 0) return;
    currentIndex = ((index % total) + total) % total;
    var slideEls = slidesContainer.querySelectorAll('.screens-carousel-slide');
    slideEls.forEach(function (el, i) {
      var isCurrent = i === currentIndex;
      el.classList.toggle('is-current', isCurrent);
      el.setAttribute('aria-hidden', !isCurrent);
    });
    updateCounter();
  }

  function updateCounter() {
    if (!counterEl || slides.length === 0) return;
    counterEl.textContent = (currentIndex + 1) + ' / ' + slides.length;
  }

  function openModal() {
    buildSlides();
    if (slides.length === 0) return;
    lastFocused = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (prevBtn) prevBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused && lastFocused.focus) lastFocused.focus();
    lastFocused = null;
  }

  function onKeydown(e) {
    if (!modal.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      closeModal();
      return;
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      showSlide(currentIndex - 1);
      return;
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      showSlide(currentIndex + 1);
      return;
    }
  }

  openBtn.addEventListener('click', function () {
    openModal();
  });

  if (backdrop) backdrop.addEventListener('click', closeModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (prevBtn) prevBtn.addEventListener('click', function () { showSlide(currentIndex - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { showSlide(currentIndex + 1); });

  document.addEventListener('keydown', onKeydown);
})();
