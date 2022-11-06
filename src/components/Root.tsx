import * as React from "react";
import { Global, css } from "@emotion/react";
import Header from "./Header";
import Spacing from "./Spacing";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Markdown from "./Markdown";
import { Container, createTheme, ThemeProvider } from "@mui/material";

const Root = () => {
  const [isDark, setIsDark] = React.useState<boolean>(
    JSON.parse(localStorage.getItem("isDark")) === true
  );
  const toggleTheme = React.useCallback(() => {
    setIsDark(!isDark);
    localStorage.setItem("isDark", (!isDark).toString());
  }, [isDark]);

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      primary: {
        main: "#6c99bb",
      },
      secondary: {
        main: "#9e86c8",
      },
    },
    typography: {
      fontFamily: ["Roboto Mono", "sans-serif"].join(", "),
    },
  });

  const styles = css`
    body {
      background: ${theme.palette.background.default};
      color: ${theme.palette.text.primary};
      font-family: ${theme.typography.fontFamily};
      transition: all 0.2s ease;
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <Global styles={styles} />
      <BrowserRouter>
        <Container>
          <Spacing height={16} />
          <Header toggleTheme={toggleTheme} />
          <Spacing height={128} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/md/:filename">
              <Markdown />
            </Route>
            <Route>404 Not Found</Route>
          </Switch>
          <Spacing height={128} />
          <Footer />
          <Spacing height={16} />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Root;
