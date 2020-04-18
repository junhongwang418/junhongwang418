import React, {useEffect, useState} from "react";
import {useHistory, useLocation, useParams} from "react-router";
import {Button, Theme} from "@material-ui/core";
import ReactMarkdown from "react-markdown/with-html";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Contact from "./contact/Contact";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar/AppBar";
import ThemeToggle from "./theme/ThemeToggle";
import {HashLink} from 'react-router-hash-link';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    boxShadow: "none"
  },

  container: {
    paddingTop: theme.spacing(4)
  },

  anchorContainer: {
    display: "flex"
  },

  anchorLink: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1)
  },

  md: {
    "& img": {
      width: "100%"
    },
    "& a": {
      color: theme.palette.primary.main
    },
    "& video": {
      width: "100%"
    },
    "& iframe": {
      width: "100%"
    }
  }
}));

/**
 * https://github.com/rexxars/react-markdown/issues/69
 */
// @ts-ignore
function flatten(text: any, child: any) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

function HeadingRenderer(props: any) {
  var children = React.Children.toArray(props.children);
  var text = children.reduce(flatten, '');
  var slug = text.toLowerCase().replace(/\W/g, '-');
  return React.createElement('h' + props.level, {id: slug}, props.children);
}

const LinkRenderer = (props: any) => {
  const { href, children } = props;

  const classes = useStyles();

  if (href.startsWith("#")) {

    return (
      <div className={classes.anchorContainer}>
        <HashLink className={classes.anchorLink} to={href}>
          <LinkIcon fontSize="small" />
        </HashLink>
        {children}
      </div>
    )
  }

  return React.createElement('a', props, props.children);
};

const Markdown = () => {
  const params = useParams<{ id: string }>();
  const location = useLocation();
  const history = useHistory();
  const [markdown, setMarkdown] = useState<string>("");
  const [backLocation, setBackLocation] = useState(null);

  const classes = useStyles();

  useEffect(() => {

    const url = `https://raw.githubusercontent.com/ioneone/ioneone.github.io/develop/src/markdowns/${params.id}/${params.id}.md`;
    fetch(url)
      .then(res => res.text())
      .then(text => setMarkdown(text));

    // @ts-ignore
    if (location.state) setBackLocation(location.state);

  }, [location.state, params.id]);

  return (
    <div>
      <AppBar
        color="transparent"
        className={classes.appBar}
      >
        <Toolbar>
          <Button onClick={() => history.push({ pathname: "/", state: backLocation })}>
            {"← back"}
          </Button>
          <ThemeToggle />
        </Toolbar>
      </AppBar>
      <Container className={classes.container} maxWidth="sm">
        <Typography>
          <ReactMarkdown
            className={classes.md}
            source={markdown}
            escapeHtml={false}
            renderers={{ heading: HeadingRenderer, link: LinkRenderer }}
          />
        </Typography>
      </Container>
      <Contact />
    </div>
  );
};

export default Markdown;
