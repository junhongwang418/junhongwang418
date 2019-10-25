import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {createStyles, Theme, WithStyles} from "@material-ui/core";
import RouteOptions from "../RouteOptions";
import {version} from "../../package.json";
import {NavLink, RouteComponentProps, withRouter} from "react-router-dom";
import ThemeToggle from "../theme/ThemeToggle";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
// @ts-ignore
import Resume from "../resume.pdf";

var classNames = require("classnames");

const styles = (theme: Theme) => createStyles({
  appBar: {
    boxShadow: "none",
    backgroundColor: theme.palette.background.default
  },

  button: {
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "transparent",
      opacity: 0.58
    },
  },

  version: {
    color: theme.palette.primary.main
  },

  link: {
    textDecoration: "none",
  },

  selected: {
    fontWeight: "bold"
  }

});

interface Props {
  onClickAbout: () => void;
  onClickWork: () => void;
  onClickProject: () => void;
}

const useStyles = makeStyles((theme: Theme) => createStyles(styles(theme)));

const NavigationBar: React.FunctionComponent<Props> = (props) => {

  const classes = useStyles();
  const { onClickAbout, onClickWork, onClickProject } = props;

  return (
    <Slide appear={false} direction="down" in={!useScrollTrigger()}>
      <AppBar
        color="inherit"
        className={classes.appBar}
      >
        <Toolbar>
          <Typography variant="button">Junhong Wang</Typography>
          <ThemeToggle />
          <div style={{ flexGrow: 1 }} />
          <Typography className={classes.version} variant="caption">v{version}</Typography>
          <Button style={{ marginLeft: "1rem" }} onClick={onClickAbout}>About</Button>
          <Button style={{ marginLeft: "1rem" }} onClick={onClickWork}>Work</Button>
          <Button style={{ marginLeft: "1rem" }} onClick={onClickProject}>Project</Button>
          <Button style={{ marginLeft: "1rem" }}>
            <Link
              color="inherit"
              rel="noopener"
              underline="none"
              href={Resume}
              target="_blank"
            >
              Resume
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Slide>
  );

};

export default NavigationBar;
