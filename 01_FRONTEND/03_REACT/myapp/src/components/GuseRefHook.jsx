import React, { useEffect, useRef, useState } from "react";

function GuseRefHook() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    //   inputRef1.current.focus();
    // It takes the second one if two are present.
    inputRef2.current.focus();

    intervalRef.current = setInterval(() => {
      console.log("Running in the Timer");
      setTimer((prev) => prev + 1);
    }, 1000);

    // Clean up since we do not want it to run in the background
    return () => {
      console.log("Running the bg stopped");
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="center-text">
      <h1 className="hook">"useRef"</h1>

      <div>
        <span>Input One:</span>
        <input type="text" ref={inputRef1} />
      </div>

      <div>
        <span>Input Two:</span>
        <input type="text" ref={inputRef2} />
      </div>

      <div>
        <h1>{timer}</h1>
        <button onClick={() => clearInterval(intervalRef.current)}>
          Clear Timer
        </button>
      </div>
    </div>
  );
}

export default GuseRefHook;
