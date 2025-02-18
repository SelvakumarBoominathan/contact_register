import React, { useState } from "react";

const ContactForm = ({ contacts }) => {
  const [filteredText, setFilteredtext] = useState("");
  const filteredData = contacts.filter((contact) => {
    return Object.keys(contact).some((key) =>
      contact[key].toString().toLowerCase().includes(filteredText.toLowerCase())
    );
  });

  return (
    <div>
      <h2>Contact List</h2>
      <input
        placeholder="Search"
        type="text"
        onChange={(e) => setFilteredtext(e.target.value)}
      />
      <ul id="list"></ul>
      <span id="totalCount"></span>
    </div>
  );
};

export default ContactForm;
