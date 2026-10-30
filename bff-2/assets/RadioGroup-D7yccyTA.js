import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CsJyRqpi.js";import{i as n,r}from"./react-Bcviin_k.js";import{a as i,o as a,s as o}from"./blocks-BsnwBHoz.js";var s;function c(){return(c=e((()=>{s=`# RadioGroup

Choose exactly one of two to four options, all visible at once. Each option is a \`Radio\`.

## Inherited props

value, defaultValue, onChange, orientation, name, isRequired, isInvalid, isDisabled

## When to use

- Two to four mutually exclusive options where seeing them side by side helps the decision.
- A yes-or-no question whose answers need words ("Send now" or "Schedule for later"), where a single checkbox would hide the alternative.

## When not to use

- Five or more options: Select.
- Options that can be combined: Checkbox.
- A single option on its own. One radio can't be unchecked.

## Rules

- **The label asks the question; the options answer it.** "When to send": "Send now", "Schedule for later". Options are short, parallel and don't overlap.
- **Preselect the safe default when there is one.** Leave all unselected only when no default is safe, and then make the group \`isRequired\`.
- **Order options logically:** by time, by size, or most common first.
- **Vertical by default.** \`orientation="horizontal"\` only for two or three short options.
- **Arrow keys move between options and Tab leaves the group.** That's React Aria's behavior; don't add tab stops to individual radios.

## Examples

### When to send

\`\`\`tsx
<RadioGroup label="When to send" defaultValue="now">
  <Radio value="now">Send now</Radio>
  <Radio value="schedule">Schedule for later</Radio>
</RadioGroup>
\`\`\`

\`\`\`html
<fieldset class="bff-radio-group">
  <legend class="bff-field__label">When to send</legend>
  <div class="bff-radio-group__options">
    <label class="bff-radio">
      <input type="radio" class="bff-visually-hidden" name="send" value="now" checked />
      <span class="bff-choice__box" aria-hidden="true"></span>
      <span class="bff-choice__label">Send now</span>
    </label>
    <label class="bff-radio">
      <input type="radio" class="bff-visually-hidden" name="send" value="schedule" />
      <span class="bff-choice__box" aria-hidden="true"></span>
      <span class="bff-choice__label">Schedule for later</span>
    </label>
  </div>
</fieldset>
\`\`\`
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Guidance/Components/RadioGroup`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),o(),c()})))()}f();export{u as default};