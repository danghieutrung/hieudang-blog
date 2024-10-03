// src/Components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Hieu
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li>
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li>
              <a href="#info" className="nav__link">
                My Info
              </a>
            </li>
            <li>
              <a href="#projects" className="nav__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#services" className="nav__link">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="nav__link">
                Contact Me
              </a>
            </li>
            <li>
              <a href="/blogs/" className="nav__link">
                My Blog
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                  style={{ marginLeft: "4px", verticalAlign: "middle" }} // Adjust spacing and alignment
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 8l-4.5-4.5a.5.5 0 0 1 .7-.7l5.5 5.5a.5.5 0 0 1 0 .7l-5.5 5.5a.5.5 0 0 1-.7-.7L11.3 8z"
                  />
                </svg>
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

export default Header;
