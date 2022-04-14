import React, { useState, useEffect } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';
import AlertBox from "../../components/alertBox/AlertBox";

export const ContactsPage = (props) => {
  const {contacts, addContacts} = props;
  
 const [name, setName] = useState("");
 const [phone, setPhone] = useState("");
 const [email, setEmail] = useState("");
 const [isDuplicate, setisDuplicate] = useState(false);
 const [showMessage, setShowMessage] = useState(false);
 const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   if (!isDuplicate) {
     addContacts({
       name,
       phone,
       email
      });
      setName("");
      setPhone("");
      setEmail("");
      setMessage('Contact saved successfully!');
      setShowMessage(true);
    }
  };

  useEffect(()=> {
    if (contacts.find(contact => contact.name === name)) {
      setisDuplicate(true);
      alert("Contact already exist");
    }
  },[contacts, name]);

  return (
    <div>
      <section className="form">
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
        {showMessage && <AlertBox msg={message} showMessage={setShowMessage}/>}
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        {contacts.length ? 
        (<TileList tileList={contacts} type={"contacts"} />) : 
        <p>No Contacts Available</p>
        }
      </section>
    </div>
  );
};
