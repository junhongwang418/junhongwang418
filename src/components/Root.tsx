import * as React from "react";
import { Global, css, ThemeProvider, Theme } from "@emotion/react";
import Container from "./Container";
import Header from "./Header";
import Spacing from "./Spacing";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Root = () => {
  const [isDark, setIsDark] = React.useState(false);

  const theme: Theme = {
    isDark,
    color: {
      black: "#2e2e2e",
      comment: "#797979",
      white: "#d6d6d6",
      yellow: "#e5b567",
      green: "#b4d273",
      orange: "#e87d3e",
      purple: "#9e86c8",
      pink: "#b05279",
      blue: "#6c99bb",
      body: isDark ? "#d6d6d6" : "#2e2e2e",
      background: isDark ? "#2e2e2e" : "#d6d6d6",
    },
  };

  const styles = css`
    body {
      background: ${theme.color.background};
      color: ${theme.color.body};
      font-family: "Roboto Mono", monospace;
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <Global styles={styles} />
      <BrowserRouter>
        <Container maxWidth={1260}>
          <Spacing height={16} />
          <Header setIsDark={setIsDark} />
          <Spacing height={128} />
          <Container maxWidth={960}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route>404 Not Found</Route>
            </Switch>
          </Container>
          <Spacing height={128} />
          <Footer />
          <Spacing height={16} />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Root;
