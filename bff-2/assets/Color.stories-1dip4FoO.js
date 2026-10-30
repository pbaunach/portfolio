import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CsJyRqpi.js";import{n,t as r}from"./tokens-CrSwvhxu.js";var i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),i=t(),a={title:`Foundations/Color`,parameters:{a11y:{test:`off`}}},o=[`gray`,`frederick`,`booker`,`red`,`amber`,`mint`,`blue`],s=Array.from({length:12},(e,t)=>t+1),c=[`App bg`,`Subtle bg`,`Fill`,`Fill hover`,`Fill active`,`Border subtle`,`Border`,`Border strong`,`Solid`,`Solid hover`,`Text`,`Text strong`],l={fontSize:`var(--bff-font-size-xs)`,color:`var(--bff-color-fg-muted)`},u={render:()=>(0,i.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`80px repeat(12, minmax(0, 1fr))`,gap:4,alignItems:`center`},children:[(0,i.jsx)(`span`,{}),s.map(e=>(0,i.jsxs)(`span`,{style:{...l,textAlign:`center`},children:[e,(0,i.jsx)(`br`,{}),c[e-1]]},e)),o.map(e=>[(0,i.jsx)(`span`,{style:{fontSize:`var(--bff-font-size-sm)`},children:e},e),...s.map(t=>(0,i.jsx)(`div`,{title:`--bff-${e}-${t}`,style:{height:40,borderRadius:`var(--bff-radius-sm)`,background:`var(--bff-${e}-${t})`}},t))])]})},d=n.tokens.filter(e=>e.name.startsWith(`color.`)),f={render:()=>(0,i.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(220px, 1fr))`,gap:12},children:d.map(e=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:10,alignItems:`flex-start`},children:[(0,i.jsx)(`div`,{style:{width:32,height:32,flexShrink:0,borderRadius:`var(--bff-radius-sm)`,background:`var(${e.cssVar})`,boxShadow:`inset 0 0 0 1px var(--bff-color-border-subtle)`}}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{style:{fontSize:`var(--bff-font-size-sm)`,fontWeight:500},children:e.name.replace(`color.`,``)}),e.description&&(0,i.jsx)(`div`,{style:l,children:e.description})]})]},e.name))})},p=[`Scales`,`Semantic`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '80px repeat(12, minmax(0, 1fr))',
    gap: 4,
    alignItems: 'center'
  }}>\r
      <span />\r
      {STEPS.map(s => <span key={s} style={{
      ...caption,
      textAlign: 'center'
    }}>\r
          {s}\r
          <br />\r
          {USE[s - 1]}\r
        </span>)}\r
      {HUES.map(hue => [<span key={hue} style={{
      fontSize: 'var(--bff-font-size-sm)'
    }}>\r
          {hue}\r
        </span>, ...STEPS.map(s => <div key={s} title={\`--bff-\${hue}-\${s}\`} style={{
      height: 40,
      borderRadius: 'var(--bff-radius-sm)',
      background: \`var(--bff-\${hue}-\${s})\`
    }} />)])}\r
    </div>
}`,...u.parameters?.docs?.source},description:{story:`Generated from one BFF seed per hue. Swatches read CSS variables, so the Mode toolbar switches them live.`,...u.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: 12
  }}>\r
      {roles.map(t => <div key={t.name} style={{
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }}>\r
          <div style={{
        width: 32,
        height: 32,
        flexShrink: 0,
        borderRadius: 'var(--bff-radius-sm)',
        background: \`var(\${t.cssVar})\`,
        boxShadow: 'inset 0 0 0 1px var(--bff-color-border-subtle)'
      }} />\r
          <div>\r
            <div style={{
          fontSize: 'var(--bff-font-size-sm)',
          fontWeight: 500
        }}>{t.name.replace('color.', '')}</div>\r
            {t.description && <div style={caption}>{t.description}</div>}\r
          </div>\r
        </div>)}\r
    </div>
}`,...f.parameters?.docs?.source},description:{story:`What components actually use. Each token says what it is for.`,...f.parameters?.docs?.description}}}})))()}m();export{u as Scales,f as Semantic,p as __namedExportsOrder,a as default};