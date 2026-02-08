---
title: "User Personas"
layout: case-study
---

<section class="case-study-section case-study-intro">
  <div class="case-study-section-inner">
    <h1 class="case-study-title">User Personas</h1>
  </div>
</section>

<section class="major-section brand-guidelines-tabs-section">
  <div class="major-section-inner">
    <div class="brand-guidelines-tabs">
      <div class="tabs-header" role="tablist" aria-label="User personas sections">
        <button type="button" class="tab-btn active" role="tab" aria-selected="true" aria-controls="panel-frederick" id="tab-frederick" data-tab="frederick">Frederick</button>
        <button type="button" class="tab-btn" role="tab" aria-selected="false" aria-controls="panel-mindbody" id="tab-mindbody" data-tab="mindbody">Mindbody</button>
      </div>
      <div id="panel-frederick" class="tab-panel active" role="tabpanel" aria-labelledby="tab-frederick">
        <div class="brand-guidelines-gallery">
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-personas/Asset 1.png' | relative_url }}" alt="Frederick persona 1"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-personas/Asset 2.png' | relative_url }}" alt="Frederick persona 2"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-personas/Asset 3.png' | relative_url }}" alt="Frederick persona 3"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-personas/Asset 4.png' | relative_url }}" alt="Frederick persona 4"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-personas/Asset 5.png' | relative_url }}" alt="Frederick persona 5"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-personas/Asset 6.png' | relative_url }}" alt="Frederick persona 6"></figure>
        </div>
      </div>
      <div id="panel-mindbody" class="tab-panel" role="tabpanel" aria-labelledby="tab-mindbody" hidden>
        <div class="brand-guidelines-gallery">
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/mindbody-personas/primary-personas.png' | relative_url }}" alt="Mindbody primary personas"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/mindbody-personas/persona-thriving-thea.png' | relative_url }}" alt="Thea"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/mindbody-personas/persona-lifestyle-liv.png' | relative_url }}" alt="Liv"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/mindbody-personas/persona-ambitious-adrian.png' | relative_url }}" alt="Adrian"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/mindbody-personas/persona-emerging-ellie.png' | relative_url }}" alt="Ellie"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/mindbody-personas/persona-startup-sam.png' | relative_url }}" alt="Sam"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/mindbody-personas/persona-solo-steve.png' | relative_url }}" alt="Steve"></figure>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
(function() {
  var tabs = document.querySelectorAll('.brand-guidelines-tabs .tab-btn');
  var panels = document.querySelectorAll('.brand-guidelines-tabs .tab-panel');
  tabs.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var target = this.getAttribute('data-tab');
      tabs.forEach(function(b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      panels.forEach(function(p) {
        var isTarget = p.id === 'panel-' + target;
        p.classList.toggle('active', isTarget);
        p.hidden = !isTarget;
        var tabId = document.getElementById('tab-' + target);
        if (tabId) p.setAttribute('aria-labelledby', tabId.id);
      });
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');
    });
  });
})();
</script>
