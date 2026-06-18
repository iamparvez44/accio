import { LODING_START, PRODUCT_SUCCESS, PRODUCT_FAIL } from "../action/actionType";

const initialState = {
  loading: false,
  data: [],
  error: ""
}

const productReducer = (state=initialState, action)=>{

  switch(action.type){
    case LODING_START :
      return {...state, loading: true}

    case PRODUCT_SUCCESS: 
    return {...state, loading: false, data: action.payload, error: ""}  

    case PRODUCT_FAIL: 
    return {...state, loading: false, data: [], error: action.payload}  

    default:
    return state
  }

}

export default productReducer;