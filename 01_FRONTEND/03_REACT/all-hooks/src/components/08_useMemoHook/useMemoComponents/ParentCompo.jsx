import React, { useMemo, useState } from "react";
import ChildCompo from "./ChildCompo";

function ParentCompo() {
  const [count, setCount] = useState(0);
  console.log("Parent");

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

  function justCheckFun() {
    console.log("Ola");
  }

  let list = useMemo(() => {
    return [10, 20];
  }, []);

  return (
    <div>
      <h5>Use Memo</h5>
      <div className="useMemoDiv">
        <button onClickHandler={handleDecrement}>-</button>
        <ChildCompo>{list}</ChildCompo>
        <button onClickHandler={handleIncrement}>+</button>
      </div>
      <button onClick={justCheckFun}>Just Checking</button>
    </div>
  );
}

export default ParentCompo;
