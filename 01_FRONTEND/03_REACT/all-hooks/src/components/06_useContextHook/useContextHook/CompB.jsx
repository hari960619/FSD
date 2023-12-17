import React from "react";
import CompC from "./CompC";

function CompB() {
  return (
    <div>
      <h3>Component B</h3>
      <h3 className="contextText">I'm inside Component B Component</h3>
      <CompC />
    </div>
  );
}

export default CompB;
