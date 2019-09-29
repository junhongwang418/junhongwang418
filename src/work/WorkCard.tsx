import React from "react";
import createStyles from "@material-ui/core/styles/createStyles";
import {Theme, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import {WorkJSON} from "../api/APIManager";
import Typography from "@material-ui/core/Typography";
import WorkIcon from "@material-ui/icons/WorkOutline";
import Tooltip from "@material-ui/core/Tooltip";
import OpenIcon from "@material-ui/icons/OpenInNew";
import Link from "@material-ui/core/Link";
import {Link as RouteLink} from 'react-router-dom';

import Button from "@material-ui/core/Button";

const styles = (theme: Theme) => createStyles({
  root: {
    width: "100%",
    paddingTop: "32%",
    position: "relative"
  },

  content: {
    position: "absolute",
    width: "90%",
    height: "95%",
    top: "5%",
    left: "10%",
  },

  description: {
    opacity: 0.68
  },

  button: {
    marginTop: "3rem"
  }

});

interface Props extends WithStyles<typeof styles> {
  work: WorkJSON;
  value: number;
  index: number;
}

class WorkCard extends React.Component<Props> {
  render() {
    const { classes, work, value, index } = this.props;

    return (
      <div className={classes.root} hidden={value !== index}>
        <div className={classes.content}>
          <Typography variant="body1">
            {work.role}
            <Link href={work.link} underline="none" target="_blank"> @ {work.employer}</Link>
          </Typography>
          <Typography variant="overline">{work.date.start} - {work.date.end || "Present"}</Typography>
          <Typography className={classes.description} variant="body2">{work.description}</Typography>
          <Button
            variant="outlined"
            component={RouteLink}
            to={`/works/${work._id}`}
            target="_blank"
            style={{ marginTop: "1rem" }}
          >
            See More
          </Button>
        </div>
      </div>

    );
  }
}

export default withStyles(styles)(WorkCard);
