import React, { useCallback } from "react";
import { createPortal } from "react-dom";
import "./index.css";

function Modal({ isOpen, onClose, children, style }) {
  const modalRoot = document.getElementById("modal-root");
  const modalref = React.useRef(null);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  React.useEffect(() => {
    if (isOpen) {
      modalref.current?.focus();
    }
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !modalRoot) return null;

  return createPortal(
    <div
      className="modal-overlay modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onClick={onClose}
    >
      <div
        className="modal-content"
        style={style}
        onClick={(e) => e.stopPropagation()}
        ref={modalref}
        tabIndex={-1}
      >
        <Modal.CloseButton onClose={onClose} />

        {children}
      </div>
    </div>,
    modalRoot,
  );
}

function ModalTitle({ children }) {
  return <h2 id="modal-title">{children}</h2>;
}

function ModalDescription({ children }) {
  return <p id="modal-description">{children}</p>;
}

function ModalCloseButton({ onClose }) {
  return (
    <button
      type="button"
      className="modal-close"
      onClick={onClose}
      aria-label="Close modal"
    >
      ✕
    </button>
  );
}

function ModalFooter({ children }) {
  return <div className="modal-footer">{children}</div>;
}

Modal.Title = ModalTitle;
Modal.Description = ModalDescription;
Modal.CloseButton = ModalCloseButton;
Modal.Footer = ModalFooter;

export default Modal;
