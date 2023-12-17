import React, { useCallback, useState } from "react";
import ChildCompo from "./ChildCompo";
import ButtonCompo from "./ButtonCompo";

function ParentCompo() {
  console.log("Parent !!!");
  const [count, setCount] = useState(0);
  const [activate, setActivate] = useState(false);

  const decrementCount = useCallback(
    function () {
      if (activate)
        setCount((prev) => {
          return prev - 1;
        });
    },
    [activate]
  );
  const incrementCount = useCallback(() => {
    if (activate)
      setCount((prev) => {
        return prev + 1;
      });
  }, [activate]);

  function handleActivate() {
    setActivate((prev) => !prev);
    setCount(10);
  }

  return (
    <div>
      <h5>Use Callback Hook</h5>
      <div className="callBackDiv">
        <ButtonCompo clickHandler={decrementCount}>-</ButtonCompo>
        <ChildCompo>{count}</ChildCompo>
        <ButtonCompo clickHandler={incrementCount}>+</ButtonCompo>
      </div>
      <button onClick={handleActivate}>
        {activate ? "Deactivate" : "Activate"}
      </button>
    </div>
  );
}

export default ParentCompo;
