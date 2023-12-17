import React, { useState, useCallback } from "react";
import EuseCallbackTitle from "./EuseCallbackTitle";
import EuseCallbackCount from "./EuseCallbackCount";
import EuseCallbackButton from "./EuseCallbackButton";

function EuseCallbackHook() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 5000);
  }, [salary]);

  return (
    <div className="center-text">
      <h1 className="hook">"useCallback"</h1>
      <div>
        <EuseCallbackTitle />

        <EuseCallbackCount text={"Age"} count={age} />
        <EuseCallbackButton handleClick={incrementAge}>
          Increment Age
        </EuseCallbackButton>

        <EuseCallbackCount text={"Salary"} count={salary} />
        <EuseCallbackButton handleClick={incrementSalary}>
          Increment Salary
        </EuseCallbackButton>
      </div>
    </div>
  );
}

export default EuseCallbackHook;
