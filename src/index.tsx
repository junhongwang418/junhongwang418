import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MyThemeProvider as ThemeProvider } from "./theme/ThemeContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <ThemeProvider>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
