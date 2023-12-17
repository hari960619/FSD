import React, { useEffect, useState } from "react";
import LoginIn from "./Login";
import Home from "./Home";

function StoreData() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "1") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  function handleLogin(value) {
    localStorage.setItem("loggedIn", "1");
    setLoggedIn(value);
  }

  function handleLogout(value) {
    setLoggedIn(value);
  }

  return (
    <div>
      <h5>Store Previous Data</h5>
      {!loggedIn && <LoginIn login={handleLogin} />}
      {loggedIn && <Home logout={handleLogout} />}
    </div>
  );
}

export default StoreData;
