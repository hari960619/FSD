import React from "react";
import CompD from "./CompD";

function CompC() {
  return (
    <div>
      <h3>Component C</h3>
      <h4 className="contextText">I'm inside Component C Component</h4>
      <CompD />
    </div>
  );
}

export default CompC;
