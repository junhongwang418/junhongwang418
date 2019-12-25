import React from "react";
import {createStyles, Theme, WithStyles} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import withStyles from "@material-ui/core/styles/withStyles";
import ProjectCard from "./ProjectCard";
import APIManager, {ProjectJSON} from "../api/APIManager";
import Typography from "@material-ui/core/Typography";
import request from "request";
import {fade} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = (theme: Theme) => createStyles({
  root: {
    // paddingTop: theme.spacing(16)
    minHeight: "72vh"
  },

  line: {
    height: 1,
    flexGrow: 1,
    marginRight: "28%",
    marginLeft: "1rem",
    backgroundColor: fade(theme.palette.text.primary, 0.28)
  },

  title: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem"
  },

  center: {
    textAlign: "center"
  }

});

interface Props extends WithStyles<typeof styles> {}

interface State {
  projects: ProjectJSON[];
}

class Project extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount(): void {
    this.setState({ projects: APIManager.getAllProjects() });
  }

  render() {
    const { classes } = this.props;
    const { projects } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.title}>
          <Typography variant="h5">My Projects</Typography>
          <div className={classes.line} />
        </div>
        <Grid container spacing={8}>
          {
            projects.map(project =>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <ProjectCard project={project} />
              </Grid>
            )
          }
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Project);
