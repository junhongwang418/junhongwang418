import * as React from "react";
import simpleIcons from "simple-icons";
import styled from "@emotion/styled";

interface SVGProps {
  size: number;
}

const SVG = styled.svg<SVGProps>`
  fill: ${(props) => props.theme.color.body};
  width: ${(props) => props.size}px;
`;

type SimpleIconProps = {
  slug: string;
} & SVGProps;

const SimpleIcon: React.FunctionComponent<SimpleIconProps> = (props) => {
  const { size, slug } = props;
  const icon = simpleIcons.get(slug);
  const { path } = icon;
  return (
    <SVG viewBox="0 0 24 24" size={size}>
      <path d={path} />
    </SVG>
  );
};

export default SimpleIcon;
