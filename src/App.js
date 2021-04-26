import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles"
import { default as OnePirate } from "./pages/Home"


function App() {
  return (
      <ThemeProvider >
          <div className="App">
              <OnePirate/>
          </div>
      </ThemeProvider>
  );
}

export default App;
