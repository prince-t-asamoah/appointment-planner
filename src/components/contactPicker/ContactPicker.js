import React from "react";

export const ContactPicker = (props) => {
  const {contacts, getContact} = props;

  return (
          <>
          <label htmlFor="contact">Contact</label>
          <select onChange={getContact} name="contact" id="contact" required>
            <option defaultValue="">No Contact Selected</option>
            {
              contacts.map(contactName => {
                return (<option key={contactName.name}  value={contactName.name}>{contactName.name}</option>)
              })
            }
          </select>
          </>
  );
};
