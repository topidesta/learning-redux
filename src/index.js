import C from "./constants";
import storeFactory from "./store";

const initialState = localStorage["redux-store"]
  ? JSON.parse(localStorage["redux-store"])
  : {};

const saveState = () => {
  const state = JSON.stringify(store.getState());
  localStorage["redux-store"] = state;
};

const store = storeFactory(initialState);
store.subscribe(saveState);

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    resort: "Mt MtMT",
    date: "2020-12-12",
    powder: true,
    backcountry: false,
  },
});

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    resort: "Mt Haha",
    date: "2020-12-31",
    powder: true,
    backcountry: true,
  },
});

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    resort: "Al Ihsan",
    date: "2020-12-09",
    powder: false,
    backcountry: true,
  },
});
