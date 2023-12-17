import React, { useState } from "react";
import ReactMemoChild from "./ReactMemoChild";
import ReactMemoChildButton from "./ReactMemoChildButton";

function ReactMemoParent() {
  console.log("Main Component Rendered!!!");
  const [count, setCount] = useState(0);

  function handleDecrement() {
    setCount((prev) => {
      return prev - 1;
    });
  }
  function handleIncrement() {
    setCount((prev) => {
      return prev + 1;
    });
  }

  return (
    <div>
      <h5>React Memo</h5>
      <div className="memoDiv">
        <ReactMemoChildButton onClick={handleDecrement}>-</ReactMemoChildButton>
        <ReactMemoChild>{count}</ReactMemoChild>
        <ReactMemoChildButton onClick={handleIncrement}>+</ReactMemoChildButton>
      </div>
    </div>
  );
}

export default ReactMemoParent;
