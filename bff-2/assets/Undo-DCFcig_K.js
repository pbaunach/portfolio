import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-D7jkkg4h.js";import{i as n,r}from"./react-CPgtLiMy.js";import{a as i,o as a,s as o}from"./blocks-oSBz9ZwR.js";var s;function c(){return(c=e((()=>{s=`# Undo

For actions that can be reversed: archive, hide, mark as read, remove from a list. Acting at once and offering Undo beats asking first, because a confirmation people see every day stops being read.

## How it works

1. **Act immediately.** No confirmation. The row leaves the list, or changes, right away.
2. **Say what happened, near where it happened,** naming the thing: "Archived “Fall color refresh”." Put it above the list, not in a corner of the screen.
3. **Offer Undo right there:** \`ghost\` neutral, \`size="sm"\`. Undo puts the item back where it was.
4. **Announce politely:** \`role="status"\`, not \`alert\`. It's news, not a problem.
5. **Let it stay** until the next action or until it's dismissed. A message that disappears on a timer can vanish before someone reads it.
6. **If the action fails,** put the item back and say so (see \`async-actions\`).

\`\`\`tsx
const [archived, setArchived] = useState<Campaign | null>(null);
const [error, setError] = useState<string | null>(null);

async function archive(campaign: Campaign) {
  setArchived(campaign);
  setError(null);
  try {
    await onArchive(campaign.id);
  } catch (err) {
    setArchived(null);
    setError(err instanceof Error && err.message ? err.message : \`“\${campaign.name}” wasn't archived.\`);
  }
}

{archived && (
  <div
    role="status"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--bff-space-3)',
      padding: 'var(--bff-space-2) var(--bff-space-3)',
      background: 'var(--bff-color-bg-subtle)',
      borderRadius: 'var(--bff-radius-surface)',
    }}
  >
    <span>Archived “{archived.name}”.</span>
    <Button variant="ghost" tone="neutral" size="sm" onPress={() => onRestore(archived.id)}>
      Undo
    </Button>
  </div>
)}
\`\`\`

## When not to use it

When the action can't be taken back (deleting, sending, charging a card), undo would be a lie. Use a confirmation instead: \`destructive-actions\`.
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Guidance/Patterns/Undo`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),o(),c()})))()}f();export{u as default};