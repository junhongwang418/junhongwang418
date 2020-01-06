import React, {Ref, RefObject} from "react";

import Container from "@material-ui/core/Container";
import NavigationBar from "./navigation/NavigationBar";
import RouteOptions from "./RouteOptions";

import {Theme, WithStyles, createStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Project from "./project/Project";
import Work from "./work/Work";
import Contact from "./contact/Contact";
import About from "./about/About";
import PageNotFound from "./PageNotFound";
import Grid from "@material-ui/core/Grid";
import AOS from "aos";

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

  private homeRef: RefObject<any>;
  private aboutRef: RefObject<any>;
  private workRef: RefObject<any>;
  private projectRef: RefObject<any>;
  private contactRef: RefObject<any>;

  constructor(props: AppProps) {
    super(props);

    this.homeRef = React.createRef();
    this.aboutRef = React.createRef();
    this.workRef = React.createRef();
    this.projectRef = React.createRef();
    this.contactRef = React.createRef();

  }

  componentDidMount(): void {
    AOS.init({ duration: 800 });
  }

  componentWillReceiveProps(nextProps: Readonly<AppProps>, nextContext: any): void {
    AOS.refresh();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <NavigationBar
                  onClickHome={() => window.scrollTo({top: this.homeRef.current.offsetTop, left: 0, behavior: 'smooth'})}
                  onClickAbout={() => window.scrollTo({top: this.aboutRef.current.offsetTop, left: 0, behavior: 'smooth'})}
                  onClickWork={() => window.scrollTo({top: this.workRef.current.offsetTop, left: 0, behavior: 'smooth'})}
                  onClickProject={() => window.scrollTo({top: this.projectRef.current.offsetTop, left: 0, behavior: 'smooth'})}
                />
                <Container className={classes.container} maxWidth="md">
                  <Grid container spacing={8}>
                    <Grid item xs={12}>
                      <div data-aos="fade-up" ref={this.homeRef}><Home /></div>
                    </Grid>
                    <Grid item xs={12}>
                      <div data-aos="fade-up" ref={this.aboutRef}><About /></div>
                    </Grid>
                    <Grid item xs={12}>
                      <div data-aos="fade-up" ref={this.workRef}><Work /></div>
                    </Grid>
                    <Grid item xs={12}>
                      <div data-aos="fade-up" ref={this.projectRef}><Project /></div>
                    </Grid>
                    <Grid item xs={12}>
                      <div data-aos="fade-up" ref={this.contactRef}><Contact /></div>
                    </Grid>
                  </Grid>
                </Container>
              </React.Fragment>
            )}
          />
          <Route component={PageNotFound} />
        </Switch>

      </div>
    );
  }
}

export default withStyles(styles)(App);
