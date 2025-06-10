import React, { useState } from "react";

const ContactForm = ({ contacts, addContacts }) => {
  const initialValues = { full_name: "", phone_number: "" };
  const [form, setForm] = useState(initialValues);
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.full_name.trim() === "" || form.phone_number.trim() === "") {
      alert("please Enter the data");
      console.log(form.full_name, form.phone_number);
      return;
    }
    addContacts((prevContacts) => [...prevContacts, form]);

    // Reset the form after submission
    setForm(initialValues);
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="full_name"
          type="text"
          placeholder="Full Name"
          onChange={onChangeInput}
          value={form.full_name}
        />
      </div>
      <div>
        <input
          type="number"
          onChange={onChangeInput}
          name="phone_number"
          placeholder="Phone Number"
          maxLength={10}
          minLength={10}
          value={form.phone_number}
        ></input>
      </div>
      <div id="button">
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ContactForm;
