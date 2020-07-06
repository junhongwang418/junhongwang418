import React from "react";
import {createStyles, Theme, WithStyles, Link} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import profileImage from "../images/profile.png";
import Grid from '@material-ui/core/Grid';
import { fade } from '@material-ui/core/styles/colorManipulator';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';

const styles = (theme: Theme) => createStyles({
  root: {
    display: "flex",
    alignItems: "center",
    alignContent: "center"
  },

  profile: {
    maxWidth: "80%",
    borderRadius: "50%"
  },

  center: {
    textAlign: "center",
  },

  title: {
    display: "flex",
    alignItems: "center"
  },

  line: {
    height: 1,
    flexGrow: 1,
    marginRight: "28%",
    marginLeft: "1rem",
    backgroundColor: fade(theme.palette.text.primary, 0.28)
  },

  description: {
    lineHeight: "2rem"
  },

  icon: {
    marginRight: theme.spacing(1)
  },

  inlineLink: {
    marginLeft: theme.spacing(0.6),
    marginRight: theme.spacing(0.6),
    verticalAlign: "middle"
  }

});

interface AboutProps extends WithStyles<typeof styles> {}

class About extends React.Component<AboutProps> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container alignItems="center" spacing={8}>
          <Grid item xs={12} className={classes.title}>
            <EmojiEmotionsOutlinedIcon className={classes.icon} />
            <Typography variant="h5">
              About Me
            </Typography>
            <div className={classes.line} />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className={classes.center}>
              <img className={classes.profile} src={profileImage} alt="profile" />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Typography className={classes.description} variant="body1">
              Hey! I'm Junhong, a senior year undergraduate student at UCLA 
              studying computer science. 
              <br />
              <br />
              I enjoy building web-based applications. Currently I'm developing
              <Link
                className={classes.inlineLink}
                rel="noopener"
                href="https://ioneone.github.io/platformer"
                target="_blank"
              >
                Platformer
              </Link> 
              (2D action side scrolling game) and 
              <Link
                className={classes.inlineLink}
                rel="noopener"
                href="https://ioneone.github.io/jmusic"
                target="_blank"
              >
                Jmusic
              </Link> 
              (youtube repeater). 
              <br />
              <br />
              On the weekends, I'm a game developer and writer. I write 
              <Link
                className={classes.inlineLink}
                rel="noopener"
                href="https://medium.com/better-programming/getting-started-with-graphql-5cd8e7c66909?source=friends_link&sk=1ca5c58e69b339b4736f258bb9ba850f"
                target="_blank"
              >
                tutorials
              </Link> for various Computer Science topics.
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(About);
