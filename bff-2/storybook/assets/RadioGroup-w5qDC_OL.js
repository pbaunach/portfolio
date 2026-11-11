import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CXjH9HZ0.js";import{i as n,r}from"./react-B9Rm3w7m.js";import{a as i,o as a,s as o}from"./blocks-Bxfj9HCh.js";var s;function c(){return(c=e((()=>{s=`# RadioGroup

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

- **Preselect the safe default when there is one.** Leave all unselected only when no default is safe, and then make the group \`isRequired\`.
- **Vertical by default.** \`orientation="horizontal"\` only for two or three short options.

## Content

- **The label asks the question; the options answer it.** "When to send": "Send now", "Schedule for later". Options are short, parallel and don't overlap.
- **Order options logically:** by time, by size, or most common first.

## Accessibility

| Key | Does |
|---|---|
| Tab | Moves into the group, landing on the selected option (or the first, if none is selected). Tab again leaves the group. |
| Arrow Down or Arrow Right | Moves to the next option and selects it. |
| Arrow Up or Arrow Left | Moves to the previous option and selects it. |
| Space | Selects the focused option. |

- **React Aria supplies** the \`radiogroup\` role named by the label, native radio inputs, and the roving focus above. Don't add tab stops to individual radios.
- **The dot is decorative**; the selected state comes from the input.
- **You supply** the group label (with \`hideLabel\` it's still read) and, with no safe default, \`isRequired\`.

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