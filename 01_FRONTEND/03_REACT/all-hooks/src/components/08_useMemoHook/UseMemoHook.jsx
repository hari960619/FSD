import React from "react";
import { useState } from "react";
import ParentCompo from "./useMemoComponents/ParentCompo";

function UseMemoHook() {
  const [display, setDisplay] = useState(false);

  function handleDisplay() {
    setDisplay((prev) => !prev);
  }
  return (
    <div>
      <div className="useStateDiv">
        <h2 className="shF ct">
          useMemo
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

export default UseMemoHook;
