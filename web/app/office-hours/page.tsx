import { getSlots } from "@/lib/slots";
import BookButton from "./BookButton";

export const metadata = { title: "Office Hours" };

export default async function OfficeHoursPage() {
  const slots = await getSlots();
  return (
    <section aria-labelledby="office-heading">
      <h1 id="office-heading">Office Hours</h1>
      <div className="table-scroll">
        <table>
          <caption>Weekly office hours</caption>
          <thead>
            <tr>
              <th scope="col">Day</th>
              <th scope="col">Time</th>
              <th scope="col">Location</th>
              <th scope="col">Book</th>
            </tr>
          </thead>
          <tbody>
            {slots.map((slot) => (
              <tr key={slot.day}>
                <th scope="row">{slot.day}</th>
                <td><time dateTime={slot.start}>{slot.start}</time>–<time dateTime={slot.end}>{slot.end}</time></td>
                <td>{slot.room}</td>
                <td><BookButton day={slot.day} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
