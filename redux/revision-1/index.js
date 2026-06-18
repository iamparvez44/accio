
import store from "./redux/store.js";
import { increment, decrement, reset } from "./redux/actions/counterActionCreator.js";

console.log("initial store value", store.getState());
store.dispatch(increment());

console.log("updated", store.getState());