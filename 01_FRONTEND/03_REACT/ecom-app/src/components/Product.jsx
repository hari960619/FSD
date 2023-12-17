import React from "react";
import ProductDescription from "./ProductDescription";
import StockBlock from "./StockBlock";

function Product({ name, desc, isAvailable, image, price, type, stock }) {
  return (
    <div
      className="singleProduct"
      style={{ backgroundColor: type === "veg" ? "green" : "red" }}
    >
      <ProductDescription
        name={name}
        desc={desc}
        price={price}
        type={type}
        stock={stock}
      />
      <StockBlock image={image} name={name} isAvailable={isAvailable} />
    </div>
  );
}

export default Product;
