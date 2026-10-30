import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-wseOPJ9U.js";import{i as n,r}from"./react-DGBXd3BL.js";import{a as i,o as a,s as o}from"./blocks-BeTJN8Vc.js";var s;function c(){return(c=e((()=>{s=`# Action groups

Where buttons sit together, and which one gets which variant.

## Dialog and form footers

End-aligned, \`space-2\` apart. Secondary first (the default white button), primary last (\`variant="solid"\`). In a Modal, pass them as \`actions\`, and give the secondary \`slot="close"\`. If there is a third, quieter action (Save draft), it goes at the start, also a default button, separated by the remaining space.

\`\`\`tsx
<footer style={{ display: 'flex', alignItems: 'center', gap: 'var(--bff-space-2)' }}>
  <Button onPress={saveDraft}>Save draft</Button>
  <span style={{ flex: 1 }} />
  <Button onPress={close}>Cancel</Button>
  <Button variant="solid" isPending={sending} onPress={send}>Send campaign</Button>
</footer>
\`\`\`

## Page header

Title on the left, actions on the right on the same baseline. At most one solid button, usually the page's create action (New campaign); the rest are default buttons. More than three actions: keep the primary and move the rest into an overflow menu.

## Toolbars and table rows

Default buttons at \`size="sm"\`, icon-only allowed (with \`aria-label\`). No solid buttons in rows; a row is never the primary surface. Bulk actions for selected rows appear above the table as default buttons, a destructive one as \`variant="outline" tone="danger"\`.

Row actions that take the row away are quiet only because something catches mistakes:

- **Reversible** (archive, hide, remove from a list): a default button that acts at once and offers Undo. See the \`undo\` pattern. Without the undo, it isn't reversible from the person's point of view.
- **Irreversible** (delete): \`variant="outline" tone="danger"\`, and it opens a confirmation. See \`destructive-actions\`.

## Every button does something

Wire each action to a callback prop (\`onArchive(campaign.id)\`) or to local state. If the behavior belongs to the caller, add the prop to your component's interface; never ship \`onPress={() => {}}\`. A button that does nothing looks broken the first time someone presses it.

## Empty states

A single action, which may be \`solid\` and \`size="lg"\` because it is the only thing on the surface.
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Guidance/Patterns/Action groups`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),o(),c()})))()}f();export{u as default};