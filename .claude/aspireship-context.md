# Aspireship Case Study — Working Context

Last updated: 2026-07-30. Hand this to an LLM before touching `/aspireship/`.

---

## 1. What this project is

Rebuilding the Aspireship deep dive at [aspireship/index.md](../aspireship/index.md) into a
portfolio piece that does two jobs at once:

1. **Passes a recruiter screener** in 30–60 seconds — senior enough, real scope, real outcomes.
2. **Gives a hiring manager substance** on a 10-minute read — decisions and the reasoning behind them.

Target role framing: **Principal Product Designer.**

The page's layer-2 content (callout markers, per-screen notes) is already strong and should be
treated as near-final. Work goes into layer 1 and into structure — not into rewriting the notes.

---

## 2. Role and positioning — DECIDED

| | |
|---|---|
| Actual title | **Head of Product & Design** |
| Tenure | **2020 – Present** (still employed there) |
| Team | **Sole product and design person for six years.** Company has been as large as 16 and as small as 4. |
| Concurrent | Also heading up Orchard at the same time |

**Decisions made:**

- **Use the real title.** Do **not** put "Founding Designer" on the site. LinkedIn says Head of
  Product & Design; a mismatch reads as inflation to a screener cross-checking. "Founding designer"
  is fine as a verbal descriptor in conversation.
- **Add a scope qualifier instead.** Hero meta line reads:
  `Head of Product & Design | Sole product & design team | 2020–Present`
  Title + scope reinforce each other. Two competing titles fight each other.
- The team-of-one fact is the strongest Principal-IC signal available: full org scope, nobody to
  delegate to, so every decision on the page is demonstrably his. It appears once in the hero meta
  and once in My Role. Do not repeat it further.
- The old page said **2020–2022**, which was wrong by four years and implied he'd left. Fixed.

---

## 3. Numbers

### Approved for the page

| Stat | Value |
|---|---|
| Registered learners | **40,000+** |
| Paid enrollments | **4,000+** |
| Jobs posted by hiring companies | **300+** |
| Paid conversion | **3% → 15%** |
| Course completion | **45% → 89%** |

**Critical framing rule:** every headline metric is **cumulative** (registered users, paid
enrollments, jobs posted only ever go up). State them as totals. **Never** frame them as current
growth, and never write "growing," "and counting," or a rate. Active usage declined after 2024, so a
growth-rate claim would be inaccurate. Cumulative totals remain true today, which is why this
framing was chosen — it needs no as-of asterisk and creates no false impression.

### Context only — do NOT put on the page

- **Sept 2023 fundraising deck** (source PDF, see §7): 30,000+ registered users, 3,000+ paid
  enrollments, 300+ jobs posted, 7 FT team members, $4.1M raised, $1M+ revenue, profitable. These
  are superseded floors — use the approved numbers above.
- **Internal dashboard screenshot** (`Internal-01.png`) shows 4,223 candidates, 20 placements, 83%
  inactive 30+ days. These are **point-in-time dashboard readings**, not lifetime totals. The page
  says "4,223 candidates" only inside a callout describing that screen. Never present them as
  program outcomes.
- **Employer/client counts are unresolved.** "50+ clients" was a manual count of companies using a
  government-subsidy program. The database shows 1,000+ employer records of unknown engagement.
  Neither is defensible, so **no employer count appears on the page.** "300+ jobs posted" carries
  the employer-demand story instead.
- The placement program was **discontinued around 2024**; no current placement stats can be pulled.
  Placement outcomes are therefore not claimed anywhere.
- `~10x completions per signup` existed on the old page and was **removed**. It's a derived stat
  that added a third number without adding information. Don't reintroduce it.

---

## 4. Deliberately excluded — do not add back

- **"Solving for Ambiguity."** The funnel-analysis methodology narrative (CEO flagged low
  completions → built a shared baseline with Marketing and Eng → mapped the conversion funnel → two
  fears identified). This was a **one-off case study exercise** and does not belong on the deep
  dive. It lives on its own private stub page at [aspireship-problem/index.md](../aspireship-problem/index.md)
  (`noindex, nofollow`). **Leave that stub page completely alone.** A one-line mention as a My Role
  bullet is fine; a section is not.
- **Government-funded programs.** DOL Registered Apprenticeship approval, WIOA approval in 10 states,
  "cost neutral" GTM. Real and in the deck, but it confuses the story. Cut.
- **The post-2024 usage decline.** Stays off the page — it needs nuance a 60-second scan can't
  carry. It is not hidden, because nothing on the page claims current growth (see §3). Reserved for
  live conversation.

---

## 5. Page structure — LOCKED

```
Hero  →  The Bet  →  Problem  →  01 Learn  →  02 Match  →  03 Operate  →  My Role
```

**Rules learned the hard way. An earlier attempt violated all four and made the page markedly worse
("word and stat vomit, zero through line"):**

1. **No new preamble sections.** One framing block before Act 01. Three (framing + thesis +
   methodology) destroys the through-line.
2. **Exactly one stat strip on the page.** Two reads as repetition. It sits at the end of the
   Problem section, using the existing `.cs-impact-stats` component.
3. **Outcome numbers attach to the screen that caused them** — not to a separate results band.
   `3% → 15%` lives in callout 1 on the course overview (the free-first-module decision).
   `45% → 89%` lives in the lesson-view note (the retake-anxiety fix). This is why there is no
   closing impact section.
4. **Small surgical diffs, not rewrites.** The current version is ~22 insertions / ~36 deletions
   against the long-standing original. All 15 screenshots, every callout, the thesis cards, and the
   act intros are unchanged. Preserve that discipline.

### Substantive framing added (keep)

The **marketplace was the growth engine, not a feature.** The Sept 2023 deck states it directly:
*"Talent Marketplace acts as a magnet, enabling a low-cost customer acquisition at scale."* Job
seekers and employers both flow **into** the marketplace; the learning products hang off it and
monetize it. This means the double opt-in match was an acquisition decision, not just a UX pattern
for two nervous parties — which is the altitude a Principal PD is hired at. Currently expressed as a
single clause in the Act 02 intro. Resist expanding it into a section.

---

## 6. Open items

- **Stat strip depth.** It sits ~1700px down because The Bet and the Problem paragraphs precede it.
  Deeper than ideal for a screener. Option: move the strip into the hero section. Not done — it's a
  structural change to an approved order. Owner's call.
- **Hero image.** Currently `Learning-Paths-01.png`, a course-library shelf. It frames the project
  as an LMS in the first second, which is the read the page is fighting. `Candidate-03.png`
  (evidence-first profile) or `Employer-01.png` (match queue) would say "marketplace" immediately.
  Recommended swap, not yet made.
- **Employer count.** One query — *employers who posted at least one job* — would give a defensible
  number and put a figure on the employer side of the marketplace, which currently has none.
- **Homepage card is intentionally still commented out** at [index.md](../index.md) (~line 80).
  Restore it only when the deep dive is finished and a good card image exists. When restoring,
  change the section title above it from "Project Highlight" back to "Selected Work."

---

## 7. Source material

- **Fundraising deck**, Sept 2023: `C:\Users\pbaun\Downloads\aspireship-deck.pdf` (13 slides).
  Extracted text: `scratchpad/deck.txt`. Slides: mission, management team, why-now, higher-ed vs
  modern workforce, unified platform, business model, go-to-market, how we do it, government
  programs, at-a-glance stats, demographics.
- **Business model from the deck** (useful context; explains why one product serves four audiences):
  Consumer certificates ~$500/user (95% margin) · B2B upskilling ~$2,000/user (85%) · B2B recruiting
  subscriptions $3,000–10,000/yr (85%).
- **Screenshots:** `assets/img/aspireship-screens/` — 15 files across Course, Learning-Paths,
  Video-Library, Candidate, Employer, and Internal.
- **Brand work:** `/brand-guidelines/`, linked from My Role.

---

## 8. Environment notes

- Jekyll `baseurl: /portfolio`, so the local URL is **http://localhost:4000/portfolio/aspireship/**
  (not `/aspireship/` — that 404s).
- Dev server: `.claude/launch.json` → config name `portfolio`. It may already be running on port
  4000; if so, navigate to the URL rather than starting a second server.
- The lightbox `<img class="lightbox-img" src="">` in `_layouts/case-study.html` always reports as a
  broken image in DOM checks. Pre-existing and harmless — ignore it.
- **No `pdftoppm` on this machine**, so PDFs cannot be rendered to images. `pdftotext` is available
  at `C:\Program Files\Git\mingw64\bin\pdftotext.exe` for text extraction. Python is not installed.
