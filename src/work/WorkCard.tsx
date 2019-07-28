import React from "react";
import createStyles from "@material-ui/core/styles/createStyles";
import {Theme, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import {WorkJSON} from "../api/APIManager";
import Typography from "@material-ui/core/Typography";

const styles = (theme: Theme) => createStyles({
  root: {
    paddingTop: "68%",
    backgroundColor: "lightgray",
    position: "relative",
    cursor: "pointer",
    marginBottom: "1rem",
    transition: "all 0.2s ease-in"
  },

  overlay: {
    background: `rgba(${theme.colorR}, ${theme.colorG}, ${theme.colorB}, 0)`,
    "&:hover": {
      background: `rgba(${theme.colorR}, ${theme.colorG}, ${theme.colorB}, 0.72)`,
      "& > *": {
        opacity: 1
      },
    },
    "& > *": {
      opacity: 0
    },
    position: "absolute",

    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    transition: "all 0.2s ease-in-out"
  },

  details: {
    position: "absolute",
    width: "80%",
    textAlign: "center",
    top: "50%",
    left: 0,
    right: 0,
    transform: "translateY(-50%)",
    color: theme.backgroundColor,
    marginLeft: "10%",
    transition: "all 0.2s ease-in-out"
  }

});

interface Props extends WithStyles<typeof styles> {
  work: WorkJSON;
}

class WorkCard extends React.Component<Props> {
  render() {
    const { classes, work } = this.props;

    return (
      <div className={classes.root} style={{ background: work.color }}>
        <div className={classes.overlay}>
          <div className={classes.details}>
            <Typography variant="body1" align="left">{`${work.date.start} - ${work.date.end || "current"}`}</Typography>
            <Typography variant="h3" align="left">{work.role.toUpperCase()}</Typography>
            <Typography variant="body1" align="left">{work.employer}</Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(WorkCard);
