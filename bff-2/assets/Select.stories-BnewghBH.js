import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CLuwDkeU.js";import{o as n,s as r,t as i}from"./src-DjsukzWw.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{i(),a=t(),o={title:`Components/Select`,component:n},s=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{id:`none`,children:`Don't send`}),(0,a.jsx)(r,{id:`two-hours`,children:`2 hours before`}),(0,a.jsx)(r,{id:`day-before`,children:`1 day before`}),(0,a.jsx)(r,{id:`two-days`,children:`2 days before`}),(0,a.jsx)(r,{id:`week-before`,children:`1 week before`})]}),c={args:{label:`Send reminders`,defaultValue:`day-before`,children:s},render:e=>(0,a.jsx)(`div`,{style:{maxWidth:`22rem`},children:(0,a.jsx)(n,{...e})})},l={args:{label:`Stylist`,children:s},render:()=>(0,a.jsxs)(`div`,{style:{display:`grid`,gap:`var(--bff-space-5)`,maxWidth:`22rem`},children:[(0,a.jsxs)(n,{label:`Stylist`,placeholder:`Choose a stylist`,isRequired:!0,children:[(0,a.jsx)(r,{id:`ana`,children:`Ana Ruiz`}),(0,a.jsx)(r,{id:`jo`,children:`Jo Park`}),(0,a.jsx)(r,{id:`sam`,children:`Sam Okafor`}),(0,a.jsx)(r,{id:`lee`,children:`Lee Chen`}),(0,a.jsx)(r,{id:`max`,children:`Max Weber`})]}),(0,a.jsx)(n,{label:`Send reminders`,isInvalid:!0,errorMessage:`Choose when reminders go out.`,children:s}),(0,a.jsx)(n,{label:`Send reminders`,defaultValue:`none`,isDisabled:!0,children:s})]})},u=[`Default`,`States`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Send reminders',
    defaultValue: 'day-before',
    children: reminders
  },
  render: args => <div style={{
    maxWidth: '22rem'
  }}>\r
      <Select {...args} />\r
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Stylist',
    children: reminders
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--bff-space-5)',
    maxWidth: '22rem'
  }}>\r
      <Select label="Stylist" placeholder="Choose a stylist" isRequired>\r
        <SelectItem id="ana">Ana Ruiz</SelectItem>\r
        <SelectItem id="jo">Jo Park</SelectItem>\r
        <SelectItem id="sam">Sam Okafor</SelectItem>\r
        <SelectItem id="lee">Lee Chen</SelectItem>\r
        <SelectItem id="max">Max Weber</SelectItem>\r
      </Select>\r
      <Select label="Send reminders" isInvalid errorMessage="Choose when reminders go out.">\r
        {reminders}\r
      </Select>\r
      <Select label="Send reminders" defaultValue="none" isDisabled>\r
        {reminders}\r
      </Select>\r
    </div>
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Default,l as States,u as __namedExportsOrder,o as default};