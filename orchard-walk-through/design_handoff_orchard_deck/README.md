# Handoff: Orchard v-next — Navigable Case-Study Deck

## Overview
An 8-slide presentation, "Orchard v-next — a systems case study," to be implemented as a **navigable web page** (slide-by-slide, keyboard + click navigation). The content is a product/systems case study; the visual language is the **Orchard** brand (dark navy, teal/green/pink accents). Each "slide" is a fixed 16:9 frame (1920×1080) that scales to fit the viewport and letterboxes on black.

The goal for the developer: turn this from a self-contained HTML prototype into a proper navigable web page in the target stack (e.g. a React/Next.js route with a slide component per section, or a single-page deck), preserving exact layout, color, type, and the navigation model described below.

## About the Design Files
The files in this bundle are **design references created in HTML** — a working prototype showing the intended look and behavior. They are **not** intended to be shipped verbatim. Recreate these designs in the target codebase's existing environment and patterns (component library, design tokens, routing). If no environment exists yet, pick the most appropriate framework (React + Vite/Next.js is a natural fit) and implement there.

The prototype uses a custom web component (`deck-stage.js`) purely to get scaling + keyboard/thumbnail navigation for free. **You do not need to keep `deck-stage.js`.** It is included so you can see the intended nav behavior, but a clean implementation will likely replace it with the target stack's own routing/state (see "Interactions & Behavior" → "Navigation model").

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, and layout. Recreate pixel-accurately at the 1920×1080 design size, then scale to fit. All exact values are in "Design Tokens" and per-slide specs below. The single source of truth for tokens is `orchard.css` (Orchard design-system stylesheet) — import or port it.

---

## Canvas & Scaling Model
- **Design size:** every slide is authored at exactly **1920 × 1080 px** (16:9).
- **Scaling:** wrap the 1920×1080 canvas in a full-viewport stage and apply `transform: scale(s)` where `s = min(vw/1920, vh/1080)`, centered, with the surrounding area filled black (`#060d16`). Nav controls must live **outside** the scaled element so they stay usable at small sizes.
- **Slide background:** `var(--bg-canvas)` = `#0C2235` (deep navy). The stage/letterbox area behind it is `#060d16`.
- **Global padding** inside each slide: `84px` top/bottom, `112px` left/right (`--pad-y` / `--pad-x`), except the title slide (full-bleed) and the statement slide (left bar bleeds to edge).

---

## Screens / Views

There are **8 slides**, in this order. Shared header pattern (slides 3, 4, 7, 8): a top-left title, a 1px hairline rule under it (`#2a4a63`), then a body block that is **vertically centered** in the remaining space.

### Shared header tokens
- **Slide title (`.s-title`)**: Open Sans 800, **50px**, line-height 1.08, letter-spacing −0.018em, color `#FFFFFF`, `max-width: 1500px`, `text-wrap: balance`.
- **Hairline rule (`.s-rule`)**: 1px solid `#2a4a63`, `margin-top: 30px`.
- **Eyebrow label (`.eyebrow`)**: Open Sans 700, **16px**, letter-spacing 0.22em, UPPERCASE. Default color `#516F84`; teal variant `#4fb6cf`; pink variant `#c764a0`.
- **Corner logomark**: `assets/logo.png`, 30px tall, opacity 0.5, bottom-right at `112px` inset (slides 3, 4, 7 only).

---

### Slide 1 — Title
- **Purpose:** cover. Establishes brand + speaker.
- **Layout:** full-bleed navy, content centered (flex column, centered). No standard header.
- **Components:**
  - **Top accent strip:** full-width bar, height `9px`, color teal `#13C7E5`, pinned to top edge.
  - **Wordmark:** `assets/wordmark-white.png`, height `52px`, top-left at `top:56px; left:64px`, opacity 0.95.
  - **Landscape silhouette:** `assets/landscape-bg.png`, full-width, pinned to bottom, height `320px`, `object-fit: cover; object-position: bottom`, opacity 0.55.
  - **Orchie mascot:** `assets/orchie-wave.png`, height `188px`, bottom-right at `right:150px; bottom:150px` (stands on the hills).
  - **Hero title:** "Orchard v-next" — Open Sans 800, **132px**, line-height 0.98, letter-spacing −0.03em, color `#FFFFFF`.
  - **Hero subtitle:** "a systems case study" — Open Sans 600 **italic**, **50px**, color teal `#13C7E5`, margin-top 28px.
  - **Divider:** 360×1px line `#2a4a63`, margin `52px 0 44px`.
  - **Name (placeholder):** "[Your name]" — Open Sans 600, **30px**, color teal `#13C7E5` (placeholder styling; becomes white `#FFFFFF` once filled). `white-space: nowrap`.
  - **Role:** "Staff Product Designer candidate" — Open Sans 400, **22px**, color `#516F84`, margin-top 16px. `white-space: nowrap`.
  - **Dot row:** three 22px circles, gap 22px, colors in order teal `#13C7E5`, green `#3CD343`, pink `#F759B3`. Margin-top 64px.
- **Editable placeholders:** `[Your name]` (teal). Replace and switch color to white.

### Slide 2 — Self-evidence statement
- **Purpose:** the thesis, as a bold pull-statement.
- **Layout:** statement vertically centered, left-aligned. A teal bar bleeds off the left edge.
- **Components:**
  - **Left bar:** width `12px`, color teal `#13C7E5`, vertical from `top:220px` to `bottom:220px`, flush to left edge (x=0).
  - **Statement:** two lines — line 1 "Career choice isn't an information problem." (white `#FFFFFF`), line 2 "It's a self-evidence problem." (teal `#13C7E5`). Open Sans 800, **86px**, line-height 1.12, letter-spacing −0.022em, `max-width: 1320px`.
  - **Footnote:** "Consumer surface. Platform problem." — 22px, color `#516F84`, bottom-left at `left:112px; bottom:64px`.

### Slide 3 — Three iterations (kept / killed)
- **Purpose:** show the design was earned through iteration + name the signal source.
- **Layout:** header pattern; body is a **2-column grid** `1fr 1px 1fr`, gap 72px, with a 1px divider column (`#2a4a63`). Body vertically centered.
- **Left column — KEPT / KILLED:**
  - Eyebrow "Kept" (teal variant). Then a vertical stack (gap 18px) of 2 **kept rows**.
  - **Kept row:** background `#1a3850`, radius 8px, padding `22px 26px 22px 30px`, font 24px white `#FFFFFF`. Border `1px solid rgba(60,211,67,0.55)` + `inset 0 0 0 1px rgba(60,211,67,0.15)`. A **6px** left accent bar in teal `#13C7E5` (radius 4px on left corners).
  - Eyebrow "Killed" (pink variant), margin-top 42px. Then 2 **killed rows**.
  - **Killed row:** transparent background, `1.5px solid #F759B3` border, radius 8px, text color `#516F84` (muted), 6px pink left accent bar.
- **Right column — SIGNAL SOURCE:**
  - Eyebrow "Signal source" (teal variant).
  - List (gap 20px): "Discovery interviews" (25px, `#E4E9ED`); "→ Eval calls (us vs. [competitor])" (arrow prefix `→` in `#516F84`); "→ Sharpest signal now: eval calls" — entire line green `#3CD343` (arrow too).
  - **Quote block:** left border `7px solid #13C7E5`, padding-left 34px, italic 30px line-height 1.45 color `#6f95ad`, max-width 720px. Text: "[Your single most important user quote — the one that reframed everything.]"
- **Editable placeholders:** `[Kept 1 …]`, `[Kept 2 …]`, `[Killed 1 …]`, `[Killed 2 …]`, `[competitor]`, the user-quote block. All rendered in teal placeholder color.

### Slide 4 — The bet (3 cards)
- **Purpose:** the three design principles ("the contract every surface must pass").
- **Layout:** header pattern; centered italic caption "The contract every surface must pass:" (24px, `#516F84`); then a **3-column grid**, gap 36px. Body vertically centered.
- **Card (`.bet-card`):** background `#1a3850`, radius 10px, padding `50px 44px 56px`, min-height 520px, `overflow: hidden`, relative.
  - **Top cap:** 7px-tall bar across the full top, color per card.
  - **Number:** 26px 700, colored per card. "01", "02", "03".
  - **Heading:** 38px 800, line-height 1.12, white `#FFFFFF`, letter-spacing −0.01em (two lines via `<br>`).
  - **Body:** 23px, line-height 1.5, color `#E4E9ED`.
  - **Card 1** (teal `#13C7E5`): "Experience / over information" — "Students don't need more content. They need a context where choosing feels real, consequential, and theirs. The product creates that context."
  - **Card 2** (green `#3CD343`): "Every action / is signal" — "Every decision, sim move, or skill attempt updates the model. No separate tracking layer — the product is the research instrument."
  - **Card 3** (pink `#F759B3`): "AI that builds, / not chats" — "Orchie doesn't produce answers to scroll past. It produces artifacts you keep working — comparison tables, plan canvases, growth reports."

### Slide 5 — One model / 60 surfaces diagram
- **Purpose:** the core systems diagram — many surfaces emit signal into one normalized model, which drives every output.
- **Layout:** title (no rule). Below: a **5-column grid** `1fr 78px 1.18fr 78px 1fr`, `align-items: start`. Columns: Explore lane · arrow · Plan lane · arrow · Learn lane. Caption centered below.
- **Lane headers (`.lane-head`):** centered, 22px 700, letter-spacing 0.26em, UPPERCASE, padding `18px 0`, radius 8px, 1.5px border, subtle horizontal gradient fill:
  - **Explore:** text `#6fe0d0`, border `#1f6a72`, bg `linear-gradient(90deg,#10394a,#0e3d3e)`.
  - **Plan:** text `#7be29a`, border `#2a6a4a`, bg `linear-gradient(90deg,#11423f,#123f2a)`.
  - **Learn:** text `#d989c4`, border `#6a3a63`, bg `linear-gradient(90deg,#3a2540,#3d2238)`.
- **Lane sub-label:** centered 18px line-height 1.4 `#516F84`, margin `16px 0 22px` (two lines): Explore "Experiences — / every one is a doing"; Plan "One normalized model — / read + write"; Learn "Inherited by — / every surface".
- **Explore stack:** 8 chips (gap 12px). Chip: centered, bg `#16314a`, 1px border `#2a4a63`, radius 7px, padding `15px 0`, 21px `#FFFFFF`. In order: Life Sim, Brain Games, Audition, Skill Path, Project Lab, Quests, College Apps, Chat.
- **Plan — pillar box:** 2px solid teal `#13C7E5`, radius 8px.
  - **Header:** centered 20px 700 letter-spacing 0.18em UPPERCASE teal `#13C7E5`, padding `16px 0`, bg `#16314a`, bottom border `1px #2a4a63`. Text "The Pillar Model".
  - **List:** 8 items (gap 12px), centered 22px `#E4E9ED`, each prefixed with a teal `◆` (diamond, 16px). Items: Purpose, Values, Strengths, Interests, Skills, Learning, Wellbeing, Career.
- **Learn — output stack:** 4 chips (gap 16px). Chip: bg `#16314a`, 1px `#2a4a63`, radius 7px, padding `17px 20px 17px 26px`, 22px `#FFFFFF`, with a **6px** left accent bar. Items + bar colors: Recommendations (teal), Progression (teal), Growth Report (green `#3CD343`), Buyer reporting (pink `#F759B3`).
- **Arrows (the two 78px columns):** vertically offset down (`padding-top:200px` to align near top of stacks). Small label above a large `→`. Left arrow label "emit signal" + arrow, both teal `#13C7E5`. Right arrow label "drives" + arrow, both green `#3CD343`.
- **Caption:** centered italic 23px `#516F84`: "A new surface is a mapping, not a silo." (in quotes).

### Slide 6 — AI operator flow
- **Purpose:** the AI is the *operator* of the shared model, not a chatbot. A vertical pipeline with a feedback loop, plus right-hand annotations.
- **Layout:** title (no rule). Below: **2-column grid** `1.05fr 0.95fr`, gap 70px. Left = flow; right = annotations. Left column has `padding-left: 74px` to make room for the loop bracket.
- **Flow boxes (vertical, connected by arrows):**
  - **Box (`.flow-box`):** bg `#1a3850`, radius 8px, padding `24px 28px`, 24px line-height 1.3 `#FFFFFF`, a **7px** left accent bar, and a colored inner ring `inset 0 0 0 1.5px <color>`.
  - **1 (pink ring + bar `#F759B3`):** "**1 · User intent** — natural language + slash commands"
  - **2 (pink):** "**2 · Orchie reads the pillar model** — plans action"
  - **Pillar box (special):** bg `#16314a`, **2px solid teal `#13C7E5`**, centered, teal text 700. Line 1 "◆  Pillar model  ◆"; line 2 (400, 19px, `#6f95ad`) "shared state — same center as previous slide".
  - **3 (green ring + bar `#3CD343`):** "**3 · Acts** — builds in the desk"
  - **4 (pink):** "**4 · Durable artifact** — comparison · plan canvas · growth report"
  - **Arrows between boxes (`.flow-arrow`):** 46px tall, centered glyph `↓` + tiny label. Arrow 1→2: muted. 2→pillar: teal glyph + label "reads". pillar→3: green glyph + label "writes". 3→4: green glyph.
- **Feedback loop (`.loop`):** a dashed "C" bracket on the far left connecting box 4 back up to box 1. Implementation: absolutely-positioned element `left:14px; top:34px; bottom:60px; width:48px`, `border: 2px dashed #F759B3` with `border-right: none`, `border-radius: 10px 0 0 10px`; an arrowhead `▶` (pink, ~15px) at its top-right pointing into box 1. Vertical label (writing-mode vertical-rl) "external responses", italic 15px `#8a5f78`, centered along the bracket.
- **Right annotations (`.anno`):** italic 21px line-height 1.4 `#516F84`, vertically aligned to each box (the prototype interleaves empty 46px spacer rows matching the arrow gaps — in a real build, align each annotation to its box's vertical center instead):
  - by box 1: "structured intent: NL + slash commands + palette"
  - by box 2: "on-device SmolLM2 degrades gracefully"
  - by pillar: "same center as Diagram 1" (in `#6f95ad`) / "one shared model, different operator"
  - by box 3: "human stays author / reasoning is legible"
  - by box 4: "talk, then artifact, not scrollback" (in quotes) / "you keep working it → emits signal"

### Slide 7 — Tradeoffs / validation
- **Purpose:** intellectual honesty — known tradeoffs and how they'd be tested.
- **Layout:** header pattern; body is **2-column grid** `1fr 1px 1fr`, gap 72px, 1px divider column. Body vertically centered.
- **Left — HONEST TRADEOFFS:** eyebrow (default color). Then 3 items (`.tr-item`, margin-bottom 40px), each with a **6px teal `#13C7E5`** left accent bar (top/bottom inset 4px):
  - **Title (`.tr-h`):** 28px 700 white `#FFFFFF`. **Body (`.tr-p`):** 22px line-height 1.5 `#E4E9ED`.
  - 1. "Shared-model constraint" — "A pillar model that serves all surfaces means no surface gets a best-in-class standalone experience. Local optimization traded for compounding coherence."
  - 2. "Breadth vs. depth" — "60 surfaces explored, few deeply validated. Signal is wide but thin in places. A directional bet, not a proof."
  - 3. "Cold start" — "The model needs real actions before it's useful. Day-1 Orchie is weaker than day-30 Orchie. The gap must be bridged by design, not time."
- **Right — VALIDATION PLAN:** eyebrow (default color). Then 2 blocks (margin-bottom 50px):
  - **Tag (`.va-tag`):** 20px 700 pink `#F759B3` ("Riskiest assumption 1/2").
  - **Claim (`.va-claim`):** 26px italic line-height 1.4 white `#FFFFFF`.
  - **Test (`.va-test`):** 21px line-height 1.5 `#516F84`, prefixed `→`.
  - Block 1: claim "Students will engage with life-sim decisions as a meaningful proxy for real career choice." / test "Test: 5-session observational study. Measure revisit rate and unprompted 'I realized…' moments. Threshold: >60% return within 7 days without a prompt."
  - Block 2: claim "Buyers trust a shared pillar model over the bespoke assessments they already own." / test "Test: buyer panel (n=8–10). Present side-by-side; score 'I'd replace my current tool' 1–5. Threshold: mean ≥3.8, and they can articulate the tradeoff."

### Slide 8 — Same shape (comparison table)
- **Purpose:** map each Orchard decision to its enterprise-platform analog.
- **Layout:** header pattern; body vertically centered. A 2-column head row of eyebrows, then 6 table rows, then a centered footnote.
- **Head row:** 2-col grid `1fr 1fr` gap 64px, eyebrows "Orchard decision" and "Enterprise platform analog" (default eyebrow color).
- **Rows (`.cmp-row`):** 6 rows, gap 14px. Each: 2-col grid `1fr 1fr` gap 64px, bg `#1a3850`, radius 6px, padding `22px 30px 22px 36px`, `align-items: center`, with a **6px** left accent bar.
  - **Left cell:** 24px white `#FFFFFF`. **Right cell:** 23px line-height 1.4 `#E4E9ED`.
  - Row accent colors in order: teal, teal, green, pink, green, pink.
  - 1 (teal): "Pillar model (read + write per student)" → "Normalized data model; every integration is a mapping, not a silo"
  - 2 (teal): "60 surfaces, one progression" → "Multi-surface analytics from a single schema — new surfaces compose in cheaply"
  - 3 (green): "Life Sim → behavioral signal" → "Behavioral instrumentation as a first-class product feature"
  - 4 (pink): "Orchie builds artifacts, not chat" → "AI layer that acts on structured state, not unstructured chat history"
  - 5 (green): "Shared model vs. best-in-class tools" → "Platform coherence over point-solution depth — the classic platform bet"
  - 6 (pink): "User ≠ buyer (student vs. district)" → "Student engagement earns institutional trust; same PLG tension in enterprise"
- **Footnote (`.cmp-foot`):** centered italic 23px `#5f7c92`: "One model serving the student's intrinsic exploration and the buyer's accountability — that's the thesis, in either market." (in quotes).

---

## Interactions & Behavior

### Navigation model (the "navigable webpage" requirement)
Implement slide navigation in the target stack (replace `deck-stage.js`):
- **One slide visible at a time**, occupying the scaled 1920×1080 stage.
- **Next / Previous:** `→` / `Space` / `PageDown` = next; `←` / `PageUp` = prev; `Home` = first, `End` = last. On touch, tap right/left half of the stage = next/prev (but ignore taps on links/buttons).
- **Direct jump:** number keys, and/or a thumbnail rail or dot indicator. (Keep current-slide state in the URL — e.g. `?slide=3` or `#3` — so reloads and deep links land on the right slide. This is a hard requirement for a real web page.)
- **No auto-advance.** No progress bar and no slide numbers were requested in the design (don't add them unless asked).
- **Non-active slides** should remain mounted (preserve any state) but hidden, OR be route-swapped — implementer's choice, but transitions should be instant or a simple cross-fade (≤200ms). The brand calls for **deliberate, non-bouncy** motion. Respect `prefers-reduced-motion`.

### Entrance animations (optional, brand-consistent)
If adding entrance motion, make the **visible end-state the base style** and animate *from* hidden, gated on the active slide + `prefers-reduced-motion: no-preference`, so print/export/reduced-motion show full content. Simple opacity/translate fades only; no infinite loops on slide content.

### Hover / focus
This is a presentation, so most elements are non-interactive. Keep a visible focus ring for keyboard nav: `2px solid #13C7E5`, 2px offset (Orchard standard, accessibility matters). If you add clickable nav affordances (dots/thumbnails/arrows), use teal `#13C7E5` for active/hover.

## State Management
Minimal:
- `currentSlideIndex` (0–7), synced to the URL.
- `totalSlides = 8`.
- Optional: `reducedMotion` from media query.
No data fetching. All content is static (some fields are author-fill placeholders — see below).

### Author-fill placeholders (keep them obvious until filled)
Rendered in **teal `#13C7E5`** in the prototype so they read as "fill me in":
- Slide 1: `[Your name]` (switch to white `#FFFFFF` once real).
- Slide 3: `[Kept 1 …]`, `[Kept 2 …]`, `[Killed 1 …]`, `[Killed 2 …]`, `[competitor]`, and the user-quote block.
Consider exposing these as props/config so they're easy to set without touching layout.

---

## Design Tokens
Source of truth: **`orchard.css`** (import it or port the `--*` variables). Key values used in this deck:

**Brand accents**
- Teal (primary/active/focus): `#13C7E5` — token `--orchard-teal`
- Green (growth/progress): `#3CD343` — `--orchard-green`
- Pink (AI / accent): `#F759B3` — `--orchard-pink`

**Neutrals / surfaces**
- Canvas (slide bg): `#0C2235` — `--bg-canvas` / `--ink-2`
- Letterbox / outer stage: `#060d16`
- Elevated card/row bg: `#1a3850` (deck-local `--card`)
- Recessed/soft card bg: `#16314a` (deck-local `--card-soft`)
- Hairline rule / chip border: `#2a4a63` (deck-local `--rule`)
- Body text: `#E4E9ED` — `--ink-9` / `--fg-body`
- Strong heading text: `#FFFFFF` — `--ink-11` / `--fg-primary`
- Muted/meta text: `#516F84` — `--ink-5` / `--fg-muted`
- Misc muted quote/footnote tints used: `#6f95ad`, `#5f7c92`, `#8a5f78`
- Eyebrow tints: teal `#4fb6cf`, pink `#c764a0`
- Lane-header tints (slide 5): explore `#6fe0d0`, plan `#7be29a`, learn `#d989c4`

**Typography**
- Family: **Open Sans** (weights 400 / 600 / 700 / 800; italics used). Loaded via Google Fonts in the prototype:
  `https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700&display=swap`
- Orchard's broader system also defines Inter (UI/buttons), Bitter (serif), Quicksand/Nunito (wordmark display) — see `orchard.css` — but **this deck uses only Open Sans.**
- Sizes (at 1920×1080 design scale): hero 132 · statement 86 · slide title 50 · card heading 38 · pillar/lane 20–22 · body 21–25 · eyebrow 16. **Don't rescale these to "web" sizes — they're authored for the 1920px canvas and scale with the stage transform.**

**Radius**
- Cards/rows: 6–10px (rows 6, cards 8–10). Chips: 7px. (Orchard tokens: `--r-md` 6, `--r-lg` 8, `--r-xl` 12.)

**Spacing**
- Slide padding `84px / 112px`. Common gaps: 12 / 14 / 16 / 18 / 20 / 36 / 72px. 4px base grid.

**Shadows**
- None used on these slides (depth comes from bg contrast — Orchard convention). Keep it flat.

---

## Assets
All in `assets/` (Orchard brand assets, transparent PNGs):
- `wordmark-white.png` (620×194) — full Orchard wordmark, white text + colored logomark. Title slide.
- `logo.png` (144×193) — standalone "O" logomark. Corner mark on content slides.
- `orchie-wave.png` (170×197) — Orchie mascot waving. Title slide.
- `landscape-bg.png` (422×170) — flat navy rolling-hills silhouette. Title slide bottom.

In a real codebase, prefer the project's existing brand-asset pipeline if one exists; otherwise drop these into the static assets directory. The `◆`, `→`, `↓`, `▶` glyphs are plain Unicode characters (not images).

---

## Files
- `Orchard v-next.html` — the full prototype; all 8 slides as `<section>` children of `<deck-stage>`. **Primary reference.** All inline `<style>` holds the exact CSS for every slide.
- `orchard.css` — Orchard design-system tokens + base type styles. Import/port this.
- `deck-stage.js` — the scaling + keyboard/thumbnail/print web component used by the prototype. **Reference only** — replace with the target stack's navigation. (If you want the behavior verbatim, it's a dependency-free web component you can keep, but it's not required.)
- `assets/` — brand images listed above.

To preview the prototype as-is: serve this folder over a static server (e.g. `npx serve .`) and open `Orchard v-next.html` — arrow keys navigate, the left rail shows thumbnails.
