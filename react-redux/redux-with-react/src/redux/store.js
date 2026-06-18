import { createStore, combineReducers } from "redux";

import counterReducer from "./reducer/counterReducer.js";
import songReducer from "./reducer/songReducer.js";

const rootReducer = combineReducers({
  counter: counterReducer,
  song: songReducer
})

let store = createStore(rootReducer);
export default store;