import React from "react";

//React Router
import { HashRouter, Switch, Route } from "react-router-dom";

//Import theme
import { ThemeProvider } from "@material-ui/core/styles";
import { default as theme } from "./modules/theme";

//Import Pages
import { default as Home } from "./pages/Home";
import { default as Privacy } from "./pages/Privacy";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/wedding" component={Privacy} />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
