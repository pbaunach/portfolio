(function () {
  'use strict';

  var mount = document.querySelector('.gh-chart-mount');
  if (!mount) return;

  var user = mount.getAttribute('data-username');
  if (!user) return;

  // Token-free proxy over GitHub's contributions calendar. GitHub's own GraphQL
  // API needs an authenticated request, which a static site has nowhere safe to
  // keep, so we read the same per-day counts from this public endpoint instead.
  var ENDPOINT = 'https://github-contributions-api.jogruber.de/v4/' +
    encodeURIComponent(user) + '?y=last';

  var DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Dates arrive as bare YYYY-MM-DD, which parses as UTC midnight. Everything
  // downstream reads UTC too, otherwise browsers west of Greenwich shift every
  // cell back a day.
  function parseDay(iso) {
    var d = new Date(iso + 'T00:00:00Z');
    return isNaN(d.getTime()) ? null : d;
  }

  function longDate(d) {
    return d.toLocaleDateString(undefined, {
      timeZone: 'UTC', weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
    });
  }

  function shortDate(d) {
    return MONTH_LABELS[d.getUTCMonth()] + ' ' + d.getUTCDate() + ', ' + d.getUTCFullYear();
  }

  function countPhrase(n) {
    if (!n) return 'No contributions';
    return n.toLocaleString() + (n === 1 ? ' contribution' : ' contributions');
  }

  function el(tag, className) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    return node;
  }

  function render(days, total) {
    var first = parseDay(days[0].date);
    var last = parseDay(days[days.length - 1].date);
    if (!first || !last) return false;

    var chart = el('div', 'gh-chart');

    // Header: the running total, and a way out to the profile itself.
    var head = el('div', 'gh-chart-head');
    var totalEl = el('p', 'gh-chart-total');
    totalEl.textContent = countPhrase(total) + ' in the last year';
    var link = el('a', 'gh-chart-link');
    link.href = 'https://github.com/' + encodeURIComponent(user);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = '@' + user;
    head.appendChild(totalEl);
    head.appendChild(link);
    chart.appendChild(head);

    var scroll = el('div', 'gh-chart-scroll');
    var plot = el('div', 'gh-chart-plot');

    // Blank cells so the first column starts on the right weekday. GitHub weeks
    // run Sunday to Saturday, so a calendar starting mid-week needs padding.
    var offset = first.getUTCDay();
    var totalCells = offset + days.length;
    var weeks = Math.ceil(totalCells / 7);
    plot.style.setProperty('--gh-weeks', weeks);

    // Month labels, positioned over the column where each month first appears.
    var months = el('div', 'gh-chart-months');
    var lastMonth = -1;
    var lastLabelWeek = -99;
    for (var i = 0; i < days.length; i++) {
      var d = parseDay(days[i].date);
      if (!d) continue;
      var month = d.getUTCMonth();
      if (month === lastMonth) continue;
      lastMonth = month;
      var week = Math.floor((offset + i) / 7);
      // Only label a month whose start is actually in view. The calendar can
      // open mid-month, and that stub would otherwise take the first column and
      // crowd out the following month's label.
      if (d.getUTCDate() > 7) continue;
      // Skip a label that would collide with the previous one, and skip a month
      // that only owns a sliver of a column at the right edge.
      if (week - lastLabelWeek < 2 || week > weeks - 3) continue;
      var label = el('span', 'gh-chart-month');
      label.textContent = MONTH_LABELS[month];
      label.style.gridColumn = String(week + 1);
      months.appendChild(label);
      lastLabelWeek = week;
    }
    plot.appendChild(months);

    var body = el('div', 'gh-chart-body');

    // Weekday gutter. Alternating labels only, the way GitHub does it, because
    // all seven will not fit at this cell size.
    var gutter = el('div', 'gh-chart-days');
    [1, 3, 5].forEach(function (row) {
      var day = el('span', 'gh-chart-day');
      day.textContent = DAY_LABELS[row];
      day.style.gridRow = String(row + 1);
      gutter.appendChild(day);
    });
    body.appendChild(gutter);

    var grid = el('div', 'gh-chart-grid');
    grid.setAttribute('role', 'img');
    grid.setAttribute('aria-label',
      countPhrase(total) + ' on GitHub between ' + shortDate(first) +
      ' and ' + shortDate(last) + ', shown as a daily heatmap.');

    for (var p = 0; p < offset; p++) {
      var pad = el('span', 'gh-chart-cell gh-chart-cell--pad');
      pad.setAttribute('aria-hidden', 'true');
      grid.appendChild(pad);
    }

    for (var k = 0; k < days.length; k++) {
      var day = days[k];
      var date = parseDay(day.date);
      if (!date) continue;
      var cell = el('span', 'gh-chart-cell');
      cell.setAttribute('aria-hidden', 'true');
      cell.setAttribute('data-level', String(day.level || 0));
      cell.setAttribute('data-label', countPhrase(day.count || 0) + ' on ' + longDate(date));
      grid.appendChild(cell);
    }

    body.appendChild(grid);
    plot.appendChild(body);

    // Legend lives inside the plot so it right-aligns to the grid itself
    // rather than to the wider hero column.
    var legend = el('div', 'gh-chart-legend');
    var less = el('span', 'gh-chart-legend-text');
    less.textContent = 'Less';
    legend.appendChild(less);
    for (var lv = 0; lv <= 4; lv++) {
      var key = el('span', 'gh-chart-cell gh-chart-cell--key');
      key.setAttribute('data-level', String(lv));
      key.setAttribute('aria-hidden', 'true');
      legend.appendChild(key);
    }
    var more = el('span', 'gh-chart-legend-text');
    more.textContent = 'More';
    legend.appendChild(more);
    plot.appendChild(legend);
    scroll.appendChild(plot);
    chart.appendChild(scroll);

    var tip = el('div', 'gh-chart-tip');
    tip.setAttribute('aria-hidden', 'true');
    chart.appendChild(tip);

    mount.appendChild(chart);
    mount.classList.add('is-ready');
    wireTooltip(chart, grid, tip);
    return true;
  }

  function wireTooltip(chart, grid, tip) {
    function show(cell) {
      var label = cell.getAttribute('data-label');
      if (!label) return;
      tip.textContent = label;
      tip.classList.add('is-visible');

      // Measure after the text lands so the tooltip width is final, then clamp
      // it inside the chart so edge cells do not push it out of view.
      var chartBox = chart.getBoundingClientRect();
      var cellBox = cell.getBoundingClientRect();
      var left = cellBox.left - chartBox.left + cellBox.width / 2 - tip.offsetWidth / 2;
      var maxLeft = chartBox.width - tip.offsetWidth;
      if (left < 0) left = 0;
      if (left > maxLeft) left = maxLeft > 0 ? maxLeft : 0;
      tip.style.left = Math.round(left) + 'px';
      tip.style.top = Math.round(cellBox.top - chartBox.top - tip.offsetHeight - 8) + 'px';
    }

    function hide() {
      tip.classList.remove('is-visible');
    }

    grid.addEventListener('mouseover', function (e) {
      var cell = e.target.closest('.gh-chart-cell[data-label]');
      if (cell) show(cell);
    });
    grid.addEventListener('mouseleave', hide);
    chart.querySelector('.gh-chart-scroll').addEventListener('scroll', hide, { passive: true });
  }

  fetch(ENDPOINT, { headers: { Accept: 'application/json' } })
    .then(function (res) {
      if (!res.ok) throw new Error('Contributions request failed: ' + res.status);
      return res.json();
    })
    .then(function (data) {
      var days = data && data.contributions;
      if (!Array.isArray(days) || !days.length) throw new Error('No contribution data returned');

      var total = data.total && typeof data.total.lastYear === 'number'
        ? data.total.lastYear
        : days.reduce(function (sum, d) { return sum + (d.count || 0); }, 0);

      if (!render(days, total)) throw new Error('Could not render contribution data');
    })
    .catch(function (err) {
      // The hero should look deliberate whether or not a third party answers,
      // so drop the block rather than leaving an empty frame behind.
      if (window.console && console.warn) console.warn('[contributions]', err.message);
      if (mount.parentNode) mount.parentNode.removeChild(mount);
    });
})();
