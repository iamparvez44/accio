import React from 'react';
import { loading_start, product_success, product_fail } from '../redux/action/product.action';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const Prod = () => {

let dispatch = useDispatch();

function productApiCall(){

  dispatch(loading_start())
}


  return(
   <div>



   </div>
  )
}
export default Prod;