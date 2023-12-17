import React, { useEffect, useReducer, useState } from "react";

function emailReducer(currentState, action) {
  switch (action.type) {
    case "EMAIL_INPUT":
      console.log("EMAIL_INPUT");
      return { value: action.val, isValid: undefined };
    case "EMAIL_VALID":
      console.log("EMAIL_VALID");
      return { value: action.val, isValid: action.val.includes("@") };
    default:
      return currentState;
  }
}

function passwordReducer(currentState, action) {
  switch (action.type) {
    case "PASSWORD_INPUT":
      console.log("PASSWORD_INPUT");
      return { value: action.pass, isValid: undefined };
    case "PASSWORD_VALID":
      console.log("PASSWORD_VALID");
      return { value: action.pass, isValid: action.pass.trim().length > 6 };
    default:
      return currentState;
  }
}

let emailInitialState = { value: "", isValid: undefined };
let passwordInitialState = { value: "", isValid: null };

function Login({ onSub }) {
  const [emailState, emailDispatcher] = useReducer(
    emailReducer,
    emailInitialState
  );
  const [passwordState, passwordDispatcher] = useReducer(
    passwordReducer,
    passwordInitialState
  );

  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    console.log("Validating Input !!!");
    if (localStorage.getItem("loggedIn") === "1") {
      return onSub(true);
    }
    let timerFun = setTimeout(() => {
      setValidForm(emailState.isValid && passwordState.isValid);
    }, 1500);

    return () => {
      console.log("Clean up Function !!!");
      clearTimeout(timerFun);
    };
  }, [emailState.isValid, passwordState.isValid, onSub]);

  function emailHandler(e) {
    emailDispatcher({ val: e.target.value, type: "EMAIL_INPUT" });
  }
  function emailValidator() {
    emailDispatcher({ val: emailState.value, type: "EMAIL_VALID" });
  }
  function passwordHandler(e) {
    passwordDispatcher({ pass: e.target.value, type: "PASSWORD_INPUT" });
  }
  function passwordValidator() {
    passwordDispatcher({ pass: passwordState.value, type: "PASSWORD_VALID" });
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log("Logged In");
    localStorage.setItem("loggedIn", "1");
    onSub(true);
  }

  return (
    <div>
      <form className="reducerForm" onSubmit={submitHandler}>
        <div>
          <label htmlFor="emailID">Enter your Email ID: </label>
          <input
            className={emailState.isValid ? "isValidEmail" : "notValidEmail"}
            type="text"
            value={emailState.value}
            onChange={emailHandler}
            onBlur={emailValidator}
          />
        </div>
        <div>
          <label htmlFor="emailID">Enter your password: </label>
          <input
            className={
              passwordState.isValid ? "isValidPassword" : "notValidPassword"
            }
            type="password"
            value={passwordState.value}
            onChange={passwordHandler}
            onBlur={passwordValidator}
          />
        </div>
        <button type="submit" className="reducerBtn" disabled={!validForm}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
