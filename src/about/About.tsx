import React from "react";
import {createStyles, Theme, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import profileImage from "../images/profile.png";
import Grid from '@material-ui/core/Grid';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Emoji from "../Emoji";

const styles = (theme: Theme) => createStyles({
  root: {
    display: "flex",
    alignItems: "center",
    alignContent: "center"
  },

  profile: {
    maxWidth: "80%",
    borderRadius: "50%"
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
            <Typography variant="h5">
              <Emoji emoji="🤓" /> About Me
            </Typography>
            <div className={classes.line} />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className={classes.center}>
              <img className={classes.profile} src={profileImage} alt="profile" />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Typography className={classes.description} variant="body1">
              Hi there! I'm Junhong, a senior year undergraduate student
              at UCLA studying computer science.
              My dream is to become an awesome Software Engineer!
              In the summer of my first year at UCLA,
              I interned as a iOS app developer at teamLab in Japan
              to give myself a feel of what it’s like to be a software engineer.
              I believed it’s important to know beforehand what kind of skills
              I need to become a successful software engineer.
              In my second year at UCLA,
              I started a part-time job as a Software Developer at
              Risk Sciences Lab at UCLA to learn a different stack of technology.
              In particular, I primary focused on learning web front-end development.
              This summer, I will be interning as a Software Engineer at AppFolio
              to enhance their a property management software.
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(About);
