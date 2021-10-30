import * as React from "react";
import styled from "@emotion/styled";

interface RootProps {
  width?: number;
  height?: number;
}

const Root = styled.div<RootProps>`
  width: ${(props) => props.width || 0}px;
  height: ${(props) => props.height || 0}px;
`;

type SpacingProps = RootProps;

const Spacing: React.FunctionComponent<SpacingProps> = (props) => {
  const { width, height } = props;
  return <Root width={width} height={height} />;
};

export default Spacing;
