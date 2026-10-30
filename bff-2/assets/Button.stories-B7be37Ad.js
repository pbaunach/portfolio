import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-CLuwDkeU.js";import{_ as r,t as i}from"./src-DjsukzWw.js";var a;function o(){return(o=e((()=>{a=e=>e?.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase()})))()}function s(e,t,n=[]){if(t==null)throw Error(`[lucide]: iconNode is required when icon name is used`);return{name:a(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}function c(){return(c=e((()=>{o()})))()}var l;function u(){return(u=e((()=>{l=e=>{let t=``,n=!1;for(let r of e)r===`-`||r===`_`||r<=` `?n=t.length>0:(t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1);return t}})))()}var d;function f(){return(f=e((()=>{u(),d=e=>{let t=l(e);return t.charAt(0).toUpperCase()+t.slice(1)}})))()}var p;function m(){return(m=e((()=>{p=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim()})))()}var h;function g(){return(g=e((()=>{h={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`}})))()}function _(e){return e!=null}function ee(e,t={}){let n=t.attributeNames??{},r=e=>n[e]??e,i=e.size??e.width??h.width,a=e.size??e.height??h.height,o=e.aliases?.filter(e=>typeof e==`string`&&e.trim()!==``).map(e=>`lucide-${e}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...o],c=t.className?.split(` `).filter(Boolean)??[],l=t.includeDefaultClasses===!1?p(...c):p(`lucide`,...s,...c),u=t.absoluteStrokeWidth?Number(t.strokeWidth??h[`stroke-width`])*Number(e.size??e.width??h.width)/Number(t.size??t.width??h.width):t.strokeWidth??h[`stroke-width`];return[`svg`,{...Object.entries(h).reduce((e,[t,n])=>(e[r(t)]=n,e),{}),...`color`in t&&t.color&&{[r(`stroke`)]:t.color},...`size`in t&&_(t.size)&&{[r(`width`)]:t.size,[r(`height`)]:t.size},...`width`in t&&_(t.width)&&{[r(`width`)]:t.width},...`height`in t&&_(t.height)&&{[r(`height`)]:t.height},[r(`stroke-width`)]:u,...l&&{[r(`class`)]:l},[r(`viewBox`)]:`0 0 ${i} ${a}`,...t.hasA11yProp===!1?{[r(`aria-hidden`)]:`true`}:{},...`attributes`in t&&t.attributes},e.node.map(e=>{let[n,i,a]=e,o=t.nonScalingStroke?{[r(`vector-effect`)]:`non-scaling-stroke`,...i}:i;return a?[n,o,a]:[n,o]})]}function v(){return(v=e((()=>{g(),m()})))()}function te(e,t={}){return ee(e,{...t,attributeNames:{...t.attributeNames,class:`className`,"stroke-width":`strokeWidth`,"stroke-linecap":`strokeLinecap`,"stroke-linejoin":`strokeLinejoin`,"vector-effect":`vectorEffect`}})}function y(){return(y=e((()=>{v()})))()}var ne;function b(){return(b=e((()=>{ne=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1}})))()}var x,S,re;function ie(){return(ie=e((()=>{x=n(),S=(0,x.createContext)({}),re=()=>(0,x.useContext)(S)})))()}var C,w;function T(){return(T=e((()=>{C=n(),m(),y(),b(),ie(),w=(0,C.forwardRef)(({color:e,size:t,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:a,nonScalingStroke:o,className:s=``,children:c,iconNode:l=[],icon:u={node:l,aliases:[],size:24},...d},f)=>{let{size:m=24,strokeWidth:h=2,absoluteStrokeWidth:g=!1,nonScalingStroke:_=!1,color:ee=`currentColor`,className:v=``}=re()??{},y=!!c||ne(d),[b,x,S=[]]=te(u,{color:e??ee,width:n??t??m,height:r??t??m,strokeWidth:i??h,absoluteStrokeWidth:a??g,nonScalingStroke:o??_,className:p(v,s),hasA11yProp:y,attributes:d});return(0,C.createElement)(b,{ref:f,...x},[...S.map(([e,t])=>(0,C.createElement)(e,t)),...Array.isArray(c)?c:[c]])})})))()}function E(e,t=[],n=[]){let r=typeof e==`string`?s(e,t,n):e,i=(0,D.forwardRef)(({className:e,...t},n)=>(0,D.createElement)(w,{ref:n,icon:r,className:e,...t}));return r.name&&(i.displayName=d(r.name)),i}var D;function O(){return(O=e((()=>{D=n(),c(),f(),T()})))()}var k,A;function j(){return(j=e((()=>{O(),k={name:`check`,size:24,node:[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]},k.node,A=E(k)})))()}var M,N;function ae(){return(ae=e((()=>{O(),M={name:`plus`,size:24,node:[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]},M.node,N=E(M)})))()}var P,oe;function F(){return(F=e((()=>{O(),P={name:`send`,size:24,node:[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]},P.node,oe=E(P)})))()}var I,L;function R(){return(R=e((()=>{O(),I={name:`trash`,size:24,node:[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]],aliases:[`trash-2`]},I.node,L=E(I)})))()}var z,B;function V(){return(V=e((()=>{O(),z={name:`x`,size:24,node:[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]},z.node,B=E(z)})))()}var H,U,W,G,K,q,J,Y,X,Z,Q,$,se;function ce(){return(ce=e((()=>{i(),j(),ae(),F(),R(),V(),H=t(),U={title:`Components/Button`,component:r,args:{children:`Send campaign`,variant:`solid`,tone:`accent`,size:`md`},argTypes:{variant:{control:`inline-radio`,options:[`solid`,`soft`,`outline`,`ghost`]},tone:{control:`inline-radio`,options:[`accent`,`neutral`,`danger`]},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]}}},W={},G=[`solid`,`soft`,`outline`,`ghost`],K=[`accent`,`neutral`,`danger`],q={display:`grid`,gridTemplateColumns:`auto repeat(4, max-content)`,gap:`12px 16px`,alignItems:`center`},J={color:`var(--bff-color-fg-muted)`,fontSize:`var(--bff-font-size-sm)`},Y={render:()=>(0,H.jsxs)(`div`,{style:q,children:[(0,H.jsx)(`span`,{}),G.map(e=>(0,H.jsx)(`span`,{style:J,children:e},e)),K.map(e=>[(0,H.jsx)(`span`,{style:J,children:e},e),...G.map(t=>(0,H.jsx)(r,{variant:t,tone:e,children:e===`danger`?`Delete`:`Save changes`},t))])]})},X={render:()=>(0,H.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,H.jsx)(r,{size:`sm`,children:`Small`}),(0,H.jsx)(r,{size:`md`,children:`Medium`}),(0,H.jsx)(r,{size:`lg`,children:`Large`})]})},Z={render:()=>(0,H.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,H.jsxs)(r,{children:[(0,H.jsx)(oe,{"aria-hidden":!0}),` Send campaign`]}),(0,H.jsxs)(r,{variant:`soft`,children:[(0,H.jsx)(N,{"aria-hidden":!0}),` New audience`]}),(0,H.jsxs)(r,{variant:`outline`,tone:`danger`,children:[(0,H.jsx)(L,{"aria-hidden":!0}),` Delete`]}),(0,H.jsx)(r,{variant:`ghost`,tone:`neutral`,iconOnly:!0,"aria-label":`Close`,children:(0,H.jsx)(B,{"aria-hidden":!0})})]})},Q={render:()=>(0,H.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,H.jsx)(r,{isPending:!0,children:`Sending`}),(0,H.jsx)(r,{variant:`soft`,isPending:!0,children:`Saving`}),(0,H.jsx)(r,{isDisabled:!0,children:`Disabled`}),(0,H.jsx)(r,{variant:`outline`,isDisabled:!0,children:`Disabled`}),(0,H.jsxs)(r,{variant:`ghost`,isDisabled:!0,children:[(0,H.jsx)(A,{"aria-hidden":!0}),` Disabled`]})]})},$={render:()=>(0,H.jsx)(`div`,{style:{display:`grid`,gap:16},children:[`compact`,`default`,`comfortable`].map(e=>(0,H.jsxs)(`div`,{"data-density":e,style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,H.jsx)(`span`,{style:{...J,width:96},children:e}),(0,H.jsx)(r,{size:`sm`,children:`Small`}),(0,H.jsx)(r,{children:`Medium`}),(0,H.jsx)(r,{size:`lg`,children:`Large`})]},e))})},se=[`Playground`,`Matrix`,`Sizes`,`WithIcons`,`States`,`Density`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{}`,...W.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={grid}>\r
      <span />\r
      {VARIANTS.map(v => <span key={v} style={label}>\r
          {v}\r
        </span>)}\r
      {TONES.map(tone => [<span key={tone} style={label}>\r
          {tone}\r
        </span>, ...VARIANTS.map(variant => <Button key={variant} variant={variant} tone={tone}>\r
            {tone === 'danger' ? 'Delete' : 'Save changes'}\r
          </Button>)])}\r
    </div>
}`,...Y.parameters?.docs?.source},description:{story:`Every tone in every variant. Switch brand and mode in the toolbar.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>\r
      <Button size="sm">Small</Button>\r
      <Button size="md">Medium</Button>\r
      <Button size="lg">Large</Button>\r
    </div>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>\r
      <Button>\r
        <Send aria-hidden /> Send campaign\r
      </Button>\r
      <Button variant="soft">\r
        <Plus aria-hidden /> New audience\r
      </Button>\r
      <Button variant="outline" tone="danger">\r
        <Trash2 aria-hidden /> Delete\r
      </Button>\r
      <Button variant="ghost" tone="neutral" iconOnly aria-label="Close">\r
        <X aria-hidden />\r
      </Button>\r
    </div>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>\r
      <Button isPending>Sending</Button>\r
      <Button variant="soft" isPending>\r
        Saving\r
      </Button>\r
      <Button isDisabled>Disabled</Button>\r
      <Button variant="outline" isDisabled>\r
        Disabled\r
      </Button>\r
      <Button variant="ghost" isDisabled>\r
        <Check aria-hidden /> Disabled\r
      </Button>\r
    </div>
}`,...Q.parameters?.docs?.source},description:{story:`The states past the happy path. Pending keeps its width so the layout never jumps.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 16
  }}>\r
      {(['compact', 'default', 'comfortable'] as const).map(d => <div key={d} data-density={d} style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>\r
          <span style={{
        ...label,
        width: 96
      }}>{d}</span>\r
          <Button size="sm">Small</Button>\r
          <Button>Medium</Button>\r
          <Button size="lg">Large</Button>\r
        </div>)}\r
    </div>
}`,...$.parameters?.docs?.source},description:{story:`Same buttons, three densities side by side, set by an ancestor attribute.`,...$.parameters?.docs?.description}}}})))()}ce();export{$ as Density,Y as Matrix,W as Playground,X as Sizes,Q as States,Z as WithIcons,se as __namedExportsOrder,U as default};