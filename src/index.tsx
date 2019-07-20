import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MyThemeProvider as ThemeProvider } from "./theme/ThemeContext";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <ThemeProvider>
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
