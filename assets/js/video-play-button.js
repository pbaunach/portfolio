(function () {
  'use strict';

  // Wires the big play button on a .csb-hero-video. The button exists to say "this is
  // a video", so it shows only until the first play and is then removed for good. It
  // does not come back on pause: Chrome pauses a playing video the moment someone
  // presses the timeline, so a button that returned on every pause would flash up
  // mid-scrub. The overlay ignores the pointer, so the native controls work
  // underneath; only the button takes clicks. Without JS the button never appears and
  // the native controls are the only way to start the video.
  document.querySelectorAll('.csb-hero-video').forEach(function (figure) {
    var video = figure.querySelector('video');
    var overlay = figure.querySelector('.csb-hero-video-overlay');
    var button = figure.querySelector('.csb-hero-video-play');
    if (!video || !overlay || !button) return;

    // Playback can start from the button, the native controls, or a key press, so
    // listen for the video itself rather than for the button.
    video.addEventListener('play', function () { overlay.remove(); }, { once: true });

    button.addEventListener('click', function () {
      // play() rejects if the source fails to load; the native controls show that state.
      var attempt = video.play();
      if (attempt && attempt.catch) attempt.catch(function () {});
    });

    if (video.paused) figure.classList.add('has-play-button');
    else overlay.remove();
  });
})();
