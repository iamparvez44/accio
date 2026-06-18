import {
  PRODUCT_LOADING,
  PRODUCT_FAIL,
  PRODUCT_SUCCESS,
} from "../action/actionType";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LOADING:
      return { ...state, loading: true };

    case PRODUCT_SUCCESS:
      return {...state,
        loading: false,
        data: action.payload,
        error: "",
      };

    case PRODUCT_FAIL:
      return { ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;