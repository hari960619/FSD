import React from "react";

function AddProductButton({ onSubmit }) {
  return (
    <button type="submit" className="addProductBtn" onClick={onSubmit}>
      Add Product
    </button>
  );
}

export default AddProductButton;
