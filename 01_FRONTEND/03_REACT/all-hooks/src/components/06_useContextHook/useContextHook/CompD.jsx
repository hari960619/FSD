import React, { useContext } from "react";

import {
  ArrayContext,
  ObjectContext,
  BooleanContext,
  StringContext,
  NumberContext,
} from "./CompA.jsx";

function CompD() {
  const arr = useContext(ArrayContext);
  const obj = useContext(ObjectContext);
  const str = useContext(StringContext);
  const boo = useContext(BooleanContext);
  const num = useContext(NumberContext);

  console.log(arr);
  console.log(obj);
  console.log(str);
  console.log(boo);
  console.log(num);

  return (
    <div>
      <h3>Component D</h3>
      <h5 className="contextText">I'm inside Component D Component</h5>
      <div>
        <h1 className="contextSection">String: {str}</h1>
        <h1 className="contextSection">Number: {num}</h1>
        <div className="contextSection">
          <h5>Boolean</h5>
          <h1>Boolean: {boo.tru ? "True" : "F"}</h1>
          <h1>Boolean: {boo.fal ? "T" : "False"}</h1>
        </div>
        <div className="contextSection">
          <h5>Object</h5>
          <h1> {obj.name}</h1>
          <h1> {obj.age}</h1>
          <h1> {obj.married ? "Married" : "Not Married"}</h1>
        </div>
        <div className="contextSection">
          <h5> Array</h5>
          {arr.map((e) => {
            return <h1>{e}</h1>;
          })}
        </div>
      </div>
    </div>
  );
}

export default CompD;
