// src/Components/Header.js
import React, { useEffect, useRef, useState } from "react";

const ErrorHeader = () => {
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

export default ErrorHeader;
