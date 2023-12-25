import React, { useState } from "react";
import AddProductModal from "./AddResumeModal";

function AddProduct({ setFormSubmitted }) {
  const [showModal, setShowModal] = useState(false);
  function productAdditionHandler() {
    setShowModal(true);
  }
  function closeResumeAddModal(value) {
    setShowModal(value);
  }
  return (
    <div>
      <button onClick={productAdditionHandler}>Add a Resume</button>
      {showModal ? (
        <AddProductModal closeResumeAddModal={closeResumeAddModal} />
      ) : null}
    </div>
  );
}

export default AddProduct;
