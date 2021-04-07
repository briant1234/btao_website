import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles"
import { default as OnePirate } from "./onepirate/Home"

import { Icon } from "@material-ui/core"


function App() {
  return (
      <ThemeProvider>
          <div className="App">
              <OnePirate/>
          </div>
      </ThemeProvider>
  );
}

export default App;
