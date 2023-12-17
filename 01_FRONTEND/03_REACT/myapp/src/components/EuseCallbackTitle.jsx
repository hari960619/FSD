import React from "react";

function EuseCallbackTitle() {
  console.log("Rendering Title");
  return (
    <div>
      <h1>Just a Title</h1>
    </div>
  );
}

export default React.memo(EuseCallbackTitle);
