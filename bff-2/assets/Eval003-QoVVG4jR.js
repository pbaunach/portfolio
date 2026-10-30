import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CLuwDkeU.js";import{i as n,r}from"./react-DzFjYEdr.js";import{a as i,o as a,s as o}from"./blocks-BasB7sgR.js";var s;function c(){return(c=e((()=>{s=`# Findings: eval 003

Analysis of \`report.md\` (30 runs: 5 tasks x 2 conditions x 3 reps; Sonnet 4.6 building, Opus 4.6 judging). Same tasks, reps and judge as [eval 002](../002-async-pairwise/findings.md), so the two compare directly.

Changes since 002:

- **Async copy:** the \`async-actions\` pattern now says to show the rejection's own message when it has one, and to write a fallback that names the action and guesses no cause. The example no longer says "Check your connection".
- **Undo:** a new \`undo\` pattern. Row actions are quiet only when something catches mistakes: undo for reversible actions, a confirmation for irreversible ones.
- **Handlers:** "every button does something" in \`action-groups\`, plus a new \`empty-handler\` check.
- **Reading:** \`get_guidelines\` now carries the component list and a generated token sheet, and \`list_tokens\` drops color values.

## In one line

All three problems eval 002 found are gone, guided now wins 7 of 15 head-to-head comparisons and loses 1, and the cost premium fell from +77% to +51%.

## What happened

**1. Each targeted fix landed, including the one with no check behind it.**

| | 002 guided | 003 guided | 003 baseline |
|---|---|---|---|
| Files guessing "check your connection" | 7/15 | 0/15 | 1/15 |
| Async screens showing the rejection's message | 0/9 | 9/9 | 3/9 |
| Campaign tables with an Undo | 0/3 | 3/3 | 0/3 |
| Runs with an empty handler | 3/15 | 0/15 | 3/15 |
| Runs with an unhandled await | 0/15 | 0/15 | 6/15 |

The copy fix is the interesting one. Nothing in \`check_code\` looks at error copy, yet it went from 0/9 to 9/9. Eval 001 suggested agents only fix what the checker sees. The sharper reading is that **vague guidance doesn't transfer, specific guidance does, and the example has to model the rule exactly**, because the example is what gets copied. Eval 002's example taught the wrong copy; this one teaches the decision (\`err.message\`, else a fallback), and agents copied the decision.

**2. Pairwise moved toward guided on every criterion except hierarchy.**

| | 002 (guided / tie / baseline) | 003 (guided / tie / baseline) |
|---|---|---|
| overall | 4 / 9 / 2 | **7 / 7 / 1** |
| copy | 4 / 5 / 6 | **10 / 5 / 0** |
| states | 6 / 3 / 6 | **9 / 4 / 2** |
| accessibility | 7 / 6 / 2 | 7 / 5 / 3 |
| consistency | 6 / 8 / 1 | 4 / 11 / 0 |
| hierarchy | 1 / 11 / 3 | 1 / 9 / 5 |

Absolute scores barely moved (overall 2.9 baseline vs 3.1 guided). Pairwise is where differences show.

**3. Hierarchy now leans baseline, and the guidance is a likely cause.** In business hours, both losses come down to Discard. Guided runs follow the Button guide (secondary is \`outline\` neutral); the baseline runs that won used a quieter ghost Discard and showed the actions only once something changed. The judge read that as a sharper hierarchy. The guide treats every secondary action the same, but discarding edits is a step back that shouldn't compete with Save. Worth revisiting, not as a bug but as a rule that's too coarse. (The judge's one-sentence reason covers the whole comparison, so not every hierarchy call is explained by it.)

**4. Cost came down.** Guided runs: $0.24 vs $0.29 in 002, 11.5 turns vs 13.7, 91s vs 119s. Against the baseline that's +51%, down from +77%, with two more patterns in the system than eval 001 had. Putting the token names and component list into \`get_guidelines\` meant fewer calls; agents still read about one pattern per run on demand.

## Across the three evals

| | 001 | 002 | 003 |
|---|---|---|---|
| Pairwise overall (guided / tie / baseline) | (not run) | 4 / 9 / 2 | 7 / 7 / 1 |
| Guided cost vs baseline | +60% | +77% | +51% |
| Guided runs with 0 checker errors | 10/10 | 15/15 | 15/15 |

## Limits

- Code-only judging. Nothing is rendered, so visual quality is still unmeasured.
- One subject model, one judge model, fifteen pairs per eval.
- The tasks were written by the same person (and model) as the guidance. A held-out set of tasks written by someone else would test whether the guidance generalizes or just fits these five.

## What to change next

1. **Split secondary actions in the Button guide:** "go back" actions (Cancel, Discard, Back) are \`ghost\` neutral, and "do something else" actions (Export, Save draft) are \`outline\` neutral. Then check whether hierarchy recovers.
2. **Write held-out tasks** that the guidance wasn't tuned on, and run them before calling any of this general.
3. **Render and judge screenshots**, pairwise.
4. **Port form controls.** Two of five tasks still build inputs from raw HTML, which caps how consistent they can be.
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Evals/003 Undo, copy, trim`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),o(),c()})))()}f();export{u as default};