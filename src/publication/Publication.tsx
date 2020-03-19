import React, {useEffect, useState} from "react"
import {createStyles, Theme, Typography} from "@material-ui/core";
import {fade} from "@material-ui/core/styles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import APIManager, {PublicationJSON} from "../api/APIManager";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import LinkIcon from '@material-ui/icons/Link';
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginTop: theme.spacing(8),
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
  tableContainer: {
    maxHeight: 256,
  },

  linkCell: {
    width: "1rem"
  }
}));

const Publication = () => {

  const classes = useStyles();

  const [publications, setPublications] = useState<PublicationJSON[]>([]);

  useEffect(() => {
    setPublications(APIManager.getAllPublications());
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.title}>
          <Typography variant="h5">Publication</Typography>
          <div className={classes.line} />
        </div>
        {
          publications.map(publication => (
            <Paper>
              <TableContainer className={classes.tableContainer}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        {publication.title} ({publication.episodes.length} episodes)
                      </TableCell>
                      <TableCell className={classes.linkCell}>
                        Link
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      publication.episodes.map(episode => (
                        <TableRow>
                          <TableCell key={episode.title}>
                            {episode.title}
                          </TableCell>
                          <TableCell className={classes.linkCell}>
                            <Link href={episode.link} target="_blank">
                              <LinkIcon />
                            </Link>
                          </TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          ))
        }
      </div>
    </div>
  );

};

export default Publication;
