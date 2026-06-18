import React from "react";
import { useReducer } from "react";


function logicReducerfunction(state, action){

  if(action.type=="increment"){
    return state+action.value
  }
  else if(action.type=="decrement"){
    return state-action.value
  }
  else if(action.type == "reset"){
    return 0
  }
  else state;

}

const App = () => {

 const [count, dispatch] = useReducer(logicReducerfunction, 0);


  return(
    <>

    <h1>Count: {count}</h1>
      <button onClick={()=>{dispatch({type: "increment", value: 5})}} >Inc</button>
      <button onClick={()=>{dispatch({type: "decrement", value: 10})}} >Dec</button>
      <button onClick={()=>{dispatch({type: "reset"})}} >Reset</button>
    </>
  )
}
export default App;