import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export interface Feedback {
  id: number;
  name: string;
  message: string;
}

const file = path.join(process.cwd(), "data", "feedback.json");

export async function getFeedback(): Promise<Feedback[]> {
  try {
    return JSON.parse(await readFile(file, "utf8")) as Feedback[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

export async function addFeedback(name: string, message: string): Promise<void> {
  const all = await getFeedback();
  const id = Math.max(Date.now(), ...all.map((item) => item.id + 1));
  all.push({ id, name, message });
  await writeFile(file, JSON.stringify(all, null, 2));
}
