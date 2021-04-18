import produce from "immer";
import { AppAction } from "../actions/actionTypes";

interface State {
  text: string;
  currentWord: string;
}

const initialState: State = {
  text: "",
  currentWord: "",
};

export default produce((draftState: State, action: AppAction) => {
  switch (action.type) {
    case "SET_CURRENT_WORD": {
      draftState.currentWord = action.payload;
      return;
    }
    case "PUSH_CURRENT_WORD": {
      draftState.text += draftState.currentWord;
      draftState.currentWord = "";
      return;
    }
    case "POP_LAST_WORD": {
      const lastWord = draftState.text.match(/[^\s]*[\s]*$/g);
      if (lastWord) {
        draftState.currentWord = lastWord[0].slice(0, -1);
        draftState.text = draftState.text.slice(0, -lastWord[0].length);
      }
      return;
    }
  }
}, initialState);
