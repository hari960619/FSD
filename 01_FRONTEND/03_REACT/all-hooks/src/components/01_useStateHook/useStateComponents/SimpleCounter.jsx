import React, { useState } from "react";

function SimpleCounter() {
  const [count, setCount] = useState(0);

  function decrease() {
    setCount((prev) => prev - 1);
  }

  function increase() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <h5>Simple Counter</h5>
      <h1>{count}</h1>
      <button onClick={decrease}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default SimpleCounter;
