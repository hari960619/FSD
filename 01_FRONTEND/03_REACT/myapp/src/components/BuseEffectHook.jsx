import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function BuseEffectHook() {
  const [booBtn, setBooBtn] = useState(false);
  const [count, setCount] = useState(0);
  const [emoji, setEmoji] = useState("🫣");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [display, setDisplay] = useState(true);

  const [users, setUsers] = useState([]);

  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState({});

  const [idFromBtnClick, setIdFromBtnClick] = useState(1);

  useEffect(() => {
    if (booBtn) console.log("Updating Because of Boolean Button");
    else console.log("Updating Because of Count !!!");
  }, [count, booBtn]);

  useEffect(() => {
    console.log("Use Effect Called!!!");
    window.addEventListener("mousemove", logMousePosition);
    // Cleanup Code
    return () => {
      console.log("Cleanup Code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []); // Empty dependency array for mount and unmount

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${idFromBtnClick}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      });
  }, [idFromBtnClick]);

  /*  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      });
  }, [userId]); */

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  function handleClick() {
    switch (count) {
      case 0:
        setEmoji("🙁");
        break;
      case 1:
        setEmoji("🥺");
        break;
      case 2:
        setEmoji("🥹");
        break;
      case 3:
        setEmoji("😢");
        break;
      case 4:
        setEmoji("😭");
        break;
      case 5:
        setEmoji("🤬");
        break;
      default:
        setEmoji(`I'm Sorry 🙏🙏🙏`);
        setCount(0);
    }
    if (count < 6) setCount((prev) => prev + 1);
  }

  function handleBtnClick() {
    setIdFromBtnClick(userId);
  }

  return (
    <div className="center-text">
      <h1 className="hook">"useEffect"</h1>
      <div>
        <button
          className="bgBtn"
          onClick={() => {
            setBooBtn((prev) => !prev);
          }}
        >
          {booBtn ? "True" : "False"}
        </button>
        <h3>I can change the Document Title</h3>
        <button
          className="bgBtn"
          onClick={() => {
            handleClick();
          }}
        >
          Hit Me
        </button>
        <div className="emo">{emoji}</div>
      </div>

      <div>
        <button onClick={() => setDisplay((pV) => !pV)}>
          Toggle Positions Display
        </button>
        {display && (
          <h1>
            X:{x} && Y:{y}
          </h1>
        )}
      </div>

      <div>
        <h1>Fetching Users Data </h1>
        {users.map((user) => (
          <p>{user.name}</p>
        ))}
      </div>

      <div>
        <h1>Fetching Individual User Data </h1>

        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="button" onClick={handleBtnClick}>
          Fetch User
        </button>
        <h2>{userData.name}</h2>
      </div>
    </div>
  );
}

export default BuseEffectHook;

// 🫣 🙁 🥺 🥹 😢 😭 🤬
