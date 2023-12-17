import React from "react";
import ProductCount from "./ProductCount";

function ProductDescription({ name, desc, price, type, stock }) {
  return (
    <div className="productDescription">
      <h1>{name}</h1>
      <h4 className="typeMention">{type === "veg" ? "VG" : "NV"}</h4>
      <h5>{desc}</h5>
      <h2>Price : ₹ {price}</h2>
      <ProductCount stock={stock} />
    </div>
  );
}

export default ProductDescription;
