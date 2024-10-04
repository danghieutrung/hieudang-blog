// src/Components/Header.js
import React, { useEffect, useRef, useState } from "react";

const NewHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionsRef = useRef([]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollActive = () => {
    const scrollDown = window.scrollY;

    sectionsRef.current.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 58; // Adjust based on your header height
      const sectionId = section.getAttribute("id");

      const sectionsClass =
        sectionId === "recent_works"
          ? document.querySelector(`.nav__menu a[href="#projects"]`)
          : document.querySelector(`.nav__menu a[href="#${sectionId}"]`);

      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add("active-link");
      } else {
        sectionsClass.classList.remove("active-link");
      }
    });
  };

  useEffect(() => {
    sectionsRef.current = [
      document.getElementById("home"),
      document.getElementById("info"),
      document.getElementById("projects"),
      document.getElementById("services"),
      document.getElementById("contact"),
      document.getElementById("recent_works"),
    ];

    window.addEventListener("scroll", scrollActive);

    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo" onClick={closeMenu}>
          Hieu
        </a>

        <div
          className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li>
              <a href="#home" className="nav__link" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#info" className="nav__link" onClick={closeMenu}>
                My Info
              </a>
            </li>
            <li>
              <a href="#projects" className="nav__link" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#services" className="nav__link" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="nav__link" onClick={closeMenu}>
                Contact Me
              </a>
            </li>
            <li>
              <a href="/blogs/" className="nav__link" onClick={closeMenu}>
                My Blog
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
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
          <div className="nav__close" onClick={closeMenu}>
            <i className="ri-close-large-line"></i>
          </div>
        </div>

        {/* Toggle button */}
        <div className="nav__toggle" onClick={toggleMenu}>
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default NewHeader;
