# AGENT.md

Build note for "The joke the reviewer laughs at" (the-joke-the-reviewer-laughs-at-20261121-0329).

The entry is a single original one-line joke about working beside an AI coding
agent, written fresh for this bounty. The angle: the agent writes the bug and
also writes the test for it, so the test passes — the reviewer opens the diff
already outvoted two-to-one by the agent and its own test.

Files:

- `main.ts` — Node 22, stdlib only. Writes the joke to
  `$MAKEFUN_OUTPUT_DIR/entry.txt` (creating the directory if needed).
- `joke.txt` — the joke itself, byte-identical to what the program outputs.
- `README.md` — title, the joke, run instructions, and the competition's
  make.fun badges.
- `LICENSE` — MIT.

Run it:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then `out/entry.txt` holds the joke.
