// src/Components/ScrollUpButton.js
import React, { useEffect, useState } from "react";

const ScrollUpButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 350) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showScroll && (
        <button
          id="scrollup"
          onClick={scrollToTop}
          className="scrollup show-scroll" // Add any additional styling here
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollUpButton;
