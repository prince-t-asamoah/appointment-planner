import React, { useState } from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from "../../components/tileList/TileList";
import AlertBox from "../../components/alertBox/AlertBox";

export const AppointmentsPage = (props) => {
  const { contacts, appointments, addAppointments } = props;

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [contact, setContact] = useState({});
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   addAppointments({
     title,
     date,
     time,
     contact
   });

   setTitle("");
   setDate("");
   setTime("");
   setContact({});
   document.getElementById('contact').selectedIndex = 0; //Select default option value
   setShowMessage(true);
  };

  const alertMsg = "Appointment saved successfully!";
  return (
    <div>
      <section className="form">
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          contacts={contacts}
          handleSubmit={handleSubmit}
        />
        {showMessage && <AlertBox msg={alertMsg} showMessage={setShowMessage}/>}
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        {appointments.length ? (
          <TileList tileList={appointments} type={"appointments"} />
        ) : (
          <p>No Appointments Available</p>
        )}
      </section>
    </div>
  );
};
