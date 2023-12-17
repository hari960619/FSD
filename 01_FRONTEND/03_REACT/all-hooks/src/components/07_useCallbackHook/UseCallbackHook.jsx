import React from "react";
import { useState } from "react";
import ParentCompo from "./useCallbackComponents/ParentCompo";

function UseCallbackHook() {
  const [display, setDisplay] = useState(false);

  function handleDisplay() {
    setDisplay((prev) => !prev);
  }
  return (
    <div>
      <div className="useStateDiv">
        <h2 className="shF ct">
          useCallback
          <span>
            <button onClick={handleDisplay}>{display ? "-" : "+"}</button>
          </span>
          {display ? (
            <div>
              <ParentCompo />
            </div>
          ) : (
            ""
          )}
        </h2>
      </div>
    </div>
  );
}

export default UseCallbackHook;
