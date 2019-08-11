import React from "react";
import {createStyles, Theme, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import profileImage from "../images/profile.png";
import Grid from '@material-ui/core/Grid';
var classNames = require("classnames");

const styles = (theme: Theme) => createStyles({
  root: {
    paddingTop: theme.spacing(16)
  },
  profile: {
    maxWidth: "80%"
  },
  center: {
    textAlign: "center",
  },
  title: {
    marginBottom: "2rem",
  },

  subTitle: {
    marginBottom: "1rem",
    lineHeight: "3.4rem"
  },
  description: {
    marginTop: "2rem",
    lineHeight: "2rem"
  },
  divider: {
    background: theme.palette.primary.main,
    height: "0.4rem",
    width: "4rem"
  },
  shiftLeft: {
    transform: "translateX(-1rem)",
  }
});

interface AboutProps extends WithStyles<typeof styles> {}

class About extends React.Component<AboutProps> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={classes.center}>
              <img className={classes.profile} src={profileImage} alt="profile" />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography className={classNames(classes.subTitle, classes.shiftLeft)} variant="h4">
              I'm Junhong, a Software Engineer based in LA.
            </Typography>
            <div className={classNames(classes.divider, classes.shiftLeft)} />
            <Typography className={classes.description} variant="body1">
              Junhong is an undergraduate at the University of California,
              Los Angeles (UCLA) in the department of Computer Science.
              He has strong backgrounds in iOS app and web frontend
              developments. Currently at GIRS, he is working on Hybrid Causal Logic
              Analyzer (HCLA) web application for NASA's Jet Propulsion Laboratory
              (JPL) for system reliability analysis, and Phoenix web application
              for Japan's Nuclear Regulation Authority (NRA) for human reliability analysis.
              <br /><br />
              Previously he was an iOS app developer intern at teamLab in Tokyo,
              Japan. He worked in a team to build an app for Bic Camera, one of
              the largest electronic retailers in Japan with more than 1.5 million
              users.
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(About);
