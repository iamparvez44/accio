import { INCREMENT, DECREMENT, RESET } from "./actionType.js";

const increment = (value) => {
  return {
    type: INCREMENT,
    value: value
  };
};

const decrement = () => {
  return {
    type: DECREMENT,
  };
};
const reset = () => {
  return {
    type: RESET,
  };
};

export {increment, decrement, reset}
