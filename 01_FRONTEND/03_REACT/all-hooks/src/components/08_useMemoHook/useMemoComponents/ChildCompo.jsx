import React from "react";

function ChildCompo({ children }) {
  console.log("Child");
  return (
    <div>
      <h1>{children[0]}</h1>
    </div>
  );
}

export default ChildCompo;
