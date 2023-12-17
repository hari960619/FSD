import React from "react";

function AddProductPrice({ priceHandler, priceValue }) {
  function handleInputPrice(e) {
    priceHandler(e.target.value);
    console.log("Product Price");
  }
  return (
    <div>
      <label htmlFor="price">Product Price: </label>
      <input
        type="number"
        id="price"
        placeholder="Product Price"
        name="price"
        value={priceValue}
        onChange={handleInputPrice}
      />
    </div>
  );
}

export default AddProductPrice;
