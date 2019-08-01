import React from "react";
import {createStyles, Theme, WithStyles, WithTheme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import APIManager, {WorkJSON} from "../api/APIManager";
import WorkCard from "./WorkCard";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import withTheme from "@material-ui/core/styles/withTheme";

const styles = (theme: Theme) => createStyles({
  root: {
    position: "relative",
    top: "50%",
    transform: `translateY(-50%)`,
    flexGrow: 1,
    display: "flex"
  },

  tab: {
    borderRight: `1px solid ${theme.palette.divider}`
  }

});

interface Props extends WithStyles<typeof styles>{}

interface State {
  works: WorkJSON[];
  currentTab: number;
}

class Work extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      works: [],
      currentTab: 0
    };
  }

  componentDidMount(): void {
    this.setState({ works: APIManager.getAllWorks() });
  }

  private handleChange = (e: React.ChangeEvent<{}>, value: number) => {
    this.setState({ currentTab: value });
  };

  render() {
    const { classes } = this.props;
    const { works, currentTab } = this.state;
    return (
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          onChange={this.handleChange}
          value={currentTab}
          indicatorColor="primary"
          textColor="primary"
        >
          {works.map(work => <Tab className={classes.tab} label={work.employer} href="" />)}
        </Tabs>
        {works.map((work, index) => <WorkCard work={work} value={currentTab} index={index} />)}
      </div>
    );
  }
}

export default withStyles(styles)(Work);
