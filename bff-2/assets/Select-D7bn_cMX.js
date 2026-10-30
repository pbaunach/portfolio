import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-C-iS7TtF.js";import{i as n,r}from"./react-B7Nag09u.js";import{a as i,o as a,s as o}from"./blocks-CssxyvJc.js";var s;function c(){return(c=e((()=>{s=`# Select

Pick one option from a known list of five or more: a stylist, a reminder schedule, a time zone.

## Inherited props

value, defaultValue, onChange, placeholder, name, isRequired, isInvalid, isDisabled

## When to use

- Five or more options that people know before they open the list.
- Space is tight and the current choice matters more than the alternatives.

## When not to use

- Two to four options: RadioGroup, so every choice is visible and takes one click.
- Long lists people search, like clients: a searchable field (not in BFF yet; build it from TextField and a list).
- Actions: a menu of commands is not a Select.

## Rules

- **Label always.** A placeholder ("Choose a stylist") only when nothing is chosen yet and choosing is required. Otherwise preselect the most common option.
- **Order options the way people think about them:** by time, by how often they're picked, or alphabetically. Never by database order.
- **Option labels are short and parallel:** "Every week", "Every 2 weeks", "Every month".
- **Use \`value\` and \`onChange\` with each item's \`id\`.** \`selectedKey\` and \`onSelectionChange\` are deprecated.
- **Plain HTML uses a native \`<select class="bff-field__control">\`.** It is accessible as it is and gets the same box.

## Examples

### A fixed list

\`\`\`tsx
<Select label="Send reminders" defaultValue="day-before">
  <SelectItem id="none">Don't send</SelectItem>
  <SelectItem id="two-hours">2 hours before</SelectItem>
  <SelectItem id="day-before">1 day before</SelectItem>
  <SelectItem id="two-days">2 days before</SelectItem>
  <SelectItem id="week-before">1 week before</SelectItem>
</Select>
\`\`\`

\`\`\`html
<div class="bff-select">
  <label class="bff-field__label" for="reminders">Send reminders</label>
  <select class="bff-field__control" id="reminders" name="reminders">
    <option value="none">Don't send</option>
    <option value="two-hours">2 hours before</option>
    <option value="day-before" selected>1 day before</option>
    <option value="two-days">2 days before</option>
    <option value="week-before">1 week before</option>
  </select>
</div>
\`\`\`

### From data

\`\`\`tsx
<Select label="Stylist" items={stylists} value={stylistId} onChange={setStylistId} placeholder="Choose a stylist" isRequired>
  {(stylist) => <SelectItem id={stylist.id}>{stylist.name}</SelectItem>}
</Select>
\`\`\`
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Guidance/Components/Select`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),o(),c()})))()}f();export{u as default};