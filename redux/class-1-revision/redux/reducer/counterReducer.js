import { INCREMENT, DECREMENT, RESET } from "../action/actionType.js";


const initialState = 0;

const counterReducer = (state = initialState, action)=>{

    if(action.type == INCREMENT){
        return state + action.value;
    }
    else if(action.type == DECREMENT){
        return state - 1;
    }
    else if(action.type == RESET){
        return initialState;
    }
    else {
        return state
    }

}

export default counterReducer;