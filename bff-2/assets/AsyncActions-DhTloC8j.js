import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-D7jkkg4h.js";import{i as n,r}from"./react-CPgtLiMy.js";import{a as i,o as a,s as o}from"./blocks-oSBz9ZwR.js";var s;function c(){return(c=e((()=>{s=`# Async actions

Anything that waits on the network: send, save, delete, import. Each has three moments, and the third is the one that gets skipped.

## While it runs

Set \`isPending\` on the button that started it. The label stays (the spinner covers it), the button keeps its width and focus, and presses are ignored, so double submits can't happen. Leave the rest of the screen alone.

## When it works

Close or move on the way the person expects: a dialog closes, a row updates, a short confirmation appears. Return focus to something sensible, usually the control that opened the dialog.

## When it fails

Assume it can fail even if nobody said so.

- **Keep everything they entered.** Never reset a form or close a dialog on failure.
- **Say what failed, next to the action, in plain words.** Not "Error 500", not "Something went wrong".
- **Use the reason you were given.** When the rejection carries a message (a server refusing an invalid value, a limit reached), show that message: it tells the person what to fix, and nothing you write can. Write your own copy only as the fallback for a rejection with no message.
- **The fallback names the action and guesses nothing.** "The campaign wasn't sent." is true; "Check your connection" is a guess, and wrong whenever the server refused. Write the fallback for your action; don't reuse the one below.
- **Make it announce:** \`role="alert"\` so screen readers hear it.
- **Style it with \`--bff-color-danger-text\`**, and don't rely on color alone: the words carry the meaning.
- **Leave the action pressable** so the retry is the same button. Clear the message when they try again.

\`\`\`tsx
const [sending, setSending] = useState(false);
const [error, setError] = useState<string | null>(null);

async function send() {
  setSending(true);
  setError(null);
  try {
    await onSend();
    onClose();
  } catch (err) {
    setError(err instanceof Error && err.message ? err.message : "The campaign wasn't sent. Try again.");
  } finally {
    setSending(false);
  }
}

<footer style={{ display: 'grid', gap: 'var(--bff-space-2)' }}>
  {error && (
    <p role="alert" style={{ margin: 0, color: 'var(--bff-color-danger-text)', fontSize: 'var(--bff-font-size-sm)' }}>
      {error}
    </p>
  )}
  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--bff-space-2)' }}>
    <Button variant="outline" tone="neutral" onPress={onClose}>Back to editing</Button>
    <Button isPending={sending} onPress={send}>Send campaign</Button>
  </div>
</footer>
\`\`\`

## Destructive actions

Same rules inside the confirmation: on failure the dialog stays open with the message above its buttons, and nothing on the screen behind it changes.
`})))()}function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Guidance/Patterns/Async actions`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),o(),c()})))()}f();export{u as default};