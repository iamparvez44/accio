import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {

    increment: (state, action)=>{
      return state+1;
    },
    decrement: (state, action)=>{
      return state-1;
    },
   reset: (state, action)=>{
      return 0;
    }
    

  }
});

 export let {increment, decrement, reset} =counterSlice.actions // {}

 let counterReducer = counterSlice.reducer
 export default counterReducer;



