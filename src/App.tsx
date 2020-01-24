import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";
import Counter from "./components/Counter";
import ReduxCounter from "./components/ReduxCounter";
import { StoreState } from "./types";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

const INITIAL_STATE: StoreState = { CounterReducer: { counter: 0 } };
const store = createStore(rootReducer, INITIAL_STATE);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
          <ReduxCounter />
        </header>
      </div>
    </Provider>
  );
};

export default App;
