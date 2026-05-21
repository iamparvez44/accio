import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counterSlice";

let App = ()=>{

  const dispactch = useDispatch();
  const count = useSelector(state=>state.counter.value);


  return(
    <>

    <h1>{count}</h1>

    <button onClick={()=>{
      dispactch(increment())
    }} >Increment</button>
    <button
    onClick={()=>{

      dispactch(decrement())

    }} 
    >Decrement</button>
    </>
  )

}

export default App;