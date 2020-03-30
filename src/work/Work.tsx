import React from "react";
import {createStyles, Theme, WithStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import APIManager, {WorkJSON} from "../api/APIManager";
import {fade} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import WorkListItem from "./WorkListItem";
import Emoji from "../Emoji";

const styles = (theme: Theme) => createStyles({
  root: {
    display: "flex",
    alignItems: "center",
    alignContent: "center"
  },

  content: {
    width: "100%"
  },

  line: {
    height: 1,
    flexGrow: 1,
    marginRight: "28%",
    marginLeft: "1rem",
    backgroundColor: fade(theme.palette.text.primary, 0.28)
  },

  title: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem"
  },

  tab: {
    borderRight: `1px solid ${theme.palette.text.primary}`
  },

  body: {
    display: "flex",
  },

  center: {
    textAlign: "center"
  }

});

interface Props extends WithStyles<typeof styles>{}

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
        <div className={classes.content}>
          <div className={classes.title}>
            <Typography variant="h5">
              <Emoji emoji="💪" /> Experience
            </Typography>
            <div className={classes.line} />
          </div>
          <div className={classes.body}>
            <List>
              {
                works.map(work => <WorkListItem work={work} />)
              }
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Work);
