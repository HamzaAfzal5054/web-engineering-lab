import { delay, makeCounter } from "./utils.js";
const nextBooking = makeCounter();
const status = document.querySelector("#status");
const tbody = document.querySelector("#schedule tbody");
tbody.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-day]");
  if (!button || !tbody.contains(button) || button.disabled) return;
  const day = button.dataset.day;
  const row = button.closest("tr");
  button.disabled = true;
  status.textContent = `Updating ${day}…`;
  await delay(1000);
  const selected = row.classList.toggle("selected");
  button.setAttribute("aria-pressed", String(selected));
  button.textContent = selected ? "Cancel" : "Select";
  button.setAttribute("aria-label", `${selected ? "Cancel" : "Select"} ${day}`);
  button.disabled = false;
  const count = document.querySelectorAll("#schedule tr.selected").length;
  status.textContent = selected
    ? `Booking #${nextBooking()} confirmed for ${day}. ${count} slot(s) booked.`
    : `${day} booking cancelled. ${count} slot(s) booked.`;
});
