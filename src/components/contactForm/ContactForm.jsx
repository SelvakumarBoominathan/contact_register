import React, { useState } from "react";

const ContactForm = ({ contacts }) => {
  const [filteredText, setFilteredtext] = useState("");
  const filteredData = contacts.filter((contact)=>{
    return Object.keys(contact).some
  })

  return (
    <div>
      <h2>Contact List</h2>
      <input placeholder="Search" type="text" />
      <ul id="list"></ul>
      <span id="totalCount"></span>
    </div>
  );
};

export default ContactForm;
