import { INCREMENT, DECREMENT, RESET } from "./actionType.js";




const increment = ()=>{

    return {
        type: INCREMENT
    }

}

const decriment = ()=>{

    return {
        type: DECREMENT
    }

}

const reset = ()=>{

    return {
        type: RESET
    }

}


export {increment, decriment, reset}