import { INCREMENT, DECREMENT, RESET } from "./actionType.js";



const increment = ()=>{

    return {
        type: INCREMENT
    }
}

const decrement = ()=>{

    return {
        type: DECREMENT
    }
}

const reset = ()=>{

    return {
        type: RESET
    }
}

export {increment, decrement, reset}