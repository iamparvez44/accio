import React, { useReducer } from 'react';


function logicReducerFunc(state, action){

    if(action.type == "increment"){
        return state + action.value;
    }
    else if(action.type == "decrement"){
        return state - action.value;
    }
    else if(action.type == "reset"){
        return 0;
    }
    else {
        return state;
    }

}


const Basic1 = () => {


    let [count, dispatch] = useReducer(logicReducerFunc, 0);

    return(
        <div>

            <h1>{count}</h1>
            <button onClick={()=>dispatch({type: "increment", value: 5})} >inc</button>
            <button onClick={()=>dispatch({type: "decrement", value: 6 })} >dec</button>
            <button onClick={()=>dispatch({type: "reset"})} >reset</button>
            



        </div>
    )
}
export default Basic1;