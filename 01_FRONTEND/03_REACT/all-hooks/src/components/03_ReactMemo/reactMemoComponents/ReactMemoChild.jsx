import React from "react";

function ReactMemoChild({ children }) {
  console.log("Child component rendered !!!");
  return <div>{children}</div>;
}

export default React.memo(ReactMemoChild);
