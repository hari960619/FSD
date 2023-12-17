import React, { useState } from "react";
import SimpleCounter from "./useStateComponents/SimpleCounter";
import UseStateOnObject from "./useStateComponents/UseStateOnObject";
import UseStateOnArray from "./useStateComponents/UseStateOnArray";

function UseStateComp() {
  const [display, setDisplay] = useState(false);

  function handleDisplay() {
    setDisplay((prev) => !prev);
  }
  return (
    <div>
      <div className="useStateDiv">
        <h2 className="shF ct">
          useState
          <span>
            <button onClick={handleDisplay}>{display ? "-" : "+"}</button>
          </span>
          {display ? (
            <div>
              <SimpleCounter />
              <UseStateOnObject />
              <UseStateOnArray />
            </div>
          ) : (
            ""
          )}
        </h2>
      </div>
    </div>
  );
}

export default UseStateComp;
