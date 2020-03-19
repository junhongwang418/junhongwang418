import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import {WorkJSON} from "../api/APIManager";
import {Link} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
  link: {
    "&:hover": {
      textDecoration: "none"
    }
  },
  linkBlock: {
    display: "block",
    "&:hover": {
      textDecoration: "none"
    }
  }
});

type WorkListItemProps = {
  work: WorkJSON
}

const WorkListItem = (props: WorkListItemProps) => {

  const { work } = props;
  const classes = useStyles();

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="logo" src={work.image} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <React.Fragment>
            {work.role}
            <Link className={classes.link} href={work.link} target="_blank">
              {" "}@{" "}{work.employer}
            </Link>
            <Typography
              display="block"
              variant="overline"
            >
              {work.date.start} - {work.date.end}
            </Typography>
          </React.Fragment>
        }
        secondary={
          <React.Fragment>
            {work.description}
            {
              work.tools.length &&
              <div>
                {
                  work.tools.map(tool => (
                    <Chip size="small" label={tool} variant="outlined" />
                  ))
                }
              </div>
            }
            {
              work.url &&
              <Link className={classes.linkBlock} href={work.url} target="_blank">
                view case study >
              </Link>
            }
          </React.Fragment>
        }
      />
    </ListItem>
  );

};

export default WorkListItem;
