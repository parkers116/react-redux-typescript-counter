import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../types";
import * as actions from "../actions/CounterAction";

const selectIsOn = (state: StoreState) => ({ ...state.CounterReducer });

const ReduxCounter: React.FC = () => {
  const { counter } = useSelector(selectIsOn);
  const dispatch = useDispatch();

  console.log(counter);

  return (
    <div>
      <h1>Redux Counter: {counter}</h1>
      <button
        onClick={() => {
          dispatch(actions.increaseCount());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(actions.decreaseCount());
        }}
      >
        -
      </button>
    </div>
  );
};

export default ReduxCounter;
