import React, { useState } from "react";
import "../../assets/css/Contact.css";
import useInput from "./useInput";

const ContactForm = () => {
  const [contactName, bindContactName, resetContactName] = useInput("");
  const [contactEmail, bindContactEmail, resetContactEmail] = useInput("");
  const [contactSubject, bindContactSubject, resetContactSubject] =
    useInput("");
  const [contactMessage, bindContactMessage, resetContactMessage] =
    useInput("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    resetContactName();
    resetContactEmail();
    resetContactSubject();
    resetContactMessage();
  };
  return (
    <form
      action=""
      method="post"
      className="contact-form"
      onSubmit={SubmitHandler}
    >
      <input
        type="text"
        {...bindContactName}
        className="contact-inputs"
        id="contact_name"
        name="contact_name"
        placeholder="Anuj Khadka"
        autoComplete="off"
        />
      <input
        type="text"
        {...bindContactEmail}
        className="contact-inputs"
        id="contact_email"
        name="contact_email"
        placeholder="mail@example.com"
        autoComplete="off"
        />
      <input
        type="text"
        {...bindContactSubject}
        className="contact-inputs"
        id="contact_subject"
        name="contact_subject"
        placeholder="Collaboration Proposal"
        autoComplete="off"
      />
      <textarea
        {...bindContactMessage}
        className="contact-inputs"
        id="contact_message"
        name="contact_message"
        placeholder="Hey Anuj! Loved your work. Let's work on a project together :)"
        row={5}
        height="100px"
      ></textarea>
      <button id="contact_submit">Submit</button>
    </form>
  );
};

export default ContactForm;
