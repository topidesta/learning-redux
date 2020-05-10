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

    case C.CLEAR_ERROR:
      return state.filter((message, i) => i !== action.payload);

    default:
      return state;
  }
};

export const allSkiDays = (state = [], action) => {
  switch (action.type) {
    case C.ADD_DAY:
      const hasDay = state.some(
        (skiDay) => skiDay.date === action.payload.date
      );
      return hasDay ? state : [...state, skiDay(null, action)];

    default:
      state;
  }
};
