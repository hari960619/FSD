import React from "react";

function Button({ alterProduct, children, disable }) {
  return (
    <button onClick={alterProduct} disabled={disable}>
      {children}
    </button>
  );
}

export default Button;
