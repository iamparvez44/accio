import store from "./redux/store.js";
import { increment, decriment, reset } from "./redux/action/counterAction.js";

console.log("initail Store", store.getState())

store.dispatch(increment())

console.log("initail Store", store.getState())
