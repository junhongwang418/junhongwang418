import * as React from "react";
import styled from "@emotion/styled";
import Spacing from "./Spacing";

const Root = styled.div``;

const Title = styled.div`
  font-size: 24px;
  text-align: center;
  text-decoration: underline;
`;

type SectionProps = React.PropsWithChildren<{
  title: string;
}>;

const Section: React.FunctionComponent<SectionProps> = (props) => {
  const { title, children } = props;
  return (
    <Root>
      <Title>{title}</Title>
      <Spacing height={64} />
      {children}
    </Root>
  );
};

export default Section;
