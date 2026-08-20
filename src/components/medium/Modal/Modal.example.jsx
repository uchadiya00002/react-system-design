import React from "react";
import Modal from "./index.jsx";

function ModalExample() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className="demo-section">
      <h2>Modal Example</h2>

      <button
        type="button"
        className="open-modal-button"
        onClick={() => setIsOpen(true)}
      >
        Open modal
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Title>Example modal</Modal.Title>
        <Modal.Description>
          This modal is mounted through a portal and closes on Escape or backdrop click.
        </Modal.Description>

        <p>
          You can put any content here, including forms, alerts, or confirmation messages.
        </p>

        <Modal.Footer>
          <button
            type="button"
            className="open-modal-button"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default ModalExample;
