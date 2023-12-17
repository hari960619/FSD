import React from "react";
import AddProductName from "./AddProductName";
import AddProductPrice from "./AddProductPrice";

function NamePriceDiv({ nameHandler, priceHandler, valueName, valuePrice }) {
  return (
    <div className="namePriceDiv">
      <AddProductName nameHandler={nameHandler} nameValue={valueName} />
      <AddProductPrice priceHandler={priceHandler} priceValue={valuePrice} />
    </div>
  );
}

export default NamePriceDiv;
