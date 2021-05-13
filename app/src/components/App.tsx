import React from "react";

import "./App.css";
import TextView from "./TextView";
import TypingInterface from "./TypingInterface";
import CameraInterface from "./CameraInterface";

const App = () => {
  return (
    <div className="App">
      <TextView />
      <div className="interfaceContainer">
        <TypingInterface />
        <CameraInterface />
        <div>
          Tools Used:
          <ul>
            <li>
              <a href="https://www.npmjs.com/package/typo-js">Typo.js</a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/one-dollar">
                $1 (1dollar.js)
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/handtrackjs">
                Handtrack.js
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
