import React from "react";
import { useState } from "react";
import InputRef from "./useRefComponents/InputRef";
import ElementRef from "./useRefComponents/ElementRef";

function UseRefComp() {
  const [display, setDisplay] = useState(false);

  function handleDisplay() {
    setDisplay((prev) => !prev);
  }
  return (
    <div>
      <div className="useStateDiv">
        <h2 className="shF ct">
          useRef
          <span>
            <button onClick={handleDisplay}>{display ? "-" : "+"}</button>
          </span>
          {display ? (
            <div>
              <InputRef />
              <ElementRef />
            </div>
          ) : (
            ""
          )}
        </h2>
      </div>
    </div>
  );
}

export default UseRefComp;
