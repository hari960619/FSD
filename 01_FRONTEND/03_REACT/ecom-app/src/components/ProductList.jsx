import React from "react";
import Product from "./Product";

function ProductList({ newProductList }) {
  console.log(newProductList);

  return (
    <div className="productList">
      {newProductList.length === 0 ? (
        <h1 className="npAvail">NO PRODUCTS AVAILABLE</h1>
      ) : (
        newProductList.map((product) => (
          <Product
            key={product.pID}
            name={product.pName}
            desc={product.desc}
            isAvailable={product.isAvailable}
            image={product.image}
            price={product.price}
            type={product.type}
            stock={product.stock}
          />
        ))
      )}
    </div>
  );
}

export default ProductList;
