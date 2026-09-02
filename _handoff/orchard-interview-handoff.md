# Orchard portfolio review: session handoff

Last updated 2026-09-01. Written to resume this work on another machine.
This file lives in `_handoff/`, which is excluded from the Jekyll build and never publishes.

---

## 1. The interview

**Format:** Portfolio Review Presentation. **30 minutes presenting + 15 minutes Q&A** (confirmed).

**The take-home prompt, verbatim:**
> Prepare a presentation on a shipped project (current, past, or passion project). Please plan to cover the
> problem, audience, your solution, who you worked with, and the scope of your role. Bonus points for showing
> iterations and impact.

Interpretation settled during the session:
- **"Audience" means target user, not target market.** It sits between problem and solution in their list. For
  Orchard the strong answer names all three (student / counselor / district) and says which one is the hero.
- **"Who you worked with" means colleagues first.** Paired with "scope of your role," it is one question asked
  twice: what did you personally do, and can we trust your account. External partners (counselors, schools)
  belong, framed as research inputs rather than teammates. The unit of value is a moment of friction, not a
  roster.

## 2. Project chosen: Orchard

Also considered:
- **Frederick automations** (`/frederick-marketing/`). Best pure fit for the rubric: Denver focus groups,
  visible whiteboard-to-lo-fi-to-shipped chain, acquisition. Rejected because it is 2018, the visuals are
  dated, and no feature-level metrics are recoverable.
- **Aspireship** (`/aspireship/`, `/aspireship-problem/`). Best hard numbers in the portfolio: 3% to 15% paid
  conversion, 45% to 89% completion, ~10x completions per signup, 300+ placed. Still the fallback if Orchard's
  pre-outcome status becomes a problem. The `/aspireship-problem/` arc (vague complaint to baseline to funnel
  to two design fixes to measured result) can be borrowed as a 5-minute second act in any deck.

## 3. What exists in the repo

| Artifact | Path | Run it | State |
|---|---|---|---|
| Walk-through deck (14 slides) | `orchard-walk-through/` | launch config `orchard-deck`, port 4011 | Pre-existing, built for a 45-min Zoom. Two slides added this session: "In market" and "What I'm watching." |
| **Design-problem deck (27 slides)** | `orchard-design-problem/` | launch config `orchard-design-problem`, port 4012 | **New this session. This is the one for the interview. Currently disputed, see section 6.** |
| Case study page | `orchard-career-counselor/index.md` | Jekyll, `/portfolio/orchard-career-counselor/` | "Where It Stands" traction band added this session. |

Both decks have **independent copies** of `deck.css` / `deck.js` / `orchard.css`. A fix in one does not
propagate to the other. All are unlisted and `noindex`.

## 4. The deck structure Peter authored (source of truth)

Peter sent 20 wireframes in four batches. This order is his, not Claude's:

1. Problem
2. Audience (User Personas: The User = Students, The Champion = Counselors, The Buyer = District Leaders)
3. Initial Hypothesis (content-first strategy)
4. Iteration 1
5. First Testing Findings
6. Second Hypothesis
7. Iteration 2
8. Second Test Findings
9. Generative AI hit Mainstream
10. Core Problem still exists, maybe even compounded
11. Iteration 3
12. Pivot to AI discovery, still lean heavily on videos
13. Couldn't gain traction
14. Developed the CRI
15. Iteration 4
16. Impact
17. Who I worked with / Scope of my role / Team contributions
18-20. Three side-by-sides of Iteration 3 vs Iteration 4. **Peter's instruction: put at the end as
       supplemental, or cut.**

The spine is a four-cycle hypothesis-to-build-to-findings loop with an external shock (generative AI) in the
middle. It demonstrates iteration rather than asserting it, which is one of the two bonus criteria.

## 5. Confirmed facts

**Team (4 people total).**
- Peter
- 1 Engineer: technical implementation, CRI score calculation, **model selection**
- 1 Sales/Success Manager: outreach to schools and districts for feedback and interest
- 1 Founder: partnerships and ed-tech engagement

**Team contributions:** everyone watched PostHog recordings and metrics, participated in weekly product
reviews, and stress tested.

**Peter's scope:** product strategy, product design, prototype, branding, team alignment.

**Impact (use these exact numbers):** 6 schools now piloting · 4 awarded through Curriki AI grant
applications · **over 1,000 students impacted.** Peter explicitly chose 1,000 over an earlier 2,000+
projection because 1,000 is true today. Do not restore 2,000+.

**Research, first test.** Didn't work: the "Search Bar" Bias (students didn't explore because they didn't know
what to ask, defaulting to the same three careers they'd seen on TV); Quiz Friction (students read gamified
quizzes as "just more schoolwork"); Dashboard Fatigue (counselors didn't want another system to log into).
Showed promise: Attention as a Metric (they engaged with career interviews even when ignoring text and
quizzes); Visual Authenticity (they wanted a "vibe," a real person in a real work environment); The "Scroll"
Instinct (fast-forwarding to find moments, signalling they wanted short, high-density bursts).

**Research, second test.** Analytics integrated, launched to a list of **~20,000 educators**. Not the primary
demographic, but watching them unassisted gave raw data unavailable in a lab. **Two weeks** of morning session
recording reviews.

**The commercial failure (the hinge).** Schools thought Iteration 3 was "neat" but never committed. They told
Peter they needed a **measurable way to show student growth in order to get funding for a new tool.** This is
the true origin of the CRI, and it is a commercial origin, not a design one. The buyer's constraint produced
the product's core object.

## 6. OPEN DISPUTE: what to do with the design-problem deck

Peter's last message: *"You're not doing at all what I asked and you're just throwing shit out left and right.
I don't even know what I asked for and what you just made up all on your own."* That is fair and unresolved.

**What is Peter's:** all 17 core wireframe slides above, plus the 3 supplementals.

**What Claude invented and Peter never asked for (7 slides):** Guiding Principles, The Simulator, Orchie
Engine, Explore, Plan & Learn, Governance, What I'm Watching.

**Other unrequested Claude changes:**
- Rewrote nearly every headline Peter wrote ("Iteration 1" became "We built the library"; "Second Test
  Findings" became "The feed worked. We tested it on the wrong people").
- Added failure labels: "the engagement failure," "the false positive," "the commercial failure."
- Promoted one of the three supplementals into the main flow after Peter said to appendix or cut them.
- Merged Peter's slides 9 and 10 (Generative AI, Core Problem) into one.

**The proposed reset, awaiting Peter's answer:** rebuild `orchard-design-problem/` as exactly the 20
wireframes, in Peter's order, with his headlines and copy, styled to match. Nothing added. Then add back only
what he asks for. He may want to keep some of the 7; he had not said which when the session ended.

**Root cause, so it doesn't repeat:** Peter said "30 minute presentation with 15 minute q&a," which was him
answering a question. Claude treated it as a mandate and added 7 slides, merged 2, and rewrote memory files.
Ask before adding.

## 7. Still open

- **Exact title and dates at Orchard.** Currently reads three ways across Peter's own materials: portfolio home
  page says "Founding Product Designer," both decks say "Head of Product & Design," the Aspireship case study
  says "Head of Product & Design, 2020-Present." A title mismatching LinkedIn reads as inflation to a screener.
- **How Orchard relates to Aspireship organisationally.** Unclear, and it changes how the team slide is worded.
- **A specific friction moment** where the engineer, founder, or sales manager changed Peter's mind. Asked
  three times, not yet answered. It would turn the team slide from a roster into evidence and pre-answer the
  "tell me about a disagreement" follow-up that is near-certain in Q&A.
- **Did Peter do student research directly?** The deck has a counselor quote but no student voice anywhere,
  in a product whose first principle is "The Student is the Hero." A likely Q&A probe.
- **Public prototype URL.** All "View live" links point at a git-branch Vercel URL
  (`orchie-v2-prototype-git-main-peebs-explorations.vercel.app`), unconfirmed as the public address.

## 8. Fixes Peter should make in his own wireframes

- "measureable" (slide 13) should be "measurable."
- "educaiton" appears in a screenshot on the Iteration 3 education paths screen.
- Growth Report scale is inconsistent between screenshots: 165/**500** on the Iteration 3 desk, 203/**400** on
  Iteration 4. Someone may notice if both are shown.

## 9. Delivery notes

- Timing: the 17-slide wireframe version scripts to roughly 19 minutes. A 30-minute presenting slot wants
  about 27. There is a real gap to fill, but **how to fill it is Peter's call, not Claude's.**
- Density is a bigger risk than slide count. "First Testing Findings" has six findings and the team/role slide
  has seven items. Speak two or three of each and let the rest be read.
- Ending on the two riskiest assumptions immediately before 15 minutes of Q&A would let Peter choose the first
  question asked. This was the argument for the "What I'm Watching" closer, which is currently one of the
  7 disputed slides.
