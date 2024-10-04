// src/Components/HomeBlogHeader.js
import React, { useEffect, useRef, useState } from "react";

const HomeBlogHeader = () => {
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
      document.getElementById("blogs"),
      document.getElementById("contact"),
    ];

    window.addEventListener("scroll", scrollActive);

    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
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
          </svg>{" "}
          Main Page
        </a>

        <div
          className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li>
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li>
              <a href="#blogs" className="nav__link">
                Blogs
              </a>
            </li>
            <li>
              <a href="#contact" className="nav__link">
                Contact Me
              </a>
            </li>
          </ul>

          <div className="nav__close" onClick={closeMenu}>
            <i className="ri-close-large-line"></i>
          </div>
        </div>

        <div className="nav__toggle" onClick={toggleMenu}>
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default HomeBlogHeader;
