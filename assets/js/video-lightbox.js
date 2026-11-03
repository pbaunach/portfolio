(function () {
  'use strict';

  // Plays a side-project walkthrough in a lightbox. Each .side-card-video is a plain
  // link to the video file, so without JS (or on a modified click) it still opens the
  // video in its own tab; a normal click opens it here instead. The source is attached
  // only on open and dropped on close, so the page never downloads a video nobody
  // asked to watch, and closing stops playback for good rather than leaving it paused
  // in the background.
  var lightbox = document.getElementById('video-lightbox');
  var triggers = document.querySelectorAll('.side-card-video');

  if (!lightbox || triggers.length === 0) return;

  var backdrop = lightbox.querySelector('.lightbox-backdrop');
  var closeBtn = lightbox.querySelector('.lightbox-close');
  var video = lightbox.querySelector('.lightbox-video');
  var lastFocused = null;

  if (!video) return;

  function openLightbox(trigger) {
    var poster = trigger.querySelector('.side-card-img');
    var source = document.createElement('source');
    source.src = trigger.href;
    if (trigger.dataset.videoType) source.type = trigger.dataset.videoType;

    video.replaceChildren(source);
    if (poster) video.poster = poster.src;
    // Sizes the frame to the recording before its metadata arrives, so it never jumps.
    video.style.setProperty('--video-aspect', trigger.dataset.videoAspect || '');
    video.setAttribute('aria-label', trigger.dataset.videoLabel || 'Walkthrough video');
    lightbox.setAttribute('aria-label', trigger.dataset.videoLabel || 'Walkthrough video');
    video.load();

    lastFocused = trigger;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();

    // The click counts as the user gesture, so play() is allowed. It rejects only if
    // the source fails to load; the native controls show that state.
    var attempt = video.play();
    if (attempt && attempt.catch) attempt.catch(function () {});
  }

  function closeLightbox() {
    if (!lightbox.classList.contains('is-open')) return;
    video.pause();
    video.replaceChildren();
    video.removeAttribute('poster');
    video.load();
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused && lastFocused.focus) lastFocused.focus();
    lastFocused = null;
  }

  triggers.forEach(function (trigger) {
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      openLightbox(trigger);
    });
  });

  if (backdrop) backdrop.addEventListener('click', closeLightbox);
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
      e.preventDefault();
      closeLightbox();
    }
  });
})();
