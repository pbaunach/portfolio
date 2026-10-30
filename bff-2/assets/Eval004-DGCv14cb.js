import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-wseOPJ9U.js";import{i as n,r}from"./react-DGBXd3BL.js";import{a as i,o as a,s as o}from"./blocks-BeTJN8Vc.js";var s;function c(){return(c=e((()=>{s=`# Findings: eval 004

Analysis of \`report.md\` (30 runs: 5 tasks x 2 conditions x 3 reps; Sonnet 4.6 building, Opus 4.6 judging). Same tasks, reps and judge as [eval 003](../003-undo-copy-trim/findings.md). What changed is the system: BFF gained TextField, Select, Checkbox, RadioGroup and Switch, their guides, and a \`forms\` pattern. Both conditions got every component's source (without the guides), so the baseline gained the components too.

## In one line

The components raised the floor for everyone; the guidance still adds on top. Guided won 8 of 15 head-to-head comparisons and lost 2, its best result yet, at a +40% cost premium, down from +51%. Two weaker spots turned out to be measurement problems, and both are fixed.

## What happened

**1. Components did what guidance alone couldn't.** In eval 003, every business-hours run in both conditions built its inputs from raw HTML (2 to 4 native inputs each). In 004, all six runs built the whole form from BFF: Checkbox for "Closed" and Select for the times, with zero native inputs, baseline included. No rule or pattern did that; having the component in the box did. The judge's top business-hours complaint in 003 ("inline styles bypass the design system") is gone.

**2. Guided pulled further ahead where guidance carries judgment.**

| | 003 (guided / tie / baseline) | 004 |
|---|---|---|
| overall | 7 / 7 / 1 | **8 / 5 / 2** |
| states | 9 / 4 / 2 | **11 / 4 / 0** |
| accessibility | 7 / 5 / 3 | **9 / 4 / 2** |
| copy | 10 / 5 / 0 | 10 / 3 / 2 |
| consistency | 4 / 11 / 0 | 1 / 14 / 0 |
| hierarchy | 1 / 9 / 5 | 3 / 5 / 7 |

Consistency is now almost all ties: once both conditions build from the same components, they look alike. The gap between them moved to what the components can't decide for you: what happens on failure, what's announced to screen readers, what the words say.

Business hours flipped from leaning baseline in 003 (1 loss, 2 ties) to guided winning 2 of 3, with the \`forms\` pattern's change-only Save/Discard row and per-day hidden labels named in the judge's reasons.

**3. The hierarchy losses are mostly measurement.** Of the 7 baseline wins on hierarchy:

- **3 credit the baseline for writing \`variant="solid" tone="accent"\` out.** Guided agents leave Button's defaults implicit, which renders identically. A judge reading code took the explicit props as more deliberate emphasis. **Fixed:** the judge is now told each component's defaults and that omitted props render the same.
- **1 is the broken file below.**
- **1 is a real disagreement:** the judge wanted a solid danger Delete in the bulk-action bar; BFF deliberately keeps the trigger quiet and saves solid danger for the confirmation. That's a design position, kept on purpose.
- **2 are about page structure** (a missing page header in the empty state; overall polish).

**4. \`check_code\` passed a file that doesn't compile.** One guided delete-clients run put a JSX comment right after \`confirming && (\`, which is a syntax error (it accounts for all 11 of the guided type errors). The comment explained that the scrim color had no token, which is the principles asking agents to say so when they compose something the system lacks. The agent ran \`check_code\` and got PASS, because the TypeScript parser recovers from errors and the rules ran on the recovered tree. **Fixed:** parse errors are now a \`syntax-error\` finding that fails the check. This run's file now fails at line 111. Three guide examples were themselves sibling fragments that didn't parse; they're wrapped in fragments now, since agents copy examples.

**5. The baseline got more expensive, the guidance relatively cheaper.** Baseline runs went from $0.158 to $0.175 and 7.0 to 8.6 turns, because there's more source to read. Guided went from $0.238 to $0.245. The premium fell to +40%.

## Across the four evals

| | 001 | 002 | 003 | 004 |
|---|---|---|---|---|
| Components in BFF | 1 | 1 | 1 | 8 |
| Pairwise overall (guided / tie / baseline) | (not run) | 4 / 9 / 2 | 7 / 7 / 1 | 8 / 5 / 2 |
| Guided cost vs baseline | +60% | +77% | +51% | +40% |
| Baseline runs with an unhandled await | 4/10 | 6/15 | 6/15 | 6/15 |
| Guided runs with an unhandled await | 4/10 | 0/15 | 0/15 | 0/15 |

## Limits

- Code-only judging, one subject model, one judge, fifteen pairs, five tasks the guidance was tuned against.
- The two scoring fixes (the judge told about defaults, syntax errors failing the check) apply from the next run; this run's numbers are as scored at the time.

## What to change next

1. **Modal.** Agents hand-built dialogs in the send and delete tasks, with focus traps and scrims as the judge's recurring complaints. A Modal (React Aria's Dialog) is the most-needed next component, and an overlay token with it.
2. **Held-out tasks** written by someone other than whoever wrote the guidance, to test whether it generalizes.
3. **Render the outputs** and judge screenshots pairwise.
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Evals/004 Form controls`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),o(),c()})))()}f();export{u as default};