import C from "./constants";
import { allSkiDays } from "./store/reducers";

const state = [
  {
    resort: "kirkwood",
    date: "2016-13-15",
    powder: true,
    backcountry: false,
  },
];

// random action data payload
const action = {
  type: C.ADD_DAY,
  payload: {
    resort: "Boreal",
    date: "2016-12-16",
    powder: false,
    backcountry: false,
  },
};

// added new state
const nextState = allSkiDays(state, action);

console.log(`
    initial goal: ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    new goal: ${JSON.stringify(nextState)}
`);
