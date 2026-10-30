import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-wseOPJ9U.js";import{i as n,r}from"./react-DGBXd3BL.js";import{a as i,o as a,s as o}from"./blocks-BeTJN8Vc.js";var s;function c(){return(c=e((()=>{s=`# Forms

Layout, validation and saving for anything people fill in and save: settings, a new campaign, business hours.

## Layout

- **One column, labels above fields,** \`space-4\` between fields. Group related fields under a heading, with \`space-8\` between groups.
- **Fields fill their container; size the container, not each field.** A form rarely needs to be wider than about 32rem. Short fields that belong together (opens and closes, city and ZIP) can share a row.
- **Choose the control by the question:** free text is TextField; two to four choices is RadioGroup; five or more is Select; yes or no saved with the form is Checkbox; on or off right away is Switch.

## Validation

- **Check a field when the person leaves it or presses Save, never while they type it the first time.** Once a field shows an error, re-check it as they type, so the error clears the moment it's fixed.
- **Every error sits under its field and says how to fix it** (\`isInvalid\` plus \`errorMessage\`).
- **On Save with errors, don't submit.** Move focus to the first invalid field.
- **When the server refuses,** put its message on the field it names; if it names none, show it above the actions (pattern \`async-actions\`).

## Saving

- **Save and Discard appear only when something has changed,** in a row at the end of the form. That shows there are unsaved changes and rules out saving nothing.
- **Save is \`solid\` and names what it saves:** "Save business hours". It shows \`isPending\` while saving and isn't disabled to signal errors.
- **Discard is a default (white) button.** Backing out of edits should never compete with saving them.
- **After saving, say so briefly next to the actions** (\`role="status"\`: "Business hours saved") and hide the row again.

\`\`\`tsx
const [draft, setDraft] = useState(initial);
const [saving, setSaving] = useState(false);
const [error, setError] = useState<string | null>(null);
const changed = JSON.stringify(draft) !== JSON.stringify(initial);

async function save() {
  setSaving(true);
  setError(null);
  try {
    await onSave(draft);
  } catch (err) {
    setError(err instanceof Error && err.message ? err.message : "Business hours weren't saved.");
  } finally {
    setSaving(false);
  }
}

<form
  onSubmit={(event) => {
    event.preventDefault();
    save();
  }}
  style={{ display: 'grid', gap: 'var(--bff-space-4)', maxWidth: '32rem' }}
>
  <TextField label="Business name" value={draft.name} onChange={(name) => setDraft({ ...draft, name })} isRequired />
  <Select label="Time zone" value={draft.timeZone} onChange={(timeZone) => setDraft({ ...draft, timeZone: String(timeZone) })}>
    <SelectItem id="America/Los_Angeles">Pacific</SelectItem>
    <SelectItem id="America/Denver">Mountain</SelectItem>
    <SelectItem id="America/Chicago">Central</SelectItem>
    <SelectItem id="America/New_York">Eastern</SelectItem>
    <SelectItem id="Pacific/Honolulu">Hawaii</SelectItem>
  </Select>
  {error && (
    <p role="alert" style={{ margin: 0, color: 'var(--bff-color-danger-text)', fontSize: 'var(--bff-font-size-sm)' }}>
      {error}
    </p>
  )}
  {changed && (
    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--bff-space-2)' }}>
      <Button onPress={() => setDraft(initial)}>Discard changes</Button>
      <Button type="submit" variant="solid" isPending={saving}>Save business details</Button>
    </div>
  )}
</form>
\`\`\`
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Guidance/Patterns/Forms`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),o(),c()})))()}f();export{u as default};