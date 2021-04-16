// This file is used purely to define a type definition encompassing all possible actions

import * as exampleActions from "./exampleActions";
import * as externalActions from "./externalActions";

const allActions = {
  ...exampleActions,
  ...externalActions,
};

const allActionsArray = Object.values(allActions);

export type AppAction = ReturnType<typeof allActionsArray[number]>;
