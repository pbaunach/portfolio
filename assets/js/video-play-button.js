(function () {
  'use strict';

  // Wires the big play button on a .csb-hero-video. The button shows whenever the
  // video is not playing (before the first play, when paused, after it ends) and
  // hides while it plays. The overlay ignores the pointer, so the native controls
  // keep working underneath; only the button takes clicks. Without JS the button
  // never appears and the native controls are the only way to start the video.
  document.querySelectorAll('.csb-hero-video').forEach(function (figure) {
    var video = figure.querySelector('video');
    var button = figure.querySelector('.csb-hero-video-play');
    if (!video || !button) return;

    function setPlaying(playing) {
      figure.classList.toggle('is-playing', playing);
    }

    video.addEventListener('play', function () { setPlaying(true); });
    video.addEventListener('pause', function () { setPlaying(false); });
    video.addEventListener('ended', function () { setPlaying(false); });

    button.addEventListener('click', function () {
      // play() rejects if the source fails to load; the native controls show that state.
      var attempt = video.play();
      if (attempt && attempt.catch) attempt.catch(function () {});
    });

    figure.classList.add('has-play-button');
    setPlaying(!video.paused);
  });
})();
