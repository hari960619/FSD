import React from "react";

function ChildCompo({ children }) {
  console.log("Child !!!");
  return <div>{children}</div>;
}

export default React.memo(ChildCompo);
