import React from "react";

import Container from "@material-ui/core/Container";
import NavigationBar from "./NavigationBar";
import RouteOptions from "./RouteOptions";

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

  container: {
    width: "100%",
    height: "100%",
    margin: "0 auto"
  }

});

interface AppProps extends WithStyles<typeof styles> {}

class App extends React.Component<AppProps> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <NavigationBar />
        <Container className={classes.container} maxWidth="md">
          <Switch>
            <Route exact path={RouteOptions.DEFAULT} component={Home}/>
            <Route path={RouteOptions.PROJECT} component={Project}/>
            <Route path={RouteOptions.WORK} component={Work}/>
            <Route path={RouteOptions.CONTACT} component={Contact}/>
            <Route path={RouteOptions.ABOUT} component={About}/>
            <Route component={Home} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(App);
