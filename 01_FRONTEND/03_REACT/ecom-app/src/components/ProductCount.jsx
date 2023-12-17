import React, { useState } from "react";
import Button from "./Button";

function ProductCount({ stock }) {
  const [productCount, setProductCount] = useState(0);

  const add = () => {
    return setProductCount((prev) => prev + 1);
  };

  const remove = () => {
    return setProductCount((prev) => prev - 1);
  };

  return (
    <div className="count">
      <Button alterProduct={remove} disable={productCount === 0}>
        -
      </Button>
      <h2>{productCount}</h2>
      <Button alterProduct={add} disable={productCount >= stock}>
        +
      </Button>
    </div>
  );
}

export default ProductCount;
