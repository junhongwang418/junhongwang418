import * as React from "react";
import styled from "@emotion/styled";

interface RootProps {
  maxWidth: number;
}

const Root = styled.div<RootProps>`
  max-width: ${(props) => props.maxWidth}px;
  margin: 0 auto;
`;

type ContainerProps = React.PropsWithChildren<RootProps>;

const Container: React.FunctionComponent<ContainerProps> = (props) => {
  const { maxWidth, children } = props;
  return <Root maxWidth={maxWidth}>{children}</Root>;
};

export default Container;
