import React from "react";

function IsProductAvailDiv({ availHandler, valueAvail }) {
  function handleProductAvailability(e) {
    availHandler(e.target.checked);
    console.log("Product Availability");
  }
  return (
    <div className="isProductAvailable">
      <input
        type="checkbox"
        role="switch"
        id="isProductAvailable"
        name="isAvail"
        checked={valueAvail}
        onChange={handleProductAvailability}
      />
      <label htmlFor="isProductAvailable">
        Is product Available in stock ?
      </label>
    </div>
  );
}

export default IsProductAvailDiv;
