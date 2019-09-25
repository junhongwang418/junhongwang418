import React from "react";
import {createStyles, Theme, WithStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import {fade} from "@material-ui/core/styles";

const styles = (theme: Theme) => createStyles({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    alignContent: "center"
  },
  font: {
    fontWeight: "bold",
    lineHeight: "3rem"
  },
  link: {
    color: theme.palette.background.default,
    textDecoration: "none",
    textShadow: `-1px -1px 0 ${theme.palette.text.primary}, 1px -1px 0 ${theme.palette.text.primary}, -1px 1px 0 ${theme.palette.text.primary}, 1px 1px 0 ${theme.palette.text.primary}`,
    transition: "color 0.5s ease",
    "&:hover": {
      color: theme.palette.primary.main,
      textShadow: "none",
      transition: "none",
    }
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

  content: {
    width: "100%"
  },
});

interface ContactProps extends WithStyles<typeof styles> {}

class Contact extends React.Component<ContactProps> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <div className={classes.title}>
            <Typography variant="h5">Contact</Typography>
            <div className={classes.line} />
          </div>
          <Typography className={classes.font}>
            If you want to know about me in a glance...
            <br />
            check out my <a className={classes.link} href="" target="_blank">resume</a> and <a className={classes.link} href="" target="_blank">CV</a>
            <br />
            <br />
            If you want to connect with me on SNS...
            <br />
            check out my <a className={classes.link} href="https://github.com/ioneone" target="_blank">Github</a>, <a className={classes.link} href="https://www.linkedin.com/in/junhong-wang/" target="_blank">LinkedIn</a>, and <a className={classes.link} href="https://www.instagram.com/toshihiro_wan/" target="_blank">Instagram</a>
            <br />
            <br />
            If you have any question...
            <br />
            hit me up on my <a className={classes.link} href="mailto:ionejunhong@gmail.com">email</a>
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
