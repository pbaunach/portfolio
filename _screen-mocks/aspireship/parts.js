// Shared pieces for the Aspireship screen mocks: employer sidebar and achievement badges.
// Load after brand.js. Tailwind's Play CDN picks up classes in injected markup.

const ASP = (() => {
  const ico = (p, cls = 'h-[18px] w-[18px]') => `<svg viewBox="0 0 24 24" class="ico ${cls}">${p}</svg>`;
  const ROCKET = '<path d="M12 2.5c-2.6 1.8-4 4.6-4 8.2 0 1.9.4 3.6 1 5h6c.6-1.4 1-3.1 1-5 0-3.6-1.4-6.4-4-8.2Z"/><circle cx="12" cy="9.3" r="1.6"/><path d="M8.5 12.8c-1.5.8-2.5 2.2-2.5 3.9l3-.9M15.5 12.8c1.5.8 2.5 2.2 2.5 3.9l-3-.9M12 18.6v2.6"/>';
  const ICONS = {
    dashboard: '<rect x="3.5" y="3.5" width="7" height="9" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="5" rx="1.5"/><rect x="13.5" y="11.5" width="7" height="9" rx="1.5"/><rect x="3.5" y="15.5" width="7" height="5" rx="1.5"/>',
    aspireships: ROCKET,
    live: '<path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75ZM3 9.75h18"/><circle cx="12" cy="15" r="1.6"/>',
    video: '<rect x="6" y="6" width="15" height="13" rx="2.25"/><path d="M3 15.5V5.25A2.25 2.25 0 0 1 5.25 3H16.5"/><path d="m12 10 4 2.5-4 2.5Z"/>',
    jobs: '<path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0"/>',
    matches: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="11" r="2"/><path d="M5.8 16c.6-1.4 1.8-2.2 3.2-2.2s2.6.8 3.2 2.2M14.5 10h3.5M14.5 13.5h3.5"/>',
    team: '<path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/>',
    users: '<path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>',
    support: '<path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"/>',
  };

  // Employer-side sidebar. `active` is a nav key; `hiringLabel` is the group label above Jobs/Matches.
  function employerSidebar(active, hiringLabel) {
    const item = (key, label) => key === active
      ? `<a class="flex items-center gap-3 rounded-xl bg-white px-3 py-2 font-medium text-purple shadow-sm">${ico(ICONS[key])}${label}</a>`
      : `<a class="flex items-center gap-3 rounded-xl px-3 py-2 text-white/75">${ico(ICONS[key])}${label}</a>`;
    const group = (label) => `<div class="px-3 pb-1 pt-4 text-[10.5px] font-semibold uppercase tracking-[.1em] text-white/45">${label}</div>`;
    return `<aside class="g-purple flex w-[240px] shrink-0 flex-col px-4 pt-6 pb-5 text-white">
      <div class="flex items-center gap-2.5 px-1">
        <svg viewBox="0 0 24 24" class="h-9 w-9" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2.5c-2.6 1.8-4 4.6-4 8.2 0 1.9.4 3.6 1 5h6c.6-1.4 1-3.1 1-5 0-3.6-1.4-6.4-4-8.2Z"/><circle cx="12" cy="9.3" r="1.7"/>
          <path d="M8.5 12.8c-1.5.8-2.5 2.2-2.5 3.9l3-.9M15.5 12.8c1.5.8 2.5 2.2 2.5 3.9l-3-.9"/><path d="M10.6 18.4v1.8M12 18.4v3.1M13.4 18.4v1.8"/>
        </svg>
        <span class="text-[21px] font-medium tracking-tight">Aspireship</span>
      </div>
      <div class="mt-6 flex items-center gap-2.5 rounded-2xl bg-white/10 p-2.5 pr-3 ring-1 ring-inset ring-white/15">
        <div class="g-pink grid h-9 w-9 shrink-0 place-items-center rounded-full text-[13px] font-semibold ring-2 ring-white/30">TT</div>
        <div class="flex-1 whitespace-nowrap text-[13px] font-medium">Terry Teams</div>
        <svg viewBox="0 0 24 24" class="ico h-4 w-4 text-white/70"><path d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
      </div>
      <nav class="mt-4 space-y-0.5 text-[13.5px]">
        ${item('dashboard', 'Dashboard')}
        ${group('Learning')}${item('aspireships', 'Aspireships')}${item('live', 'Live!')}${item('video', 'Video Library')}
        ${group(hiringLabel)}${item('jobs', 'Jobs')}${item('matches', 'Matches')}
        ${group('Teams')}${item('team', 'Team Dashboard')}${item('users', 'Users')}
      </nav>
      <a class="mt-auto flex items-center gap-3 rounded-xl px-3 py-2 text-[13.5px] text-white/80">${ico(ICONS.support)}Support</a>
    </aside>`;
  }

  // Achievement badge: brand hexagon, white line-art icon, stars for level.
  const BADGE_ICONS = {
    rocket: '<path d="M12 5c-1.6 1.1-2.5 2.9-2.5 5.1 0 1.2.2 2.2.6 3.1h3.8c.4-.9.6-1.9.6-3.1C14.5 7.9 13.6 6.1 12 5Z"/><circle cx="12" cy="9.6" r="1"/><path d="M9.8 11.8c-.9.5-1.5 1.4-1.5 2.4l1.8-.5M14.2 11.8c.9.5 1.5 1.4 1.5 2.4l-1.8-.5"/>',
  };
  const star = (cx, cy, r) => {
    let d = '';
    for (let k = 0; k < 10; k++) {
      const a = -Math.PI / 2 + k * Math.PI / 5, rr = k % 2 ? r * 0.45 : r;
      d += (k ? 'L' : 'M') + (cx + rr * Math.cos(a)).toFixed(2) + ' ' + (cy + rr * Math.sin(a)).toFixed(2);
    }
    return `<path d="${d}Z" fill="#fff" stroke="#001226" stroke-width=".9" stroke-linejoin="round"/>`;
  };
  let badgeId = 0;
  function badge({ from = '#713EE9', to = '#4810A4', icon = 'rocket', stars = 1, cls = 'h-[38px] w-[30px]' } = {}) {
    const id = 'badge' + (badgeId++);
    return `<svg viewBox="0 0 24 31" class="${cls} shrink-0">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs>
      <path d="M12 1.5 21 6.6v10.3L12 22l-9-5.1V6.6Z" fill="url(#${id})" stroke="#001226" stroke-width="1.2" stroke-linejoin="round"/>
      <g fill="none" stroke="#fff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">${BADGE_ICONS[icon]}</g>
      ${(stars === 1 ? [12] : [8.6, 15.4]).map(x => star(x, 25.6, 3.6)).join('')}
    </svg>`;
  }

  // Internal admin: purple primary sidebar ("Aspireship Admin" active) plus a white admin sub-nav.
  const ADMIN = {
    home: '<path d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75"/>',
    admin: '<path d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"/>',
    dashboard: '<path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/>',
    users: ICONS.users,
    assessments: '<path d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"/>',
    employers: ICONS.jobs,
    jobs: '<path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>',
  };
  function adminSidebars(activeSub) {
    const main = (key, label, on) => on
      ? `<a class="flex items-center gap-3 rounded-xl bg-white px-3 py-2 font-medium text-purple shadow-sm">${ico(ADMIN[key] || ICONS[key])}${label}</a>`
      : `<a class="flex items-center gap-3 rounded-xl px-3 py-2 text-white/75">${ico(ADMIN[key] || ICONS[key])}${label}</a>`;
    const sub = (key, label) => key === activeSub
      ? `<a class="flex items-center gap-3 rounded-xl bg-purple/[.07] px-3 py-2 font-medium text-purple">${ico(ADMIN[key])}${label}</a>`
      : `<a class="flex items-center gap-3 rounded-xl px-3 py-2 text-gray-700">${ico(ADMIN[key])}${label}</a>`;
    return `<aside class="g-purple flex w-[210px] shrink-0 flex-col px-3.5 pt-5 pb-5 text-white">
      <div class="flex items-center gap-2 px-1">
        <svg viewBox="0 0 24 24" class="h-8 w-8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2.5c-2.6 1.8-4 4.6-4 8.2 0 1.9.4 3.6 1 5h6c.6-1.4 1-3.1 1-5 0-3.6-1.4-6.4-4-8.2Z"/><circle cx="12" cy="9.3" r="1.7"/>
          <path d="M8.5 12.8c-1.5.8-2.5 2.2-2.5 3.9l3-.9M15.5 12.8c1.5.8 2.5 2.2 2.5 3.9l-3-.9"/><path d="M10.6 18.4v1.8M12 18.4v3.1M13.4 18.4v1.8"/>
        </svg>
        <span class="text-[19px] font-medium tracking-tight">Aspireship</span>
      </div>
      <div class="mt-5 flex items-center gap-2.5 rounded-2xl bg-white/10 p-2 pr-3 ring-1 ring-inset ring-white/15">
        <div class="g-pink grid h-8 w-8 shrink-0 place-items-center rounded-full text-[12px] font-semibold ring-2 ring-white/30">PB</div>
        <div class="flex-1 text-[13px] font-medium">Peebs</div>
        <svg viewBox="0 0 24 24" class="ico h-4 w-4 text-white/70"><path d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
      </div>
      <nav class="mt-5 space-y-0.5 text-[13.5px]">
        ${main('home', 'Home')}${main('aspireships', 'Aspireship')}${main('live', 'Live!')}
        <a class="flex items-center gap-3 rounded-xl px-3 py-2 text-white/75">${ico('<circle cx="12" cy="6.5" r="2.75"/><circle cx="6" cy="16.5" r="2.75"/><circle cx="18" cy="16.5" r="2.75"/>')}Community</a>
        ${main('video', 'Video Library')}
        <div class="mx-3 my-2.5 h-px bg-white/15"></div>
        ${main('admin', 'Aspireship Admin', true)}
      </nav>
    </aside>
    <aside class="w-[190px] shrink-0 whitespace-nowrap border-r border-gray-150 bg-white px-3 pt-[22px] text-[13.5px]">
      ${sub('dashboard', 'Dashboard')}${sub('users', 'Users')}${sub('assessments', 'Assessments')}${sub('employers', 'Employers')}${sub('jobs', 'Jobs')}
    </aside>`;
  }

  return { ico, ICONS, employerSidebar, adminSidebars, badge };
})();
