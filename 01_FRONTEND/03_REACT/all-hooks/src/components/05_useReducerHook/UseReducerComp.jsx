import React from "react";
import { useState } from "react";
import SimpleCounter from "./useReducerComponents/SimpleCounter";
import Form from "./useReducerComponents/Form";

function UseReducerComp() {
  const [display, setDisplay] = useState(false);

  function handleDisplay() {
    setDisplay((prev) => !prev);
  }
  return (
    <div>
      <div className="useStateDiv">
        <h2 className="shF ct">
          useReducer
          <span>
            <button onClick={handleDisplay}>{display ? "-" : "+"}</button>
          </span>
          {display ? (
            <div>
              <SimpleCounter />
              <Form />
            </div>
          ) : (
            ""
          )}
        </h2>
      </div>
    </div>
  );
}

export default UseReducerComp;
