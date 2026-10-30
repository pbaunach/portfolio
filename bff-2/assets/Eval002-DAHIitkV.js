import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-C-iS7TtF.js";import{i as n,r}from"./react-B7Nag09u.js";import{a as i,o as a,s as o}from"./blocks-CssxyvJc.js";var s;function c(){return(c=e((()=>{s=`# Findings: eval 002

Analysis of \`report.md\` (30 runs: 5 tasks x 2 conditions x 3 reps; Sonnet 4.6 building, Opus 4.6 judging). Changes since [eval 001](../001-button-sonnet/findings.md): Button forwards refs; \`check_code\` has an \`unhandled-async\` rule; the principles and a new \`async-actions\` pattern say every async action can fail; the judge is told BFF only has Button, and also compares baseline and guided outputs pairwise, in both orders.

## In one line

Making the async lesson checkable fixed it: unhandled awaits went from 6/15 runs to 0/15. With a sharper judge, guided now wins more pairwise comparisons than it loses, and the clearest costs are runtime and one new failure the guidance caused.

## What happened

**1. The checkable fix landed completely.** Baseline: 6 of 15 runs left an await unhandled, so failed sends and deletes went silent. Guided: 0 of 15. The judge's top issue for guided send and delete dialogs is no longer missing error handling; it moved on to focus trapping and other things. This is eval 001's lesson working: what the checker can see, agents fix.

**2. Pairwise shows a difference the absolute scores hide.** Absolute overall was 3.1 vs 3.1 again. Pairwise, with a win counted only when both orders agree:

| | guided better | tie | baseline better |
|---|---|---|---|
| overall | 4 | 9 | 2 |
| consistency | 6 | 8 | 1 |
| accessibility | 7 | 6 | 2 |
| states | 6 | 3 | 6 |
| copy | 4 | 5 | 6 |
| hierarchy | 1 | 11 | 3 |

Guided is better at consistency and accessibility, as intended. States is split, and copy and hierarchy lean baseline, for reasons below. Fifteen pairs is still a small sample.

**3. The guidance's own example copy got copied where it was wrong.** The \`async-actions\` pattern shows "Couldn't send the campaign. Check your connection and try again." Seven guided files reuse the "connection" wording. In business hours, where the task says the server rejects bad times, all three guided runs replaced the server's message with a generic string (one says "Check your connection" for a validation error); two of three baseline runs kept the server's message. The judge preferred baseline there. **Example copy in guidance is treated as a template.** The pattern needs to say: use the server's message when it explains the problem, and write generic copy only for the failures it can't explain.

**4. Guided campaign tables shipped unwired.** All three guided runs left the row actions and the New campaign button as empty handlers; all three baseline runs wired them. The guided runs also styled Archive as a quiet ghost button, per the row-actions guidance, where two of three baseline runs made it danger. The judge read Archive as destructive. BFF's position (archive is reversible, so prefer undo over a danger button) is defensible, but neither condition offered undo, so the guidance produced the quiet button without the undo that justifies it. The empty handlers have no obvious cause in the guidance; it's worth watching for in the next run rather than explaining now.

**5. Cost went up, not down.** Guided runs cost $0.29 vs $0.16 (+77%), took 119s vs 54s, and used 13.7 turns vs 7.1. The new pattern added reading time. The guidance costs more than it did in eval 001.

## Limits

- Still code-only judging; nothing is rendered.
- The judge flagged guided send dialogs for "no confirmation before sending", but the task is the review-and-send step, which is the confirmation. Judge errors like this are part of the noise.
- One subject model. Fifteen pairs.

## What to change next

1. **Fix the async-actions copy guidance:** prefer the server's message when it says what's wrong; keep generic copy for network failures; never mention a cause you don't know.
2. **Close the archive gap:** add an undo pattern (notification with Undo) so reversible actions have the thing that justifies their quiet style. Or, if that's out of scope, say archive gets \`outline\` danger in rows until undo exists.
3. **Watch for stubbed handlers** in the next run, and add a \`check_code\` warning for empty \`onPress\` handlers if it recurs.
4. **Trim what agents read.** Guided cost keeps rising with each pattern. A \`get_pattern\` index with one-line summaries, read on demand, should cut turns.
5. **Render.** Pairwise on screenshots, not just code, before drawing conclusions about visual quality.
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Evals/002 Async and pairwise`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),o(),c()})))()}f();export{u as default};