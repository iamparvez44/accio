import { DECREMENT, INCREMENT, RESET } from "./actionType.js";

const increment = ()=>{

  return {
    type: INCREMENT
  }
}

const decremnet = ()=>{

  return {
    type: DECREMENT
  }
}

const reset = ()=>{


  return {
    type: RESET
  }
} 

export {increment, decremnet, reset}