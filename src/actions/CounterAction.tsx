import * as constants from "../constants";

export interface IncreaseCount {
  type: constants.INCREASE_COUNT;
}

export interface DecreaseCount {
  type: constants.DECREASE_COUNT;
}

//
export type CounterAction = IncreaseCount | DecreaseCount;

export function increaseCount(): IncreaseCount {
  return {
    type: constants.INCREASE_COUNT
  };
}

export function decreaseCount(): DecreaseCount {
  return {
    type: constants.DECREASE_COUNT
  };
}
