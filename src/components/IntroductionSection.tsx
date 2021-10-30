import * as React from "react";
import styled from "@emotion/styled";
import AnimatedWavingHandEmoji from "./AnimatedWavingHandEmoji";
import Spacing from "./Spacing";

const Root = styled.div``;

const Title = styled.div`
  font-size: 64px;
  text-align: center;
  color: ${(props) => props.theme.color.blue};
`;

const Subtitle = styled.div`
  font-size: 24px;
  color: ${(props) => props.theme.color.comment};
  margin: 0 auto;
`;

const Name = styled.span`
  color: ${(props) => props.theme.color.pink};
`;

const JobTitle = styled.span`
  color: ${(props) => props.theme.color.purple};
`;

const IntroductionSection = () => {
  return (
    <Root>
      <Title>
        Hello there <AnimatedWavingHandEmoji />
      </Title>
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
