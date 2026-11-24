import { getFeedback } from "@/lib/feedback";
import { saveFeedback } from "./actions";

export const metadata = { title: "Feedback" };

export default async function FeedbackPage() {
  const items = await getFeedback();
  return (
    <section aria-labelledby="feedback-heading">
      <h1 id="feedback-heading">Send Feedback</h1>
      <form action={saveFeedback}>
        <p className="span-all">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" autoComplete="name" maxLength={80} required />
        </p>
        <p className="span-all">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} maxLength={1000} required />
        </p>
        <button type="submit">Send</button>
      </form>
      <div className="messages" aria-live="polite">
        <h2>Messages ({items.length})</h2>
        {items.length === 0 ? <p>No messages yet. Send the first one.</p> : (
          <ul className="feedback-list">
            {items.map((item) => <li key={item.id}><strong>{item.name}:</strong> {item.message}</li>)}
          </ul>
        )}
      </div>
    </section>
  );
}
