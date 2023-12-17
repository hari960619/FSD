import React, { useEffect, useState } from "react";

function LoginInputHome({ login }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let holdFunction = setTimeout(() => {
      let value = id.includes("@") && id.includes(".") && password.length > 6;
      console.log("all", value);
      setError(value);
    }, 1000);

    return () => {
      console.log("Cleanup Function runs first apart from initial render");
      clearTimeout(holdFunction);
    };
  }, [id, password]);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
    login(true);
  }
  function handleName(e) {
    setId(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function validateEmail() {
    setIsValidEmail(id.includes("@") && id.includes("."));
  }
  function validatePassword() {
    setIsValidPassword(password.length > 6);
  }
  return (
    <div>
      <div>
        <h6>Login Form</h6>
        <form className="formBlock" onSubmit={handleSubmit}>
          <div className="formInput splFormBlock">
            <label htmlFor="firstName">Enter your Log ID: </label>
            <input
              type="text"
              id="firstName"
              onChange={handleName}
              onBlur={validateEmail}
              value={id}
            />
          </div>
          <div className="formInput splFormBlock">
            <label htmlFor="firstName">Enter your Password: </label>
            <input
              type="password"
              id="firstName"
              onChange={handlePassword}
              onBlur={validatePassword}
              value={password}
            />
          </div>
          <button type="submit" disabled={!error}>
            {error ? <p>Login</p> : <p>Sorry, Provide Credentials !!!</p>}
          </button>
        </form>
      </div>
      <div className="inValidBlock">
        <span> {!isValidEmail && <h6>Invalid Email ID !!!</h6>}</span>
        <span>{!isValidPassword && <h6>Invalid Password !!!</h6>}</span>
      </div>
    </div>
  );
}

export default LoginInputHome;
