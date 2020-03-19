import React, {RefObject} from "react";

import Container from "@material-ui/core/Container";
import NavigationBar from "./navigation/NavigationBar";

import {Theme, WithStyles, createStyles, WithTheme} from "@material-ui/core";
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
import Publication from "./publication/Publication";
import withTheme from "@material-ui/core/styles/withTheme";
import VantaEffect from "./VantaEffect";

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

interface AppProps extends WithStyles<typeof styles>, WithTheme {}

class App extends React.Component<AppProps> {

  private homeRef: RefObject<any>;
  private aboutRef: RefObject<any>;
  private workRef: RefObject<any>;
  private projectRef: RefObject<any>;
  private contactRef: RefObject<any>;
  private publicationRef: RefObject<any>;

  constructor(props: AppProps) {
    super(props);

    this.homeRef = React.createRef();
    this.aboutRef = React.createRef();
    this.workRef = React.createRef();
    this.projectRef = React.createRef();
    this.contactRef = React.createRef();
    this.publicationRef = React.createRef();

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
                  onClickHome={() => window.scrollTo({top: this.homeRef.current.offsetTop - 64, left: 0, behavior: 'smooth'})}
                  onClickAbout={() => window.scrollTo({top: this.aboutRef.current.offsetTop - 64, left: 0, behavior: 'smooth'})}
                  onClickWork={() => window.scrollTo({top: this.workRef.current.offsetTop - 64, left: 0, behavior: 'smooth'})}
                  onClickProject={() => window.scrollTo({top: this.projectRef.current.offsetTop - 64, left: 0, behavior: 'smooth'})}
                  onClickPublication={() => window.scrollTo({top: this.publicationRef.current.offsetTop - 64, left: 0, behavior: 'smooth'})}
                />
                <Container className={classes.container} maxWidth="md">
                  <Grid container spacing={8}>
                    <Grid item xs={12}>
                      <div data-aos="fade-up" ref={this.homeRef}>
                        <VantaEffect>
                          <Home />
                        </VantaEffect>
                      </div>
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
                      <div data-aos="fade-up" ref={this.publicationRef}><Publication /></div>
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

export default withTheme(withStyles(styles)(App));
