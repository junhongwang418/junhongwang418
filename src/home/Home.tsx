import React from "react";
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link";
import {createStyles, Theme, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
// @ts-ignore
import Resume from "../resume.pdf";
import Button from "@material-ui/core/Button";
// @ts-ignore
import Portfolio from "../portfolio.pdf";

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
            <Typography variant="caption">
              Visit legacy page <Link href="./legacy/index.html">here</Link>
            </Typography>
          </div>
          <Typography variant="h6" color="primary" style={{ marginBottom: "1rem" }}>Hi, my name is</Typography>
          <Typography variant="h2" style={{ marginBottom: "1rem" }}>Junhong Wang.</Typography>
          <Typography variant="h2" color="textSecondary" style={{ marginBottom: "1rem" }}>I build websites and apps.</Typography>
          <Typography color="textSecondary" style={{ width: "60%", marginBottom: "1rem" }}>
            I'm a senior undergraduate student at UCLA pursuing Computer Science degree.
            I specialize in building scalable & high-quality website and mobile applications.
          </Typography>
          <Button variant="outlined" color="primary">
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
          <Button style={{ marginLeft: "1rem" }} variant="outlined" color="primary">
            <Link
              color="inherit"
              rel="noopener"
              underline="none"
              href={Portfolio}
              target="_blank"
            >
              Portfolio
            </Link>
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
