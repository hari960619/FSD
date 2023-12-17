import React, { useRef } from "react";

function RefComp() {
  const inputRef = useRef();

  function handleClick() {
    console.log(inputRef.current.value);
  }
  return (
    <div>
      <h1>useRef</h1>
      <label htmlFor="name">Enter Name:</label>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default RefComp;
