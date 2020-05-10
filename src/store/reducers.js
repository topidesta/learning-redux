import C from "../constants";

// merubah function ke es6
export const goal = (state, action) => {
  if (action.type === C.SET_GOAL) {
    // memastikan bahwa return berupa integer
    return parseInt(action.payload);
  } else {
    return state;
  }
};
