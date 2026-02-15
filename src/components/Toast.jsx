import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  FaCheck,
  FaInfoCircle,
  FaExclamationTriangle,
  FaTimes,
} from "react-icons/fa";
import "../styles/Toast.css";

const ICONS = {
  success: FaCheck,
  info: FaInfoCircle,
  error: FaExclamationTriangle,
};

function Toast({
  open,
  type = "info",
  title,
  message,
  duration = 4500,
  onClose,
  position = "bottom-right", // "bottom-right" | "bottom-left" | "top-right" | "top-left"
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    if (!duration) return;

    const id = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => clearTimeout(id);
  }, [open, duration, onClose]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (!open) return;
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!mounted || !open) return null;

  const Icon = ICONS[type] || ICONS.info;

  return createPortal(
    <div
      className={`toast-wrap toast-pos-${position}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <div className={`toast toast-${type}`} role="status">
        <div className="toast-icon" aria-hidden="true">
          <Icon />
        </div>

        <div className="toast-content">
          {title ? <div className="toast-title">{title}</div> : null}
          <div className="toast-message">{message}</div>
        </div>

        <button
          type="button"
          className="toast-close"
          onClick={onClose}
          aria-label="Zatvori poruku"
        >
          <FaTimes />
        </button>
      </div>
    </div>,
    document.body,
  );
}

export default Toast;
