import React from "react";
import ReactDOM from "react-dom";

function Demo() {
  return ReactDOM.createPortal(
    <div>
      <h5>I'm not rendering in root div, instead I'm in "root-portal"</h5>
    </div>,
    document.getElementById("root-portal")
  );
}

export default Demo;
