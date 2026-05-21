import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/feature/counterSlice'

export const store = configureStore({
    reducer:{

        counter: counterReducer

    }
});