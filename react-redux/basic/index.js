import store from "./redux/store.js";
import { increment, decremnet, reset } from "./redux/action/countActionCreator.js";

console.log(store.getState());

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

console.log(store.getState());

store.dispatch(decremnet());
console.log(store.getState());

store.dispatch(reset());

console.log(store.getState());
