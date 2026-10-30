import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-D7jkkg4h.js";import{i as n,r}from"./react-CPgtLiMy.js";import{a as i,o as a,s as o}from"./blocks-oSBz9ZwR.js";var s;function c(){return(c=e((()=>{s=`# Switch\r
\r
A setting that applies the moment it changes, with no Save button: turning an automation on, pausing online booking.\r
\r
## Inherited props\r
\r
isSelected, defaultSelected, onChange, name, isDisabled\r
\r
## When to use\r
\r
- Turning a feature or automation on and off, where the change takes effect right away.\r
\r
## When not to use\r
\r
- Inside a form that's saved later: Checkbox. A switch that waits for Save lies about what it did.\r
- Choosing between named options: RadioGroup.\r
- Anything destructive. Switching off shouldn't delete anything.\r
\r
## Rules\r
\r
- **The label names the setting, not its state:** "Birthday discounts", never "On" or "Enabled".\r
- **It applies immediately, so it can fail immediately.** Flip it at once, save in the background, and if saving fails, flip it back and say what happened next to it (pattern \`async-actions\`).\r
- **Put the explanation in text beside or below it,** not in the label: "Sends a 15% discount on each client's birthday."\r
\r
## Examples\r
\r
### Turning an automation on\r
\r
\`\`\`tsx\r
async function toggleBirthdayDiscounts(next: boolean) {\r
  setEnabled(next);\r
  setError(null);\r
  try {\r
    await onToggle(next);\r
  } catch (err) {\r
    setEnabled(!next);\r
    setError(err instanceof Error && err.message ? err.message : "Birthday discounts weren't changed.");\r
  }\r
}\r
\r
<Switch isSelected={enabled} onChange={toggleBirthdayDiscounts}>\r
  Birthday discounts\r
</Switch>\r
\`\`\`\r
\r
\`\`\`html\r
<label class="bff-switch">\r
  <input type="checkbox" role="switch" class="bff-visually-hidden" checked />\r
  <span class="bff-switch__track" aria-hidden="true"><span class="bff-switch__on">On</span><span class="bff-switch__off">Off</span><span class="bff-switch__thumb"></span></span>\r
  <span class="bff-switch__label">Birthday discounts</span>\r
</label>\r
\`\`\`\r
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Guidance/Components/Switch`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),o(),c()})))()}f();export{u as default};