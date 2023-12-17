import React, { useEffect, useState } from "react";

function SideEffect() {
  const [val, setVal] = useState("");

  function handleClickA() {
    setVal("Alpha");
  }
  function handleClickB() {
    setVal("Beta");
  }
  function handleClickG() {
    setVal("Gamma");
  }
  useEffect(() => {
    console.log("Component Rendered!!!");
  }, [val]);

  useEffect(() => {
    console.log("Initial Render");
  }, []);

  return (
    <div>
      <h5>Side Effect Demo</h5>
      <div>
        <button onClick={handleClickA}>Alpha</button>
        <button onClick={handleClickB}>Beta</button>
        <button onClick={handleClickG}>Gamma</button>
      </div>
    </div>
  );
}

export default SideEffect;
