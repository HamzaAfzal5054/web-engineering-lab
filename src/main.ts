import {
  delay,
  makeCounter,
  getRequired,
  describeSlot,
  type Slot,
} from "./utils.js";
const slots: Slot[] = [
  { day: "Monday", start: "10:00", end: "11:00", room: "Web lab" },
  { day: "Wednesday", start: "14:00", end: "15:00", room: "Web lab" },
  { day: "Friday", start: "09:00", end: "10:00", room: "Online" },
];
const status = getRequired<HTMLParagraphElement>("#status");
const tbody = getRequired<HTMLTableSectionElement>("#schedule tbody");
const nextBooking = makeCounter();
tbody.addEventListener("click", async (event: MouseEvent) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const button = target.closest<HTMLButtonElement>("button[data-day]");
  const row = target.closest<HTMLTableRowElement>("tr");
  if (
    button === null ||
    row === null ||
    !tbody.contains(button) ||
    button.disabled
  )
    return;
  const slot = slots.find((s) => s.day === button.dataset.day);
  if (slot === undefined) return;
  const hadFocus = document.activeElement === button;
  button.disabled = true;
  status.textContent = `Updating ${slot.day}…`;
  await delay(1000);
  const booked = row.classList.toggle("selected");
  button.setAttribute("aria-pressed", String(booked));
  button.textContent = booked ? "Cancel" : "Select";
  button.setAttribute(
    "aria-label",
    `${booked ? "Cancel" : "Select"} ${slot.day}`,
  );
  button.disabled = false;
  if (hadFocus && document.activeElement === document.body) button.focus();
  const count = document.querySelectorAll("#schedule tr.selected").length;
  status.textContent = booked
    ? `Booking #${nextBooking()} confirmed: ${describeSlot(slot)}. ${count} of ${slots.length} slots booked.`
    : `Booking for ${slot.day} cancelled. ${count} of ${slots.length} slots booked.`;
});
