import React from "react";
import ProductInput from "./ProductInput";

function CreateProduct({ getProduct, toggleAddFormTwo, toggleAddFormThree }) {
  function addToggle() {
    toggleAddFormTwo(false);
  }
  return (
    <div className="createProductBlock">
      <ProductInput
        getProduct={getProduct}
        toggleAddFormThree={toggleAddFormThree}
      />

      <button className="cancelBtn" onClick={addToggle}>
        Cancel
      </button>
    </div>
  );
}

export default CreateProduct;
