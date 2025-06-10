import React, { useState } from "react";
import ContactList from "../contactList/ContactList.jsx";
import ContactForm from "../contactForm/ContactForm.jsx";

const Contact = () => {
  const [contacts, setContacts] = useState([
    { full_name: "Selva", phone_number: 9876543210 },
    { full_name: "Rakesh", phone_number: 1234567890 },
    { full_name: "Thiru", phone_number: 5432116789 },
  ]);

  return (
    <div id="container">
      <div id="box">
        <ContactForm contacts={contacts} addContacts={setContacts} />
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
};

export default Contact;
