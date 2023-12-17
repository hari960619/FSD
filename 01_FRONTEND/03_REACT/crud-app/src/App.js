import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  function handleModes(value) {
    setDarkMode(value);
  }
  return (
    <div className={`appBody ${darkMode ? "dark" : "light"}`}>
      <Navbar setMode={handleModes} mode={darkMode} />
    </div>
  );
}

export default App;
