import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import RouteOptions from "./RouteOptions";

const styles = (theme: Theme) => createStyles({
  appBar: {
    boxShadow: "none",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: theme.transparentColor,
    backgroundColor: "inherit",
    transition: `background-color 0.5s ease`
  },

  button: {
    "&:hover": {
      backgroundColor: "transparent",
      opacity: 0.58
    },
    color: theme.color
  }

});

interface NavigationBarProps {}

const useStyles = makeStyles((theme: Theme) => createStyles(styles(theme)));

const NavigationBar = (props: NavigationBarProps) => {
  const classes = useStyles();
  return (
    <AppBar color="inherit" className={classes.appBar}>
      <Toolbar variant="dense">
        <Button
          className={classes.button}
          color="inherit"
          href={RouteOptions.DEFAULT}
          disableRipple
        >
          <Typography variant="button">Junhong Wang</Typography>
        </Button>
        <div style={{ flexGrow: 1 }} />
        <Button
          className={classes.button}
          color="inherit"
          disableRipple
          href={RouteOptions.PROJECT}
        >
          <Typography variant="button">Project</Typography>
        </Button>
        <Button
          className={classes.button}
          color="inherit"
          disableRipple
          href={RouteOptions.WORK}
        >
          <Typography variant="button">Work</Typography>
        </Button>
        <Button
          className={classes.button}
          color="inherit"
          disableRipple
          href={RouteOptions.CONTACT}
        >
          <Typography variant="button">Contact</Typography>
        </Button>
        <Button
          className={classes.button}
          color="inherit"
          disableRipple
          href={RouteOptions.ABOUT}
        >
          <Typography variant="button">About</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
