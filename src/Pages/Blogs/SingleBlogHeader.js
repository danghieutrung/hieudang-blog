// src/Pages/Blogs/SingleBlogHeader.js
import React from "react";

const SingleBlogHeader = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="/blogs" className="nav__logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right-circle"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 8a.5.5 0 0 1-.5.5H6.707l1.646 1.646a.5.5 0 0 1-.707.707l-2.5-2.5a.5.5 0 0 1 0-.707l2.5-2.5a.5.5 0 0 1 .707.707L6.707 7.5H10a.5.5 0 0 1 .5.5z"
            />
          </svg>
          {" "}My Blogs
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li>
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li>
              <a href="#contact" className="nav__link">
                Contact Me
              </a>
            </li>
          </ul>

          {/* Close button */}
          <div className="nav__close" id="nav-close">
            <i className="ri-close-large-line"></i>
          </div>
        </div>

        {/* Toggle button */}
        <div className="nav__toggle" id="nav-toggle">
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default SingleBlogHeader;
