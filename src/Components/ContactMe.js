// src/Components/ContactMe.js
import React from "react";
import ContactForm from "./Contact/ContactForm";
import SocialLinks from "./Contact/SocialLinks";

const ContactMe = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title__contactme">CONTACT ME</h2>
      <h3 className="my_email">contact.hieudang@gmail.com</h3>

      <div className="contact__container container grid">
        <ContactForm />
        <SocialLinks />
      </div>
    </section>
  );
};

export default ContactMe;
