import React from "react";
import {createStyles, Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {ProjectJSON} from "../api/APIManager";
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import {useHistory} from "react-router";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },

  content: {
    flexGrow: 1
  },

  link: {
    "&:hover": {
      textDecoration: 'none'
    }
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

}));

interface ProjectCardProps {
  project: ProjectJSON;
}

const ProjectCard = (props: ProjectCardProps) => {

  const history = useHistory();
  const classes = useStyles();

  const { project } = props;

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
        <Button
          size="small"
          color="primary"
          onClick={() => history.push({ pathname: `/md/${project.id}`, state: window.scrollY })}
        >
          view case study >
        </Button>
      </CardActions>
    </Card>
  );

};

export default ProjectCard;
