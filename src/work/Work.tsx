import React from "react";
import {createStyles, Theme, WithStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import APIManager, {WorkJSON} from "../api/APIManager";
import WorkCard from "./WorkCard";

const styles = (theme: Theme) => createStyles({
  root: {
    marginTop: theme.spacing(16)
  }

});

interface Props extends WithStyles<typeof styles> {}

interface State {
  works: WorkJSON[];
}

class Work extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      works: []
    };
  }

  componentDidMount(): void {
    this.setState({ works: APIManager.getAllWorks() });
  }

  render() {
    const { classes } = this.props;
    const { works } = this.state;
    return (
      <div className={classes.root}>
        {
          works.map(work => (
            <WorkCard work={work} />
          ))
        }
      </div>
    );
  }
}

export default withStyles(styles)(Work);
