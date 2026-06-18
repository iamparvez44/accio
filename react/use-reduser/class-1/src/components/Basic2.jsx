import React from "react";
import { useReducer } from "react";

function logicReducerFunction(state, action
    
) {
  console.log("i am running");

  if (action.type == "increment") {
    return state + action.value;
  } else if (action.type == "decrement") {
    return state - action.value;
  } else if (action.type == "reset") {
    return 0;
  }
}   

const Basic2 = () => {
  const [count, dispatch] = useReducer(logicReducerFunction, 0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({type: "increment", value: 5})}>Inc</button>
      <button onClick={() => dispatch({type: "decrement", value: 10})}>Dec</button>
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>
    </div>
  );
};
export default Basic2;
