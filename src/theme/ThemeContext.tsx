import React from "react";
import {ThemeProvider} from "@material-ui/styles";
import {theme, ThemeMode} from "./theme";

interface State {
  dark: boolean;
  hasThemeMounted: boolean
}

const defaultContextData = {
  dark: true,
  toggle: () => {}
};

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext);

const initialState: State = {
  dark: true,
  hasThemeMounted: false
};

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = React.useState(initialState);
  React.useEffect(() => {
    const isDark = localStorage.getItem(ThemeMode.DARK) === "true";
    setThemeState({ ...themeState, dark: isDark, hasThemeMounted: true });
  }, [themeState]);

  return [themeState, setThemeState];
};

const MyThemeProvider = ({ children }: any) => {
  const [themeState, setThemeState] = useEffectDarkMode() as [State, (state: State) => void];

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  const toggle = () => {
    const dark = !themeState.dark;
    localStorage.setItem("dark", JSON.stringify(dark));
    setThemeState({ ...themeState, dark });
  };

  const computedTheme  = themeState.dark ? theme(ThemeMode.DARK) : theme(ThemeMode.LIGHT);

  const body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor = computedTheme.backgroundColor;
  body.style.color = computedTheme.color;

  const a = document.getElementsByTagName("a");
  for (let i = 0; i < a.length; i++) a[i].style.color = computedTheme.primaryColor;

  return (
    <ThemeProvider theme={computedTheme}>
      <ThemeContext.Provider value={{ dark: themeState.dark, toggle }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export { MyThemeProvider, useTheme };