import {ThemeOptions} from "@material-ui/core/styles/createMuiTheme";

const purple = `rgb(198, 120, 221)`;
const blue = `rgb(94, 169, 231)`;

const DarkThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: purple
    },
    secondary: {
      main: blue
    },
    type: "dark"
  }
};

const LightThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: blue
    },
    secondary: {
      main: purple
    },
    type: "light"
  }
};

export { DarkThemeOptions, LightThemeOptions };
