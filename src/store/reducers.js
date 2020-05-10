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

// export reducers baru dengan syntac yang simple (ternary statement)
export const skiDay = (state = null, action) => {
  action.type === C.ADD_DAY ? action.payload : state;
};

// error reducers dengna swith statement
export const errors = (state = [], action) => {
  switch (action.type) {
    case C.ADD_ERROR:
      // spreed error dari state yang dibuat (immutable)
      return [...state, action.payload];

    default:
      return state;
  }
};
