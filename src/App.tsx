import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import {Theme, WithStyles, createStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Project from "./project/Project";
import Work from "./work/Work";
import Contact from "./contact/Contact";
import About from "./about/About";

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    height: "100%"
  },

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
  },

  title: {
    flexGrow: 1
  },

  container: {
    height: "100%"
  },

  content: {
    position: "relative",
    top: "50%",
    transform: `translateY(-50%)`
  },

  link: {
    color: theme.primaryColor,
    "&:hover": {
      textDecoration: "none",
      opacity: 0.58
    }
  },

  img: {
    margin: "0 8px"
  },

  sunnyIcon: {
    color: `rgb(255, 201, 63)`
  },

  moonIcon: {
    color: theme.color
  },

  iconButton: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },

  absolutePosition: {
    position: "absolute"
  },

  show: {
    visibility: "visible",
    opacity: 1,
    transition: `opacity .5s ease`
  },

  hide: {
    visibility: "hidden",
    opacity: 0
  }
});


interface AppProps extends WithStyles<typeof styles> {}

class App extends React.Component<AppProps> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar color="inherit" className={classes.appBar}>
          <Toolbar variant="dense">
            <Button
              className={classes.button}
              color="inherit"
              href="/"
              disableRipple
            >
              <Typography variant="button">Junhong Wang</Typography>
            </Button>
            <div style={{ flexGrow: 1 }} />
            <Button
              className={classes.button}
              color="inherit"
              disableRipple
              href="/project"
            >
              <Typography variant="button">Project</Typography>
            </Button>
            <Button
              className={classes.button}
              color="inherit"
              disableRipple
              href="/work"
            >
              <Typography variant="button">Work</Typography>
            </Button>
            <Button
              className={classes.button}
              color="inherit"
              disableRipple
              href="/contact"
            >
              <Typography variant="button">Contact</Typography>
            </Button>
            <Button
              className={classes.button}
              color="inherit"
              disableRipple
              href="/about"
            >
              <Typography variant="button">About</Typography>
            </Button>
          </Toolbar>
        </AppBar>
        <Container className={classes.container} maxWidth="md">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/project" component={Project}/>
            <Route path="/work" component={Work}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route component={Home} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(App);
