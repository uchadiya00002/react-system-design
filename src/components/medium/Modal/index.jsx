import React from "react";
import "./index.css";

function Modal({ isOpen, onClose, children, style }) {
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
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
      >
        <Modal.CloseButton onClose={onClose} />

        {children}
      </div>
    </div>
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
