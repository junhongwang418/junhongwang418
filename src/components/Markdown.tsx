import * as React from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import marked from "marked";

const Root = styled.div`
  a {
    color: inherit;
    :hover {
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
    padding: 0 1em;
  }
`;

const Body = styled.div``;

const Markdown = () => {
  const params = useParams<{ id: string }>();
  const { filename } = params;

  const [rawString, setRawString] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch(`/public/${filename}.md`)
      .then((res) => res.text())
      .then((data) => setRawString(data));
  }, [filename]);

  if (rawString == null) {
    return <Root>Loading...</Root>;
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
