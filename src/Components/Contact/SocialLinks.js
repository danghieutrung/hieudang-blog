// src/Components/Contact/SocialLinks.js
import React from "react";

const SocialLinks = () => {
  return (
    <div className="contact__social grid">
      <a
        href="https://www.facebook.com/curry2974/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact__social-link"
      >
        <i className="ri-facebook-circle-line"></i>
        <span>Facebook</span>
      </a>

      <a
        href="https://www.instagram.com/stephen_squirry/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact__social-link"
      >
        <i className="ri-instagram-line"></i>
        <span>Instagram</span>
      </a>

      <a
        href="https://www.linkedin.com/in/trunghieudang"
        target="_blank"
        rel="noopener noreferrer"
        className="contact__social-link"
      >
        <i className="ri-linkedin-box-line"></i>
        <span>Linkedin</span>
      </a>

      <a
        href="https://x.com/hieu_dang_/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact__social-link"
      >
        <i className="ri-twitter-line"></i>
        <span>X (Twitter)</span>
      </a>

      <a
        href="https://open.spotify.com/user/vejhzanembwlmo1vslzsmrux9/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact__social-link"
      >
        <i className="ri-spotify-line"></i>
        <span>Spotify</span>
      </a>

      <a
        href="https://github.com/danghieutrung/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact__social-link"
      >
        <i className="ri-github-line"></i>
        <span>GitHub</span>
      </a>
    </div>
  );
};

export default SocialLinks;
