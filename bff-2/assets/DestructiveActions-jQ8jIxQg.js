import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CLuwDkeU.js";import{i as n,r}from"./react-DzFjYEdr.js";import{a as i,o as a,s as o}from"./blocks-BasB7sgR.js";var s;function c(){return(c=e((()=>{s=`# Destructive actions

Deleting, cancelling a send, removing access: anything a person can't take back in one step.

## Two steps, two weights

1. **The trigger** is quiet: \`variant="outline" tone="danger"\`, or \`ghost\` in toolbars and rows. It opens a confirmation; it never deletes.
2. **The confirmation** is a \`Modal\` with \`role="alertdialog"\`. It names exactly what will happen, with a count when there is one ("Delete 3 clients"), and says whether it can be undone. Its confirm button is the only \`solid\` danger button in the product, and the cancel button says what is kept ("Keep clients"), not "Cancel". The full example, with failure handling, is in the Modal guide.

\`\`\`tsx
<>
  <Button variant="outline" tone="danger" onPress={() => setConfirming(true)}>Delete clients</Button>
  <Modal
    role="alertdialog"
    size="sm"
    title="Delete 3 clients?"
    description="Their visit history and notes go too. This can't be undone."
    isOpen={confirming}
    onOpenChange={setConfirming}
    isPending={deleting}
    actions={
      <>
        <Button slot="close" variant="outline" tone="neutral" autoFocus isDisabled={deleting}>Keep clients</Button>
        <Button tone="danger" isPending={deleting} onPress={remove}>Delete 3 clients</Button>
      </>
    }
  />
</>
\`\`\`

## Prefer undo

When the action can be reversed for a short time (archive, unsend within a window), skip the confirmation: act immediately and offer Undo (the \`undo\` pattern). Confirmations people see every day stop being read.

## Never

- A solid danger button as the primary action of a page.
- Destructive and constructive actions with the same weight side by side.
- "Are you sure?" as the whole message.
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Guidance/Patterns/Destructive actions`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),o(),c()})))()}f();export{u as default};