import React from "react"
import {createStyles, Theme, Typography, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import {fade} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";

const styles = (theme: Theme) => createStyles({
  root: {
    minHeight: "72vh",
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
});

interface Props extends WithStyles<typeof styles>{

}

interface State {

}

class Publication extends React.Component<Props, State> {

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <div className={classes.title}>
            <Typography variant="h5">Publication</Typography>
            <div className={classes.line} />
          </div>
          <List
            subheader={<ListSubheader>Getting Started with GraphQL</ListSubheader>}
          >
            <ListItem button>
              <Link href="https://medium.com/@ionejunhong/getting-started-with-graphql-a1cc7951ef39?source=friends_link&sk=4785daf7f0bc80f7d25150f3a903932d" underline="none" target="_blank">
                <ListItemText primary="Part 1: Introduction" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link href="https://medium.com/better-programming/getting-started-with-graphql-5cd8e7c66909?source=friends_link&sk=1ca5c58e69b339b4736f258bb9ba850f" underline="none" target="_blank">
                <ListItemText primary="Part 2: Front end" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link href="https://medium.com/@ionejunhong/getting-started-with-graphql-54bfa51a848f?source=friends_link&sk=f48adbca4d28f422a73060fef671dc55" underline="none" target="_blank">
                <ListItemText primary="Part 3: Back end" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link href="https://medium.com/@ionejunhong/getting-started-with-graphql-a281b14a560d?source=friends_link&sk=065e2e6473674e6203a4bdb35fedd77e" underline="none" target="_blank">
                <ListItemText primary="Part 4: Basic Features" />
              </Link>
            </ListItem>
          </List>
        </div>
      </div>
    );
  }

}

export default withStyles(styles)(Publication);
