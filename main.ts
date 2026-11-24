import { writeFileSync, mkdirSync } from "node:fs";

// Winner D8 (25/25 PERFECT, 20 drafts): the TikTok twist beat runner-up D16
// ("I die as I lived... seventeen apps open", 24/25) because D8 names one
// specific, visual owner behaviour — opening TikTok while the phone dies —
// instead of generic apps. The punch lands on the last words, "one more video".
const TEXT = "I am dying at 1%. My owner just opened TikTok. He will watch me die for one more video.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
