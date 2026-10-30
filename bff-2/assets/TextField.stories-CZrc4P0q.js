import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-C-iS7TtF.js";import{n,t as r}from"./src-B4C-6U4w.js";var i,a,o,s,c,l,u;function d(){return(d=e((()=>{r(),i=t(),a={title:`Components/TextField`,component:n,args:{label:`Business name`,description:`Shown on receipts and in emails.`}},o={},s={display:`grid`,gap:`var(--bff-space-5)`,maxWidth:`22rem`},c={render:()=>(0,i.jsxs)(`div`,{style:s,children:[(0,i.jsx)(n,{label:`Email`,type:`email`,autoComplete:`email`,placeholder:`you@yoursalon.com`,isRequired:!0}),(0,i.jsx)(n,{label:`Closes at`,type:`time`,defaultValue:`08:00`,isInvalid:!0,errorMessage:`Enter a closing time after the opening time (9:00 AM).`}),(0,i.jsx)(n,{label:`Account ID`,defaultValue:`FRD-20931`,isDisabled:!0,description:`Contact support to change it.`}),(0,i.jsx)(n,{label:`Note to the client`,multiline:!0,placeholder:`Anything they should know before the appointment`})]})},l={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:`var(--bff-space-2)`,alignItems:`center`},children:[(0,i.jsx)(`span`,{style:{width:`6rem`},children:`Monday`}),(0,i.jsx)(n,{label:`Monday opening time`,hideLabel:!0,size:`sm`,type:`time`,defaultValue:`09:00`}),(0,i.jsx)(n,{label:`Monday closing time`,hideLabel:!0,size:`sm`,type:`time`,defaultValue:`18:00`})]})},u=[`Playground`,`States`,`InARow`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={stack}>\r
      <TextField label="Email" type="email" autoComplete="email" placeholder="you@yoursalon.com" isRequired />\r
      <TextField label="Closes at" type="time" defaultValue="08:00" isInvalid errorMessage="Enter a closing time after the opening time (9:00 AM)." />\r
      <TextField label="Account ID" defaultValue="FRD-20931" isDisabled description="Contact support to change it." />\r
      <TextField label="Note to the client" multiline placeholder="Anything they should know before the appointment" />\r
    </div>
}`,...c.parameters?.docs?.source},description:{story:`The states past the happy path.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--bff-space-2)',
    alignItems: 'center'
  }}>\r
      <span style={{
      width: '6rem'
    }}>Monday</span>\r
      <TextField label="Monday opening time" hideLabel size="sm" type="time" defaultValue="09:00" />\r
      <TextField label="Monday closing time" hideLabel size="sm" type="time" defaultValue="18:00" />\r
    </div>
}`,...l.parameters?.docs?.source},description:{story:`sm is for table rows and toolbars, where the column header names the field.`,...l.parameters?.docs?.description}}}})))()}d();export{l as InARow,o as Playground,c as States,u as __namedExportsOrder,a as default};