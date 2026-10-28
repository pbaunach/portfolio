# Handoff: Peter Baunach Portfolio — Home + Case Study Template

## Overview
A redesign of https://pbaunach.github.io/portfolio/ (currently a GitHub Pages site). Two pages:
1. **Home** — option **4a** in `design/Portfolio Directions.dc.html` (the top section of that file; everything below it — turns 3, 2, 1 — is earlier exploration, ignore it).
2. **Case study template** — `design/Case Study - Orchard.dc.html`. Built with Orchard content; reuse the same structure for Aspireship, Telby, Unbound Codex, etc.

Personality: playful "neubrutalist" — cream paper, thick black outlines, hard offset shadows, flat saturated color blocks, slightly rotated "sticker" elements, and Peter's own Frederick / Aspireship brand illustrations.

## About the Design Files
The files in `design/` are **design references built in HTML** — prototypes showing intended look and behavior, not production code. They use an internal templating runtime (`support.js`, `.dc.html`) — do not port that. Recreate the designs in the target environment. The current site is a static GitHub Pages site; recommended: **Astro or Eleventy** (static, Markdown-driven case studies, ships near-zero JS) with small vanilla-JS islands for the interactions below. A Next.js static export is also fine.

Open the `.dc.html` files directly in a browser (serve the folder, e.g. `npx serve design`) to see them live.

## Fidelity
**High-fidelity.** Colors, type, spacing, radii, shadows, copy and interactions are final. Recreate pixel-accurately at the 1280px design width, and make it responsive (see Responsive).

---

## Design Tokens

### Color
| Token | Value | Use |
|---|---|---|
| `--paper` | `#fbf6ea` | page background |
| `--ink` | `#141414` | text, all borders, all shadows |
| `--white` | `#ffffff` | cards, header |
| `--muted` | `#6a655a` | secondary text |
| `--muted-dark` | `#bdb7a8` | secondary text on ink |
| `--line-dark` | `#3a3833` | divider on ink |
| `--coral` | `oklch(0.72 0.17 35)` | accent / stickers |
| `--butter` | `oklch(0.82 0.15 85)` | accent / Lab panel / CTA |
| `--mint` | `oklch(0.85 0.12 150)` | Orchard / case-study hero |
| `--mint-deep` | `oklch(0.55 0.14 150)` | Orchard card shadow, section numbers |
| `--sky` | `oklch(0.72 0.14 245)` | "production" pill, stat card |
| `--sky-pale` | `oklch(0.86 0.07 230)` | Frederick panel |
| `--aspire` | `oklch(0.42 0.2 290)` | Aspireship purple (panel + card shadow) |
| loop-active | `oklch(0.85 0.12 150)` / coral | Telby loop highlight |

Artifacts folder backgrounds cycle: mint, sky, coral, butter.

### Typography
- **Display + UI:** Bricolage Grotesque (Google Fonts, `opsz 12..96, wght 400..800`).
- **Mono labels:** Geist Mono 400/500 (12–13px, often uppercase).
- Headline style: weight 800, tight tracking.
  - Hero H1 (home): 84px / 0.95 / -0.05em
  - Case-study H1: `clamp(96px, 13vw, 168px)` / 0.82 / -0.065em
  - Section H2: 80px (home), 64px (case study) / 1.0 / -0.045em
  - Footer mega type: 200px / 0.8 / -0.07em
  - Card titles: 64px (project), 32–36px (lab), 24px (artifacts)
  - Big numbers in stickers: 48–80px / 1.0 / -0.04em
- Body: 500 weight, 16–21px, line-height 1.45–1.55. `text-wrap: pretty` on paragraphs.
- Tags/chips: 12–13px, weight 800, uppercase.

### Borders, radii, shadows
- Borders: `2px solid --ink` everywhere (3px on hero pills and the wipe frame). Dashed variant on the "prototype" pill: `3px dashed oklch(0.6 0.13 150)`.
- Radii: pills `999px`; big panels `32px`; project cards `28px`; cards `18–24px`; images inside cards `12–14px`; chips `8–10px`.
- Shadows are **hard, no blur**: `Npx Npx 0 --ink`. Scale: 3px (small buttons/logo), 5–6px (stickers, folders), 8px (wipe frame), 10px (big panels/project cards). Project cards use a colored shadow (`10px 10px 0 --mint-deep` / `--aspire`).
- Rotations on stickers: between −6° and +7°.

### Spacing
Page gutter 40px. Section top padding ~96px. Panel inner padding 56px. Card padding 22–40px. Gaps: 8 / 10 / 12 / 16 / 20 / 24 / 32 / 40 / 48.

Page background on hero: dot grid — `radial-gradient(rgba(20,20,20,.14) 1.4px, transparent 1.4px)` at `28px 28px`.

---

## Screen 1: Home (option 4a)

Container: max 1280px, cream, 2px ink border on the frame.

1. **Header** — white bar, 24px/40px padding, bottom border. Left: "PB" logo tile (44px square, radius 12, coral, 3px ink shadow, rotated −6°), "Peter Baunach" (800, 19px), "Product & Design Leader" (600, 14px, muted). Right: pill nav — Work, Lab, Artifacts (outlined pills, 10px/18px padding) and "Say hi →" (butter fill + 3px shadow).

2. **Hero** — 2-column grid `1fr 520px`, gap 40, padding 72/40/96, dot-grid bg.
   - Left: status chip "Currently building Orchard" (white pill, link underlined) → H1 on two lines: "From [prototype]" where *prototype* is a dashed-outline pill with green text on translucent white; "to [production.]" where *production.* is a sky pill, white text, 3px ink border, rotated 1.5°, 6px shadow → paragraph (20px, max 520px): "20 years of 0-to-1 web apps — and lately, AI interfaces that know when to hand the wheel back to a human."
   - Right: **Before/after wipe** (see Interactions) in a frame: aspect 1301/750, 3px border, radius 20, 8px shadow. Tags "PROTOTYPE" (white) top-left and "PRODUCTION" (sky) top-right. Caption row below: "← drag it. that's the whole job." / mono "from the Frederick brand system".

3. **Frederick panel** — sky-pale panel, radius 32, 10px shadow, margin-top 24. Left: tag "THE FREDERICK YEARS · ACQUIRED BY MINDBODY", H2 "One designer.<br>A ton of friends." (76px), paragraph. Right: two stickers — coral "$10M / ARR, up from $200k. Hover me; he's excited." (rotated −4°, with `fred-jump.png` perched on top) and white "2,500 / businesses, before the acquisition" (rotated 3°). Bottom: `fred-friends.png` full width, bleeding to the panel's bottom edge.
   - ⚠️ Confirm copy with Peter: "I designed the product and led the brand, all the way down to the guy in the green tie."

4. **The big stuff** — H2 + `asp-planet.png` (120px, rotated −8°); right note "Head of Product & Design on both."
   - **Orchard card**: grid `1.5fr 1fr`, white, radius 28, 10px mint-deep shadow. Left: mint panel with cover screenshot bleeding off the bottom/right edges. Right: tag "NOW · 0→1", title, description, buttons "See the screens →" (ink) + "The process" (outline). Links to the case study.
   - **Aspireship card**: mirrored `1fr 1.5fr`, aspire-purple panel on the right with cover, `asp-ufo-light.png` (110px) bobbing top-right. Left column bottom-right holds `asp-rocket.png` (72px) which launches on hover.
   - Card hover: `translate(-4px,-4px)` with spring easing `cubic-bezier(.3,1.6,.5,1)` 250ms.

5. **The lab** — butter panel. Header row: H2 "The lab" + "Builder at heart. Here's what's on the bench after hours, coffee included." with `asp-person.png` (240px) breaking out above the panel's top edge. Two cards (grid `1.2fr 1fr`):
   - **Telby**: poster image, title, "Try the demo →", and a dashed "builder–critic loop · live" box with 5 chips: Prompt → Human review → Generate → Vision critic → Ship, plus a status string (see Interactions).
   - **Unbound Codex**: rotated 1.5°, offset 40px down; poster, title, "Demo →", description.

6. **Artifacts** — 4-column grid of "file folders": tab label sticking up (`top:-30px`, same bg, no bottom border, radius 12 12 0 0), body radius `0 18 18 18`, 5px shadow, min-height 320. Number (48px), short title (24px), description (14px). Hover: `translateY(-10px) rotate(-1.5deg)`. Folder 02 (Brand) shows a small Frederick at top-right that swaps line-art → full color on hover.

7. **Footer** — ink background, padding 96/40/40. "Let's<br>make stuff." 200px link (hover → coral). Divider then "© 2026 Peter Baunach" + LinkedIn, GitHub. (No illustrations, no résumé link.)

## Screen 2: Case-study template (Orchard)

Fluid, max-width 1280, centered.

1. **Header** — same as home, first pill is "← All work".
2. **Hero** — **full-bleed mint** (no card), bottom border. Flex-wrap row: left (tags "CASE STUDY 01", "NOW BUILDING"; H1 "Orchard"; subtitle 30px/700), right (meta card ROLE / TEAM / OWNED with 5px shadow; buttons "View the prototype ↗" + "Design process", `white-space:nowrap`, row wraps). Below: hero media — screenshot (Orchie-Desk) in a white frame, 2px border, top corners radius 20, no bottom border, flush to the hero's bottom edge. **Supports a looping muted autoplay video instead** (with optional poster) — make this a frontmatter field.
3. **Sticky chapter nav** — sticky top:0, translucent paper + `backdrop-filter: blur(8px)`, borders top/bottom, pill links 01–06 anchoring to sections (`scroll-margin-top: 70px`). Nice-to-have: highlight the active chapter on scroll.
4. **01 The problem** — 140px left gutter with section number (mint-deep, 64px), H2 question, paragraph. Three stat stickers (coral, white, sky) with sources in mono, slight rotations, middle one offset 28px down.
5. **02 Principles** — 3 colored cards (butter, mint, white) with numbered circle, title 32px, body.
6. **03 Inside Orchie** — flow diagram in a white frame (24px padding, 8px shadow); paragraph + butter "DESIGN RULE" sticker ("Always an answer and a next step."); then "THE DESK ↑" caption paragraph.
7. **04 The CRI** — mint panel; steps strip ① Rubric → ② Simulator → ③ Growth Report; three figures alternating image/caption sides; images in white 14px-padded frames with 6px shadows.
8. **05 Explore & plan** — 2×2 grid of figures with title + caption; coral "100+ original interviews" sticker overlapping the first.
9. **06 My role** — butter panel; lead sentence; 3 white cards (DIRECTION / SYSTEMS / PROTOTYPE); CTA buttons.
10. **Next case study** — white card w/ purple shadow linking to Aspireship.
11. **Footer** — slim white bar: © + Home, LinkedIn, GitHub. (No "Let's make stuff" on case studies.)

Case-study content model (suggested frontmatter): `title, subtitle, number, role, team, owned[], prototypeUrl, processUrl, heroImage, heroVideo?, heroPoster?, accent (mint/sky/aspire…), stats[{value,label,source}], principles[{title,body}], sections[], role{lead, cards[]}, next{title, blurb, image, href}`.

---

## Interactions & Behavior

**Before/after wipe (home hero)**
- Two stacked images (`salon-line.png` under, `salon-color.png` over). Top image clipped with `clip-path: inset(0 0 0 X%)`; a 3px ink divider at `left: X%` with a 48px butter circular handle ("⇆", 3px shadow).
- Idle: auto-sweeps X between 15% and 85%, 3.2s ease-in-out, alternate, infinite (CSS keyframes on clip-path + left).
- On pointerdown anywhere on the frame: stop the idle animation permanently, set X from pointer, track `pointermove` on window until `pointerup`. `touch-action: none`, cursor `ew-resize`. Add keyboard support (role="slider", ←/→ adjust 5%). Respect `prefers-reduced-motion` (no auto-sweep; start at 50%).

**Frederick jump** — hovering the $10M sticker: `fred-jump.png` → `translateY(-38px) rotate(-8deg)`, 350ms `cubic-bezier(.3,1.8,.5,1)`; returns on leave.

**Rocket launch** — hovering the Aspireship card: rocket `translateY(-520px)`, opacity 0, 900ms `cubic-bezier(.5,0,.75,0)`; resets on leave.

**UFO bob** — `translateY(0→-14px)` + `rotate(-4°→3°)`, 2.6s ease-in-out infinite.

**Telby loop** — every 1100ms advance a step index 0–5. The active chip gets a fill (butter for steps 0–2, coral for "Vision critic", mint for "Ship"), lifts −4px, and gets a 3px shadow, 250ms spring transition. Status text: steps 0–2 "working…", 3 "scoring… 0.91", 4 "pass ✓ shipped", 5 "next icon ↺". Pause when off-screen (IntersectionObserver) and under reduced motion.

**Brand folder swap** — hover crossfades `fred-wire.png` → `fred-standing.png` (opacity, 350ms).

**Lightbox (case study)** — click any screenshot → fixed overlay `rgba(20,20,20,.92)`; image max `min(1400px,92vw)` × 78vh with 3px cream border; ←/→ buttons and counter "n / 9"; × close button (butter, top-right). Keyboard: Esc closes, ←/→ navigate. Click backdrop closes. Trap focus while open.

**Hover generally** — links/pills `opacity .8`; spring easing on any card lift.

## Responsive
Design width is 1280. Below ~1024: hero grids stack (wipe under headline), project cards go single-column (image on top), Lab cards stack, artifacts 2-up, then 1-up below ~640. Scale display type with `clamp()` (e.g. footer mega type `clamp(88px, 15vw, 200px)`, home H1 `clamp(56px, 7vw, 84px)`). Remove sticker rotations under 640px if they cause overflow.

## State
Home: `wipeX`, `wipeTouched`, `isDragging`, `loopStep`, hover flags (or pure CSS `:hover` for jump/rocket/folder swap — preferred). Case study: `lightboxIndex | null`, optional `activeChapter`.

## Assets
All illustrations in `design/assets/` were cut out of Peter's brand guideline slides (`/portfolio/assets/img/frederick-brand-guidelines/` and `aspireship-brand-guidelines/2x/`) by color-keying — **ask Peter for the original vector/PNG source files** and replace these for clean edges:
- `salon-line.png`, `salon-color.png` — hero wipe (Frederick guidelines, slide 20)
- `fred-jump.png` (slide 23), `fred-friends.png` (slide 17), `fred-wire.png` + `fred-standing.png` (slide 16)
- `asp-planet.png`, `asp-person.png`, `asp-rocket.png` (recolored to ink), `asp-ufo-light.png` (recolored cream/lilac) — Aspireship guidelines, slide 7

Screenshots/posters are already hosted on the live site and referenced by absolute URL: `orchard-cover.png`, `aspireship-cover.png`, `orchard-screens-v2/*.png`, Telby poster (telby.io), Unbound Codex poster (unboundcodex.com). Move these into the repo.

Placeholder links to fill: footer LinkedIn / GitHub, "Say hi" / "Let's make stuff" (mailto or contact page).

## Files
- `design/Portfolio Directions.dc.html` — Home = section "4" / option **4a** (top of file). Logic for wipe, loop, hovers is in the `<script>` class at the bottom.
- `design/Case Study - Orchard.dc.html` — case-study template + lightbox logic.
- `design/support.js` — prototype runtime only (needed to open the files locally; do not ship).
- `design/assets/` — illustration cut-outs.
