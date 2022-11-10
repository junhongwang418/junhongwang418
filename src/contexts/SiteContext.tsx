import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
} from "@mui/material";
import { ListItemButton } from "gatsby-theme-material-ui";
import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { navigate } from "gatsby";
import ThemeToggle from "../components/ThemeToggle";

const defaultValue = {
  isDark: false,
  toggleDark: () => {},
  isDrawerOpen: false,
  toggleDrawer: () => {},
};

const SiteContext = React.createContext(defaultValue);

type SiteContextProps = React.PropsWithChildren<{}>;

export const SiteContextProvider = (props: SiteContextProps) => {
  const { children } = props;
  const [isDark, setIsDark] = React.useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDark = React.useCallback(() => {
    setIsDark(!isDark);
    localStorage.setItem("isDark", (!isDark).toString());
  }, [isDark]);

  const toggleDrawer = React.useCallback(() => {
    setIsDrawerOpen(!isDrawerOpen);
  }, [isDrawerOpen]);

  React.useEffect(() => {
    setIsDark(JSON.parse(localStorage.getItem("isDark") || "false") === true);
  }, []);

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  return (
    <SiteContext.Provider
      value={{ isDark, toggleDark, isDrawerOpen, toggleDrawer }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
          <Box role="presentation" sx={{ width: "100vw" }}>
            <Box sx={{ mb: 2 }} />
            <Container>
              <Grid container justifyContent="space-between">
                <Grid item />
                <Grid item>
                  <CloseIcon onClick={toggleDrawer} fontSize="large" />
                </Grid>
              </Grid>
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      toggleDrawer();
                      navigate("/");
                    }}
                  >
                    <ListItemText primary="🏠 Home" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      toggleDrawer();
                      navigate("/blog");
                    }}
                  >
                    <ListItemText primary="✏️ Blog" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      toggleDrawer();
                      window.open("/resume.pdf", "_blank");
                    }}
                  >
                    <ListItemText primary="💼 Resume" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Box sx={{ ml: 1, mt: 1 }}>
                <ThemeToggle />
              </Box>
            </Container>
          </Box>
        </Drawer>
      </ThemeProvider>
    </SiteContext.Provider>
  );
};

export default SiteContext;
