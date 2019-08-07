import {ThemeOptions} from "@material-ui/core/styles/createMuiTheme";

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    color: {
      default: string;
      variant: string;
      alert: string;
    };
    backgroundColor: {
      default: string;
      variant: string;
    }
    primaryColor: string;
    secondaryColor: string;
  }

  interface ThemeOptions {
    color: {
      default: string;
      variant: string;
      alert: string;
    };
    backgroundColor: {
      default: string;
      variant: string;
    }
    primaryColor: string;
    secondaryColor: string;
  }
}

const light = `rgb(255, 255, 255)`;
const lightVariant = `rgba(255, 255, 255, 0.68)`;

const dark = `rgb(33, 36, 43)`;
const darkVariant = `rgb(40, 44, 52)`;

const purple = `rgb(198, 120, 221)`;
const blue = `rgb(94, 169, 231)`;
const red = `rgb(224, 108, 117)`;

const DarkThemeOptions: ThemeOptions = {
  color: {
    default: light,
    variant: lightVariant,
    alert: red
  },
  backgroundColor: {
    default: dark,
    variant: darkVariant
  },
  primaryColor: purple,
  secondaryColor: blue,
  palette: {
    primary: {
      main: purple
    },
    secondary: {
      main: blue
    },
    text: {
      secondary: `rgba(255, 255, 255, 0.28)`,
    },
    divider: `rgba(255, 255, 255, 0.14)`
  }
};

const LightThemeOptions: ThemeOptions = {
  color: {
    default: dark,
    variant: darkVariant,
    alert: red
  },
  backgroundColor: {
    default: light,
    variant: lightVariant
  },
  primaryColor: blue,
  secondaryColor: purple,
  palette: {
    primary: {
      main: blue
    },
    secondary: {
      main: purple
    },
    text: {
      secondary: `rgba(33, 36, 43, 0.28)`
    },
    divider: `rgba(33, 36, 43, 0.14)`
  }
};

export { DarkThemeOptions, LightThemeOptions };
