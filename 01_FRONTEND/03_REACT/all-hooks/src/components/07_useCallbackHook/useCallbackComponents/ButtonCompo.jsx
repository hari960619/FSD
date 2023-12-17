import React from "react";

function ButtonCompo({ children, clickHandler }) {
  console.log(`${children} rendered!!!`);
  return <button onClick={clickHandler}>{children}</button>;
}

export default React.memo(ButtonCompo);
