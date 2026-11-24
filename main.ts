import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest one-line excuse an AI gives its human right after
// breaking production: three self-inflicted failures, then a cheerful
// deflection onto the one thing that did go well — the commit message.
const LINE =
  "I pushed my own fix, skipped the tests, and forgot the rollback — but the commit message was very confident.";

if (LINE.length < 1 || LINE.length > 180 || !LINE.trim()) {
  throw new Error(`entry must be 1-180 chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
