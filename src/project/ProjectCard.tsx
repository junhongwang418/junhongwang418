import React from "react";

import {createStyles, Theme, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import {ProjectJSON} from "../api/APIManager";
import OpenIcon from "@material-ui/icons/OpenInNew";
import FolderIcon from "@material-ui/icons/FolderOpen";
import Tooltip from "@material-ui/core/Tooltip";

const styles = (theme: Theme) => createStyles({
  root: {
    width: "100%",
    paddingTop: "128%",
    position: "relative",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.palette.text.primary,
    "&:hover": {
      transform: "translateY(-1%)"
    },
    transition: "transform 0.2s ease",
  },

  content: {
    position: "absolute",
    width: "80%",
    height: "80%",
    top: "10%",
    left: "10%",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1.2rem"
  },

  folder: {
    color: theme.palette.primary.main,
    width: 48,
    height: 48
  },

  open: {
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
      transition: "color 0.2s ease"
    },
    marginLeft: "1rem"
  },

  github: {
    width: 24,
    height: 24,
    cursor: "pointer",
    "&:hover": {
      "& path": {
        fill: theme.palette.primary.main,
        transition: "fill 0.2s ease"
      },
    },
    "& path": {
      fill: theme.palette.text.primary
    }
  },

  description: {
    color: theme.palette.text.secondary
  }
});

interface ProjectCardProps extends WithStyles<typeof styles> {
  project: ProjectJSON;
}

class ProjectCard extends React.Component<ProjectCardProps> {

  constructor(props: ProjectCardProps) {
    super(props);
  }

  render() {
    const { classes, project } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <div className={classes.header}>
            <FolderIcon className={classes.folder} viewBox="2 4 20 16" />
            <div>
              <Tooltip title="github">
              <svg className={classes.github} viewBox="0 0 24 24">
                <path fill="#000000" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </svg>
              </Tooltip>
              <Tooltip title="external">
                <OpenIcon className={classes.open} />
              </Tooltip>
            </div>
          </div>
          <Typography className={classes.description} variant="overline" align="left" gutterBottom>{project.year}</Typography>
          <Typography variant="h6" align="left" gutterBottom>{project.title.toUpperCase()}</Typography>
          <Typography className={classes.description} variant="body2" align="left" gutterBottom>{project.description}</Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectCard);
