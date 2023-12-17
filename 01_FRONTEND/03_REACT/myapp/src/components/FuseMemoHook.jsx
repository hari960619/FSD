import React, { useState, useMemo } from "react";

function FuseMemoHook() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(100);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 10);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 999999999) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <h1 className="hook">"useMemo"</h1>
      <button className="sepBtn" onClick={incrementOne}>
        Count: {counterOne}
      </button>
      <h1>{isEven ? "Even" : "Odd"}</h1>
      <button className="sepBtn" onClick={incrementTwo}>
        Count: {counterTwo}
      </button>
    </div>
  );
}

export default FuseMemoHook;
