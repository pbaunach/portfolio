import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-wseOPJ9U.js";import{_ as r,t as i}from"./src-DqzR8s08.js";var a;function o(){return(o=e((()=>{a=e=>e?.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase()})))()}function s(e,t,n=[]){if(t==null)throw Error(`[lucide]: iconNode is required when icon name is used`);return{name:a(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}function c(){return(c=e((()=>{o()})))()}var l;function u(){return(u=e((()=>{l=e=>{let t=``,n=!1;for(let r of e)r===`-`||r===`_`||r<=` `?n=t.length>0:(t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1);return t}})))()}var d;function f(){return(f=e((()=>{u(),d=e=>{let t=l(e);return t.charAt(0).toUpperCase()+t.slice(1)}})))()}var p;function m(){return(m=e((()=>{p=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim()})))()}var h;function g(){return(g=e((()=>{h={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`}})))()}function _(e){return e!=null}function v(e,t={}){let n=t.attributeNames??{},r=e=>n[e]??e,i=e.size??e.width??h.width,a=e.size??e.height??h.height,o=e.aliases?.filter(e=>typeof e==`string`&&e.trim()!==``).map(e=>`lucide-${e}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...o],c=t.className?.split(` `).filter(Boolean)??[],l=t.includeDefaultClasses===!1?p(...c):p(`lucide`,...s,...c),u=t.absoluteStrokeWidth?Number(t.strokeWidth??h[`stroke-width`])*Number(e.size??e.width??h.width)/Number(t.size??t.width??h.width):t.strokeWidth??h[`stroke-width`];return[`svg`,{...Object.entries(h).reduce((e,[t,n])=>(e[r(t)]=n,e),{}),...`color`in t&&t.color&&{[r(`stroke`)]:t.color},...`size`in t&&_(t.size)&&{[r(`width`)]:t.size,[r(`height`)]:t.size},...`width`in t&&_(t.width)&&{[r(`width`)]:t.width},...`height`in t&&_(t.height)&&{[r(`height`)]:t.height},[r(`stroke-width`)]:u,...l&&{[r(`class`)]:l},[r(`viewBox`)]:`0 0 ${i} ${a}`,...t.hasA11yProp===!1?{[r(`aria-hidden`)]:`true`}:{},...`attributes`in t&&t.attributes},e.node.map(e=>{let[n,i,a]=e,o=t.nonScalingStroke?{[r(`vector-effect`)]:`non-scaling-stroke`,...i}:i;return a?[n,o,a]:[n,o]})]}function y(){return(y=e((()=>{g(),m()})))()}function ee(e,t={}){return v(e,{...t,attributeNames:{...t.attributeNames,class:`className`,"stroke-width":`strokeWidth`,"stroke-linecap":`strokeLinecap`,"stroke-linejoin":`strokeLinejoin`,"vector-effect":`vectorEffect`}})}function b(){return(b=e((()=>{y()})))()}var x;function S(){return(S=e((()=>{x=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1}})))()}var C,w,T;function te(){return(te=e((()=>{C=n(),w=(0,C.createContext)({}),T=()=>(0,C.useContext)(w)})))()}var E,ne;function D(){return(D=e((()=>{E=n(),m(),b(),S(),te(),ne=(0,E.forwardRef)(({color:e,size:t,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:a,nonScalingStroke:o,className:s=``,children:c,iconNode:l=[],icon:u={node:l,aliases:[],size:24},...d},f)=>{let{size:m=24,strokeWidth:h=2,absoluteStrokeWidth:g=!1,nonScalingStroke:_=!1,color:v=`currentColor`,className:y=``}=T()??{},b=!!c||x(d),[S,C,w=[]]=ee(u,{color:e??v,width:n??t??m,height:r??t??m,strokeWidth:i??h,absoluteStrokeWidth:a??g,nonScalingStroke:o??_,className:p(y,s),hasA11yProp:b,attributes:d});return(0,E.createElement)(S,{ref:f,...C},[...w.map(([e,t])=>(0,E.createElement)(e,t)),...Array.isArray(c)?c:[c]])})})))()}function O(e,t=[],n=[]){let r=typeof e==`string`?s(e,t,n):e,i=(0,k.forwardRef)(({className:e,...t},n)=>(0,k.createElement)(ne,{ref:n,icon:r,className:e,...t}));return r.name&&(i.displayName=d(r.name)),i}var k;function A(){return(A=e((()=>{k=n(),c(),f(),D()})))()}var j,re;function ie(){return(ie=e((()=>{A(),j={name:`archive`,size:24,node:[[`rect`,{width:`20`,height:`5`,x:`2`,y:`3`,rx:`1`,key:`1wp1u1`}],[`path`,{d:`M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8`,key:`1s80jp`}],[`path`,{d:`M10 12h4`,key:`a56b0p`}]]},j.node,re=O(j)})))()}var M,ae;function oe(){return(oe=e((()=>{A(),M={name:`check`,size:24,node:[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]},M.node,ae=O(M)})))()}var N,se;function P(){return(P=e((()=>{A(),N={name:`plus`,size:24,node:[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]},N.node,se=O(N)})))()}var F,I;function L(){return(L=e((()=>{A(),F={name:`send`,size:24,node:[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]},F.node,I=O(F)})))()}var R,z;function B(){return(B=e((()=>{A(),R={name:`trash`,size:24,node:[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]],aliases:[`trash-2`]},R.node,z=O(R)})))()}var V,H;function U(){return(U=e((()=>{A(),V={name:`x`,size:24,node:[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]},V.node,H=O(V)})))()}var W,G,K,ce,le,q,J,Y,X,Z,Q,$;function ue(){return(ue=e((()=>{i(),ie(),oe(),P(),L(),B(),U(),W=t(),G={title:`Components/Button`,component:r,args:{children:`Send campaign`,variant:`solid`,tone:`accent`,size:`md`},argTypes:{variant:{control:`inline-radio`,options:[`default`,`solid`,`outline`]},tone:{control:`inline-radio`,options:[`accent`,`success`,`danger`,`warning`,`info`]},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`,`xl`]}}},K={},ce=[`accent`,`success`,`danger`,`warning`,`info`],le={display:`grid`,gridTemplateColumns:`repeat(3, max-content)`,gap:`12px 16px`,alignItems:`center`},q={color:`var(--bff-color-fg-muted)`,fontSize:`var(--bff-font-size-sm)`},J={render:()=>(0,W.jsxs)(`div`,{style:{display:`grid`,gap:`var(--bff-space-6)`},children:[(0,W.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,W.jsx)(`span`,{style:{...q,width:64},children:`default`}),(0,W.jsx)(r,{children:`Cancel`}),(0,W.jsx)(r,{children:`Export`})]}),(0,W.jsxs)(`div`,{style:le,children:[(0,W.jsx)(`span`,{}),(0,W.jsx)(`span`,{style:q,children:`solid`}),(0,W.jsx)(`span`,{style:q,children:`outline`}),ce.map(e=>[(0,W.jsx)(`span`,{style:q,children:e},e),(0,W.jsx)(r,{variant:`solid`,tone:e,children:e===`danger`?`Delete`:`Save changes`},`${e}-solid`),(0,W.jsx)(r,{variant:`outline`,tone:e,children:e===`danger`?`Delete`:`Save changes`},`${e}-outline`)])]})]})},Y={render:()=>(0,W.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,W.jsx)(r,{variant:`solid`,size:`sm`,children:`Small`}),(0,W.jsx)(r,{variant:`solid`,size:`md`,children:`Default`}),(0,W.jsx)(r,{variant:`solid`,size:`lg`,children:`Large`}),(0,W.jsx)(r,{variant:`solid`,size:`xl`,children:`X-large`})]})},X={render:()=>(0,W.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,W.jsxs)(r,{variant:`solid`,children:[(0,W.jsx)(I,{"aria-hidden":!0}),` Send campaign`]}),(0,W.jsxs)(r,{children:[(0,W.jsx)(se,{"aria-hidden":!0}),` New audience`]}),(0,W.jsxs)(r,{variant:`outline`,tone:`danger`,children:[(0,W.jsx)(z,{"aria-hidden":!0}),` Delete`]}),(0,W.jsx)(r,{size:`sm`,iconOnly:!0,"aria-label":`Archive campaign`,children:(0,W.jsx)(re,{"aria-hidden":!0})}),(0,W.jsx)(r,{iconOnly:!0,"aria-label":`Close`,children:(0,W.jsx)(H,{"aria-hidden":!0})})]})},Z={render:()=>(0,W.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,W.jsx)(r,{variant:`solid`,isPending:!0,children:`Sending`}),(0,W.jsx)(r,{isPending:!0,children:`Saving`}),(0,W.jsx)(r,{variant:`solid`,isDisabled:!0,children:`Disabled`}),(0,W.jsxs)(r,{isDisabled:!0,children:[(0,W.jsx)(ae,{"aria-hidden":!0}),` Disabled`]})]})},Q={render:()=>(0,W.jsx)(`div`,{style:{display:`grid`,gap:16},children:[`compact`,`default`,`comfortable`].map(e=>(0,W.jsxs)(`div`,{"data-density":e,style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,W.jsx)(`span`,{style:{...q,width:96},children:e}),(0,W.jsx)(r,{size:`sm`,children:`Small`}),(0,W.jsx)(r,{children:`Default`}),(0,W.jsx)(r,{variant:`solid`,size:`lg`,children:`Large`})]},e))})},$=[`Playground`,`Matrix`,`Sizes`,`WithIcons`,`States`,`Density`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{}`,...K.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--bff-space-6)'
  }}>\r
      <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>\r
        <span style={{
        ...label,
        width: 64
      }}>default</span>\r
        <Button>Cancel</Button>\r
        <Button>Export</Button>\r
      </div>\r
      <div style={grid}>\r
        <span />\r
        <span style={label}>solid</span>\r
        <span style={label}>outline</span>\r
        {TONES.map(tone => [<span key={tone} style={label}>\r
            {tone}\r
          </span>, <Button key={\`\${tone}-solid\`} variant="solid" tone={tone}>\r
            {tone === 'danger' ? 'Delete' : 'Save changes'}\r
          </Button>, <Button key={\`\${tone}-outline\`} variant="outline" tone={tone}>\r
            {tone === 'danger' ? 'Delete' : 'Save changes'}\r
          </Button>])}\r
      </div>\r
    </div>
}`,...J.parameters?.docs?.source},description:{story:`BFF 1's buttons: the white default, then solid and outline in each color. Switch brand and mode in the toolbar.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>\r
      <Button variant="solid" size="sm">Small</Button>\r
      <Button variant="solid" size="md">Default</Button>\r
      <Button variant="solid" size="lg">Large</Button>\r
      <Button variant="solid" size="xl">X-large</Button>\r
    </div>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>\r
      <Button variant="solid">\r
        <Send aria-hidden /> Send campaign\r
      </Button>\r
      <Button>\r
        <Plus aria-hidden /> New audience\r
      </Button>\r
      <Button variant="outline" tone="danger">\r
        <Trash2 aria-hidden /> Delete\r
      </Button>\r
      <Button size="sm" iconOnly aria-label="Archive campaign">\r
        <Archive aria-hidden />\r
      </Button>\r
      <Button iconOnly aria-label="Close">\r
        <X aria-hidden />\r
      </Button>\r
    </div>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>\r
      <Button variant="solid" isPending>\r
        Sending\r
      </Button>\r
      <Button isPending>Saving</Button>\r
      <Button variant="solid" isDisabled>\r
        Disabled\r
      </Button>\r
      <Button isDisabled>\r
        <Check aria-hidden /> Disabled\r
      </Button>\r
    </div>
}`,...Z.parameters?.docs?.source},description:{story:`The states past the happy path. Pending keeps its width so the layout never jumps.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
          <Button>Default</Button>\r
          <Button variant="solid" size="lg">Large</Button>\r
        </div>)}\r
    </div>
}`,...Q.parameters?.docs?.source},description:{story:`Same buttons, three densities side by side, set by an ancestor attribute.`,...Q.parameters?.docs?.description}}}})))()}ue();export{Q as Density,J as Matrix,K as Playground,Y as Sizes,Z as States,X as WithIcons,$ as __namedExportsOrder,G as default};