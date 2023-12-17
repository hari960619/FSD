import React from "react";

function EuseCallbackCount({ text, count }) {
  console.log(`Text ${text} !!!`);
  return (
    <div>
      <h1>
        {text} : {count}
      </h1>
    </div>
  );
}

export default React.memo(EuseCallbackCount);
