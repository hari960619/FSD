import React, { useState, useRef } from "react";
import axios from "axios";

function AddProductModal({ closeResumeAddModal }) {
  const [exp, setExp] = useState(0);
  const [state, setState] = useState("Karnataka");
  const [gender, setGender] = useState("male");

  const [error, setError] = useState(false);

  const name = useRef();
  const email = useRef();
  const usn = useRef();
  const conNumber = useRef();
  const resFile = useRef();
  const dob = useRef();

  function closeAddModalHandler() {
    closeResumeAddModal(false);
  }

  async function submitHandler(e) {
    e.preventDefault();

    console.log(
      !name.current.value &&
        !email.current.value &&
        !usn.current.value &&
        !conNumber.current.value &&
        !resFile.current.value &&
        !dob.current.value
    );

    if (
      !name.current.value &&
      !email.current.value &&
      !usn.current.value &&
      !conNumber.current.value &&
      !resFile.current.value &&
      !dob.current.value
    ) {
      closeResumeAddModal(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return setError(true);
    } else {
      closeResumeAddModal(false);

      const user = {
        name: name.current.value,
        email: email.current.value,
        usn: usn.current.value.toUpperCase(),
        conNumber: conNumber.current.value,
        resFile: resFile.current.value,
        dob: dob.current.value,
        experience: exp,
        state: state,
        gender: gender,
      };
      console.log(user);
      try {
        let response = await axios.post(
          "https://react-http-6faae-default-rtdb.firebaseio.com/resume.json",
          user
        );
        console.log(response.data);
      } catch (e) {
        console.log("Error", e);
      }
    }
  }

  function handleGenderChange(e) {
    setGender(e.target.value);
  }

  return (
    <div className="addModalDiv">
      <button id="crossBtn" onClick={closeAddModalHandler}>
        ❌
      </button>
      <div className="formDiv">
        <form onSubmit={submitHandler}>
          <h1 id="formTitle">Upload your Resume !!!</h1>
          <div className="nameDiv">
            <label htmlFor="name">Name </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name !!!"
              ref={name}
            />
          </div>

          <div className="emailDiv">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email ID !!!"
              ref={email}
            />
          </div>

          <div className="usnDiv">
            <label htmlFor="usn">USN </label>
            <input
              type="password"
              id="usn"
              placeholder="Enter your USN !!!"
              ref={usn}
            />
          </div>

          <div className="conNumberDiv">
            <label htmlFor="con-number">Contact Number </label>
            <input
              type="number"
              id="con-number"
              placeholder="Enter your Phone number !!!"
              ref={conNumber}
            />
          </div>

          <div className="genderDiv">
            <label>Select the Gender </label>
            <div className="radioDiv">
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                onChange={handleGenderChange}
                checked={gender === "Male"}
              />
            </div>

            <div className="radioDiv">
              <label htmlFor="female"> Female</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                onChange={handleGenderChange}
                checked={gender === "Female"}
              />
            </div>

            <div className="radioDiv">
              <label htmlFor="other"> Other</label>
              <input
                type="radio"
                id="other"
                name="gender"
                value="Other"
                onChange={handleGenderChange}
                checked={gender === "Other"}
              />
            </div>
          </div>

          <div className="stateDiv">
            <label htmlFor="country">Select the State </label>
            <select
              id="country"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            >
              <option value="Karnataka">Karnataka</option>
              <option value="Tamilnadu">Tamilnadu</option>
              <option value="AP">AP</option>
              <option value="Kerala">Kerala</option>
            </select>
          </div>

          <div className="fileDiv">
            <label htmlFor="resume">Upload your Resume: </label>
            <input type="file" id="resume" ref={resFile} />
          </div>

          <div className="dobDiv">
            <label htmlFor="dob">Date of Birth: </label>
            <input type="date" id="dob" ref={dob} />
          </div>

          <div className="expDiv">
            <label htmlFor="exp">
              Years of Experience: <span>{exp}</span>
            </label>
            <input
              type="range"
              id="exp"
              min="0"
              max="10"
              step="1"
              value={exp}
              onChange={(e) => {
                setExp(e.target.value);
              }}
            />
          </div>

          <button>Upload</button>
        </form>
        <p id="errorLine">{error ? "Missing Fields !!!" : null}</p>
      </div>
    </div>
  );
}

export default AddProductModal;
