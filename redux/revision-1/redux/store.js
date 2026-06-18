import { createStore } from "redux";

import counterReducer from "./reducers/counterReducer.js";

let store = createStore(counterReducer);

export default store;