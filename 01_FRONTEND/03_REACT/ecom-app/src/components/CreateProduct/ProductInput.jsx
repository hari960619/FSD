import React, { useState } from "react";
import NamePriceDiv from "./NamePriceDiv";
import ProductDescriptionDiv from "./ProductDescriptionDiv";
import IsProductAvailDiv from "./IsProductAvailDiv";
import UploadDiv from "./UploadDiv";
import AddProductButton from "./AddProductButton";
import IsVegDiv from "./IsVegDiv";

function ProductInput({ getProduct, toggleAddFormThree }) {
  const [productName, setProductName] = useState("");

  const [productPrice, setProductPrice] = useState(0);

  const [productDescrip, setProductDescrip] = useState("");

  const [isProductAvail, setIsProductAvail] = useState(false);

  const [fileUpload, setFileUpload] = useState("");

  const [productType, setProductType] = useState("");

  function handleSetProductName(value) {
    setProductName(value);
  }
  function handleSetProductPrice(value) {
    setProductPrice(value);
  }
  function handleSetProductDescrip(value) {
    setProductDescrip(value);
  }
  function handleSetIsProductAvail(value) {
    setIsProductAvail(value);
  }
  function handleSetFileUpload(value) {
    setFileUpload(value);
  }

  function handleSetProductType(value) {
    setProductType(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
    toggleAddFormThree(false);

    let newProduct = {
      pName: productName,
      price: Number(productPrice),
      desc: productDescrip,
      isAvailable: Boolean(isProductAvail),
      image: fileUpload,
      type: productType,
    };

    getProduct(newProduct);
    console.log(newProduct);

    setProductName("");
    setProductPrice("");
    setProductDescrip("");
    setIsProductAvail(false);
    setFileUpload("");
    setProductType("");
  }

  return (
    <div className="addProductBlock">
      <form>
        <h1 className="ct">Add Product</h1>
        <NamePriceDiv
          valueName={productName}
          valuePrice={productPrice}
          nameHandler={handleSetProductName}
          priceHandler={handleSetProductPrice}
        />
        <ProductDescriptionDiv
          valueDescrip={productDescrip}
          descripHandler={handleSetProductDescrip}
        />
        <IsVegDiv handleSetProductType={handleSetProductType} />
        <IsProductAvailDiv
          valueAvail={isProductAvail}
          availHandler={handleSetIsProductAvail}
        />
        <UploadDiv valueFile={fileUpload} uploadHandler={handleSetFileUpload} />
        <AddProductButton onSubmit={handleSubmit} />
      </form>
      {/* <div>
        <h1>{productName}</h1>
        <h1>{productPrice > 0 ? productPrice : ""}</h1>
        <h1>{productDescrip}</h1>
        <h1>{isProductAvail ? "Available" : "Out of Stock"}</h1>
        <h1>{fileUpload}</h1>
      </div> */}
    </div>
  );
}

export default ProductInput;
