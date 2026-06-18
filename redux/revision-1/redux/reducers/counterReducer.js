import { INCREMENT, DECREMENT, RESET } from "../actions/actionType.js";


const initialValue = 0;

const counterReducer = (state = initialValue, action)=>{

    if(action.type == INCREMENT){
        return state+1;
    }
    else if(action.type == DECREMENT){
        return state-1
    }
    else if(action.type == RESET){
        return initialValue;
    }
    else{
        return state;
    }

}

export default counterReducer;