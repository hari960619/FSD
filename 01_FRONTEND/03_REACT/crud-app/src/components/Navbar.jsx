import React from "react";
import { useState } from "react";

function Navbar({ setMode, mode }) {
  function handleMode() {
    setMode(!mode);
  }

  return (
    <div className="navBarDiv">
      <h1 className="hF">BASIC CRUD</h1>

      <button id="modeButton" onClick={handleMode}>
        {mode ? "☀️" : "🌛"}
      </button>
    </div>
  );
}

export default Navbar;
