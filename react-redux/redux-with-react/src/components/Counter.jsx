import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decremnet, reset } from '../redux/action/countActionCreator';



const Counter = () => {

  let x = (useSelector(state => state));
  let dispatch = useDispatch();

  console.log("i am counter reducer");

  return(
    <div>
      <h1>Count: {x}</h1>
      <button onClick={()=>{dispatch(increment())}}>Inc</button>
      <button onClick={()=>{dispatch(decremnet())}}>Dec</button>
      <button onClick={()=>{dispatch(reset())}}>Reset</button>

    </div>
  )
}
export default Counter;