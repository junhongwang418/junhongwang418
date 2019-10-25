import React from "react";
import {Theme, WithStyles} from "@material-ui/core";
import {Redirect, RouteComponentProps} from "react-router";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme: Theme) => ({
  root: {
    marginTop: theme.spacing(8)
  },

  content: {
    marginTop: theme.spacing(8)
  },

  center: {
    display: "block",
    margin: "0 auto"
  }
});

interface Props extends RouteComponentProps<{ id: string }>, WithStyles<typeof styles> {

}

class ProjectDescription extends React.Component<Props> {

  render() {
    return <Redirect to="/page-not-found" />;
  }

}

export default withStyles(styles)(ProjectDescription);
