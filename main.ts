import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My agent wrote the bug, then wrote its test, and the test passed. I'd been outvoted two to one before I even opened the diff.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", { encoding: "utf8" });
