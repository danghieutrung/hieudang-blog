// src/Components/SiteHeader.js
import React, { useEffect, useState } from "react";

// links: [{ href, label }]; in-page anchors ("#id") get scroll-spy highlighting.
// back: optional { href, label } shown in place of the wordmark.
const SiteHeader = ({ links = [], back }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const ids = links
      .filter((link) => link.href.startsWith("#"))
      .map((link) => link.href.slice(1));

    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);

      const offset = window.scrollY + 120;
      let current = ids[0] || null;
      ids.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= offset) current = id;
      });
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [links]);

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <nav className="nav container">
        {back ? (
          <a href={back.href} className="nav__logo nav__logo--back">
            <i className="ri-arrow-left-line"></i> {back.label}
          </a>
        ) : (
          <a href="/" className="nav__logo">
            Hieu<span className="nav__logo-dot">.</span>
          </a>
        )}

        <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}>
          <ul className="nav__list">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav__link ${
                    activeId && link.href === `#${activeId}` ? "active-link" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                  {link.external && <i className="ri-arrow-right-up-line"></i>}
                </a>
              </li>
            ))}
          </ul>

          <button className="nav__close" onClick={closeMenu} aria-label="Close menu">
            <i className="ri-close-large-line"></i>
          </button>
        </div>

        <button
          className="nav__toggle"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          <i className="ri-menu-line"></i>
        </button>
      </nav>
    </header>
  );
};

export default SiteHeader;
