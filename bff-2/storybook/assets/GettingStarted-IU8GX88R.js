import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-wseOPJ9U.js";import{i as n,r}from"./react-DGBXd3BL.js";import{o as i,s as a}from"./blocks-BeTJN8Vc.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Getting started`}),`
`,(0,c.jsx)(t.h1,{id:`bff-2`,children:`BFF 2`}),`
`,(0,c.jsx)(t.p,{children:`BFF began in 2016 as the shared design system for the Frederick and Booker products: Open Sans with a 14px base, a 3px radius, one aqua for controls, and the brand colors on buttons. BFF 2 keeps that visual language and rebuilds the system for how products get built now: design tokens, React components on React Aria, plain CSS that works without React, and guidance that coding agents read and check their work against.`}),`
`,(0,c.jsx)(t.h2,{id:`use-it`,children:`Use it`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`1. Load the CSS once, at the app root,`}),` with Open Sans at 300, 400 and 600:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@bff/css/bff.css';
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`2. Use the components:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { Button, TextField } from '@bff/react';

<TextField label="Business name" isRequired />
<Button variant="solid" onPress={save}>Save business profile</Button>
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`3. Theme with attributes,`}),` on `,(0,c.jsx)(t.code,{children:`<html>`}),` or on any element inside it:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data-brand`}),`: `,(0,c.jsx)(t.code,{children:`frederick`}),` (the default) or `,(0,c.jsx)(t.code,{children:`booker`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data-mode`}),`: `,(0,c.jsx)(t.code,{children:`light`}),` or `,(0,c.jsx)(t.code,{children:`dark`}),`. Without it, BFF follows the system setting.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data-density`}),`: `,(0,c.jsx)(t.code,{children:`compact`}),`, `,(0,c.jsx)(t.code,{children:`default`}),` or `,(0,c.jsx)(t.code,{children:`comfortable`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Without React,`}),` the same classes and data attributes work in plain HTML: `,(0,c.jsx)(t.code,{children:`<button class="bff-button" data-variant="solid">`}),`. Each component's guide has an HTML example.`]}),`
`,(0,c.jsx)(t.h2,{id:`whats-here`,children:`What's here`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Foundations:`}),` color, typography, spacing, shape and elevation, motion, density, and every token.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Components:`}),` Button, TextField, Select, Checkbox, RadioGroup, Switch and Modal, with their states, in both brands and both modes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Guidance:`}),` the principles, a guide per component, and patterns for action groups, async actions, destructive actions, undo and forms. This is the same text coding agents get.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Evals:`}),` how agents build with and without the guidance, measured.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`for-coding-agents`,children:`For coding agents`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`bff`}),` MCP server in `,(0,c.jsx)(t.code,{children:`packages/agent`}),` gives an agent the guidelines, each component's props and rules, the patterns and the tokens, plus `,(0,c.jsx)(t.code,{children:`check_code`}),`, which reviews the code it wrote against the system and says how to fix what it finds.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};