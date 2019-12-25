import React from "react";
import {createStyles, Theme, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import {ProjectJSON} from "../api/APIManager";
import Link from '@material-ui/core/Link';
import Chip from "@material-ui/core/Chip";
import SvgIcon from "@material-ui/core/SvgIcon";

const styles = (theme: Theme) => createStyles({
  root: {
    width: "100%",
    paddingTop: "128%",
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

  image: {
    width: "100%",
    height: "68%",
    objectFit: "contain"
  },

  marginBottom: {
    marginBottom: "1rem"
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
          <Link target="_blank" href={project.url}>
            <img className={classes.image} src={project.image} />
          </Link>
          <Typography variant="h6" align="left" gutterBottom>{project.title.toUpperCase()}</Typography>
          <Typography className={classes.description} variant="body2" align="left" gutterBottom>{project.description}</Typography>
          <div className={classes.marginBottom}>
            {
              project.tools.map(tool =>
                <Chip
                  variant="outlined"
                  size="small"
                  label={tool}
                  color="secondary"
                />
              )
            }
          </div>
          <Typography align="left">
            <Link
              target="_blank"
              href={project.url}
              className={classes.link}
            >
              view case study >
            </Link>
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectCard);
