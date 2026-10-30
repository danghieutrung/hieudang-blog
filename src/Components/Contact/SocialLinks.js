// src/Components/Contact/SocialLinks.js
import React from "react";

const links = [
  {
    href: "mailto:contact.hieudang@gmail.com",
    icon: "ri-mail-line",
    label: "Email",
    detail: "contact.hieudang@gmail.com",
  },
  {
    href: "https://www.linkedin.com/in/trunghieudang",
    icon: "ri-linkedin-box-line",
    label: "LinkedIn",
    detail: "in/trunghieudang",
  },
  {
    href: "https://github.com/danghieutrung/",
    icon: "ri-github-line",
    label: "GitHub",
    detail: "danghieutrung",
  },
];

const SocialLinks = () => {
  return (
    <div className="contact__social">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="contact__social-link"
        >
          <i className={link.icon}></i>
          <span>
            <strong>{link.label}</strong>
            <small>{link.detail}</small>
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
