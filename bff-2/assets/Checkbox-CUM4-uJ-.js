import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CLuwDkeU.js";import{i as n,r}from"./react-DzFjYEdr.js";import{a as i,o as a,s as o}from"./blocks-BasB7sgR.js";var s;function c(){return(c=e((()=>{s=`# Checkbox

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

- **The label says what checking it means, phrased positively:** "Email me a weekly summary", not "Don't email me".
- **Checking it never does anything by itself.** Nothing happens until the form is saved; if it should happen right away, it's a Switch.
- **Row selection has no visible label, so it needs \`aria-label\` naming the row:** \`aria-label={\`Select \${client.name}\`}\`. The header checkbox selects all, and shows \`isIndeterminate\` while only some rows are selected.
- **A group of related checkboxes gets a visible heading.** Until BFF has a CheckboxGroup, wrap them in a \`<fieldset>\` with a \`<legend class="bff-field__label">\`.

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