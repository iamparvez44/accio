import { createStore, combineReducers } from "redux";
import productReducer from "./reducer/productReducer";

let rootReducer = combineReducers({
  "product": productReducer
})

let store = createStore(rootReducer);
export default store;