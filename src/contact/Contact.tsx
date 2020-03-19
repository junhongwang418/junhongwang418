import React from "react";
import {createStyles, Theme, WithStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import {fade} from "@material-ui/core/styles";
import SvgIcon from '@material-ui/core/SvgIcon';
import Link from '@material-ui/core/Link';

const styles = (theme: Theme) => createStyles({
  root: {
    height: theme.spacing(12),
    display: "flex",
    alignItems: "center",
    alignContent: "center"
  },
  font: {
    fontWeight: "bold",
    lineHeight: "3rem"
  },
  link: {
    color: "inherit"
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
    width: "100%",
    textAlign: "center"
  },

  icon: {
    padding: "0.2rem",
    transform: "rotate(45deg)",
    border: `1px solid ${theme.palette.text.primary}`,
    margin: "0.6rem",
    "&:hover": {
      cursor: "pointer",
      border: `1px solid ${theme.palette.primary.main}`,
      "& path": {
        fill: theme.palette.primary.main
      }
    },
    transition: "border 0.2s ease"
  },

  path: {
    transform: "rotate(-45deg)",
    transformOrigin: "50% 50%",
    transition: "fill 0.2s ease"
  }

});

interface ContactProps extends WithStyles<typeof styles> {}

class Contact extends React.Component<ContactProps> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <div>
            <Link rel="noopener" href="https://www.linkedin.com/in/junhong-wang/" target="_blank" className={classes.link}>
              <SvgIcon className={classes.icon}>
                <path className={classes.path} d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
              </SvgIcon>
            </Link>
            <Link rel="noopener" href="https://www.instagram.com/toshihiro_wan/" target="_blank" className={classes.link}>
              <SvgIcon className={classes.icon}>
                <path className={classes.path} d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
              </SvgIcon>
            </Link>
            <Link rel="noopener" href="https://github.com/ioneone" target="_blank" className={classes.link}>
              <SvgIcon className={classes.icon}>
                <path className={classes.path} d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </SvgIcon>
            </Link>
          </div>
          <Typography variant="caption">Design & Code by Junhong Wang ©︎ 2019</Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
