import React from "react";
import SunnyIcon from "@material-ui/icons/Brightness1";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import {ClassNameMap} from "@material-ui/core/styles/withStyles";
import MoonIcon from "@material-ui/icons/Brightness2";
import {useTheme} from "./ThemeContext";
import IconButton from "@material-ui/core/IconButton";
var classNames = require("classnames");

const styles = (theme: Theme) => createStyles({

  sunnyIcon: {
    color: `rgb(255, 201, 63)`
  },

  moonIcon: {
    color: theme.color.default
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

interface ThemeIconButtonProps {
  isFirstButton?: boolean;
  classes?: Partial<ClassNameMap<keyof typeof styles>>;
}

const ThemeIconButton = (props: ThemeIconButtonProps) => {
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

const ThemeToggle = () => (
  <div>
    <ThemeIconButton isFirstButton />
    <ThemeIconButton />
  </div>
);

export default ThemeToggle;
