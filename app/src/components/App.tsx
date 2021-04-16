import React from "react";

import "./App.css";
import ExampleComponent from "./ExampleComponent";

const App = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <ExampleComponent exampleProp="This string was passed from the parent component"></ExampleComponent>
    </div>
  );
};

export default App;
