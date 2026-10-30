import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CsJyRqpi.js";import{i as n,r}from"./react-Bcviin_k.js";import{a as i,o as a,s as o}from"./blocks-BsnwBHoz.js";var s;function c(){return(c=e((()=>{s=`# Findings: eval 001

Analysis of \`report.md\` (20 runs, Sonnet 4.6 building, Opus 4.6 judging). Small sample: 10 runs per condition, so read differences of a few tenths as noise.

## In one line

The agent layer made every run follow the system mechanically, at 60% more cost. It did not make the screens better by an independent judge's measure, and both conditions shipped the same biggest flaw.

## What happened

**1. Conformance went to 100%.** Guided runs: 10/10 with no checker errors, 10/10 typecheck. Baseline: 6/10 and 8/10, with 4 raw colors, 4 raw spacing values and one screen with two competing primary buttons. The typecheck doesn't depend on any tool the guided agents had, so the baseline's two type errors are real: one passed \`style\` to Button and one passed a \`ref\`.

**2. The judge saw no difference.** Overall 2.9 baseline vs 2.8 guided, out of 5; 18 of 20 runs scored 3. Hierarchy, copy, accessibility and consistency were all within 0.1.

**3. Both conditions missed async failure.** On the two tasks where an async prop could fail without the prompt saying so (send, delete), 0 of 4 baseline and 0 of 4 guided runs handled the rejection; the button just stops spinning. Where the prompt said saving could fail (business hours), 2 of 2 in each condition handled it. The principles say to design "the states past the happy path", but nothing checks it, and guided agents fixed exactly what \`check_code\` flagged and stopped. **Agents treat the checker as the definition of done.** Judgment that is general or uncheckable didn't transfer.

**4. Guidance changed conventions; the judge doesn't reward conventions.** In delete-clients, both guided runs followed the destructive-actions pattern exactly: an outline danger trigger, "Keep clients" instead of "Cancel", solid danger only on the confirm. Both baseline runs used a soft danger trigger and "Cancel". All four scored 3. Consistency across a product is the point of a system, and a one-screen rubric can't see it.

**5. The baseline already had some guidance.** \`Button.tsx\` doc comments say "One solid button per view; soft or outline for the rest", and baseline agents read the source. Part of the judgment reached the baseline through the code, which is an argument for writing doc comments as guidance.

**6. Cost.** Guided runs cost $0.26 vs $0.16, took 97s vs 54s, and used 12.8 turns vs 7. Most of the extra is reading guidance before writing.

## Limits of this eval

- The judge reads code; it never sees the rendered screen.
- It doesn't know BFF only has Button, so it marked guided business-hours down for native inputs that have no BFF replacement yet.
- Absolute 1-5 scores bunch at 3. Pairwise comparison (which of these two is better) would be more sensitive.
- One subject model, two reps, five tasks.

## What to change

1. **Make async failure checkable.** Add a \`check_code\` rule for an awaited prop promise with no error handling, and make the principle concrete: every async action shows what failed and how to retry.
2. **Forward refs from Button.** A baseline run needed one to return focus after a dialog. That's a real API gap, found by an agent.
3. **Improve the judge:** give it the component inventory, compare outputs pairwise, and judge rendered screenshots as well as code.
4. **Rerun** after 1 and 2, with more reps, and with the form controls ported, so tasks can be built from the system instead of around it.
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Evals/001 Button baseline`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),o(),c()})))()}f();export{u as default};