import { createSelector } from "reselect";
import { AppState } from "../store";

export const exampleDerivedData = createSelector(
  [(state: AppState) => state.example.data],
  (data) => {
    return data + "!!!";
  }
);
