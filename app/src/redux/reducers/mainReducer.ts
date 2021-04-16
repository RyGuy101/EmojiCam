import produce from "immer";
import { AppAction } from "../actions/actionTypes";

interface State {
  data: string;
}

const initialState: State = {
  data: "Initial value",
};

export default produce((draftState: State, action: AppAction) => {
  switch (action.type) {
    case "EXAMPLE_ACTION": {
      draftState.data = action.payload;
      return;
    }
  }
}, initialState);
