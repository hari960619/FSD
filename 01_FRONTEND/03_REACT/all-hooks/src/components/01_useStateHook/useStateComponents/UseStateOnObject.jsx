import React, { useState } from "react";

function UseStateOnObject() {
  const [fullName, setFullName] = useState({ firstName: "", lastName: "" });
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(false);

  let nameDisplayed =
    displayName && `${displayName.firstName} ${displayName.lastName}`;

  function handleFirstName(e) {
    // console.log(e.target.value);
    setFullName({ ...fullName, firstName: e.target.value });
  }

  function handleLastName(e) {
    // console.log(e.target.value);
    setFullName({ ...fullName, lastName: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("Submitted");
    if (!fullName.firstName || !fullName.lastName) {
      return setError(true);
    }

    let inputFullName = {
      firstName: fullName.firstName,
      lastName: fullName.lastName,
    };
    // console.log("inputFullName:", inputFullName);
    setError(false);
    setDisplayName(inputFullName);
  }

  return (
    <div>
      <h5>Use State on Objects</h5>
      <form className="formBlock" onSubmit={handleSubmit}>
        <div className="formInput">
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            value={fullName.firstName}
            onChange={handleFirstName}
          />
        </div>
        <div className="formInput">
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            value={fullName.lastName}
            onChange={handleLastName}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {error ? <h6>"Please enter the full name !!!"</h6> : nameDisplayed}
    </div>
  );
}

export default UseStateOnObject;
