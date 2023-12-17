import { useState } from "react";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import ProductList from "./components/ProductList";
import "./styles/App.css";
import { products as productDataList } from "./components/ProductsData";
import FilterProduct from "./components/FilterProduct/FilterProduct";
import TypeBlock from "./components/isVeg/TypeBlock";
import Modal from "./components/PortalElements/Modal";
// import RefComp from "./components/useRef/RefComp";
// import Demo from "./components/PortalElements/Demo";

function App() {
  const [productList, setProductList] = useState(productDataList);
  const [filterValue, setFilterValue] = useState("all");
  const [foodType, setFoodType] = useState("both");

  const [showAdd, setShowAdd] = useState(false);

  const [displayModal, setDisplayModal] = useState(false);

  function showModalFun() {
    setDisplayModal(true);
  }

  function closeModalFun(value) {
    setDisplayModal(value);
  }

  function toggleAddForm() {
    setShowAdd(true);
  }

  function toggleAddFormTwo(value) {
    setShowAdd(value);
  }

  function toggleAddFormThree(value) {
    setShowAdd(value);
  }

  const filteredProducts = productList.filter(prod => {
    /* if (filterValue === "available") {
      return prod.isAvailable === true
    } else if (filterValue === "out of stock") {
      return prod.isAvailable === false
    } else {
      return productList;
    } */

    /* switch (filterValue) {
      case "available": return prod.isAvailable === true
      case "out of stock": return prod.isAvailable === false
      default: return productList
    } */

    switch (filterValue) {
      case "available":
        switch (foodType) {
          case "veg": return prod.isAvailable === true && prod.type === "veg";
          case "non-veg": return prod.isAvailable === true && prod.type === "non-veg";
          default: return prod.isAvailable === true;
        }
      case "out of stock":
        switch (foodType) {
          case "veg": return prod.isAvailable === false && prod.type === "veg";
          case "non-veg": return prod.isAvailable === false && prod.type === "non-veg";
          default: return prod.isAvailable === false;
        }
      default:
        switch (foodType) {
          case "veg": return prod.type === "veg";
          case "non-veg": return prod.type === "non-veg";
          default: return productList;
        }
    }
  })

  function getProduct(newProd) {
    let product = { pID: productList.length + 1, ...newProd };
    console.log(product)
    setProductList([...productList, product]);
  }

  function setFilterValueFunction(value) {
    setFilterValue(value);
  }

  function filterType(value) {
    setFoodType(value);
  }

  return (
    <div>
      <h1 className="ct space appTitle">Grocery Store</h1>
      <button className="addBtn" onClick={toggleAddForm}>Add a new Product</button>
      {showAdd && <CreateProduct getProduct={getProduct} toggleAddFormTwo={toggleAddFormTwo} toggleAddFormThree={toggleAddFormThree} />}
      <FilterProduct filterProducts={setFilterValueFunction} />
      <TypeBlock filterType={filterType} />
      <ProductList newProductList={filteredProducts} />
      {/* <Demo /> */}
      <button className="shwMd" onClick={showModalFun}>Show Modal</button>
      <Modal displayModal={displayModal} closeModalFun={closeModalFun} />

      {/* <RefComp /> */}
    </div>
  );
}

export default App;
