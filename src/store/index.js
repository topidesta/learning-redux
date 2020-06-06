import C from "../constants";
import appReducer from "./reducers";
import { createStore } from "redux";

// create midlleware for logging
// higher order function
const consoleMessages = function (store) {
  return function (next) {
    return function (action) {};
  };
};

export default (initialState = {}) => {
  return createStore(appReducer, initialState);
};
