(function () {
  'use strict';

  var nav = document.querySelector('.case-study-nav');
  if (!nav) return;

  var links = nav.querySelectorAll('a[href^="#"]');
  if (!links.length) return;

  var headerOffset = 100;
  var sections = [];

  links.forEach(function (link) {
    var id = link.getAttribute('href').slice(1);
    if (!id) return;
    var section = document.getElementById(id);
    if (section) sections.push({ id: id, link: link, section: section });
  });

  function setActive() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var current = null;

    // Near bottom of page: highlight last section (Prototype) so it can stay active without extra space
    if (sections.length && scrollTop >= scrollHeight - 120) {
      current = sections[sections.length - 1];
    } else {
      for (var i = 0; i < sections.length; i++) {
        var rect = sections[i].section.getBoundingClientRect();
        var top = rect.top + scrollTop;
        if (top <= scrollTop + headerOffset) {
          current = sections[i];
        }
      }
      if (!current && sections.length) {
        current = sections[0];
      }
    }

    sections.forEach(function (s) {
      s.link.classList.toggle('active', s === current);
    });
  }

  function onScroll() {
    requestAnimationFrame(setActive);
  }

  setActive();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
})();
