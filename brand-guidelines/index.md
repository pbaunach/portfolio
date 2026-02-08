---
title: "Brand Guidelines"
layout: case-study
---

<section class="case-study-section case-study-intro">
  <div class="case-study-section-inner">
    <h1 class="case-study-title">Brand Guidelines</h1>
  </div>
</section>

<section class="major-section brand-guidelines-tabs-section">
  <div class="major-section-inner">
    <div class="brand-guidelines-tabs">
      <div class="tabs-header" role="tablist" aria-label="Brand guidelines sections">
        <button type="button" class="tab-btn active" role="tab" aria-selected="true" aria-controls="panel-frederick" id="tab-frederick" data-tab="frederick">Frederick</button>
        <button type="button" class="tab-btn" role="tab" aria-selected="false" aria-controls="panel-aspireship" id="tab-aspireship" data-tab="aspireship">Aspireship</button>
      </div>
      <div id="panel-frederick" class="tab-panel active" role="tabpanel" aria-labelledby="tab-frederick">
        <div class="brand-guidelines-pdf-cta">
          <p>Here is a PDF of the guidelines if you prefer to view it that way.</p>
          <a href="{{ '/assets/pdf/Frederick-Brand-Guidelines.pdf' | relative_url }}" class="button button-primary" target="_blank" rel="noopener noreferrer">View PDF</a>
        </div>
        <div class="brand-guidelines-gallery">
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 1.png' | relative_url }}" alt="Frederick brand guidelines 1"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 2.png' | relative_url }}" alt="Frederick brand guidelines 2"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 3.png' | relative_url }}" alt="Frederick brand guidelines 3"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 4.png' | relative_url }}" alt="Frederick brand guidelines 4"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 5.png' | relative_url }}" alt="Frederick brand guidelines 5"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 6.png' | relative_url }}" alt="Frederick brand guidelines 6"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 7.png' | relative_url }}" alt="Frederick brand guidelines 7"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 8.png' | relative_url }}" alt="Frederick brand guidelines 8"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 9.png' | relative_url }}" alt="Frederick brand guidelines 9"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 10.png' | relative_url }}" alt="Frederick brand guidelines 10"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 11.png' | relative_url }}" alt="Frederick brand guidelines 11"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 12.png' | relative_url }}" alt="Frederick brand guidelines 12"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 13.png' | relative_url }}" alt="Frederick brand guidelines 13"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 14.png' | relative_url }}" alt="Frederick brand guidelines 14"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 15.png' | relative_url }}" alt="Frederick brand guidelines 15"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 16.png' | relative_url }}" alt="Frederick brand guidelines 16"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 17.png' | relative_url }}" alt="Frederick brand guidelines 17"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 18.png' | relative_url }}" alt="Frederick brand guidelines 18"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 19.png' | relative_url }}" alt="Frederick brand guidelines 19"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 20.png' | relative_url }}" alt="Frederick brand guidelines 20"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 21.png' | relative_url }}" alt="Frederick brand guidelines 21"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 22.png' | relative_url }}" alt="Frederick brand guidelines 22"></figure>
          <figure class="case-study-screenshot"><img src="{{ '/assets/img/frederick-brand-guidelines/Asset 23.png' | relative_url }}" alt="Frederick brand guidelines 23"></figure>
        </div>
      </div>
      <div id="panel-aspireship" class="tab-panel" role="tabpanel" aria-labelledby="tab-aspireship" hidden>
        <div class="subsection">
          <p>Aspireship brand guidelines content will be added here.</p>
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
        var panelId = p.id;
        var tabId = document.getElementById('tab-' + target);
        if (tabId) p.setAttribute('aria-labelledby', tabId.id);
      });
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');
    });
  });
})();
</script>
