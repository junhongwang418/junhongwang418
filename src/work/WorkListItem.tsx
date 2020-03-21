import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import {WorkJSON} from "../api/APIManager";
import {Link, Theme} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router";

const useStyles = makeStyles((theme: Theme) => ({

  chipContainer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },

  chip: {
    marginRight: theme.spacing(1)
  }
}));

type WorkListItemProps = {
  work: WorkJSON
}

const WorkListItem = (props: WorkListItemProps) => {

  const { work } = props;
  const classes = useStyles();
  const history = useHistory();

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="logo" src={work.image} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <React.Fragment>
            {work.role}{" "}
            <Link href={work.link} target="_blank">
              @{" "}{work.employer}
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
            <div className={classes.chipContainer}>
              {
                work.tools.map(tool => (
                  <Chip className={classes.chip} size="small" label={tool} variant="outlined" />
                ))
              }
            </div>
            {
              work.id &&
              <Button
                onClick={() => history.push({ pathname: `/md/${work.id}`, state: window.scrollY })}
                size="small"
                color="primary"
              >
                view case study >
              </Button>
            }
          </React.Fragment>
        }
      />
    </ListItem>
  );

};

export default WorkListItem;
