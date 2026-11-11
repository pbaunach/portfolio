import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CXjH9HZ0.js";import{i as n,r}from"./react-B9Rm3w7m.js";import{a as i,o as a,s as o}from"./blocks-Bxfj9HCh.js";var s;function c(){return(c=e((()=>{s=`# Checkbox

A yes or no choice that takes effect when the form is saved. Also how rows get selected.

## Inherited props

isSelected, defaultSelected, onChange, isIndeterminate, name, value, isInvalid, isDisabled, aria-label

## When to use

- Opting in or out inside a form with a Save button.
- Selecting rows in a table or list.
- Several independent options in a group ("Remind by email", "Remind by text").

## When not to use

- A setting that applies the moment it changes: Switch.
- Exactly one of several options: RadioGroup.

## Rules

- **Checking it never does anything by itself.** Nothing happens until the form is saved; if it should happen right away, it's a Switch.
- **Row selection has no visible label, so it needs \`aria-label\` naming the row:** \`aria-label={\`Select \${client.name}\`}\`. The header checkbox selects all, and shows \`isIndeterminate\` while only some rows are selected.
- **A group of related checkboxes gets a visible heading.** Until BFF has a CheckboxGroup, wrap them in a \`<fieldset>\` with a \`<legend class="bff-field__label">\`.

## Content

- **The label says what checking it means, phrased positively:** "Email me a weekly summary", not "Don't email me". A double negative makes people stop and work it out.
- **Sentence case, no ending period,** even when the label is a full sentence.

## Accessibility

| Key | Does |
|---|---|
| Tab | Moves focus to the checkbox. |
| Space | Checks or unchecks it. |

- **React Aria supplies** a real \`<input type="checkbox">\` under the styled box, so it's announced, checked and submitted like a native one. Pressing the label toggles it too. \`isIndeterminate\` is announced as partly checked ("mixed").
- **The box is decorative** (\`aria-hidden\`); its state comes from the input. Checked isn't shown by color alone: the white check mark carries it.
- **You supply** a visible label, or \`aria-label\` naming the row when it selects a table row, and a \`<fieldset>\` with a legend around a group.

## Examples

### Opt in

\`\`\`tsx
<Checkbox name="weeklySummary" defaultSelected>
  Email me a weekly summary
</Checkbox>
\`\`\`

\`\`\`html
<label class="bff-checkbox">
  <input type="checkbox" class="bff-visually-hidden" name="weeklySummary" checked />
  <span class="bff-choice__box" aria-hidden="true">
    <svg class="bff-icon-check" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.25"><path d="M3.5 8.5l3 3 6-7" /></svg>
  </span>
  <span class="bff-choice__label">Email me a weekly summary</span>
</label>
\`\`\`

### Row selection

\`\`\`tsx
<>
  <Checkbox aria-label="Select all clients" isSelected={allSelected} isIndeterminate={someSelected} onChange={toggleAll} />
  <Checkbox aria-label={\`Select \${client.name}\`} isSelected={selected.has(client.id)} onChange={() => toggle(client.id)} />
</>
\`\`\`
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Guidance/Components/Checkbox`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),o(),c()})))()}f();export{u as default};