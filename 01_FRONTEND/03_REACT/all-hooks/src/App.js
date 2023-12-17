import "./App.css";
import UseStateComp from "./components/01_useStateHook/UseStateComp";
import UseEffectComp from "./components/02_useEffectHook/UseEffectComp";
import ReactMemo from "./components/03_ReactMemo/ReactMemo";
import UseRefComp from "./components/04_useRefHook/UseRefComp";
import UseReducerComp from "./components/05_useReducerHook/UseReducerComp";
import UseContextHook from "./components/06_useContextHook/UseContextHook";
import UseCallbackHook from "./components/07_useCallbackHook/UseCallbackHook";
import UseMemoHook from "./components/08_useMemoHook/UseMemoHook";

function App() {
  return (
    <div>
      <h1 className="hF ct">React Hooks</h1>
      <div class="hooksDiv">
        <UseStateComp />
        <UseEffectComp />
        <ReactMemo />
        <UseRefComp />
        <UseReducerComp />
        <UseContextHook />
        <UseCallbackHook />
        <UseMemoHook />
      </div>
    </div>
  );
}

export default App;
