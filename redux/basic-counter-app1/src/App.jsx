import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/feature/counterSlice";

let App = ()=>{

  let dispatch = useDispatch();
  let count = useSelector(state => state.counter.value);

  return(
    <>

    <h1>{count}</h1>

    <button 
      onClick={()=>{
        dispatch(increment())
      }}  
    >Inc</button>

    <button 
      onClick={()=>{
        dispatch(decrement())
      }}  
    >Dec</button>

    
    </>
  )
}

export default App;