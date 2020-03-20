import React, {useState} from "react";
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
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

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

  versionMenu: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
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

  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const { onClickHome, onClickAbout, onClickWork, onClickProject, onClickPublication } = props;

  const navigations = [
    { title: "About", "onClick": onClickAbout },
    { title: "Work", "onClick": onClickWork },
    { title: "Project", "onClick": onClickProject },
    { title: "Publication", "onClick": onClickPublication }
  ];

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
          <Hidden smDown implementation="css">
            <Typography className={classes.version} variant="caption">
              <Link
                rel="noopener"
                href="https://github.com/ioneone/ioneone.github.io"
                target="_blank"
              >
                v{version}
              </Link>
            </Typography>
            {
              navigations.map(({ title, onClick }) => (
                <Button style={{ marginLeft: "1rem" }} onClick={onClick}>{title}</Button>
              ))
            }
          </Hidden>
          <Hidden mdUp implementation="css">
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
              <div
                onClick={() => setOpen(false)}
                onKeyDown={() => setOpen(false)}
              >
                <Typography className={classes.versionMenu} variant="caption" display="block">
                  <Link
                    rel="noopener"
                    href="https://github.com/ioneone/ioneone.github.io"
                    target="_blank"
                  >
                    v{version}
                  </Link>
                </Typography>
                <List>
                  {
                    navigations.map(({ title, onClick }) => (
                      <ListItem button key={title} onClick={onClick}>
                        <ListItemText primary={title} />
                      </ListItem>
                    ))
                  }
                </List>
              </div>
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Slide>
  );

};

export default NavigationBar;
