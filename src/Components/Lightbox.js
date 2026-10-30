// src/Components/Lightbox.js
import React, { useEffect } from "react";

// Full-screen image viewer. images: [{ src, alt }]; index: open image or null.
const Lightbox = ({ images, index, onChange, onClose }) => {
  const isOpen = index !== null;

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % images.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + images.length) % images.length);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, index, images.length, onChange, onClose]);

  if (!isOpen) return null;

  const image = images[index];
  const hasMany = images.length > 1;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={image.alt} onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Close">
        <i className="ri-close-large-line"></i>
      </button>

      {hasMany && (
        <button
          className="lightbox__nav lightbox__nav--prev"
          onClick={(e) => {
            e.stopPropagation();
            onChange((index - 1 + images.length) % images.length);
          }}
          aria-label="Previous image"
        >
          <i className="ri-arrow-left-s-line"></i>
        </button>
      )}

      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.alt} className="lightbox__img" />
        <figcaption className="lightbox__caption">
          {image.alt}
          {hasMany && (
            <span className="lightbox__count">
              {index + 1} / {images.length}
            </span>
          )}
        </figcaption>
      </figure>

      {hasMany && (
        <button
          className="lightbox__nav lightbox__nav--next"
          onClick={(e) => {
            e.stopPropagation();
            onChange((index + 1) % images.length);
          }}
          aria-label="Next image"
        >
          <i className="ri-arrow-right-s-line"></i>
        </button>
      )}
    </div>
  );
};

export default Lightbox;
