import React from "react";
import Typography from "@material-ui/core/Typography"
import { Link } from "react-router-dom";
import riskLogoImage from "../images/risk-logo.png";
import teamLogoImage from "../images/team-logo.png";
import {createStyles, Theme, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import RouteOptions from "../RouteOptions";

const styles = (theme: Theme) => createStyles({

  content: {
    position: "relative",
    top: "50%",
    transform: `translateY(-50%)`
  },

  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      opacity: 0.58
    }
  },

  img: {
    margin: "0 8px"
  },

  font: {
    lineHeight: "2.4rem"
  }

});

interface HomeProps extends WithStyles<typeof styles> {}

class Home extends React.Component<HomeProps> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.content}>
        <p>Website under development. You can visit <a href="./legacy/index.html">legacy page</a> for now.</p>
        <Typography className={classes.font} variant="h5">
          <Link className={classes.link} to={RouteOptions.DEFAULT}>
            Junhong Wang
          </Link>{" "}
          is currently a Student Researcher at{" "}
          <a
            className={classes.link}
            href="https://www.risksciences.ucla.edu"
          >
            <img
              className={classes.img}
              width="32"
              alt="Risk Science Logo"
              src={riskLogoImage}
            />
            The B. John Garrick Institute for the Risk Sciences at UCLA
          </a>
          . Previously, an iOS App Developer Intern at{" "}
          <a className={classes.link} href="https://www.teamlab.art">
            <img
              className={classes.img}
              width="32"
              alt="TeamLab Logo"
              src={teamLogoImage}
            />
            Teamlab
          </a>
          .
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
