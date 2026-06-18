import React, { useEffect } from "react";
import axios from "axios";
import {
  product_loading,
  product_success,
  product_fail,
} from "../redux/action/action.reducer";
import { useSelector, useDispatch } from "react-redux";

const Myproduct = () => {
  
  const dispatch = useDispatch();
  const {loading, data, error} = useSelector((state) => state.product);

  

  useEffect(() => {
    producApiCall();
  }, []);

  async function producApiCall() {
    dispatch(product_loading());
    try {
      let response = await axios.get("https://fakestoreapi.com/products");
      dispatch(product_success(response.data));
    } catch (error) {
      dispatch(product_fail(error));
    }
  }

  return <>

  {
    data.length>0 && data.map(d => <p key={d.id}>
      {d.title}
      <img src={d.image} alt="api-image" />
    </p>)
  }

  </>;
};
export default Myproduct;
