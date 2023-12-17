import React from "react";
import Login from "./Login";
import Home from "./Home";
import { useState } from "react";

function Form() {
  const [home, setHome] = useState(false);

  function loginSubmit(value) {
    setHome(value);
  }
  function logoutSubmit(value) {
    setHome(value);
  }

  return (
    <div>
      <h5>UseReducer Form</h5>
      <div className="reducerFormDiv">
        {home ? (
          <Home onLogout={logoutSubmit} />
        ) : (
          <Login onSub={loginSubmit} />
        )}
      </div>
    </div>
  );
}

export default Form;
