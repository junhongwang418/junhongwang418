import * as React from "react";
import styled from "@emotion/styled";
import AnimatedWavingHandEmoji from "./AnimatedWavingHandEmoji";
import Spacing from "./Spacing";
import { Theme, Typography, useMediaQuery } from "@mui/material";

const Root = styled.div``;

const Title = styled.div`
  font-size: 64px;
  text-align: center;
`;

const Subtitle = styled.div`
  font-size: 24px;
  margin: 0 auto;
`;

const Name = styled.span``;

const JobTitle = styled.span``;

const IntroductionSection = () => {
  return (
    <Root>
      <Typography variant="h2">
        Hello there <AnimatedWavingHandEmoji />
      </Typography>
      <Spacing height={64} />
      <Subtitle>
        I'm <Name>Junhong</Name>. I'm a <JobTitle>Software Engineer</JobTitle>{" "}
        based in LA. I specialize in full stack web development and writing
        readable code.
      </Subtitle>
    </Root>
  );
};

export default IntroductionSection;
