import React from "react";
import {createStyles, Theme, WithStyles} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import withStyles from "@material-ui/core/styles/withStyles";
import ProjectCard from "./ProjectCard";
import APIManager, {ProjectJSON} from "../api/APIManager";
import Typography from "@material-ui/core/Typography";

const styles = (theme: Theme) => createStyles({
  root: {
    paddingTop: theme.spacing(16)
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
    this.setState({ projects: APIManager.getAllProjects().sort((a, b) => b.year - a.year) });
  }

  render() {
    const { classes } = this.props;
    const { projects } = this.state;

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          {
            projects.map(project => (
              <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <ProjectCard project={project} />
              </Grid>
            ))
          }
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Project);
