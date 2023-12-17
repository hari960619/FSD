import React from "react";
import { useState } from "react";

function AuseStateHook() {
  // Simple Counter
  const [counter, setCounter] = useState(0);
  // useState with Objects
  const [name, setName] = useState({ firstName: "", lastName: "" });
  // useState on Arrays
  const [array, setArray] = useState([]);

  function addNumber() {
    setArray([
      ...array,
      { id: array.length, value: Math.floor(Math.random() * 100) + 1 },
    ]);
  }

  return (
    <div className="center-text">
      <h1 className="hook">"useState"</h1>
      <div>
        <h2 className="application">Simple Counter</h2>
        <h3>Counter : {counter}</h3>
        <button
          onClick={() => {
            setCounter((p) => p - 1);
          }}
        >
          Decrement
        </button>
        <button onClick={() => setCounter(0)}>Reset</button>
        <button
          onClick={() => {
            setCounter((p) => p + 1);
          }}
        >
          Increment
        </button>
      </div>

      <div>
        <h2 className="application">useState on Objects</h2>
        <form>
          <input
            type="text"
            value={name.firstName}
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
          />
          <input
            type="text"
            value={name.lastName}
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
          />
        </form>
        <h3>FirstName: "{name.firstName}"</h3>
        <h3>LastName: "{name.lastName}"</h3>
      </div>

      <div>
        <h2 className="application">useState on Array</h2>
        <button onClick={addNumber}>Add a Number</button>
        {array.map((e) => (
          <h1 key={e.id}>{e.value}</h1>
        ))}
      </div>
    </div>
  );
}

export default AuseStateHook;
