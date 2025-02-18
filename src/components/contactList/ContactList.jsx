import React, { useState } from "react";

const ContactList = ({ contacts }) => {
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
      <ul id="list">
        {filteredData.map((item, key) => (
          <li key={key}>
            <span>{item.full_name}</span>
            <span>{item.phone_number}</span>
          </li>
        ))}
      </ul>
      <span id="totalCount">Total Contacts : ({filteredData.length})</span>
    </div>
  );
};

export default ContactList;
