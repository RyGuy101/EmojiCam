import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import communicator from "communicator";

import exampleReducer from "./reducers/exampleReducer";

import * as exampleSelectors from "./selectors/exampleSelectors";

// Reducer setup
const reducer = combineReducers({
  example: exampleReducer,
});
export type AppState = ReturnType<typeof reducer>;

// Apply communicator middleware for sending and receiving data from server
const middleware = applyMiddleware(communicator);

// Create store
const store = createStore(reducer, composeWithDevTools(middleware));

// Reselect setup
export const selectors = {
  example: exampleSelectors,
};
// Reselect Devtools setup:
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const selectorNames = Object.assign({}, ...Object.values(selectors));
const { getStateWith, registerSelectors } = require("reselect-tools") as {
  getStateWith: (getState: () => AppState) => void;
  registerSelectors: (selectors: typeof selectorNames) => void;
};
registerSelectors(selectorNames); // register string names for selectors
getStateWith(() => store.getState()); // allows you to get selector inputs and outputs

export default store;
