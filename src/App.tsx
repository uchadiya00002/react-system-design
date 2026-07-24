import React, { useState } from "react";

import Modal from "./components/medium/Modal";
import "./App.css";

export default function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="App">
      <button
        className="open-modal-button"
        onClick={() => setIsOpenModal(true)}
      >
        Open Modal
      </button>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <Modal.Title>Delete Account</Modal.Title>
        <Modal.Description>This action cannot be undone.</Modal.Description>
        <Modal.Footer>
          <button
            className="open-modal-button"
            onClick={() => setIsOpenModal(false)}
          >
            Cancel
          </button>
          <button className="open-modal-button">Delete</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
