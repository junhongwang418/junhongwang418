import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import * as React from "react";

const defaultValue = {
  isDark: false,
  toggleDark: () => {},
};

const SiteContext = React.createContext(defaultValue);

type SiteContextProps = React.PropsWithChildren<{}>;

export const SiteContextProvider = (props: SiteContextProps) => {
  const { children } = props;
  const [isDark, setIsDark] = React.useState(false);

  const toggleDark = React.useCallback(() => {
    setIsDark(!isDark);
    localStorage.setItem("isDark", (!isDark).toString());
  }, [isDark]);

  React.useEffect(() => {
    setIsDark(JSON.parse(localStorage.getItem("isDark") || "false") === true);
  }, []);

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  return (
    <SiteContext.Provider value={{ isDark, toggleDark }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </SiteContext.Provider>
  );
};

export default SiteContext;
