import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CXjH9HZ0.js";import{i as n,r}from"./react-B9Rm3w7m.js";import{a as i,o as a,s as o}from"./blocks-Bxfj9HCh.js";var s;function c(){return(c=e((()=>{s=`# Switch

A setting that applies the moment it changes, with no Save button: turning an automation on, pausing online booking.

## Inherited props

isSelected, defaultSelected, onChange, name, isDisabled

## When to use

- Turning a feature or automation on and off, where the change takes effect right away.

## When not to use

- Inside a form that's saved later: Checkbox. A switch that waits for Save lies about what it did.
- Choosing between named options: RadioGroup.
- Anything destructive. Switching off shouldn't delete anything.

## Rules

- **It applies immediately, so it can fail immediately.** Flip it at once, save in the background, and if saving fails, flip it back and say what happened next to it (pattern \`async-actions\`).

## Content

- **The label names the setting, not its state:** "Birthday discounts", never "On" or "Enabled". The track already says ON or OFF.
- **Put the explanation in text beside or below it,** not in the label: "Sends a 15% discount on each client's birthday."

## Accessibility

| Key | Does |
|---|---|
| Tab | Moves focus to the switch. |
| Space | Turns it on or off. |

- **React Aria supplies** an input with \`role="switch"\`, so screen readers say "on" or "off". Pressing the label toggles it too.
- **The ON and OFF text in the track is decorative** (\`aria-hidden\`), so the state isn't read twice. On and off differ in position and text, not color alone.
- **You supply** a label that names the setting, and, because it applies at once, a visible message beside it when saving fails.

## Examples

### Turning an automation on

\`\`\`tsx
async function toggleBirthdayDiscounts(next: boolean) {
  setEnabled(next);
  setError(null);
  try {
    await onToggle(next);
  } catch (err) {
    setEnabled(!next);
    setError(err instanceof Error && err.message ? err.message : "Birthday discounts weren't changed.");
  }
}

<Switch isSelected={enabled} onChange={toggleBirthdayDiscounts}>
  Birthday discounts
</Switch>
\`\`\`

\`\`\`html
<label class="bff-switch">
  <input type="checkbox" role="switch" class="bff-visually-hidden" checked />
  <span class="bff-switch__track" aria-hidden="true"><span class="bff-switch__on">On</span><span class="bff-switch__off">Off</span><span class="bff-switch__thumb"></span></span>
  <span class="bff-switch__label">Birthday discounts</span>
</label>
\`\`\`
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Guidance/Components/Switch`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),o(),c()})))()}f();export{u as default};