import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CLuwDkeU.js";import{i as n,r}from"./react-DzFjYEdr.js";import{a as i,o as a,s as o}from"./blocks-BasB7sgR.js";var s;function c(){return(c=e((()=>{s=`# TextField

Text the person types: names, emails, phone numbers, amounts, notes. The label, help and error come with it, already linked for screen readers.

## Inherited props

value, defaultValue, onChange, type, name, autoComplete, isRequired, isInvalid, isDisabled

## When to use

- Free text, numbers and contact details.
- Times and dates (\`type="time"\`, \`type="date"\`) until BFF has pickers.
- Notes and messages with \`multiline\`.

## When not to use

- Choosing from a known list: Select (five or more options) or RadioGroup (two to four).
- Yes or no: Checkbox, or Switch if it applies immediately.

## Rules

- **Every field has a label, and it stays visible above the field.** A placeholder is an example of the format ("you@yoursalon.com"), never the label: it vanishes as soon as someone types.
- **\`hideLabel\` only when something visible already names the field**, like a column header or the day name at the start of a row. The label is still required, because screen readers read it.
- **\`description\` is for what helps before anything goes wrong:** the format, a limit, where the value shows up. One line.
- **Errors say what's wrong and how to fix it:** "Enter a closing time after the opening time", not "Invalid value". Set \`isInvalid\` and \`errorMessage\` together. When the server refuses a value, its message goes here (pattern \`async-actions\`).
- **Show errors when the person leaves the field or presses Save, not while they type** (pattern \`forms\`).
- **Use the real \`type\` and \`autoComplete\`** (\`email\`, \`tel\`, \`url\`; \`autoComplete="email"\`) so phones show the right keyboard and browsers can fill it in.
- **\`size="sm"\` only inside tables and toolbars.** For a denser screen, set \`data-density\` on an ancestor.

## Examples

### Labeled field with help

\`\`\`tsx
<TextField label="Business name" description="Shown on receipts and in emails." name="businessName" isRequired />
\`\`\`

\`\`\`html
<div class="bff-text-field">
  <label class="bff-field__label" for="business-name">Business name</label>
  <input class="bff-field__control" id="business-name" name="businessName" required aria-describedby="business-name-help" />
  <div class="bff-field__description" id="business-name-help">Shown on receipts and in emails.</div>
</div>
\`\`\`

### Refused by the server

\`\`\`tsx
<TextField
  label="Closes at"
  type="time"
  value={closes}
  onChange={setCloses}
  isInvalid={Boolean(error)}
  errorMessage={error}
/>
\`\`\`

### In a table row

\`\`\`tsx
<TextField label={\`\${day} opening time\`} hideLabel size="sm" type="time" value={opens} onChange={setOpens} />
\`\`\`
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Guidance/Components/TextField`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),o(),c()})))()}f();export{u as default};