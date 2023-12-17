import React from "react";

function ProductDescriptionDiv({ descripHandler, valueDescrip }) {
  function handleProductDescription(e) {
    descripHandler(e.target.value);
    console.log("Product Description");
  }
  return (
    <div className="productDescriptionDiv">
      <label htmlFor="description">Enter Product Description:</label>
      <input
        type="text"
        id="description"
        name="description"
        value={valueDescrip}
        placeholder="Product Description"
        onChange={handleProductDescription}
      />
    </div>
  );
}

export default ProductDescriptionDiv;
