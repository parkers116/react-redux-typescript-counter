import { CounterAction } from "../actions/CounterAction";
import * as constants from "../constants";

export default function CounterReducer(
  state = { counter: 0 },
  action: CounterAction
) {
  switch (action.type) {
    case constants.INCREASE_COUNT:
      console.log(state);
      return {
        ...state,
        counter: state.counter + 1
      };
    case constants.DECREASE_COUNT:
      return {
        ...state,
        counter: state.counter - 1
      };
  }
  return state;
}
