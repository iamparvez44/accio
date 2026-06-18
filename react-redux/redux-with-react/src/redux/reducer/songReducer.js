import { SELECTEDSONG } from "../action/actionType";

let initialValue = null;

const songReducer = (state=initialValue, action)=>{

  console.log(action);

  if(action.type == SELECTEDSONG){
    return action.payload;
  }
  else{
    return state;
  }

}

export default songReducer;