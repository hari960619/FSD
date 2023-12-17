import React from "react";

function TypeBlock({ filterType }) {
  function handleTypeSeparation(e) {
    filterType(e.target.value);
  }
  return (
    <div className="separateTypeBlock">
      <h3 className="ct">Filter the products based on type:</h3>
      <div>
        <input
          type="radio"
          id="vegetarian"
          name="vegVSnon"
          value="veg"
          onChange={handleTypeSeparation}
        />
        <label htmlFor="vegetarian">Veg</label>
      </div>
      <div>
        <input
          type="radio"
          id="nonVegetarian"
          name="vegVSnon"
          value="non-veg"
          onChange={handleTypeSeparation}
        />
        <label htmlFor="nonVegetarian">Non-Veg</label>
      </div>
      <div>
        <input
          type="radio"
          id="both"
          name="vegVSnon"
          value="both"
          onChange={handleTypeSeparation}
        />
        <label htmlFor="vegVSnon">Both</label>
      </div>
    </div>
  );
}

export default TypeBlock;
