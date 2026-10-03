import { copyFile, mkdir, rm } from "node:fs/promises";

const outputDir = new URL("../dist/", import.meta.url);
const outputFile = new URL("../dist/index.html", import.meta.url);
const sourceFile = new URL("../seat-planner.html", import.meta.url);
const referencePdf = new URL("../reference-seat-planning-25-rooms-capacity-4.pdf", import.meta.url);
const outputPdf = new URL("../dist/reference-seat-planning-25-rooms-capacity-4.pdf", import.meta.url);

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await copyFile(sourceFile, outputFile);
await copyFile(referencePdf, outputPdf);
console.log("Built dist/index.html and the default reference seat-plan PDF");
