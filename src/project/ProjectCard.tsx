import React from "react";
import {createStyles, Theme, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import {ProjectJSON} from "../api/APIManager";
import Link from '@material-ui/core/Link';
import Chip from "@material-ui/core/Chip";

const styles = (theme: Theme) => createStyles({
  root: {
    width: "100%",
    paddingTop: "172%",
    position: "relative",
  },

  content: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
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
    color: theme.palette.text.secondary,
  },

  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main
  },

  imageContainer: {
    width: "100%",
    paddingTop: "72%",
    position: "relative",
  },

  image: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain"
  },

  chips: {
    marginBottom: "0.2rem"
  }

});

interface ProjectCardProps extends WithStyles<typeof styles> {
  project: ProjectJSON;
}

class ProjectCard extends React.Component<ProjectCardProps> {

  render() {
    const { classes, project } = this.props;

    return (
      <div>
        <div className={classes.imageContainer}>
          <Link target="_blank" href={project.url}>
            <img className={classes.image} src={project.image} alt={project.title} />
          </Link>
        </div>
        <Typography variant="h6" gutterBottom>{project.title.toUpperCase()}</Typography>
        <Typography color="textSecondary" variant="body2" gutterBottom>{project.description}</Typography>
        <div className={classes.chips}>
          {
            project.tools.map((tool, index) =>
              <Chip
                variant="outlined"
                size="small"
                label={tool}
                color="secondary"
                key={index}
              />
            )
          }
        </div>
        <Typography>
          <Link
            target="_blank"
            href={project.url}
            className={classes.link}
          >
            view case study >
          </Link>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectCard);
