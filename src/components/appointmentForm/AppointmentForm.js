import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const findContact = (target) => {
    return contacts.find(contact => contact.name === target.value);
  }

  //Set state base on input id
  const getValue = ({target}) => {
    switch (target.id) {
      case "title":
        setTitle(target.value);
        break;
      case "date":
        setDate(target.value);
        break;
      case "time":
        setTime(target.value);
        break;
      case "contact": 
        setContact(findContact(target));
        break;
      default:
        return;
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          placeholder="E.g. Bootcamp"
          onChange={getValue}
          autoFocus
          required
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          value={date}
          placeholder="dd-mm-yyyy"
          min={getTodayString()}
          onChange={getValue}
          required
        />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          date="time"
          id="time"
          value={time}
          onChange={getValue}
          required
        />
        <ContactPicker contacts={contacts} getContact={getValue} />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};
