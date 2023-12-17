import React from "react";

function Home({ logout }) {
  function handleLogout() {
    localStorage.removeItem("loggedIn");
    logout(false);
  }
  return (
    <div>
      <div>
        <h1>HOME</h1>
        <h2>Hello User !!! Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Home;
