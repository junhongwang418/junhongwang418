import React from "react";
import {createStyles, Theme, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import {ProjectJSON} from "../api/APIManager";
import Link from '@material-ui/core/Link';
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";

const styles = (theme: Theme) => createStyles({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },

  content: {
    flexGrow: 1
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
  },

  cardMedia: {
    height: 0,
    paddingTop: "72%",
    backgroundSize: "contain"
  },

  chipContainer: {
    marginTop: theme.spacing(1)
  },

  chip: {
    marginRight: theme.spacing(1)
  }

});

interface ProjectCardProps extends WithStyles<typeof styles> {
  project: ProjectJSON;
}

class ProjectCard extends React.Component<ProjectCardProps> {

  render() {
    const { classes, project } = this.props;

    return (
      <Card className={classes.root} variant="outlined">
        <CardMedia
          className={classes.cardMedia}
          image={project.image}
          title={project.title}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {project.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.description}
          </Typography>
          <div className={classes.chipContainer}>
            {
              project.tools.map((tool, index) =>
                <Chip
                  className={classes.chip}
                  variant="outlined"
                  size="small"
                  label={tool}
                  key={index}
                />
              )
            }
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            view case study >
          </Button>
        </CardActions>
      </Card>
    );

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
