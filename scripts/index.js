/************************************************
/ NPM Modules
/***********************************************/
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";

/************************************************
/ Variables
/***********************************************/
// Reducer
import reducers from "./reducers/reducers";
import App from "./components/App";

let store = createStore(reducers, applyMiddleware(thunkMiddleware, createLogger()));

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("wrap")
);
