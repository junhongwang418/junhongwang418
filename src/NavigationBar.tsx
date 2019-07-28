import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import RouteOptions from "./RouteOptions";
import { version } from "../package.json";
import {Link, RouteComponentProps, withRouter} from "react-router-dom";
import ThemeToggle from "./theme/ThemeToggle";
var classNames = require("classnames");

const styles = (theme: Theme) => createStyles({
  appBar: {
    boxShadow: "none",
    // borderBottomWidth: 1,
    // borderBottomStyle: "solid",
    // borderBottomColor: theme.transparentColor,
    backgroundColor: "inherit",
    transition: `background-color 0.5s ease`
  },

  button: {
    color: theme.color,
    "&:hover": {
      backgroundColor: "transparent",
      opacity: 0.58
    },
  },

  version: {
    color: theme.color,
    marginRight: "1em"
  },

  link: {
    textDecoration: "none",
  },

  selected: {
    fontWeight: "bold"
  }

});

interface NavigationBarProps extends RouteComponentProps {}

const useStyles = makeStyles((theme: Theme) => createStyles(styles(theme)));

const NavigationBar = (props: NavigationBarProps) => {
  const classes = useStyles();
  const currentRoute = props.location.pathname;
  return (
    <AppBar
      position="absolute"
      color="inherit"
      className={classes.appBar}
    >
      <Toolbar>
        <Link className={classes.link} to={RouteOptions.DEFAULT}>
          <Button
              className={classes.button}
              color="inherit"
              href=""
              disableRipple
          >
            <Typography className={classNames({ [classes.selected]: currentRoute === RouteOptions.DEFAULT })} variant="button">
              Junhong Wang
            </Typography>
          </Button>
        </Link>
        <ThemeToggle />
        <div style={{ flexGrow: 1 }} />
        <Typography className={classes.version} variant="caption">v{version}</Typography>
        <Link className={classes.link} to={RouteOptions.PROJECT}>
          <Button
            className={classes.button}
            disableRipple
            href=""
          >
            <Typography className={classNames({ [classes.selected]: currentRoute === RouteOptions.PROJECT })} variant="button">Project</Typography>
          </Button>
        </Link>
        <Link className={classes.link} to={RouteOptions.WORK}>
          <Button
            className={classes.button}
            disableRipple
            href=""
          >
            <Typography className={classNames({ [classes.selected]: currentRoute === RouteOptions.WORK })} variant="button">Work</Typography>
          </Button>
        </Link>
        <Link className={classes.link} to={RouteOptions.CONTACT}>
          <Button
            className={classes.button}
            disableRipple
            href=""
          >
            <Typography className={classNames({ [classes.selected]: currentRoute === RouteOptions.CONTACT })} variant="button">Contact</Typography>
          </Button>
        </Link>
        <Link className={classes.link} to={RouteOptions.ABOUT}>
          <Button
            className={classes.button}
            disableRipple
            href=""
          >
            <Typography className={classNames({ [classes.selected]: currentRoute === RouteOptions.ABOUT })} variant="button">About</Typography>
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(NavigationBar);
