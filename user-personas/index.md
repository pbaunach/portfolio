---
title: "The Human Side of Acquisition: Frederick & Mindbody"
layout: case-study
---

<section class="case-study-section case-study-intro case-study-intro--hero case-study-intro--theme-personas case-study-intro--title-only">
  <div class="case-study-hero-bg parallax-hero-bg" aria-hidden="true"></div>
  <div class="case-study-hero-dots parallax-hero-dots" aria-hidden="true"></div>
  <div class="case-study-section-inner">
    <h1 class="case-study-title">The Human Side of Acquisition: Frederick & Mindbody</h1>
    <!--
    <div class="case-study-hero-dashboard">
      <img src="{{ '/assets/img/mindbody-personas/persona-lifestyle-liv.png' | relative_url }}" alt="Persona: Liv">
    </div>
    -->
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
        <h2 class="brand-guidelines-tab-title">Frederick Personas</h2>
        <p>These personas were the result of our first deep dive into the hearts and minds of small business owners. By facilitating collaborative sessions with key stakeholders, I helped define the motivations and pain points that would eventually drive our entire product roadmap and brand voice.</p>
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
        <h2 class="brand-guidelines-tab-title">Mindbody Personas</h2>
        <p>Following the acquisition, I led the effort to adapt our existing research to fit a much broader and more complex ecosystem. These evolved personas served as a critical bridge, allowing the new organization to maintain a deep connection with our core users while scaling to meet the needs of a global platform.</p>
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

<section id="my-role" class="case-study-section case-study-intro case-study-intro--role-only">
  <div class="case-study-section-inner">
    <h2 class="case-study-title">My Role</h2>
    <div class="case-study-callout case-study-callout--role">
      <p class="case-study-callout__role-title">Designer, Facilitator, and Stakeholder</p>
      <h3 class="case-study-callout__heading">My Contributions</h3>
      <ul>
        <li><strong>Strategic Research Leadership:</strong> Organized and moderated leadership offsites to transform raw customer data into actionable, empathy-driven user archetypes.</li>
        <li><strong>Knowledge Synthesis:</strong> Translated qualitative session insights into the first iteration of our persona framework, creating a shared language for the entire organization.</li>
        <li><strong>Acquisition Integration:</strong> Spearheaded the evolution of our original research to ensure our user insights remained relevant and valuable within a new, larger corporate ecosystem.</li>
      </ul>
    </div>
  </div>
</section>
