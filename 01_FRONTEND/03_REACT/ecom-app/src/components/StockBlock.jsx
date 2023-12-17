import React from "react";

function StockBlock({ image, name, isAvailable }) {
  let availability = isAvailable ? "Available" : "Available";
  return (
    <div className="stockBlock">
      <img src={image} alt={name} />
      <h3 className={isAvailable ? "ct isAvailable" : "ct notAvailable"}>
        {availability}
      </h3>
    </div>
  );
}

export default StockBlock;
