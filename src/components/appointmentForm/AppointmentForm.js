import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Appointment Title"
        />
      </label>
      <br />
      <label>
        <ContactPicker
          name="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Appointment With"
        />
      </label>
      <br />
      <label>
        <input
          type="date"
          name="date"
          value={date}
          min={getTodayString()}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        <input
          type="time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </label>
      <br />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
