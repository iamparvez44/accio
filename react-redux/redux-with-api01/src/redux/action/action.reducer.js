import { PRODUCT_LOADING, PRODUCT_SUCCESS, PRODUCT_FAIL } from "./actionType";

function product_loading(){
  return {
    type: PRODUCT_LOADING
  }
}

function product_success(data){
  return {
    type: PRODUCT_SUCCESS,
    payload: data
  }
}

function product_fail(data){
  return {
    type: PRODUCT_FAIL,
    payload: data
  }
}

export {product_loading, product_fail, product_success}