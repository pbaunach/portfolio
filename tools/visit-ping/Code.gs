/**
 * Portfolio first-visit email (Google Apps Script web app).
 *
 * _includes/visit-ping.html posts one JSON ping the first time a browser opens the
 * portfolio. This script turns each ping into an email to the account that deploys it.
 *
 * Setup, once:
 *   1. Go to script.google.com, create a new project, and paste this file over Code.gs.
 *   2. Pick testEmail in the function menu and click Run. Google asks you to allow the
 *      script to send email as you; allow it. A test email should arrive.
 *   3. Deploy > New deployment > type "Web app". Execute as: Me. Who has access: Anyone.
 *   4. Copy the web app URL (it ends in /exec) into visit_ping_url in _config.yml.
 *
 * After editing this script, Deploy > Manage deployments > edit > Version: New version,
 * or the /exec URL keeps running the old code.
 */

// The endpoint is public, so cap the emails a flood of pings could send. Gmail lets
// a personal account's scripts send about 100 emails a day.
const MAX_EMAILS_PER_DAY = 50;
const BOT_UA = /bot|crawl|spider|slurp|headless|lighthouse|preview|scan/i;

function doPost(e) {
  let v;
  try {
    v = JSON.parse(e.postData.contents);
  } catch (err) {
    return ok_();
  }

  const id = clip_(v.id, 16);
  if (!/^[a-z0-9]+$/.test(id) || BOT_UA.test(v.ua || '')) return ok_();

  // A visitor whose ping was retried should still produce one email.
  const cache = CacheService.getScriptCache();
  if (cache.get('seen:' + id)) return ok_();
  cache.put('seen:' + id, '1', 21600);

  if (!underDailyCap_()) return ok_();

  const visit = {
    id: id,
    page: clip_(v.page, 300),
    title: clip_(v.title, 200),
    referrer: clip_(v.referrer, 500),
    timezone: clip_(v.timezone, 60),
    language: clip_(v.language, 30),
    width: Number(v.width) || 0,
    ua: clip_(v.ua, 300)
  };
  sendVisitEmail_(visit);
  return ok_();
}

function sendVisitEmail_(v) {
  const host = (v.referrer.match(/^https?:\/\/([^\/?#]+)/) || [])[1] || '';
  const source = host ? host.replace(/^www\./, '') : 'direct or unknown';
  const device = !v.width ? 'unknown' : v.width < 640 ? 'phone' : v.width < 1024 ? 'tablet' : 'desktop';

  const lines = [
    'Someone new opened your portfolio.',
    '',
    'Landed on: ' + (v.title || '(no title)') + ' (' + v.page + ')',
    'Came from: ' + (v.referrer || 'direct, or the referrer was hidden'),
    'Time zone: ' + (v.timezone || 'unknown'),
    'Device: ' + device + (v.width ? ' (' + v.width + 'px wide)' : ''),
    'Language: ' + (v.language || 'unknown'),
    'Browser: ' + (v.ua || 'unknown'),
    '',
    'Visitor ID: ' + v.id,
    'To watch the session in Clarity: Recordings > Filters > Custom tags > visitor_id = ' + v.id,
    'Recordings can take a while to appear.'
  ];

  MailApp.sendEmail({
    to: Session.getEffectiveUser().getEmail(),
    subject: 'Portfolio visit via ' + source + ': ' + (v.title || v.page),
    body: lines.join('\n')
  });
}

function underDailyCap_() {
  const lock = LockService.getScriptLock();
  lock.waitLock(5000);
  try {
    const props = PropertiesService.getScriptProperties();
    const today = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd');
    const count = props.getProperty('day') === today ? Number(props.getProperty('count')) || 0 : 0;
    if (count >= MAX_EMAILS_PER_DAY) return false;
    props.setProperties({ day: today, count: String(count + 1) });
    return true;
  } finally {
    lock.releaseLock();
  }
}

function clip_(s, n) {
  return String(s == null ? '' : s).slice(0, n);
}

function ok_() {
  return ContentService.createTextOutput('ok');
}

// Run from the editor to grant email permission and see what an email looks like.
function testEmail() {
  sendVisitEmail_({
    id: 'test1234',
    page: '/portfolio/case-studies/vector-agent/',
    title: 'VectorAgent: Can an Agent Buy It Itself?',
    referrer: 'https://www.linkedin.com/',
    timezone: 'America/Los_Angeles',
    language: 'en-US',
    width: 1440,
    ua: 'Test run from the Apps Script editor'
  });
}
