import * as React from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import marked from "marked";

const Root = styled.div`
  a {
    color: inherit;
    :hover {
      color: ${(props) => props.theme.color.blue};
    }
  }
  img {
    max-width: 100%;
    max-height: 512px;
    margin: 0 auto;
    display: block;
  }
  iframe {
    width: 100%;
    height: 420px;
  }
  blockquote {
    margin-inline-start: 0;
    margin-inline-end: 0;
    border-left: 0.25em solid ${(props) => props.theme.color.comment};
    color: ${(props) => props.theme.color.comment};
    padding: 0 1em;
  }
`;

const Body = styled.div``;

interface MarkdownProps {
}

const Markdown = () => {
  
const params = useParams<{ id: string }>();
  const { filename } = params;

  const [rawString, setRawString] = React.useState<string | null>(null)

    React.useEffect(() => {
        fetch(`/${filename}.md`)
        .then(res => res.text())
        .then(data => setRawString(data))
    }, [filename])

    console.log(filename, rawString)

    if (rawString == null) {
        return <Root>Loading...</Root>
    }

  return (
    <Root>
      <Body
        dangerouslySetInnerHTML={{
          __html: marked(rawString),
        }}
      />
    </Root>
  );
};

export default Markdown;
