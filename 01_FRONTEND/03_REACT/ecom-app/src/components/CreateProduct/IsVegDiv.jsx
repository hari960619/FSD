import React from "react";

function IsVegDiv({ handleSetProductType }) {
  function isVegFunction(e) {
    handleSetProductType(e.target.value);
  }

  return (
    <div className="isVegDiv">
      <input
        type="radio"
        id="veg"
        value="veg"
        name="isVeg"
        onChange={isVegFunction}
      />
      <label htmlFor="veg">Veg</label>

      <input
        type="radio"
        id="non-veg"
        value="non-veg"
        name="isVeg"
        onChange={isVegFunction}
      />
      <label htmlFor="non-veg">Non-Veg</label>
    </div>
  );
}

export default IsVegDiv;
