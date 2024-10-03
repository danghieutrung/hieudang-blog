// src/Pages/Blogs/SpotifyBlog/Components/BlogFooter.js
import React from "react";

const BlogFooter = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <ul className="footer__links">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>
          <li>
            <a href="#blogs" className="footer__link">
              Blogs
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <span className="footer__copy">
          &#169; Dang Trung Hieu. All rights reserved
        </span>
      </div>

      {/* <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a> */}
      <button className="scrollup" id="scroll-up" aria-label="Scroll to top">
        <i className="ri-arrow-up-line"></i>
      </button>
    </footer>
  );
};

export default BlogFooter;
