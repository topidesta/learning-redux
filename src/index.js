import C from "./constants";
import appReducer from "./store/reducers";
import { createStore } from "redux";

const initialState = localStorage["redux-store"]
  ? JSON.parse(localStorage["redux-store"])
  : {};

const store = createStore(appReducer, initialState);

store.subscribe(() => console.log(store.getState()));

// debuging only
window.store = store;

store.subscribe(() => {
  const state = JSON.stringify(store.getState());
  localStorage["redux-store"] = state;
});

// store.dispatch({
//   type: C.ADD_DAY,
//   payload: {
//     resort: "Math Math",
//     date: "2020-09-09",
//     powder: false,
//     backcountry: true,
//   },
// });

// // another mutation
// store.dispatch({
//   type: C.SET_GOAL,
//   payload: 2,
// });
