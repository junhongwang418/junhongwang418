import * as React from "react";
import styled from "@emotion/styled";
import AnimatedWavingHandEmoji from "./AnimatedWavingHandEmoji";
import Spacing from "./Spacing";
import { Typography } from "@mui/material";

const Root = styled.div``;

const IntroductionSection = () => {
  return (
    <Root>
      <Typography variant="h2" color="primary">
        Hello there <AnimatedWavingHandEmoji />
      </Typography>
      <Spacing height={64} />
      <Typography variant="h5">
        I'm Junhong. I'm a Software Engineer based in LA. I specialize in full
        stack web development and writing readable code.
      </Typography>
    </Root>
  );
};

export default IntroductionSection;
