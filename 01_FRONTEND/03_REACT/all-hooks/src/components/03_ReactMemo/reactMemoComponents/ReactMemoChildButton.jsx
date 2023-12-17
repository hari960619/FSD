import React from "react";

function ReactMemoChildButton({ children, onClick }) {
  console.log(`${children} button clicked`);

  return <button onClick={onClick}>{children}</button>;
}

export default React.memo(ReactMemoChildButton);
