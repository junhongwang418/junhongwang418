import React from "react";
import {createStyles, Theme, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import profileImage from "../images/profile.png";
import Grid from '@material-ui/core/Grid';
import { fade } from '@material-ui/core/styles/colorManipulator';
var classNames = require("classnames");


const styles = (theme: Theme) => createStyles({
  root: {
    minHeight: "72vh",
    display: "flex",
    alignItems: "center",
    alignContent: "center"
  },

  profile: {
    maxWidth: "80%"
  },

  center: {
    textAlign: "center",
  },

  title: {
    display: "flex",
    alignItems: "center"
  },

  line: {
    height: 1,
    flexGrow: 1,
    marginRight: "28%",
    marginLeft: "1rem",
    backgroundColor: fade(theme.palette.text.primary, 0.28)
  },

  description: {
    lineHeight: "2rem"
  },

});

interface AboutProps extends WithStyles<typeof styles> {}

class About extends React.Component<AboutProps> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container alignItems="center" spacing={8}>
          <Grid item xs={12} className={classes.title}>
            <Typography variant="h5">About Me</Typography>
            <div className={classes.line} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={classes.center}>
              <img className={classes.profile} src={profileImage} alt="profile" />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography className={classes.description} variant="body1">
              Hi there! I'm Junhong, a rising senior at UCLA studying computer science.
              I have strong background in front-end development.
              During my years in college, I joined MaruMe and TeamLab as an iOS app developer intern
              where I learned technical tools for building iOS apps
              as well as software development processes in general (using github, slack, etc).
              Currently, I'm hired as a software engineer at UCLA's risk sciences lab
              where we are building HCLA, a web application for NASA to analyze the risk
              of their projects / models.
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(About);
