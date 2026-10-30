import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-C-iS7TtF.js";import{h as r,i,l as a,t as o,u as s}from"./src-B4C-6U4w.js";function c(){let[e,t]=(0,l.useState)(!0);return(0,u.jsxs)(`div`,{style:f,children:[(0,u.jsx)(i,{isSelected:e,onChange:t,children:`Birthday discounts`}),(0,u.jsx)(i,{children:`Online booking`}),(0,u.jsx)(i,{isDisabled:!0,children:`We miss you messages (needs an email template)`})]})}var l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{l=n(),o(),u=t(),d={title:`Components/Choices`,parameters:{docs:{description:{component:`Checkbox, RadioGroup and Switch.`}}}},f={display:`grid`,gap:`var(--bff-space-3)`,justifyItems:`start`},p={render:()=>(0,u.jsxs)(`div`,{style:f,children:[(0,u.jsx)(r,{defaultSelected:!0,children:`Email me a weekly summary`}),(0,u.jsx)(r,{children:`Include archived campaigns`}),(0,u.jsx)(r,{"aria-label":`Select all clients`,isIndeterminate:!0}),(0,u.jsx)(r,{isInvalid:!0,children:`I agree to the messaging terms`}),(0,u.jsx)(r,{isDisabled:!0,defaultSelected:!0,children:`Remind by text (needs a phone number)`})]})},m={render:()=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`var(--bff-space-6)`},children:[(0,u.jsxs)(s,{label:`When to send`,defaultValue:`now`,children:[(0,u.jsx)(a,{value:`now`,children:`Send now`}),(0,u.jsx)(a,{value:`schedule`,children:`Schedule for later`})]}),(0,u.jsxs)(s,{label:`Remind clients by`,orientation:`horizontal`,defaultValue:`email`,description:`Texts need a phone number on file.`,children:[(0,u.jsx)(a,{value:`email`,children:`Email`}),(0,u.jsx)(a,{value:`text`,children:`Text`}),(0,u.jsx)(a,{value:`both`,children:`Both`})]}),(0,u.jsxs)(s,{label:`Discount`,isInvalid:!0,errorMessage:`Choose a discount for the automation.`,children:[(0,u.jsx)(a,{value:`10`,children:`10% off`}),(0,u.jsx)(a,{value:`15`,children:`15% off`}),(0,u.jsx)(a,{value:`free`,children:`A free add-on`})]})]})},h={render:()=>(0,u.jsx)(c,{})},g={render:()=>(0,u.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`
<div style="display:grid;gap:var(--bff-space-4);max-width:22rem">
  <label class="bff-checkbox"><input type="checkbox" class="bff-visually-hidden" checked /><span class="bff-choice__box" aria-hidden="true"><svg class="bff-icon-check" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.25"><path d="M3.5 8.5l3 3 6-7" /></svg></span><span class="bff-choice__label">Email me a weekly summary</span></label>
  <fieldset class="bff-radio-group"><legend class="bff-field__label">When to send</legend><div class="bff-radio-group__options">
    <label class="bff-radio"><input type="radio" class="bff-visually-hidden" name="send" checked /><span class="bff-choice__box" aria-hidden="true"></span><span class="bff-choice__label">Send now</span></label>
    <label class="bff-radio"><input type="radio" class="bff-visually-hidden" name="send" /><span class="bff-choice__box" aria-hidden="true"></span><span class="bff-choice__label">Schedule for later</span></label>
  </div></fieldset>
  <label class="bff-switch"><input type="checkbox" role="switch" class="bff-visually-hidden" checked /><span class="bff-switch__track" aria-hidden="true"><span class="bff-switch__thumb"></span></span><span class="bff-switch__label">Birthday discounts</span></label>
  <div class="bff-select"><label class="bff-field__label" for="r">Send reminders</label><select class="bff-field__control" id="r"><option>1 day before</option><option>2 days before</option></select></div>
  <div class="bff-text-field"><label class="bff-field__label" for="n">Business name</label><input class="bff-field__control" id="n" value="Shear Joy Salon" /></div>
</div>`}})},_=[`Checkboxes`,`Radios`,`Switches`,`PlainHtml`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={stack}>\r
      <Checkbox defaultSelected>Email me a weekly summary</Checkbox>\r
      <Checkbox>Include archived campaigns</Checkbox>\r
      <Checkbox aria-label="Select all clients" isIndeterminate />\r
      <Checkbox isInvalid>I agree to the messaging terms</Checkbox>\r
      <Checkbox isDisabled defaultSelected>Remind by text (needs a phone number)</Checkbox>\r
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--bff-space-6)'
  }}>\r
      <RadioGroup label="When to send" defaultValue="now">\r
        <Radio value="now">Send now</Radio>\r
        <Radio value="schedule">Schedule for later</Radio>\r
      </RadioGroup>\r
      <RadioGroup label="Remind clients by" orientation="horizontal" defaultValue="email" description="Texts need a phone number on file.">\r
        <Radio value="email">Email</Radio>\r
        <Radio value="text">Text</Radio>\r
        <Radio value="both">Both</Radio>\r
      </RadioGroup>\r
      <RadioGroup label="Discount" isInvalid errorMessage="Choose a discount for the automation.">\r
        <Radio value="10">10% off</Radio>\r
        <Radio value="15">15% off</Radio>\r
        <Radio value="free">A free add-on</Radio>\r
      </RadioGroup>\r
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <SwitchDemo />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div dangerouslySetInnerHTML={{
    __html: \`
<div style="display:grid;gap:var(--bff-space-4);max-width:22rem">
  <label class="bff-checkbox"><input type="checkbox" class="bff-visually-hidden" checked /><span class="bff-choice__box" aria-hidden="true"><svg class="bff-icon-check" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.25"><path d="M3.5 8.5l3 3 6-7" /></svg></span><span class="bff-choice__label">Email me a weekly summary</span></label>
  <fieldset class="bff-radio-group"><legend class="bff-field__label">When to send</legend><div class="bff-radio-group__options">
    <label class="bff-radio"><input type="radio" class="bff-visually-hidden" name="send" checked /><span class="bff-choice__box" aria-hidden="true"></span><span class="bff-choice__label">Send now</span></label>
    <label class="bff-radio"><input type="radio" class="bff-visually-hidden" name="send" /><span class="bff-choice__box" aria-hidden="true"></span><span class="bff-choice__label">Schedule for later</span></label>
  </div></fieldset>
  <label class="bff-switch"><input type="checkbox" role="switch" class="bff-visually-hidden" checked /><span class="bff-switch__track" aria-hidden="true"><span class="bff-switch__thumb"></span></span><span class="bff-switch__label">Birthday discounts</span></label>
  <div class="bff-select"><label class="bff-field__label" for="r">Send reminders</label><select class="bff-field__control" id="r"><option>1 day before</option><option>2 days before</option></select></div>
  <div class="bff-text-field"><label class="bff-field__label" for="n">Business name</label><input class="bff-field__control" id="n" value="Shear Joy Salon" /></div>
</div>\`
  }} />
}`,...g.parameters?.docs?.source},description:{story:`The same CSS without React: real inputs inside the BFF markup.`,...g.parameters?.docs?.description}}}})))()}v();export{p as Checkboxes,g as PlainHtml,m as Radios,h as Switches,_ as __namedExportsOrder,d as default};