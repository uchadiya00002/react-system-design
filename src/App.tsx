import { useState } from "react";
import Modal from "./components/medium/Modal";
import "./App.css";

function App() {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <div className="App">
        <button
          className="open-modal-button"
          onClick={() => setOpenModal(true)}
        >
          Open Modal
        </button>
      </div>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <p>This is the modal content.</p>
      </Modal>
    </>
  );
}

export default App;
