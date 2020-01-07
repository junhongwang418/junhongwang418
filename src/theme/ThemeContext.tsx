import React from "react";
import {ThemeProvider} from "@material-ui/styles";
import {theme, ThemeMode} from "./theme";

// interface State {
//   dark: boolean;
// }
//
// const initialState: State = {
//   dark: true
// };
//
const defaultContextData = {
  dark: true,
  toggle: () => {}
};

export const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext);

// const useEffectDarkMode = () => {
//   const [themeState, setThemeState] = React.useState(initialState);
//   React.useEffect(() => {
//     const isLight = localStorage.getItem(ThemeMode.LIGHT) === JSON.stringify(true);
//
//     setThemeState({ ...themeState, dark: !isLight, hasThemeMounted: true });
//   }, [themeState]);
//
//   return [themeState, setThemeState];
// };

interface Props {}

interface State {
  dark: boolean;
}

class MyThemeProvider extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    const isDark = localStorage.getItem(ThemeMode.DARK);

    this.state = {
      dark: isDark === null || isDark === "true"
    }
  }



  render() {

    const { children } = this.props;
    const { dark } = this.state;

    const computedTheme = dark ? theme(ThemeMode.DARK) : theme(ThemeMode.LIGHT);

    const toggle = () => {
      const { dark } = this.state;
      localStorage.setItem(ThemeMode.DARK, JSON.stringify(!dark));
      this.setState({ dark: !dark });
    };

    const body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = computedTheme.palette.background.default;
    body.style.color = computedTheme.palette.text.primary;

    return (
      <ThemeProvider theme={computedTheme}>
        <ThemeContext.Provider value={{ dark, toggle }}>
          {children}
        </ThemeContext.Provider>
      </ThemeProvider>
    );
  }

}

// const MyThemeProvider = ({ children }: any) => {
//   const [themeState, setThemeState] = useEffectDarkMode() as [State, (state: State) => void];
//
//   if (!themeState.hasThemeMounted) {
//     return <div />;
//   }
//
//   const toggle = () => {
//     const dark = !themeState.dark;
//     localStorage.setItem(ThemeMode.DARK, JSON.stringify(dark));
//     setThemeState({ ...themeState, dark });
//   };
//
//   const computedTheme = themeState.dark ? theme(ThemeMode.DARK) : theme(ThemeMode.LIGHT);
//
//   const body = document.getElementsByTagName("body")[0];
//   body.style.backgroundColor = computedTheme.palette.background.default;
//   body.style.color = computedTheme.palette.text.primary;
//
//   return (
//     <ThemeProvider theme={computedTheme}>
//       <ThemeContext.Provider value={{ dark: themeState.dark, toggle }}>
//         {children}
//       </ThemeContext.Provider>
//     </ThemeProvider>
//   );
// };

export { MyThemeProvider, useTheme };
