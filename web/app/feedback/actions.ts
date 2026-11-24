"use server";

import { addFeedback } from "@/lib/feedback";
import { revalidatePath } from "next/cache";

export async function saveFeedback(formData: FormData) {
  const nameValue = formData.get("name");
  const messageValue = formData.get("message");
  if (typeof nameValue !== "string" || typeof messageValue !== "string") return;
  const name = nameValue.trim();
  const message = messageValue.trim();
  if (!name || !message || name.length > 80 || message.length > 1000) return;

  await addFeedback(name, message);
  revalidatePath("/feedback");
}
