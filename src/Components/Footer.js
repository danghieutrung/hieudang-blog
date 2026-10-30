// src/Components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <span className="footer__copy">
          &#169; {new Date().getFullYear()} Dang Trung Hieu
        </span>
        <a href="mailto:contact.hieudang@gmail.com" className="footer__link">
          contact.hieudang@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
