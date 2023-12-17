import React from "react";

function Home({ onLogout }) {
  function handleLogout() {
    onLogout(false);
    localStorage.removeItem("loggedIn");
  }
  return (
    <div>
      <h1>Welcome !!!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
