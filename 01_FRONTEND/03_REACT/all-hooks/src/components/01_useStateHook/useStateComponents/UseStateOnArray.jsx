import React, { useState } from "react";

function UseStateOnArray() {
  const numbersArray = [
    { id: 1, val: 15 },
    { id: 2, val: 19 },
    { id: 3, val: 21 },
    { id: 4, val: 24 },
  ];
  const [number, setNumber] = useState(null);
  const [numbers, setNumbers] = useState(numbersArray);

  const [error, setError] = useState(false);

  function handleNumInput(e) {
    setNumber(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!number) {
      return setError(true);
    }

    let addedNumber = {
      id: numbers.length + 1,
      val: number,
    };
    setNumbers([...numbers, addedNumber]);
  }

  return (
    <div>
      <h5>Use State on Arrays</h5>
      <form className="formBlock" onSubmit={handleSubmit}>
        <div className="formInput">
          <label htmlFor="number">Enter Number:</label>
          <input
            id="number"
            value={number}
            onChange={handleNumInput}
            type="number"
          />
        </div>
        <button type="submit">Add Number</button>
      </form>
      {error ? "Please Provide the Number" : ""}
      <div className="usersBlock">
        {numbers.map((num) => {
          return <p key={num.id}>{num.val}</p>;
        })}
      </div>
    </div>
  );
}

export default UseStateOnArray;
