import {ThemeOptions} from "@material-ui/core/styles/createMuiTheme";

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    color: string;
    colorR: number;
    colorG: number;
    colorB: number;
    backgroundColor: string;
    primaryColor: string;
    secondaryColor: string;
    light: string;
    dark: string;
  }

  interface ThemeOptions {
    color: string;
    colorR: number;
    colorG: number;
    colorB: number;
    backgroundColor: string;
    primaryColor: string;
    secondaryColor: string;
    light: string;
    dark: string;
  }
}

const light = `rgb(248, 248, 242)`;
const dark = `rgb(39, 40, 35)`;

const DarkThemeOptions: ThemeOptions = {
  color: light,
  colorR: 248,
  colorG: 248,
  colorB: 242,
  backgroundColor: dark,
  primaryColor: `rgb(127, 129, 243)`,
  secondaryColor: `rgb(107, 217, 238)`,
  light: light,
  dark: dark
};

const LightThemeOptions: ThemeOptions = {
  color: dark,
  colorR: 39,
  colorG: 40,
  colorB: 35,
  backgroundColor: light,
  primaryColor: `rgb(107, 217, 238)`,
  secondaryColor: `rgb(127, 129, 243)`,
  light: light,
  dark: dark
};

export { DarkThemeOptions, LightThemeOptions };
