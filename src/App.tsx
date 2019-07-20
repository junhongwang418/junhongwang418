import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "./theme/ThemeContext";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import riskLogoImage from "./images/risk-logo.png";
import teamLogoImage from "./images/team-logo.png";
import SunnyIcon from "@material-ui/icons/Brightness1";
import MoonIcon from "@material-ui/icons/Brightness2";
import {Theme, WithStyles, createStyles} from "@material-ui/core";
import withStyles, {ClassNameMap} from "@material-ui/core/styles/withStyles";
var classNames = require("classnames");

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

const useStyles = makeStyles((theme: Theme) => createStyles(styles(theme)));

interface ToggleableIconButtonProps {
  isFirstButton?: boolean;
  classes?: Partial<ClassNameMap<keyof typeof styles>>;
}

interface AppProps extends WithStyles<typeof styles> {}

const ToggleableIconButton = (props: ToggleableIconButtonProps) => {
  const { isFirstButton } = props;
  const themeState = useTheme();
  const classes = useStyles();
  return (
    <IconButton
      className={classNames({
        [classes.iconButton]: true,
        [classes.absolutePosition]: isFirstButton,
        [classes.show]: isFirstButton ? !themeState.dark : themeState.dark,
        [classes.hide]: isFirstButton ? themeState.dark : !themeState.dark
      })}
      onClick={() => themeState.toggle()}
      href=""
      disableRipple
    >
      {isFirstButton ? (
        <SunnyIcon className={classes.sunnyIcon} />
      ) : (
          <MoonIcon className={classes.moonIcon} />
        )}
    </IconButton>
  );
};

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
              href=""
              disableRipple
            >
              <Typography variant="button">Junhong Wang</Typography>
            </Button>
            <div style={{ flexGrow: 1 }} />
            <Button
              className={classes.button}
              color="inherit"
              disableRipple
              href=""
            >
              <Typography variant="button">Project</Typography>
            </Button>
            <Button
              className={classes.button}
              color="inherit"
              disableRipple
              href=""
            >
              <Typography variant="button">Work</Typography>
            </Button>
            <Button
              className={classes.button}
              color="inherit"
              disableRipple
              href=""
            >
              <Typography variant="button">Contact</Typography>
            </Button>
            <Button
              className={classes.button}
              color="inherit"
              disableRipple
              href=""
            >
              <Typography variant="button">About</Typography>
            </Button>
          </Toolbar>
        </AppBar>
        <Container className={classes.container} maxWidth="md">
          <div className={classes.content}>
            <ToggleableIconButton isFirstButton />
            <ToggleableIconButton />

            <Typography variant="h5">
              <Link className={classes.link} href="" component="a">
                Junhong Wang
              </Link>{" "}
              is currently a Student Researcher at{" "}
              <Link
                className={classes.link}
                href="https://www.risksciences.ucla.edu"
                component="a"
              >
                <img
                  className={classes.img}
                  width="32"
                  alt="Risk Science Logo"
                  src={riskLogoImage}
                />
                The B. John Garrick Institute for the Risk Sciences at UCLA
              </Link>
              . Previously, an iOS App Developer Intern at{" "}
              <Link className={classes.link} href="https://www.teamlab.art" component="a">
                <img
                  className={classes.img}
                  width="32"
                  alt="TeamLab Logo"
                  src={teamLogoImage}
                />
                Teamlab
              </Link>
              .
            </Typography>
          </div>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(App);
