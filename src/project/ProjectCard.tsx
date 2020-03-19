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

});

interface ProjectCardProps extends WithStyles<typeof styles> {
  project: ProjectJSON;
}

class ProjectCard extends React.Component<ProjectCardProps> {

  render() {
    const {classes, project} = this.props;

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
          <Link
            target="_blank"
            href={project.url}
            className={classes.link}
          >
            <Button size="small" color="primary">
              view case study >
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  }

}

export default withStyles(styles)(ProjectCard);
