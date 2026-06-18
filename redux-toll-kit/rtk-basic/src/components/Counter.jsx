import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from '../redux/features/counterSlice';


const Counter = () => {


  let count = useSelector(state => state.counter);
  let dispatch = useDispatch();




  return(
    <div>

    <h1>Count: {count} </h1>
    <button onClick={()=>{dispatch(increment())}} >increment</button>
    <button onClick={()=>{dispatch(decrement())}} >decrement</button>
    <button onClick={()=>{dispatch(reset())}} >reset</button>

    </div>
  )
}
export default Counter;