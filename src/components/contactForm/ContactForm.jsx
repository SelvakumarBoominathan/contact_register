import React, { useState } from "react";

const ContactForm = ({ contacts, addContacts }) => {
  const initialValues = { full_name: "", phome_number: "" };
  const [form, setForm] = useState(initialValues);
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.full_name === "" || form.phome_number === "") {
      alert("please Enter the data");
    }
    addContacts([...contacts, form]);
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="full_name"
          type="text"
          placeholder="Full Name"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          type="number"
          onChange={onChangeInput}
          name="phone number"
          placeholder="Phone Number"
          maxLength={"10"}
          minLength={"10"}
        ></input>
      </div>
      <div id="button">
        <button>Add</button>
      </div>
    </form>
  );
};

export default ContactForm;
