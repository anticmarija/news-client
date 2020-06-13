import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const store = createStore(
  combineReducers({}),
  composeWithDevTools(),
  applyMiddleware(thunk)
);

export default store;
