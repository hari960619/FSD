import React from "react";

function AddProductName({ nameHandler, nameValue }) {
  const handleInputName = (e) => {
    nameHandler(e.target.value);
    console.log("Product Name");
  };
  return (
    <div>
      <label htmlFor="name">Product name: </label>
      <input
        type="text"
        id="name"
        placeholder="Product Name"
        name="name"
        value={nameValue}
        onChange={handleInputName}
      />
    </div>
  );
}

export default AddProductName;
