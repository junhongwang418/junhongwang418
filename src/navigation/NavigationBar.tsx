import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {version} from "../../package.json";
import ThemeToggle from "../theme/ThemeToggle";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import {createStyles, Theme} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
  appBar: {
    boxShadow: "none",
  },

  button: {
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "transparent",
      opacity: 0.58
    },
  },

  version: {
    color: theme.palette.primary.main
  },

  link: {
    textDecoration: "none",
  },

  selected: {
    fontWeight: "bold"
  }

});

interface Props {
  onClickHome: () => void;
  onClickAbout: () => void;
  onClickWork: () => void;
  onClickProject: () => void;
  onClickPublication: () => void;
}

const useStyles = makeStyles((theme: Theme) => createStyles(styles(theme)));

const NavigationBar: React.FunctionComponent<Props> = (props) => {

  const classes = useStyles();
  const { onClickHome, onClickAbout, onClickWork, onClickProject, onClickPublication } = props;

  return (
    <Slide appear={false} direction="down" in={!useScrollTrigger()}>
      <AppBar
        color="transparent"
        className={classes.appBar}
      >
        <Toolbar>
          <Button onClick={onClickHome}>Junhong Wang</Button>
          <ThemeToggle />
          <div style={{ flexGrow: 1 }} />
          <Typography className={classes.version} variant="caption">
            <Link
              rel="noopener"
              href="https://github.com/ioneone/ioneone.github.io"
              target="_blank"
            >
              v{version}
            </Link>
          </Typography>
          <Button style={{ marginLeft: "1rem" }} onClick={onClickAbout}>About</Button>
          <Button style={{ marginLeft: "1rem" }} onClick={onClickWork}>Work</Button>
          <Button style={{ marginLeft: "1rem" }} onClick={onClickProject}>Project</Button>
          <Button style={{ marginLeft: "1rem" }} onClick={onClickPublication}>Publication</Button>
        </Toolbar>
      </AppBar>
    </Slide>
  );

};

export default NavigationBar;
