import C from "../constants";
import appReducer from "./reducers";
import { createStore } from "redux";

// create midlleware for logging
// higher order function
// 3 arrow function 
const consoleMessages = (store) => (next) => (action) {
  let result;
  result = next(action)
  return result;
};

export default (initialState = {}) => {
  return createStore(appReducer, initialState);
};
