import React from "react";
import { createContext } from "react";
import CompB from "./CompB";

export const ArrayContext = React.createContext();
export const ObjectContext = React.createContext();
export const BooleanContext = React.createContext();
export const StringContext = React.createContext();
export const NumberContext = React.createContext();

function CompA() {
  const arrValue = ["Alpha", "Beta", "Gamma"];
  const objValue = { name: "Harish S", age: 27, married: false };
  const booValueFalse = false;
  const booValueTrue = true;
  const strValue = "Harish S";
  const numValue = 12345;

  return (
    <div>
      <NumberContext.Provider value={numValue}>
        <StringContext.Provider value={strValue}>
          <BooleanContext.Provider
            value={{ tru: booValueTrue, fal: booValueFalse }}
          >
            <ObjectContext.Provider value={objValue}>
              <ArrayContext.Provider value={arrValue}>
                <CompB />
              </ArrayContext.Provider>
            </ObjectContext.Provider>
          </BooleanContext.Provider>
        </StringContext.Provider>
      </NumberContext.Provider>
      <h3>Component A</h3>
      <h2 className="contextText">I'm inside Component A Component</h2>
    </div>
  );
}

export default CompA;
