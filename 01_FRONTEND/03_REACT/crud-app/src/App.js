import "./App.css";
import AddProduct from "./components/AddResume";
import GetResume from "./components/GetResume";

function App() {
  return (
    <div>
      <div id="titleDiv">
        <h1 id="appTitle">Resume Repository</h1>
      </div>
      <div className="addProductDiv">
        <AddProduct />
      </div>
      <div>
        <GetResume />
      </div>
    </div>
  );
}

export default App;
