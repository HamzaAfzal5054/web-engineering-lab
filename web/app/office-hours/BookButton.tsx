"use client";

import { useState } from "react";

export default function BookButton({ day }: { day: string }) {
  const [booked, setBooked] = useState(false);
  const action = booked ? "Cancel" : "Select";

  return (
    <button
      type="button"
      aria-label={`${action} ${day}`}
      aria-pressed={booked}
      onClick={() => setBooked((current) => !current)}
    >
      {action}
    </button>
  );
}
