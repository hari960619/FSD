import React from "react";

function EuseCallbackButton({ children, handleClick }) {
  console.log(`Button ${children} !!!`);
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}

export default React.memo(EuseCallbackButton);
