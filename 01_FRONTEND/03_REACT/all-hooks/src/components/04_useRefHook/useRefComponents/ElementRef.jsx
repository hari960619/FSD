import React, { useRef } from "react";

function ElementRef() {
  //const eleRef = useRef("Ola"); No impact created
  const eleRef = useRef();
  const eleRef2 = useRef();
  const eleRef3 = useRef();
  function handleEleClick(e) {
    // console.log("Hello");
    console.log(eleRef.current.textContent);
  }
  function handleEleClick2(e) {
    console.log(eleRef2.current.textContent);
  }
  function handleEleClick3(e) {
    console.log(eleRef3.current.textContent);
  }
  return (
    <div>
      <h5>Reference on Element</h5>
      <h2 ref={eleRef} onClick={handleEleClick}>
        Hello World
      </h2>
      <h2 ref={eleRef2} onClick={handleEleClick2}>
        Harish S
      </h2>
      <h2 ref={eleRef3} onClick={handleEleClick3}>
        Amigos
      </h2>
    </div>
  );
}

export default ElementRef;
