// news-image-20261125: front page for Wednesday 25 November 2026 — one day, 33 stories.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output"; // grader sets MAKEFUN_OUTPUT_DIR; default is /output
const src = new URL("./entry.png", import.meta.url); // the image shipped in this repo
const bytes = readFileSync(src);
if (bytes.subarray(0, 8).toString("hex") !== "89504e470d0a1a0a") throw new Error("entry.png is not a PNG");
if (bytes.length > 1048576) throw new Error("entry.png exceeds 1 MiB");
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
