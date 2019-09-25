import React from "react";
import Typography from "@material-ui/core/Typography"
import { Link } from "react-router-dom";
import riskLogoImage from "../images/risk-logo.png";
import teamLogoImage from "../images/team-logo.png";
import {createStyles, Theme, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import RouteOptions from "../RouteOptions";
import ThemeToggle from "../theme/ThemeToggle";
import profileImage from "../images/profile.png";
import WarningIcon from '@material-ui/icons/Warning';

const styles = (theme: Theme) => createStyles({

  root: {
    height: "100vh"
  },

  content: {
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)"
  },

  caption: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem"
  }

});

interface HomeProps extends WithStyles<typeof styles> {}

class Home extends React.Component<HomeProps> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <div className={classes.caption}>
            <WarningIcon style={{ marginRight: "0.5rem" }} />
            <span>Website under development. You can visit <a href="./legacy/index.html">legacy page</a> for now.</span>
          </div>
          <Typography variant="h6" color="primary" style={{ marginBottom: "1rem" }}>Hi, my name is</Typography>
          <Typography variant="h2" style={{ marginBottom: "1rem" }}>Junhong Wang.</Typography>
          <Typography variant="h2" color="textSecondary" style={{ marginBottom: "1rem" }}>I build websites and apps.</Typography>
          <Typography color="textSecondary" style={{ width: "60%" }}>
            I'm a senior undergraduate student at UCLA pursuing Computer Science degree.
            I specialize in building scalable & high-quality website and mobile applications.
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
