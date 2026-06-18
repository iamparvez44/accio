import { INCREMENT, DECREMENT, RESET } from "../action/actionType.js";

const initialValue = 0;

const counterReducer = (state = initialValue, action)=> {

    if(action.type== INCREMENT){
        return state + action.value;
    }

    else if(action.type == DECREMENT){
        return state - action.value;
    }
    else if(action.type == RESET){
        return initialValue;
    }
    else{
        return state;
    }

}

export default counterReducer;