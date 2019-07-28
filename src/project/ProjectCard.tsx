import React from "react";

import {createStyles, Theme, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import {ProjectJSON} from "../api/APIManager";

const styles = (theme: Theme) => createStyles({
  root: {
    width: "100%",
    paddingTop: "68%",
    position: "relative",
    cursor: "pointer",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%"
  },
  overlay: {
    background: `rgba(${theme.colorR}, ${theme.colorG}, ${theme.colorB}, 0)`,
    "&:hover": {
      background: `rgba(${theme.colorR}, ${theme.colorG}, ${theme.colorB}, 0.9)`,
      "& > *": {
        opacity: 1
      },
    },
    "& > *": {
      opacity: 0
    },
    position: "absolute",

    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    transition: "all 0.2s ease-in-out"
  },

  details: {
    position: "absolute",
    width: "80%",
    textAlign: "center",
    top: "50%",
    left: 0,
    right: 0,
    transform: "translateY(-50%)",
    color: theme.backgroundColor,
    marginLeft: "10%",
    transition: "all 0.2s ease-in-out"
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
      <div
        className={classes.root}
        style={{ backgroundImage: `url(${project.image})`}}
      >
        <div className={classes.overlay}>
          <div className={classes.details}>
            <Typography variant="body2" align="left">{project.year}</Typography>
            <Typography variant="h6" align="left">{project.title.toUpperCase()}</Typography>
            <Typography variant="body2" align="left">{project.description}</Typography>
          </div>
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(ProjectCard);
