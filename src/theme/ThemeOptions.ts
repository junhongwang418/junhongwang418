import {ThemeOptions} from "@material-ui/core/styles/createMuiTheme";

const light = `rgb(255, 255, 255)`;
const lightVariant = `rgba(255, 255, 255, 0.68)`;

const dark = `rgb(33, 36, 43)`;
const darkVariant = `rgb(40, 44, 52)`;

const purple = `rgb(198, 120, 221)`;
const blue = `rgb(94, 169, 231)`;
const red = `rgb(224, 108, 117)`;

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
