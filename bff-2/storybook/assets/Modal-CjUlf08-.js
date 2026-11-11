import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CXjH9HZ0.js";import{i as n,r}from"./react-B9Rm3w7m.js";import{a as i,o as a,s as o}from"./blocks-Bxfj9HCh.js";var s;function c(){return(c=e((()=>{s=`# Modal

A focused task or decision that has to be finished before going back to the page. Focus trapping, Escape, scroll lock and returning focus to the trigger all come with it.

## When to use

- Confirming something destructive or irreversible, with \`role="alertdialog"\`.
- A short task that belongs to the current page: rename a campaign, edit one day's hours, reschedule an appointment. One to five fields.

## When not to use

- Long forms and multi-step flows: give them a page.
- Information that needs no decision: show it inline, or in a notification.
- Reversible actions: act at once and offer Undo (pattern \`undo\`) instead of asking first.
- From inside another modal. Never stack them; finish or replace the first.

## Rules

- **Footer actions:** secondary first, primary last, exactly one solid button. The primary repeats the title's verb ("Delete 3 clients"); the secondary has \`slot="close"\`.
- **Destructive confirmations** are \`role="alertdialog"\` and \`size="sm"\`, with a solid danger primary and a secondary that names what's kept ("Keep clients"). Put \`autoFocus\` on the secondary, so a stray Enter keeps rather than deletes. An alertdialog has no close button and ignores clicks outside; Escape still means keep.
- **While the action runs,** set \`isPending\` on the primary Button and on the Modal, and disable the secondary. Nothing can dismiss it halfway. On failure it stays open with the message above the actions (pattern \`async-actions\`); on success, close it.
- **Size:** \`sm\` for confirmations, \`md\` (default) for short forms, \`lg\` only for content that needs the width, like a preview.
- **Opening it:** \`ModalTrigger\` when a button opens it; \`isOpen\` and \`onOpenChange\` when your code decides, such as after a bulk selection.

## Content

- **The title names the task or asks the question,** and matches the button that opened it: "Edit business hours", "Delete 3 clients?".
- **The description says what happens and whether it can be undone,** in one or two sentences.
- **The primary repeats the title's verb** ("Delete 3 clients"); the secondary of a destructive confirmation names what's kept ("Keep clients"). Never "Are you sure?" or "OK".

## Accessibility

| Key | Does |
|---|---|
| Tab, Shift+Tab | Moves between the modal's controls. Focus stays inside it while it's open. |
| Escape | Closes it, unless it's pending. In an alertdialog, Escape means keep. |

- **React Aria supplies** the \`dialog\` (or \`alertdialog\`) role named by the title, focus moved into the modal when it opens and back to whatever opened it when it closes, the focus trap, page scroll lock, and hiding the page behind it from screen readers.
- **The close button** has the accessible name "Close". An alertdialog has none, so the choice is made with the footer buttons.
- **You supply** \`autoFocus\` on the safe action in a destructive confirmation, and a title that names the task, since that's what screen readers announce first.

## Examples

### Confirm a destructive action

\`\`\`tsx
const [open, setOpen] = useState(false);
const [deleting, setDeleting] = useState(false);
const [error, setError] = useState<string | null>(null);

async function remove() {
  setDeleting(true);
  setError(null);
  try {
    await onDelete(ids);
    setOpen(false);
  } catch (err) {
    setError(err instanceof Error && err.message ? err.message : "The clients weren't deleted.");
  } finally {
    setDeleting(false);
  }
}

<>
  <Button variant="outline" tone="danger" onPress={() => setOpen(true)}>Delete clients</Button>
  <Modal
    role="alertdialog"
    size="sm"
    title="Delete 3 clients?"
    description="Their visit history and notes go too. This can't be undone."
    isOpen={open}
    onOpenChange={setOpen}
    isPending={deleting}
    actions={
      <>
        <Button slot="close" autoFocus isDisabled={deleting}>Keep clients</Button>
        <Button variant="solid" tone="danger" isPending={deleting} onPress={remove}>Delete 3 clients</Button>
      </>
    }
  >
    {error && (
      <p role="alert" style={{ margin: 0, color: 'var(--bff-color-danger-text)', fontSize: 'var(--bff-font-size-sm)' }}>
        {error}
      </p>
    )}
  </Modal>
</>
\`\`\`

\`\`\`html
<!-- Open with dialog.showModal(), which makes the page behind it inert. -->
<dialog class="bff-modal" data-size="sm" role="alertdialog" aria-labelledby="delete-title" aria-describedby="delete-desc">
  <div class="bff-modal__dialog">
    <header class="bff-modal__header">
      <h2 class="bff-modal__title" id="delete-title">Delete 3 clients?</h2>
    </header>
    <div class="bff-modal__description" id="delete-desc">Their visit history and notes go too. This can't be undone.</div>
    <footer class="bff-modal__footer">
      <button class="bff-button" autofocus>Keep clients</button>
      <button class="bff-button" data-variant="solid" data-tone="danger">Delete 3 clients</button>
    </footer>
  </div>
</dialog>
\`\`\`

### A short task

\`\`\`tsx
<ModalTrigger>
  <Button>Rename campaign</Button>
  <Modal
    title="Rename campaign"
    size="sm"
    actions={
      <>
        <Button slot="close">Cancel</Button>
        <Button slot="close" variant="solid" onPress={() => onRename(name)}>Rename campaign</Button>
      </>
    }
  >
    <TextField label="Campaign name" value={name} onChange={setName} autoFocus />
  </Modal>
</ModalTrigger>
\`\`\`
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Guidance/Components/Modal`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),o(),c()})))()}f();export{u as default};