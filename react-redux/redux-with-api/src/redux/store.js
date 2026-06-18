import { createStore, combineReducers } from "redux";
import productReducer from "./reducer/productReducer";

const rootReducer = ({
  "product": productReducer
})

const store = createStore(rootReducer);

export default store;