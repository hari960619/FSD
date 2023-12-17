import React, { useReducer } from "react";

function reducerFun(currentState, action) {
  if (action === "decrement") {
    return { value: currentState.value - 1 };
  } else if (action === "increment") {
    return { value: currentState.value + 1 };
  } else return currentState;
}

function SimpleCounter() {
  const [count, dispatcher] = useReducer(reducerFun, { value: 0 });
  return (
    <div>
      <h5>Simple Counter</h5>
      <div className="reducerCounterDiv">
        <button onClick={() => dispatcher("decrement")}>-</button>
        <span>{count.value}</span>
        <button onClick={() => dispatcher("increment")}>+</button>
      </div>
    </div>
  );
}

export default SimpleCounter;
