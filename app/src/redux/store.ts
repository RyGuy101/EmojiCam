import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import mainReducer from "./reducers/mainReducer";

// Reducer setup
const reducer = combineReducers({
  main: mainReducer,
});
export type AppState = ReturnType<typeof reducer>;

// Create store
const store = createStore(reducer, composeWithDevTools());

// // Reselect setup
// export const selectors = {};
// // Reselect Devtools setup:
// // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
// const selectorNames = Object.assign({}, ...Object.values(selectors));
// const { getStateWith, registerSelectors } = require("reselect-tools") as {
//   getStateWith: (getState: () => AppState) => void;
//   registerSelectors: (selectors: typeof selectorNames) => void;
// };
// registerSelectors(selectorNames); // register string names for selectors
// getStateWith(() => store.getState()); // allows you to get selector inputs and outputs

export default store;
