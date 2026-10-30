// src/Components/ContactMe.js
import React from "react";
import ContactForm from "./Contact/ContactForm";
import SocialLinks from "./Contact/SocialLinks";

const ContactMe = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <p className="section__eyebrow">Contact</p>
        <h2 className="section__title">Let's work together</h2>
        <p className="contact__lead">
          The fastest way to reach me is by email at{" "}
          <a href="mailto:contact.hieudang@gmail.com">contact.hieudang@gmail.com</a>
          , or send a message below.
        </p>

        <div className="contact__container">
          <SocialLinks />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
