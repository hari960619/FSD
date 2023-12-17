import React, { useEffect, useReducer } from "react";
// import DuseReducerA from "./DuseReducerA";

/* Simple Counter using useReducer

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function DuseReducerHook() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="center-text">
      <h1 className="hook">"useReducer"</h1>

      <h2>{count}</h2>

      <div>
        <button
          onClick={() => {
            dispatch("decrement");
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch("reset");
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            dispatch("increment");
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
} */

/* Making use of the complex state 
const initialState = {
  counterOne: 0,
  counterTwo: 19,
};

function reducer(state, action) {
  switch (action.type) {
    case "incOneBy1":
      return { ...state, counterOne: state.counterOne + action.value };
    case "decOneBy1":
      return { ...state, counterOne: state.counterOne - action.value };
    case "incOneBy5":
      return { ...state, counterOne: state.counterOne + action.value };
    case "decOneBy5":
      return { ...state, counterOne: state.counterOne - action.value };
    case "incTwoBy1":
      return { ...state, counterTwo: state.counterTwo + action.value };
    case "decTwoBy1":
      return { ...state, counterTwo: state.counterTwo - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function DuseReducerHook() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="center-text">
      <h1 className="hook">"useReducer"</h1>
      <div className="counterBlk">
        <h2>Counter One: {count.counterOne}</h2>
        <h2>Counter Two: {count.counterTwo}</h2>
      </div>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
      <div>
        <h1>Counter One Buttons</h1>
        <button
          onClick={() => {
            dispatch({ type: "incOneBy5", value: 5 });
          }}
        >
          Inc Count By a Value
        </button>
        <button
          onClick={() => {
            dispatch({ type: "incOneBy1", value: 1 });
          }}
        >
          Inc Count One
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decOneBy1", value: 1 });
          }}
        >
          Dec Count One
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decOneBy5", value: 5 });
          }}
        >
          Dec Count By a Value
        </button>
      </div>
      <div>
        <h1>Counter Two Buttons</h1>
        <button
          onClick={() => {
            dispatch({ type: "incTwoBy1", value: 1 });
          }}
        >
          Inc Count One
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decTwoBy1", value: 1 });
          }}
        >
          Dec Count One
        </button>
      </div>
    </div>
  );
} 
*/

/* Using Multiple useReducers

const initialStateOne = 0;
const initialStateTwo = 100;

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return state + action.value;
    case "dec":
      return state - action.value;
    case "reset":
      return state;
    default:
      return state;
  }
}

function DuseReducerHook() {
  const [counterOne, dispatchOne] = useReducer(reducer, initialStateOne);
  const [counterTwo, dispatchTwo] = useReducer(reducer, initialStateTwo);

  return (
    <div className="center-text">
      <h1 className="hook">"useReducer"</h1>
      <div>
        <h1>Counter One: {counterOne}</h1>
        <button
          onClick={() => {
            dispatchOne({ type: "inc", value: 25 });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatchOne({ type: "dec", value: 25 });
          }}
        >
          Decrement
        </button>
      </div>
      <div>
        <h1>Counter Two: {counterTwo}</h1>
        <button
          onClick={() => {
            dispatchTwo({ type: "inc", value: 12.5 });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatchTwo({ type: "dec", value: 12.5 });
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
} 
*/

/* useContext and useReducer Combo
export const CountContext = React.createContext();

const initialState = 0;
function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function DuseReducerHook() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div>
        <DuseReducerA />
        <h1>Count in Top : {count}</h1>
      </div>
    </CountContext.Provider>
  );
} */

const initialState = {
  loading: true,
  error: true,
  data: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: false,
        data: action.payload,
      };
    case "FETCH_FAILED":
      return {
        error: true,
        loading: false,
        data: {},
      };
    default:
      return state;
  }
}

function DuseReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((e) => {
        dispatch({ type: "FETCH_FAILED" });
      });
  }, []);

  return (
    <div className="center-text">
      <h1 className="hook">"useReducer"</h1>
      <h1>{state.loading ? "Loading..." : state.data.email}</h1>
      <h1>{state.error ? "Something Error Darling !!!" : null}</h1>
    </div>
  );
}

export default DuseReducerHook;
