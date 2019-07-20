import {createMuiTheme, Theme} from "@material-ui/core";
import { DarkThemeOptions, LightThemeOptions } from "./ThemeOptions";

enum ThemeMode {
  DARK = "dark",
  LIGHT = "light"
}

const darkTheme: Theme = createMuiTheme(DarkThemeOptions);
const lightTheme: Theme = createMuiTheme(LightThemeOptions);

const theme = (mode: ThemeMode) => (mode === ThemeMode.DARK ? darkTheme : lightTheme);

export { theme, ThemeMode };
