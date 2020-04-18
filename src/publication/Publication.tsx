import React, {useEffect, useState} from "react"
import {createStyles, Theme, Typography} from "@material-ui/core";
import {fade} from "@material-ui/core/styles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import APIManager, {PublicationJSON} from "../api/APIManager";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import {useHistory, useLocation} from "react-router";
import Button from "@material-ui/core/Button";
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: "flex",
    alignItems: "center",
    alignContent: "center"
  },
  content: {
    width: "100%"
  },
  title: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem"
  },
  line: {
    height: 1,
    flexGrow: 1,
    marginRight: "28%",
    marginLeft: "1rem",
    backgroundColor: fade(theme.palette.text.primary, 0.28)
  },

  link: {
    textDecoration: "none",
    color: theme.palette.primary.main
  },

  linkButton: {
    transform: "translateX(-5px)"
  },

  icon: {
    marginRight: theme.spacing(1)
  }

}));

const Publication = () => {

  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const [publications, setPublications] = useState<PublicationJSON[]>([]);

  useEffect(() => {
    setPublications(APIManager.getAllPublications());
  }, []);

  useEffect(() => {
    // @ts-ignore
    if (location.state) window.scrollTo({ top: location.state });

  }, [publications, location.state]);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.title}>
          <BookmarkBorderOutlinedIcon className={classes.icon} />
          <Typography variant="h5">
            Publication</Typography>
          <div className={classes.line} />
        </div>
        <List>
          {
            publications.map(publication => (
              <ListItem key={publication.id}>
                <ListItemText
                  primary={publication.title}
                  secondary={
                    <React.Fragment>
                      {publication.description}
                      <Typography variant="overline" display="block">
                        <Button
                          className={classes.linkButton}
                          onClick={() => history.push({ pathname: `/md/${publication.id}`, state: window.scrollY })}
                          size="small"
                          color="primary"
                        >
                          view case study >
                        </Button>
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            ))
          }
        </List>
      </div>
    </div>
  );

};

export default Publication;
