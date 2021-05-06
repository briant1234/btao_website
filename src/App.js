import React from "react";

//React Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Import theme
import { ThemeProvider } from "@material-ui/core/styles";
import { default as theme } from "./modules/theme";

//Import Pages
import { default as Home } from "./pages/Home";
import { default as Privacy } from "./pages/Privacy";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/weddings">
            <Privacy />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
