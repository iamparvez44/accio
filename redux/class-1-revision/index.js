import { INCREMENT } from "./redux/action/actionType.js";
import { increment, decrement, reset } from "./redux/action/countActionCreator.js";
import store from "./redux/store.js";

console.log(store.getState());

// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());

// console.log(store.getState());

// store.dispatch(decrement())
// store.dispatch(decrement())
// store.dispatch(decrement())

// console.log(store.getState());

store.dispatch(increment(20));
console.log(store.getState());


store.dispatch(increment(10));
console.log(store.getState());
