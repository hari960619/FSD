import React from "react";
import { useContext } from "react";

const NameContext = React.createContext();
const CompanyContext = React.createContext();

const arr = ["Alpha", "Beta", "Gamma"];
const arrContext = React.createContext();

function CuseContextHook() {
  return (
    <div>
      <h1 className="hook">"useContext"</h1>
      <NameContext.Provider value={"Harish S"}>
        <CompanyContext.Provider value={"Amazon"}>
          <arrContext.Provider value={arr}>
            <A />
          </arrContext.Provider>
        </CompanyContext.Provider>
      </NameContext.Provider>
    </div>
  );
}

function A() {
  return <B />;
}

function B() {
  return <C />;
}

// We have to import {NameContext,CompanyContext} from "./from the folder these context was created";
// Here we have it the same file there is no need of importing them.
// An Example of importing these files would be import import {NameContext,CompanyContext} from "./someFolder.

function C() {
  const name = useContext(NameContext);
  const company = useContext(CompanyContext);
  const arr = useContext(arrContext);
  return (
    <div>
      <h1>
        My name is {name} and I work in {company}!!!
      </h1>
      {arr.map((e) => (
        <h2>{e}</h2>
      ))}
    </div>
  );
}

export default CuseContextHook;
