// src/Components/Contact/ContactForm.js
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });
  const [contactMessage, setContactMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_kve87sn",
        "template_t3y0g59",
        formData,
        "KDILVfDken7Hhk5IT"
      )
      .then(() => {
        setContactMessage("Message sent successfully ✅");
        setFormData({ user_name: "", user_email: "", user_message: "" });

        // Remove message after five seconds
        setTimeout(() => {
          setContactMessage("");
        }, 5000);
      })
      .catch(() => {
        setContactMessage("Message not sent (service error) ❌");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="contact__form grid">
      <div className="contact__group grid">
        <input
          type="text"
          name="user_name"
          placeholder="Names"
          required
          className="contact__input"
          value={formData.user_name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          required
          className="contact__input"
          value={formData.user_email}
          onChange={handleChange}
        />
      </div>

      <textarea
        name="user_message"
        placeholder="Message"
        required
        className="contact__input contact__area"
        value={formData.user_message}
        onChange={handleChange}
      ></textarea>

      <button type="submit" className="button contact__button">
        Send Message
      </button>

      {contactMessage && <p className="contact__message">{contactMessage}</p>}
    </form>
  );
};

export default ContactForm;
