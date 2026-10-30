import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-D7jkkg4h.js";import{i as n,r}from"./react-CPgtLiMy.js";import{a as i,o as a,s as o}from"./blocks-oSBz9ZwR.js";var s;function c(){return(c=e((()=>{s=`# Action groups

Where buttons sit together, and which one gets which variant.

## Dialog and form footers

End-aligned, \`space-2\` apart. Secondary first (\`outline\` neutral), primary last (\`solid\`). In a Modal, pass them as \`actions\`, and give the secondary \`slot="close"\`. If there is a third, quieter action (Save draft), it goes at the start, as \`ghost\` neutral, separated by the remaining space.

\`\`\`tsx
<footer style={{ display: 'flex', alignItems: 'center', gap: 'var(--bff-space-2)' }}>
  <Button variant="ghost" tone="neutral" onPress={saveDraft}>Save draft</Button>
  <span style={{ flex: 1 }} />
  <Button variant="outline" tone="neutral" onPress={close}>Cancel</Button>
  <Button isPending={sending} onPress={send}>Send campaign</Button>
</footer>
\`\`\`

## Page header

Title on the left, actions on the right on the same baseline. At most one solid button; the rest \`outline\` neutral. More than three actions: keep the primary and move the rest into an overflow menu.

## Toolbars and table rows

\`size="sm"\`, \`ghost\` neutral, icon-only allowed (with \`aria-label\`). No solid buttons in rows; a row is never the primary surface. Bulk actions for selected rows appear above the table, where the first one may be \`soft\`.

Row actions that take the row away are quiet only because something catches mistakes:

- **Reversible** (archive, hide, remove from a list): \`ghost\` neutral, acts at once, and offers Undo. See the \`undo\` pattern. Without the undo, it isn't reversible from the person's point of view.
- **Irreversible** (delete): \`ghost\` danger, and it opens a confirmation. See \`destructive-actions\`.

## Every button does something

Wire each action to a callback prop (\`onArchive(campaign.id)\`) or to local state. If the behavior belongs to the caller, add the prop to your component's interface; never ship \`onPress={() => {}}\`. A button that does nothing looks broken the first time someone presses it.

## Empty states

A single action, which may be \`solid\` and \`size="lg"\` because it is the only thing on the surface.
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Guidance/Patterns/Action groups`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),o(),c()})))()}f();export{u as default};