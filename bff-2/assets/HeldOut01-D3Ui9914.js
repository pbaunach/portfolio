import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CsJyRqpi.js";import{i as n,r}from"./react-Bcviin_k.js";import{a as i,o as a,s as o}from"./blocks-BsnwBHoz.js";var s;function c(){return(c=e((()=>{s=`# Findings: held-out eval h01

Analysis of \`report.md\`: 32 runs on the eight held-out tasks in \`evals/tasks-heldout.json\` (2 conditions x 2 reps; Sonnet 4.6 building, Opus 4.6 judging, with the judge told each component's defaults). The tasks were written blind by an agent that never saw the guidance, and this run is **report only**: nothing in the guidance changes because of it (see the protocol in \`evals/README.md\`). The system is the one from commit 9c2f0df (ten components, Modal included), before the BFF 1 visual restyle; the guidance and checker are what's being tested, not the styling.

## In one line

The guidance generalizes. On tasks it was never tuned against, guided won 7 of 16 head-to-head comparisons and lost 1, with no losses at all on accessibility, at a +45% cost premium.

## What happened

**1. Pairwise looks like the tuning set, or better.**

| | Held-out h01 (guided / tie / baseline) | Tuning set, eval 004 |
|---|---|---|
| overall | **7 / 8 / 1** | 8 / 5 / 2 |
| accessibility | **10 / 6 / 0** | 9 / 4 / 2 |
| states | 10 / 2 / 4 | 11 / 4 / 0 |
| consistency | 6 / 9 / 1 | 1 / 14 / 0 |
| copy | 6 / 6 / 4 | 10 / 3 / 2 |
| hierarchy | 5 / 7 / 4 | 3 / 5 / 7 |

Guided won outright on the public review page and the SMS composer (2 of 2 each) and never lost those two. Its one overall loss was the delivery log.

**2. Absolute scores separated for the first time.** Overall 3.7 guided vs 3.4 baseline; states 4.0 vs 3.6; copy 4.1 vs 3.8. On the tuning set these sat within 0.1 of each other. The held-out tasks are bigger and harder, which leaves more room for the guidance to matter.

**3. The mechanical gap is the same.** Guided: 16/16 with no checker errors, 16/16 typecheck, 0/16 unhandled awaits. Baseline: 11/16, 12/16 and 6/16. The baseline's most common miss was raw scale steps (\`--bff-gray-11\` and the like, 16 times), which \`tokens.css\` puts in front of it and nothing tells it not to use.

**4. Where the baseline won, it won on product depth, not the system.** All four of its wins on states, and its one overall win, came from domain judgment the guidance doesn't try to teach: telling a newly turned-on automation apart from a paused one, showing sample values beside each CSV column while mapping, tracking retry results per recipient in the delivery log. Two judge notes also counted inline style objects against guided runs for losing hover and focus states; the guidance's own examples use inline styles, so this is something the examples teach.

**5. Guided agents left warnings, mostly with reason.** Five \`one-primary\` warnings (multi-step flows like CSV import, and pages with a primary per section) and three \`no-native-control\` (a star rating on the review page, which BFF has no component for). That's the principle "warnings need a reason to stay" working as intended, though nothing records the reason.

**6. Cost.** $0.78 vs $0.54 per run (+45%), 16.9 vs 11.1 turns. The held-out tasks cost three times what the tuning tasks do in both conditions.

## Limits

- The task writer, builders and judge are all Claude models. Tasks from people who build for salon and studio owners would be a stronger test.
- Code-only judging; 16 pairs; one subject model.

## What this suggests (for the next tuning round, not applied here)

1. Say in \`tokens.css\` itself, not only in the guidance, that scale steps are not for product code. That's where the baseline's most common mistake came from.
2. The examples teach inline style objects. A class-based example, or a small layout utility, would stop the lost hover and focus states.
3. A rating input, and a way to record why a warning was kept.
4. Retire these eight into the tuning set when any of the above is acted on, and write a new held-out set.
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Evals/Held-out h01`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),o(),c()})))()}f();export{u as default};