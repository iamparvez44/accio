import { LODING_START, PRODUCT_SUCCESS, PRODUCT_FAIL } from "./actionType";

export const loading_start = ()=>{
  return {
    type: LODING_START
  }
}

export const product_success = (data)=>{
  return {
    type: PRODUCT_SUCCESS,
    payload: data
  }
}

export const product_fail = (errMsg)=>{
  return {
    type: PRODUCT_FAIL,
    payload: errMsg
  }
}