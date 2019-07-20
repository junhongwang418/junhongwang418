import {ThemeOptions} from "@material-ui/core/styles/createMuiTheme";

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    color: string;
    backgroundColor: string;
    transparentColor: string;
    primaryColor: string;
    secondaryColor: string;
  }

  interface ThemeOptions {
    color: string;
    backgroundColor: string;
    transparentColor: string;
    primaryColor: string;
    secondaryColor: string;
  }
}

const DarkThemeOptions: ThemeOptions = {
  color: `rgb(248, 248, 242)`,
  backgroundColor: `rgb(39, 40, 35)`,
  transparentColor: `rgba(255, 255, 255, 0.28)`,
  primaryColor: `rgb(127, 129, 243)`,
  secondaryColor: `rgb(107, 217, 238)`
};

const LightThemeOptions: ThemeOptions = {
  color: `rgb(39, 40, 35)`,
  backgroundColor: `rgb(248, 248, 242)`,
  transparentColor: `rgba(0, 0, 0, 0.28)`,
  primaryColor: `rgb(107, 217, 238)`,
  secondaryColor: `rgb(127, 129, 243)`
};

export { DarkThemeOptions, LightThemeOptions };
