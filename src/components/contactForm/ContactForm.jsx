import React from "react";

const ContactForm = ({ contacts, setContacts }) => {
  return (
    <form>
      <div>
        <input name="full_name" type="text" placeholder="Full Name" />
      </div>
      <div>
        <input
          type="number"
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
