import { cloneElement, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import "../styles/ImageLightbox.css";

const modalOverlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.45, ease: "easeIn" } },
};

const modalContent = {
  hidden: { opacity: 0, scale: 0.97, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1], type: "tween" },
  },
  exit: { opacity: 0, scale: 0.97, transition: { duration: 0.32, ease: "easeIn", type: "tween" } },
};

export default function ImageLightbox({ children, src, alt, openLabel, closeLabel }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const trigger = cloneElement(children, {
    role: "button",
    tabIndex: 0,
    "aria-label": openLabel,
    onClick: (event) => {
      children.props.onClick?.(event);
      if (!event.defaultPrevented) setIsOpen(true);
    },
    onKeyDown: (event) => {
      children.props.onKeyDown?.(event);
      if (!event.defaultPrevented && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        setIsOpen(true);
      }
    },
  });

  const modal = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="image-lightbox"
          onClick={() => setIsOpen(false)}
          variants={modalOverlay}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <button
            className="image-lightbox__close"
            onClick={() => setIsOpen(false)}
            aria-label={closeLabel}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <motion.div
            className="image-lightbox__content"
            onClick={(event) => event.stopPropagation()}
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <img src={src} alt={alt} decoding="async" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {trigger}
      {typeof document !== "undefined" ? createPortal(modal, document.body) : null}
    </>
  );
}
