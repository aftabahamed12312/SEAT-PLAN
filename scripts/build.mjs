import { copyFile, mkdir, rm } from "node:fs/promises";

const outputDir = new URL("../dist/", import.meta.url);
const outputFile = new URL("../dist/index.html", import.meta.url);
const sourceFile = new URL("../seat-planner.html", import.meta.url);

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await copyFile(sourceFile, outputFile);
console.log("Built dist/index.html from seat-planner.html");
