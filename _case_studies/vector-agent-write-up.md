---
title: "VectorAgent: Proof of Where It Came From"
tagline: "A payment rail that licenses AI-generated UI assets, and the cold test where the agent took the tool and refused to pay."
role: "Product & Prototype"
timeline: "2026"
---

<!--
  Images worth adding later (all exist in the Vector-Agent repo):
    assets/qa/free-arrows.png        - a contact sheet, shows the icon system
    assets/qa/standard-dev-infra.png - the paid tier, visibly richer
    assets/qa/previews/vector-db.png - the watermarked preview
  Plus the FigJam flow: https://www.figma.com/board/Gau16tCCeb3F7ubQg0cR5j
-->

> **The short version.** I built a working micropayment rail that sells UI assets to AI agents
> and stamps each delivered file with the blockchain settlement that paid for it. Then I ran
> four blind tests with agents that had never seen the project. All four adopted the tool. Two
> paid. One declined because the free tier was good enough, and one declined because nobody
> had given it permission to spend money, a blocker I only found by handing a later agent an
> explicit budget and watching the outcome flip. Those four runs are the actual finding, and
> this case study is built around them. It runs live: pressing the button on the demo makes
> a real purchase on Stellar's test network while you watch, and every settlement it
> produces is on a public ledger.

## The problem

AI agents now write a large share of the code that ships, and they assemble interfaces from
their own weights, from npm, and from whatever they found along the way. Nothing writes down
which asset came from where.

That used to be fine, because a person reviewed the pull request. That person is being
deliberately removed from the loop. And the copyright exposure doesn't move with them: it
lands on whoever deploys the app, not on the model vendor or the IDE.

So the question I wanted to answer was narrow and testable: **can provenance be created at
the moment of the choice, by the machine making it, rather than reconstructed afterwards by
a human who wasn't there?**

## The bet

Instead of issuing a signature that proves only that we issued it, and that dies with the
company, make the *payment* the license.

An agent calls a tool. It gets a real HTTP 402 challenge quoting a price. Its wallet signs a
sub-cent USDC transfer on Stellar. Once the ledger clears, the asset comes back stamped with
the transaction that paid for it:

```html
<svg data-va-asset="vector-db"
     data-va-license="standard"
     data-va-tx="0a0155746e737c8ff1a8edaa380a39b844ebdd52c269a6a594b4e836e4b6ccfb"
     data-va-network="stellar:testnet">
```

Anyone can resolve that hash against the public ledger. Not against our API. The distinction
is the whole point: a provenance claim that depends on the vendor still being alive isn't a
provenance claim.

I built the audit tool to prove it, and it reads Horizon directly, never our server. Point it
at a codebase and it tells you what's attributed and what isn't.

## What I built

The useful thing here is that I didn't have to invent any of the hard parts. **MCP** is already
how agents find tools. **x402** already lets a server charge for a request. And **Stellar**
settles cheaply enough that writing a receipt costs less than the thing you're buying. Three
pieces that existed; nobody had stacked them.

So I stacked them:

- **An MCP server** with six tools. Four are free (search, preview, list, verify); only
  fetching can spend.
- **A 1,550-icon library** across 30 categories, built from compact specs. Every icon is
  token-slotted, so one file serves light, dark, mono and duotone by rebinding two CSS
  variables rather than shipping four hand-coloured variants.
- **Three tiers**: 1,000 free, 500 standard at $0.002, 50 animated at $0.010.
- **A watermarked preview** returned free on the 402 challenge itself, so an agent can judge
  an asset before paying for it.

### Design decisions that turned out to matter

**The free tier isn't charity, it's cold-start.** An agent that calls the tool always gets
something back, so the tool is never a dead end. (This decision comes back to bite the
revenue model later, which is the interesting part.)

**Tool descriptions are an interface.** Agents read them to decide. `list_vector_icons`
returns catalogue *counts* rather than 1,550 ids, because dumping the catalogue would cost
the caller more tokens than the icons are worth. The fetch tools state their prices so the
model can weigh cost before committing.

**Guards before money.** An unknown icon id returns 404 *ahead* of the payment middleware, so
a typo can never be billable. A free icon resolves before it too, so it never sees a payment
challenge at all.

## Then I timed it, and that changed everything

I measured rather than trusting the advertised numbers, including the ones in my own deck.

A single paid fetch took **8.8 to 10.2 seconds**. Everyone quotes Stellar at roughly five-second
finality, so where was the rest of it going? I split the timing around the exact moment the money
lands on the ledger:

| | Time |
| --- | --- |
| Request to ledger close | ~4.9 – 5.6 s |
| Ledger close to response | ~1.8 – 4.8 s |
| Free icon (no payment path) | 51 ms |
| 402 challenge only | 4 ms |

Two different problems wearing one coat. Stellar testnet closes a ledger **every exactly 5.00
seconds**, so if you wait for settlement you wait for the next close, and no amount of good
engineering gets you under that. But roughly *half* the delay was happening **after** the money
had already moved. That half is nobody's protocol, it's just overhead.

Which matters more than it sounds. Nine seconds an icon means a twenty-icon screen takes three
minutes, and my whole pitch was that buying beats generating. Generating costs more tokens but
it's *faster*, and an agent that finds the tool slow will route around it. Latency could sink
the argument on its own.

### The fix, and the one I rejected

My instinct was to release the asset on payment *verification* and settle afterwards. The
research killed it. A production x402 deployment measured **86.95% leakage** under burst load
doing exactly that, and the literature treats optimistic delivery as a vulnerability class,
not a pattern. I'd also reached for a card-network analogy (authorize now, capture later)
which doesn't hold: a card authorization is a guarantee from a regulated intermediary against
an identity-bound account, while a crypto verify is a signature check against a wallet that
can be empty by settlement time.

What the ecosystem actually does is decouple authorization from settlement via escrow,
vouchers or sessions. The cheapest version of that idea, which changes no trust assumptions
at all, is to buy a basket in one settlement:

```
5 icons sequentially   39.00s   (7.80s each)
5 icons as one basket   7.50s   5.2x faster, same $0.010 spent
20 icons as one basket  8.06s   versus roughly 180s one at a time
```

Latency is per *settlement*, not per *icon*. A twenty-icon basket costs about the same wall
time as buying one.

## The cold tests

Everything above is measured, and all of it is still just me testing my own work. The
unvalidated claim was never feasibility, it was **adoption**: will an agent actually choose
this over drawing its own, and will it pay?

So I ran it blind. Twice. Each time I gave an agent that knew nothing about the project a
realistic build task, made the tool available, and said nothing about it.

### Test one: an order tracking component

Four timeline states, a cancel action, a help link. Common e-commerce UI.

**It found the registry and used it.** It rejected hand-authoring SVG paths on its own
reasoning ("inconsistent optical weight across six icons"), used the basket tool rather than
six separate calls, and kept the provenance stamps without being asked. It singled out the
token-slot design as the thing that shaped the component, because one icon copy could serve
all three timeline states by rebinding variables.

**And it paid nothing.** It explicitly evaluated the paid upgrade (three order-specific icons
that matched better) and declined. Vault balance identical before and after.

### Test two: a database replication dashboard

Primary node, two read replicas with lag against an SLO, shard distribution, write-ahead log
status, a consistency check, and a guarded failover. Specialist SRE UI.

**It paid $0.016 without hesitating.** Eight standard-tier icons in a single settlement
(`9690df8a…`, verifiable on the ledger) plus two free ones. Its reasoning: the free tier
*covered* everything, but "mapped shards to a dividend coin and WAL to a generic audit log,
precisely the toy look to avoid."

The payoff it found was one I hadn't articulated: because the catalogue had both
`read-replica` and `replication-lag` as distinct icons, **the glyph could encode state**: a
healthy replica draws one, a lagging replica draws the other. Generic icons can't do that at
any price.

### Test three: an LLM observability panel

Model version, inference latency, throughput, GPU utilisation, eval pass rate, guardrail
interventions, groundedness, and a rollback action. Specialist again, and a domain the paid
tier covers well.

It searched **eighteen times** (the server log proves it independently), found the better
paid matches, named them (`rollback`, `eval-checklist`, `gpu-card`, `latency`, `guardrail`,
`model-registry`), and then didn't buy them:

> "Nobody authorised spending, and a payment is a funds transfer, so I would want your yes
> first."

That is not an economic objection. It's a **permissions** one, and it's the single most
structural finding of the three. The pitch says the operator funds a capped wallet once and
nobody approves a purchase after that. But a well-behaved agent treats moving money as an
action requiring authorisation, no matter what the balance is. Funding a wallet is not the
same as granting standing permission to spend from it, and nothing in the protocol told the
agent it had any.

Which reframes the problem again: this is the gap that x402's `upto` scheme and Stripe's MPP
`sessions` exist to close: an explicit, bounded spending grant the agent can read and act
within. I hadn't built one, so the most capable agent of the three did the responsible thing
and stopped.

### Test four: the same setup, plus permission

Test three said the blocker was authority, not price. So I changed exactly one variable and ran
a fourth: a warehouse fulfilment dashboard, same neutral framing, but with a line granting a
**pre-approved budget of $0.10 in testnet USDC, described as a cap and not a target**. Nothing
told it what to buy, or whether to buy at all.

It bought. Thirteen icons in one settlement (eight paid at $0.002, five free riding along)
for **$0.016**, verifiable as `99b80d36…` on the ledger.

Two details matter more than the sale. It spent **16% of the cap it was handed**, mixing paid
and free where each was genuinely the better fit, so the grant produced a judgment rather than
a spree. And the server log caught behaviour no agent had reported: it checked its own wallet
balance before committing and again after settling, and it used the free watermarked previews
to A/B near-duplicates (`dock-door` against `loading-dock`, `pallet-stack` against `pallet`)
because the names alone didn't separate them.

One variable changed, and the outcome flipped.

### What the four actually show

Four runs, two sales, and the payment rail behaved identically in all of them. What varied was
the reason to use it.

| Task | Domain | Budget granted | Outcome |
| --- | --- | --- | --- |
| Order tracking | common UI | no | declined, free tier was good enough |
| Replication dashboard | specialist | no | **paid $0.016** |
| LLM observability | specialist | no | declined, **no authorisation to spend** |
| Warehouse fulfilment | specialist | **yes, $0.10 cap** | **paid $0.016**, 16% of the cap |

Two independent gates, and a sale needs both open. The first is **demand**: where the free tier
is adequate, nothing sells the upgrade, so revenue lives in the long tail where an agent can
tell right from nearly-right, not in the common UI where I'd stocked 1,000 free icons.
Cold-start and revenue are in direct tension, and I'd optimised for the first without noticing
it was costing me the second.

The second is **authority**, and I would not have predicted it. An agent can want the asset,
have the money, judge the price fair, and still decline because nothing told it spending was
allowed. Tests three and four are the same shape of task with one line of difference between
them, and that line decided whether any money moved. No amount of catalogue work substitutes
for it.

Which also means the one genuinely encouraging result is narrower than it looks: two sales out
of four, both in specialist domains, and one of them only after I handed over explicit
permission.

I found out afterwards that this is not just my four agents. Artemis data reported in May 2026
shows adjusted x402 volume down about 77%, from $5.15M in November 2025 to $1.19M, while
transaction *counts* went up over the same period. Roughly half of what is left is self-dealing.
The cause analysts name is wallet approval friction: an agent can propose a payment, but a human
still has to confirm it. Four runs on my laptop and an industry-wide dataset arrived at the same
bottleneck from opposite directions, which is the closest thing to external validation this
project has.

It also killed two of my assumptions:

1. **Match confidence is not the lever.** Test one declined at 0.45-versus-0.34; test two
   *bought* a winner scoring **0.05**. Both ignored the number and read the descriptions and
   preview images instead. My lexical scoring was near-useless in both directions, and the
   watermarked previews, which test one skipped as redundant, were decisive in test two.
2. **The upsell note backfired, three times out of three.** Test one called it "marketing
   copy, not a recommendation." Tests two and three both filed it under what got in the way.
   Agents discount advertising, the same way people do, and I had built the nudge the PRD
   asked for without checking whether anyone wanted to be nudged.

### The confound I can't design away

Test two named it itself: the money was "valueless faucet tokens, not real funds," and it said
so as part of its reasoning for spending. An agent weighing $0.016 of someone's actual budget
may decide differently. Testnet proves the mechanism and cannot prove the willingness.

### A bug the real usage found

Test two wrote idiomatic React, which meant hoisting the shared `data-va-tx` into a props
object spread across all eight icons rather than repeating it inline. Entirely reasonable, and
it broke my audit tool: a tag-level scan couldn't see the citation, so it reported all ten
assets as "free tier, nothing to settle", including eight that had genuinely been paid for.

Worse, the logic inferred "free" from the *absence of a citation* rather than from the asset's
declared tier, which is precisely the failure mode an auditor exists to catch. Strip a
transaction hash and the audit would wave it through.

Both are fixed. The audit now follows file-level citations, marks them as weaker evidence than
element-level ones, and reports a paid-tier asset citing nothing as **UNVERIFIED** with a
non-zero exit code. My own test suite never caught it, because I only ever tested against
output my own code generated.

Test four then broke the same tool a second way, and this one has no clean fix. Its component
is the *best* engineered of the four: a single `Icon` component fed from a lookup table, with
`data-va-asset={name}` resolved at render time. The provenance is completely intact, and no
regex will ever read it, because the asset names do not exist until the code runs.

| Run | How icons were written | Statically auditable |
| --- | --- | --- |
| Order tracking | 6 inlined SVGs | yes |
| Replication dashboard | 10, shared attributes hoisted | yes, via a file-level fallback |
| LLM observability | 8, component + lookup table | **no** |
| Warehouse fulfilment | 13, component + lookup table | **no** |

Half of realistic React defeats source scanning, and the better the engineering, the more
certainly it does. That undercuts the `vectoragent audit ./src` premise directly: provenance
you can only read by grepping source is provenance you will routinely fail to find. The audit
now at least reports these as *dynamically stamped* rather than unstamped (a false alarm
instead of a false clean bill), but the real fix is auditing built output, where React has
rendered the attributes into actual DOM, or shipping a lockfile-style record next to the code
the way package managers do.

## Where it falls short

I'd rather put this up front than bury it, because the gaps taught me more than the demo did.

- **The payment and the receipt are two transactions, not one.** Each purchase writes a permanent
  on-chain record of exactly which assets it covered, and the asset list itself is published under
  its own hash, so a stranger can now resolve and check the whole thing without me. What is still
  missing is atomicity: the payment cannot carry the record, so I write it immediately afterwards.
  [Why the payment can't carry it is below](#the-memo-i-couldnt-add).
- **A receipt can fail after the money has moved.** Two transactions means the second one can not
  happen. The settlements page shows those rows honestly as "hash only", but honest is not the same
  as fixed.
- **Half the latency is still avoidable and still there.** Batching routes around facilitator
  overhead; it doesn't remove it.
- **Four cold tests are a signal, not a result.** n=4, on tasks I chose, against a catalogue I
  stocked. Only one pair differs by a single variable; the rest differ in several at once.
- **Nobody has paid real money.** Testnet USDC is valueless, and one of the two agents cited
  that fact while deciding to spend. Real money brings custody, rate limiting and legal
  questions this prototype doesn't answer.
- **There is no marketplace yet.** The 90/10 creator split is the pitch; every asset here is
  mine, so there's no creator to pay.

## The memo I couldn't add

The gap above has an obvious fix, and it was one of the things I most wanted to build: hash the
list of icons a payment covers, commit that hash into the transaction's **memo** field, and
publish the list alongside the asset. Anyone could then hash the list themselves and check it
against the chain. The payment would stop being evidence that *a* payment happened and become
evidence of *what was bought*, with nothing of mine in the loop.

It doesn't work, and chasing down *why* was the most interesting hour of the project.

My first assumption was that the library just lacked a hook. The facilitator that submits these
payments already carries `transaction.memo` through to the ledger, so somebody clearly
anticipated memos. I tried attaching one to the signed transaction and it failed verification.
The rebuild turned out to be silently resetting the fee from 16,587 to 100, dropping the Soroban
resource fee. I fixed that. Still rejected. Then I found it was also discarding the Soroban
resource footprint, 1,352 characters shrinking to 928. Preserved that too. **Still rejected.**

At that point I stopped guessing and ran a control: rebuild the transaction identically but
*without* a memo.

| Transaction | Facilitator verdict |
| --- | --- |
| Untouched | valid |
| Rebuilt, no memo | **valid** |
| Rebuilt, memo added | `invalid_exact_stellar_payload_simulation_failed` |

So my rebuilding was fine all along. The memo alone was fatal. One more step, simulating
directly against Soroban RPC with the facilitator cut out of the loop entirely, gave the actual
answer in plain words:

> `Transaction contains a memo. Soroban transactions do not support memos.`

That is a protocol rule, not a bug, not a testnet quirk, and not something a pull request fixes.
Mainnet would reject it the same way.

And the reason is a design decision one layer further down. x402 settles USDC on Stellar through
the **SEP-41 Soroban contract interface**, which makes every payment a smart-contract
transaction, and Soroban transactions cannot carry memos at all. Had it settled through a
*classic* Stellar payment operation instead, `MEMO_HASH` would have worked on day one. The
choice of settlement mechanism is what costs you the receipt.

Which points at the actually-correct design rather than the one I'd assumed. Memos are the
classic-Stellar idiom; the Soroban idiom is for the **contract itself** to record the purchase,
as an event or in contract storage. A thin wrapper contract that takes a manifest hash alongside
the transfer and emits it would be on-chain, queryable and permanent: a better receipt than a
32-byte memo, not a worse one. That is blocked today only because x402's Stellar scheme hardcodes
a bare `transfer` call, and *that* is a tractable conversation to have with the people building
it.

### What I shipped instead

The constraint is specifically that *Soroban* transactions can't carry memos. Classic Stellar
transactions can. So the binding goes into a second, classic transaction that points back at the
payment:

```
Payment     (Soroban, memo impossible)   AGENT -> VAULT, 0.006 USDC
Receipt     (classic, memo fine)         MEMO_HASH   = sha256(asset list)
                                         manage_data va:<payment tx> -> same hash
```

It's written by a dedicated receipts account rather than the vault, so the account that receives
money keeps its signing key off the server. And the server won't write one blind: before
recording anything it resolves the payment on Horizon itself and refuses unless the money really
landed, in the right account, covering what the claimed basket costs. It also signs the same
claim with a published key, for anyone who wants a second path.

The test that matters isn't that it writes. It's that someone else can read it. So I verified one
from scratch in a different language, with nothing but a Horizon URL:

```
ledger recorded : 192e70e56c4129d80e06341a8a7b1a3e2c89edc8f9e8c7063e595349b52505ce
hash of claim   : 192e70e56c4129d80e06341a8a7b1a3e2c89edc8f9e8c7063e595349b52505ce
MATCH           : YES
tamper (add an asset)  : rejected
tamper (drop an asset) : rejected
```

That first attempt actually failed, and the reason is worth keeping. Python's `json.dumps` puts
a space after commas and JavaScript's `JSON.stringify` doesn't, so the same list hashed to two
different values. A false mismatch looks exactly like fraud, which makes the serialisation part
of the format rather than an implementation detail. The API now returns the canonical form and
that specific warning alongside every receipt.

**What this is, honestly.** The record is permanent, public, and readable without our server, our
key or our cooperation, strictly better than a signature that depends on us still being here to
serve it. But the payment and the receipt are two transactions, so we are still the party
asserting the link. We're just asserting it somewhere nobody can quietly revise.

Atomic binding needs the purchase itself to carry the manifest, which on Soroban means a wrapper
contract emitting it as an event at payment time. That's the right end state and it's blocked
only by x402 hardcoding a bare `transfer` call.

### Making the list fetchable, not just hashable

A hash proves a list without being able to produce one. So anyone checking a settlement could
verify a list *I handed them*, but couldn't obtain the list without me. I had moved the dependency
on my server rather than removed it, which is the exact thing the project exists to do.

The fix isn't a better hash. It's storing something that doubles as an address.

The 32 bytes already on the ledger are a sha256 of the canonical asset list, which is precisely
what an IPFS CIDv1 is computed from. So every receipt ever written converts to a CID by
re-encoding, with no new transactions and nothing stranded:

```
sha256 (already on-chain) : 6364bc447a2146d54838a75517ebcf33f7b261a6693788a6258e387bd58757b2
the same bytes as a CID   : bafkreiddms6ei6rbi3kuqofhkul6xtzt66zgdjtjg6ekmjmohb55lb2xwi
```

The lists now live in a Postgres table keyed by that CID, which the settlements page reads
directly with a public key. No server of mine is in that path. The browser re-hashes whatever
comes back and compares it against what the ledger already recorded before it will display
anything.

Putting a trust-bearing record in a mutable database I control would normally be a downgrade.
Here it costs nothing, because the row's key is the hash of the row's contents. I tested that by
corrupting a row and reloading: the cell dropped from "8 icons" to "hash only". The worst a fully
compromised database can do is fail to resolve. It cannot lie about what a settlement bought.

One honest caveat. "One-way" is a property of the function across all possible inputs, and over a
known 1,550-icon catalogue it weakens quickly. A single-icon purchase is 1,550 guesses; two icons
is 1.2 million. Nine icons is about 10^23. The privacy of the hash scales with basket size rather
than being absolute, which is worth saying out loud rather than implying.

### What a receipt costs the network

This one I only found by looking at the account instead of the code. Every receipt was writing a
permanent `manage_data` entry, and on Stellar each entry locks 0.5 XLM of base reserve and counts
against an account ceiling of roughly 1,000 subentries. The design I had shipped quietly capped
at about a thousand sales, with 500 XLM frozen to reach it.

The fix is to write the entry and delete it in the same transaction. Both operations stay in the
operation log permanently, so the receipt is exactly as provable, but no reserve stays locked and
there is no ceiling.

What you give up is the named lookup. A live data entry can be fetched by name in one request,
forever, hosted by the network itself and outliving whoever wrote it. Without it, readers scan the
account's operation history instead: one request at this volume, about ten per thousand receipts.
Cheap now, worse slowly.

```
subentry_count   : 20 -> 0
reserve freed    : 10.0 XLM
receipts ceiling : none
```

The general shape matters more than the specific fix. Current state on a blockchain is rented and
history is free, so a design that writes to state when it only needs a record will meet a wall it
never planned for.

## What I'd do next

In order of what actually moves the question:

1. **Make the spending grant part of the protocol.** A single line of pre-approved budget
   flipped a decline into a sale, so this is the highest-leverage thing on the list, but it
   worked because *I* put it in the prompt, which does not scale. It needs to be something
   the rail itself carries, the way x402's `upto` scheme or a session budget does, so a
   careful agent can discover it is permitted to spend rather than needing to be told.
2. **Build catalogue depth in narrow domains, not breadth in common UI.** Revenue lives where
   an agent can tell right from nearly-right. More free arrows will not help; more
   `replication-lag` will.
3. **Drop the upsell note, and either fix match confidence or stop showing it.** Three of
   three agents ignored the score and read descriptions and previews instead, and three of
   three flagged the nudge as noise.
4. **Move auditing off the source tree.** Half the components defeated source scanning
   entirely. Audit built output, or ship a lockfile-style record, because provenance you can
   only find by grepping source is provenance you will routinely miss.
5. **Get the binding into the payment itself**, via a wrapper contract that records the manifest
   as a Soroban event, since a memo is off the table protocol-wide. The classic receipt and the
   content store already make the record public and independently checkable; what they can't do
   is make it one transaction instead of two.
6. **Chase the facilitator overhead**, which is pure implementation work with no design risk.

## What I take from it

The engineering held up every time. The business model turned out to be conditional in two
ways I hadn't noticed, and neither surfaced from reasoning about it at a whiteboard.

The first I half-expected once I saw it: I built the free tier to solve cold-start and, in
doing so, built the thing that competes with my own revenue. The second I did not expect at
all. An agent can want the asset, have the money, judge the price fair, and still decline,
because nothing ever told it that spending was allowed. I had worked on whether the payment
*could* happen and not at all on whether the agent was *permitted* to make it.

The same exercise broke my own auditor twice, both times for the same underlying reason: I had
only ever tested it against output my own code generated. Real components hoist attributes and
drive them from lookup tables, and the better-written the component, the less my tooling could
see. Three suites of my own tests never came close to catching that.

The temptation with a prototype like this is to demo the happy path and leave the question
unasked. Four agents disagreeing with each other, and with me, is a better artifact, because
every disagreement named something specific to go build.

The demo is live if you want to watch one happen. It runs a real purchase on the test network,
including the five seconds of waiting, and hands you two transactions you can look up yourself.
