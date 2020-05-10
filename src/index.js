import C from "./constants";
import { errors } from "./store/reducers";

const state = ["user not authorized", "server feed not found"];

// random action data payload
const action = {
  type: C.CLEAR_ERROR,
  payload: 0,
};

// added new state
const nextState = errors(state, action);

console.log(`
    initial goal: ${state}
    action: ${JSON.stringify(action)}
    new goal: ${JSON.stringify(nextState)}
`);
