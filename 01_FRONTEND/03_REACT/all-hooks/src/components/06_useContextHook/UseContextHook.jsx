import React from "react";
import { useState } from "react";
import CompA from "./useContextHook/CompA";

function UseContextHook() {
  const [display, setDisplay] = useState(false);

  function handleDisplay() {
    setDisplay((prev) => !prev);
  }
  return (
    <div className="useStateDiv">
      <h2 className="shF ct">
        useContext
        <span>
          <button onClick={handleDisplay}>{display ? "-" : "+"}</button>
        </span>
        {display ? (
          <div>
            <CompA />
            <h1 className="contextText">I'm inside UseContextHook Component</h1>
          </div>
        ) : (
          ""
        )}
      </h2>
    </div>
  );
}

export default UseContextHook;
