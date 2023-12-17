import React, { useEffect, useRef, useState } from "react";

function InputRef() {
  const [data, setData] = useState(null);
  const [lowerValue, setLowerValue] = useState(false);
  const [upperValue, setUpperValue] = useState(false);
  const [userNum, setUserNum] = useState();
  const inputRef = useRef();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userNum}`)
      .then((res) => res.json())
      .then((data) => setData(data));
    console.log(inputRef);
    inputRef.current.value = null;
  }, [userNum]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleClick() {
    if (!inputRef.current.value || inputRef.current.value <= 0) {
      setData(null);
      setUpperValue(false);
      return setLowerValue(true);
    }
    if (inputRef.current.value > 10) {
      setData(null);
      setLowerValue(false);
      return setUpperValue(true);
    }
    setLowerValue(false);
    setUpperValue(false);
    setUserNum(inputRef.current.value);
    console.log(inputRef.current.value);
  }

  return (
    <div>
      <h5>Quick Input Value</h5>
      <div className="formBlock">
        <div className="formInput splFormBlock">
          <label htmlFor="fetchData">Enter User # : </label>
          <input type="number" id="fetchData" ref={inputRef} />
        </div>
        <button onClick={handleClick}>Search</button>
      </div>
      {data && <h1>{data.name}</h1>}
      {lowerValue && <h6>Please provide a value bigger than 0.</h6>}
      {upperValue && <h6>Please provide a value lesser than 11.</h6>}
    </div>
  );
}

export default InputRef;
