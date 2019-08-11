import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {createStyles, Theme, WithStyles} from "@material-ui/core";
import RouteOptions from "../RouteOptions";
import {version} from "../../package.json";
import {NavLink, RouteComponentProps, withRouter} from "react-router-dom";
import ThemeToggle from "../theme/ThemeToggle";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";

var classNames = require("classnames");

const styles = (theme: Theme) => createStyles({
  appBar: {
    boxShadow: "none",
    // borderBottomWidth: 1,
    // borderBottomStyle: "solid",
    // borderBottomColor: theme.transparentColor,
    backgroundColor: "inherit",
    transition: `background-color 0.5s ease`
  },

  button: {

    "&:hover": {
      backgroundColor: "transparent",
      opacity: 0.58
    },
  },

  version: {
    color: theme.palette.primary.main,
    marginRight: "1em",
    textDecoration: "none",
  },

  leftMargin: {
    marginLeft: "1rem"
  },

  navLink: {
    textDecoration: "none",
    color: theme.palette.text.primary
  },

  selected: {
    fontWeight: "bold"
  },

  icon: {
    color: theme.palette.text.primary
  }

});

interface Props extends RouteComponentProps, WithStyles<typeof styles> {}

interface State {
  open: boolean;
}

class NavigationBar extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      open: false
    }
  }

  private toggleDrawer = () => {
    this.setState(prevState => ({ open: !prevState.open }))
  };

  render() {
    const { classes, location } = this.props;
    const { open } = this.state;
    const currentRoute = location.pathname;

    const routes = [
      ["Work", RouteOptions.WORK],
      ["Project", RouteOptions.PROJECT],
      ["Contact", RouteOptions.CONTACT],
      ["About", RouteOptions.ABOUT]
    ];

    return (
      <AppBar
        position="absolute"
        color="inherit"
        className={classes.appBar}
      >
        <Toolbar>
          <Typography variant="button">
            <NavLink activeClassName={classes.selected} className={classes.navLink} to={RouteOptions.DEFAULT} exact>Junhong Wang</NavLink>
          </Typography>

          <ThemeToggle />
          <div style={{ flexGrow: 1 }} />
          <Hidden smUp>
            <IconButton onClick={this.toggleDrawer}>
              <MenuIcon className={classes.icon} />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={this.toggleDrawer}
            >
              <div
                onClick={this.toggleDrawer}
                onKeyDown={this.toggleDrawer}
              >
                <List>
                  {routes.map(([routeText, routeOption]) => (
                    <NavLink className={classes.navLink} to={routeOption}>
                      <ListItem button key={routeText} selected={currentRoute === routeOption}>
                        <ListItemText primary={routeText}/>
                      </ListItem>
                    </NavLink>
                  ))}
                </List>
              </div>
            </Drawer>
          </Hidden>
          <Hidden xsDown>
            <Typography variant="caption">
              <a className={classes.version} href="https://github.com/ioneone/ioneone.github.io" target="_blank">
                v{version}
              </a>
            </Typography>
            <Typography className={classes.leftMargin} variant="button">
              <NavLink activeClassName={classes.selected} className={classes.navLink} to={RouteOptions.WORK}>Work</NavLink>
            </Typography>
            <Typography className={classes.leftMargin} variant="button">
              <NavLink activeClassName={classes.selected} className={classes.navLink} to={RouteOptions.PROJECT}>Project</NavLink>
            </Typography>
            <Typography className={classes.leftMargin} variant="button">
              <NavLink activeClassName={classes.selected} className={classes.navLink} to={RouteOptions.CONTACT}>Contact</NavLink>
            </Typography>
            <Typography className={classes.leftMargin} variant="button">
              <NavLink activeClassName={classes.selected} className={classes.navLink} to={RouteOptions.ABOUT}>About</NavLink>
            </Typography>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(withStyles(styles)(NavigationBar));
