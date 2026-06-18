import { INCREMENT, DECREMENT, RESET } from "../action/actionType.js";


const initialValue = 0;

const counterReducer = (state = initialValue, action)=>{

  

  if(action.type == INCREMENT){
    return state+1;
  }

  else if(action.type == DECREMENT){
    return state-1;
  }

  else if(action.type == RESET){
    return 0;
  }
  
  else {
    return initialValue;
  }

}

export default counterReducer;

