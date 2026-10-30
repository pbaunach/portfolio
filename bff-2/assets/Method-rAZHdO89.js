import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CLuwDkeU.js";import{i as n,r}from"./react-DzFjYEdr.js";import{a as i,o as a,s as o}from"./blocks-BasB7sgR.js";var s;function c(){return(c=e((()=>{s=`# Evals

Does the agent layer make agents build better BFF screens? Each task runs in two conditions, then gets scored three ways.

## Conditions

Both conditions give a headless Claude Code agent the same workspace: \`bff/react/\` (every component's source, without its guide), \`bff/tokens.css\` (every token), and a \`CLAUDE.md\` naming them. That's a design system as most companies ship it today.

- **baseline**: only that.
- **guided**: the same, plus the \`bff\` MCP server and one extra line in \`CLAUDE.md\`: read the guidelines first, run \`check_code\` before finishing.

Workspaces live outside this repo. Claude Code reads \`CLAUDE.md\` from parent folders, so a baseline run inside the repo would find \`AGENTS.md\` and stop being a baseline. Agents can read and write files and use the BFF tools; shell, web and subagents are off.

## Tasks

Five Frederick screens in \`tasks.json\`, written as product requests rather than design instructions: a review-and-send step, a bulk delete with confirmation, a campaigns table, an empty state, and a settings card that can fail to save. None of them mention BFF's rules.

### Held-out tasks

\`tasks.json\` is the tuning set: the guidance has been changed four times in response to what agents did on those five tasks, so results there measure fit as much as quality. \`tasks-heldout.json\` checks whether the guidance generalizes.

- **Written blind.** A separate agent wrote them from a brief describing only the product and the scoring criteria. It was told not to open any file in this repo, so it never saw the principles, guides, patterns or checker. It wrote them as product tickets, with no design rules.
- **Frozen.** They are used as written. Only format was checked; the wording wasn't edited, because editing them is exactly how they would stop being held out.
- **Report only.** Don't change guidance in response to a held-out output. If a held-out run reveals a problem worth fixing, fix it, then move those tasks into the tuning set and write a new held-out set.
- **Same model family.** The writer is still a Claude model, like the builders and the judge. Tasks written by people who build products for salon and studio owners would be a stronger test.
- **Compare conditions, not task sets.** The eight held-out tickets are about twice as long as the tuning tasks (97 to 122 words vs 50 to 60) and much harder: an SMS composer with segment math, a CSV import that can partly fail, a public review page, team roles and seats. Absolute scores won't line up with the tuning set; the baseline vs guided difference within the set is the result.

\`\`\`bash
node evals/run.mjs --tasks-file evals/tasks-heldout.json --out <dir outside the repo> --reps 2
node evals/score.mjs --tasks-file evals/tasks-heldout.json --runs <same dir> --name <results name>
\`\`\`

## Scoring

| Measure | What it catches | Caveat |
|---|---|---|
| \`check_code\` | Raw values, primitive tokens, invalid props, hierarchy and labeling rules | Guided agents can run this tool, so they can fix what it flags before scoring. It shows that the loop works, not that the design is better. |
| TypeScript | Invalid props and broken code, against the real \`@bff/react\` types | Only catches what the types encode. |
| Blind judge, absolute | Hierarchy, copy, states, accessibility, consistency, overall (1-5) | One model's opinion, from code only. It never sees the condition, and comments are stripped so the agent's notes can't reveal it. The judge is a different model from the agents, and is told which components BFF actually has. Scores bunch at 3. |
| Blind judge, pairwise | Which of baseline and guided is better, per criterion, for the same task and rep | Asked in both orders; a side wins only when both orders agree, which cancels position bias. More sensitive than absolute scores. |

Cost, turns and time come from each run's transcript.

## Run

\`\`\`bash
CLAUDE_BIN=path/to/claude node evals/run.mjs --out <dir outside the repo> --reps 2
CLAUDE_BIN=path/to/claude node evals/score.mjs --runs <same dir> --name <results name>
\`\`\`

Results, including every generated file, land in \`evals/results/<name>/\`.
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Evals/Method`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),o(),c()})))()}f();export{u as default};