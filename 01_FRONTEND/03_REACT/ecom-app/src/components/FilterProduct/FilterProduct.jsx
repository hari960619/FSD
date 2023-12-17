import React from "react";

function FilterProduct({ filterProducts }) {
  function filterChange(e) {
    filterProducts(e.target.value);
  }
  return (
    <div className="filterBlock">
      <h4>Filter the Availability of the Products: </h4>
      <select onChange={filterChange}>
        <option value="all">All</option>
        <option value="available">Available</option>
        <option value="out of stock">Unavailable</option>
      </select>
    </div>
  );
}

export default FilterProduct;
