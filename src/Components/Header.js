import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Hieu
        </a>

        <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`} id="nav-menu">
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

export default Header;
