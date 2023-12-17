import React from "react";

function ButtonComponent({ children, onClickHandler }) {
  console.log(`${children}`);
  return (
    <div>
      <button onClick={onClickHandler}>{children}</button>
    </div>
  );
}

export default ButtonComponent;
