import { readFile } from "node:fs/promises";
import path from "node:path";

export interface Slot {
  day: string;
  start: string;
  end: string;
  room: string;
}

export async function getSlots(): Promise<Slot[]> {
  const file = path.join(process.cwd(), "data", "slots.json");
  return JSON.parse(await readFile(file, "utf8")) as Slot[];
}
