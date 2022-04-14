import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
 const [showMessage, setShowMessage] = useState(false);


  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments"
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContacts = (contact) => {
    setContacts(prevContact => ([
      ...prevContact,
      contact
    ]));
  }

  const addAppointments = (appointment) => {
    setAppointments(prevAppoint => ([
      ...prevAppoint,
      appointment
    ]));
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.CONTACTS} activeClassName="active">
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
              Appointments
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage
              addContacts={addContacts}
              contacts={contacts}
              showMessage={showMessage}
              setShowMessage={setShowMessage}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              addAppointments={addAppointments}
              appointments={appointments}
              contacts={contacts}
              showMessage={showMessage}
              setShowMessage={setShowMessage}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
