import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CsJyRqpi.js";import{i as n,r}from"./react-Bcviin_k.js";import{a as i,o as a,s as o}from"./blocks-BsnwBHoz.js";var s;function c(){return(c=e((()=>{s=`# Build log: the Frederick sample app

A coding agent (Claude Sonnet 4.6, headless Claude Code) built this app from \`brief.md\`, set up like the evals' guided condition: BFF 2's component sources, its token stylesheet, the \`bff\` MCP server, and one line telling it to read the guidelines and check its work. It had no shell and couldn't run the app; it wrote files and used the BFF tools. Every screen in \`src/App.tsx\` and \`src/screens/\` is the agent's. \`src/main.tsx\` (font, CSS and theme attributes) is hand-written. Raw numbers are in \`build-log.json\`.

## Rounds

| Round | Prompt | Turns | Time | Cost | \`check_code\` runs |
|---|---|---|---|---|---|
| 1 | \`brief.md\`: the whole app | 50 | 14.5 min | $1.99 | 8 |
| 2 | \`review-round-2.md\`: four review notes | 41 | 8.6 min | $1.37 | 4 |
| 3 | \`review-round-3.md\`: BFF's Button API changed | 35 | 5.3 min | $0.88 | 7 |
| 4 | \`review-round-4.md\`: a checker bug was fixed | 13 | 2.0 min | $0.34 | 2 |
| 5 | \`review-round-5.md\`: the client list at phone width | 14 | 4.5 min | $0.53 | 1 |
| | **Total** | **153** | **34.8 min** | **$5.11** | **22** |

In round 1 the agent read the guidelines, 7 component guides and 4 patterns before writing, and checked each file until it passed.

## What each review round was for

- **Round 2**, from a review of round 1 in a browser: the app didn't fit at 375px; "No phone" and "No email" used the disabled text color (2.3:1); the phone error from Settings wasn't on the Phone field; reminders could be set to neither email nor text. \`check_code\` couldn't see any of these: the first is layout, the second a valid token used for the wrong job, the last two are behavior.
- **Round 3:** BFF's Button changed to BFF 1's three buttons (default, solid, outline), so the app's buttons needed updating.
- **Round 4:** \`check_code\` counted the page's solid "New campaign" and the solid "Create campaign" inside its modal as competing primaries. The agent demoted "New campaign" to clear the warning. The rule now counts one primary per view (a Modal is its own); the agent restored the button.
- **Round 5:** the client list still cut off its last columns at 375px.

## Checked by hand after the last round

- Typecheck and production build pass. \`check_code\` passes all five files with no findings.
- In the browser: the screens, delete with confirmation (an \`alertdialog\` with focus on "Keep clients"), the Settings save that fails once and then succeeds, and Automations' toggles.
- axe: the only findings are BFF 1's white labels on the brand and aqua colors.
- At 375px nothing is cut off; the navigation scrolls sideways.

## Where the agent didn't follow the guidance

- The new-campaign modal disables "Create campaign" until a name is typed; the Button guide says not to disable the primary to signal an incomplete form.
- The delete confirmation's description is the Modal guide's example sentence word for word. It fits here, but it's the copying behavior the evals found.
- The client list at phone width works but is clumsy: contact details show twice.
`})))()}function l(e){let t={h1:`h1`,p:`p`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Sample app`}),`
`,(0,d.jsx)(t.h1,{id:`sample-app`,children:`Sample app`}),`
`,(0,d.jsx)(t.p,{children:`A Frederick demo for Shear Joy Salon (campaigns, clients, automations and settings) built by a coding agent from BFF 2's guidance, using only the BFF components and tokens. It's a working prototype with sample data: nothing is saved, and Settings fails its first save on purpose so the error state can be seen.`}),`
`,(0,d.jsx)(`p`,{children:(0,d.jsx)(`a`,{className:`bff-button`,"data-variant":`solid`,href:`./sample/`,target:`_top`,children:`Open the sample app`})}),`
`,(0,d.jsx)(i,{children:s.replace(/^# .*\n/,``)})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),o(),c()})))()}f();export{u as default};