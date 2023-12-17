import React, { useContext } from "react";

import { CountContext } from "./DuseReducerHook";

function DuseReducerC() {
  const countContext = useContext(CountContext);
  return (
    <div className="center-text">
      <h1 className="hook">"useReducer"</h1>
      <h1> Count in Bottom : {countContext.countState}</h1>
      <div>
        <button
          onClick={() => {
            countContext.countDispatch({ type: "dec" });
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            countContext.countDispatch({ type: "reset" });
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            countContext.countDispatch({ type: "inc" });
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default DuseReducerC;
