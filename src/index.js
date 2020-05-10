import C from "./constants";
import { skiDay } from "./store/reducers";

const state = null;

// random action data payload
const action = {
  type: C.ADD_DAY,
  payload: {
    resort: "Heavenly",
    date: "2016-12-16",
    powder: true,
    backcountry: false,
  },
};

// added new state
const nextState = skiDay(state, action);

console.log(`
    initial goal: ${state}
    action: ${JSON.stringify(action)}
    new goal: ${JSON.stringify(nextState)}
`);
