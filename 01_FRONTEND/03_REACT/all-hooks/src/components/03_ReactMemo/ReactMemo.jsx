import React from "react";
import ReactMemoParent from "./reactMemoComponents/ReactMemoParent";
import { useState } from "react";

function ReactMemo() {
  const [display, setDisplay] = useState(false);

  function handleDisplay() {
    setDisplay((prev) => !prev);
  }
  return (
    <div>
      <div className="useStateDiv">
        <h2 className="shF ct">
          React Memo
          <span>
            <button onClick={handleDisplay}>{display ? "-" : "+"}</button>
          </span>
          {display ? (
            <div>
              <ReactMemoParent />
            </div>
          ) : (
            ""
          )}
        </h2>
      </div>
    </div>
  );
}

export default ReactMemo;
