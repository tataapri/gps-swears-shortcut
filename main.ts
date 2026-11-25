import { mkdirSync, writeFileSync } from "node:fs";

// The GPS's one-line excuse for sending the driver down the wrong road.
// Original line, written for this bounty.
const ENTRY =
  "The map swore there was a road through that lake, and frankly I still trust the map more than I trust your eyes right now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
