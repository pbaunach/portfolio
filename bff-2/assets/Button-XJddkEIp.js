import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-D7jkkg4h.js";import{i as n,r}from"./react-CPgtLiMy.js";import{a as i,o as a,s as o}from"./blocks-oSBz9ZwR.js";var s;function c(){return(c=e((()=>{s=`# Button

Triggers an action: save, send, open a dialog, delete. For going somewhere, use a link.

## Inherited props

onPress, isPending, isDisabled, type, aria-label, autoFocus

## When to use

- Submitting a form, confirming a dialog, or starting a task.
- Opening something in place (a dialog, a popover, a drawer).
- Row and toolbar actions in tables, at \`size="sm"\`.

## When not to use

- Navigation to another page or URL. Use an \`<a>\`; a button that navigates breaks open-in-new-tab and the back button.
- Toggling a setting on and off. That is a switch or checkbox.
- Choosing between options. That is a radio group or segmented control.

## Hierarchy

Pick the variant by the action's rank on the surface, not by taste:

| Rank | Props | Use for |
|---|---|---|
| Primary | \`variant="solid"\` (default) | The one action the surface exists for. **One per view or dialog.** |
| Secondary | \`variant="outline" tone="neutral"\` | Cancel, Back, Export: actions next to the primary. |
| Tertiary | \`variant="ghost" tone="neutral"\` | Toolbar and row actions, Clear, icon-only buttons. |
| Additive | \`variant="soft"\` | In-content additions (Add recipient, New audience) where solid would compete with the primary. |
| Destructive | \`tone="danger"\` | Solid only on the final confirm step. The trigger that opens the confirmation is \`variant="outline" tone="danger"\` or ghost. |

## Rules

- **Labels are verb first, sentence case, specific.** "Send campaign", "Delete 3 clients". Never "OK", "Submit", "Yes", "Click here". Two or three words.
- **Order:** secondary before primary, group aligned to the end (right in LTR). The primary is the last button in the group.
- **Async:** set \`isPending\` while the action runs. Keep the label; the spinner covers it and the width holds. Don't swap to \`isDisabled\`. When the action fails, say so next to the button and leave it pressable for a retry (pattern \`async-actions\`).
- **No \`style\` prop.** Space buttons with \`gap\` on their container, not margins on the button.
- **Don't disable the primary to signal an invalid form.** Let it be pressed, then show what is missing. A disabled button explains nothing.
- **Icon-only** needs \`iconOnly\` and an \`aria-label\`, and is almost always \`variant="ghost" tone="neutral"\`.
- **Use \`onPress\`, not \`onClick\`.** \`onPress\` normalizes mouse, touch, keyboard and pen. \`onClick\` still works, as a compatibility alias, but its handler gets a mouse event even when the press came from a keyboard or touch.
- **Size follows context, not emphasis.** \`sm\` in tables, toolbars and dense rows; \`md\` everywhere else; \`lg\` only for a single action standing alone (an empty state). To make a whole area denser, set \`data-density\` on an ancestor instead of changing sizes.

## Examples

### Dialog footer

\`\`\`tsx
<div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--bff-space-2)' }}>
  <Button variant="outline" tone="neutral" onPress={close}>Cancel</Button>
  <Button isPending={saving} onPress={save}>Save changes</Button>
</div>
\`\`\`

\`\`\`html
<div style="display: flex; justify-content: flex-end; gap: var(--bff-space-2)">
  <button class="bff-button" data-variant="outline" data-tone="neutral">Cancel</button>
  <button class="bff-button" data-variant="solid" data-tone="accent">Save changes</button>
</div>
\`\`\`

### Icon-only toolbar action

\`\`\`tsx
<Button variant="ghost" tone="neutral" size="sm" iconOnly aria-label="Archive campaign" onPress={archive}>
  <Archive aria-hidden />
</Button>
\`\`\`

### Destructive trigger and confirmation

\`\`\`tsx
<>
  <Button variant="outline" tone="danger" onPress={openConfirm}>Delete campaign</Button>

  {/* inside the confirmation dialog */}
  <Button variant="outline" tone="neutral" onPress={close}>Keep campaign</Button>
  <Button tone="danger" isPending={deleting} onPress={remove}>Delete campaign</Button>
</>
\`\`\`
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Guidance/Components/Button`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),o(),c()})))()}f();export{u as default};