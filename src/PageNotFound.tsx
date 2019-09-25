import React from "react";
import {createStyles, Theme, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

const styles = (theme: Theme) => createStyles({
  root: {
    position: "absolute",
    top: "50%",
    transform: `translateY(-50%)`
  }
});

interface Props extends WithStyles<typeof styles> {}


class PageNotFound extends React.Component<Props> {
  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography>404: Page Not Found</Typography>
      </div>
    );
  }
}

export default withStyles(styles)(PageNotFound);
