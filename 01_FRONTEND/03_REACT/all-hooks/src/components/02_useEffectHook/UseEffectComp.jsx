import React from "react";
import { useState } from "react";
import ChangeDocTitle from "./useEffectComponents/ChangeDocTitle";
import EffectOfEvent from "./useEffectComponents/EffectOfEvent";
import SideEffect from "./useEffectComponents/SideEffect";
import StoreData from "./useEffectComponents/StoreData";

function UseEffectComp() {
  const [display, setDisplay] = useState(false);

  function handleDisplay() {
    setDisplay((prev) => !prev);
  }
  return (
    <div>
      <div className="useStateDiv">
        <h2 className="shF ct">
          useEffect
          <span>
            <button onClick={handleDisplay}>{display ? "-" : "+"}</button>
          </span>
          {display ? (
            <div>
              <SideEffect />
              <ChangeDocTitle />
              <EffectOfEvent />
              <StoreData />
            </div>
          ) : (
            ""
          )}
        </h2>
      </div>
    </div>
  );
}

export default UseEffectComp;
