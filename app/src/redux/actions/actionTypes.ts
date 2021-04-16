// This file is used purely to define a type definition encompassing all possible actions

import * as actions from "./actions";

const allActions = {
  ...actions,
};

const allActionsArray = Object.values(allActions);

export type AppAction = ReturnType<typeof allActionsArray[number]>;
