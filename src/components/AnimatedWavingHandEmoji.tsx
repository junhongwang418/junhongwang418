import * as React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const waveAnimation = keyframes`
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
`;

const Root = styled.span`
  animation-name: ${waveAnimation};
  animation-duration: 2.5s;
  transform-origin: 70% 70%;
  animation-iteration-count: infinite;
  display: inline-block;
`;

const AnimatedWavingHandEmoji = () => {
  return <Root>👋</Root>;
};

export default AnimatedWavingHandEmoji;
