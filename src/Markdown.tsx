import React, {useEffect, useState} from "react";
import {useHistory, useLocation, useParams} from "react-router";
import {Button} from "@material-ui/core";
import ReactMarkdown from "react-markdown";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Markdown = () => {
  const params = useParams<{ id: string }>();
  const location = useLocation();
  const history = useHistory();
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {

    const url = `https://raw.githubusercontent.com/ioneone/ioneone.github.io/develop/src/markdowns/${params.id}/${params.id}.md`;
    fetch(url)
      .then(res => res.text())
      .then(text => setMarkdown(text));

  }, []);


  return (
    <div>
      <Button onClick={() => history.push({ pathname: "/", state: location.state })}>
        back
      </Button>
      <Container maxWidth="md">
        <Typography>
          <ReactMarkdown source={markdown} />
        </Typography>
      </Container>
    </div>
  );
};

export default Markdown;
