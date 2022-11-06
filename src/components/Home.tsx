import * as React from "react";
import styled from "@emotion/styled";
import Spacing from "./Spacing";
import IntroductionSection from "./IntroductionSection";
import WorkExperienceSection from "./WorkExperienceSection";
import ProjectsSection from "./ProjectsSection";
import EducationSection from "./EducationSection";
import { Container } from "@mui/material";

const Root = styled.div``;

const Home = () => {
  return (
    <Root>
      <IntroductionSection />
      <Spacing height={256} />
      <Container maxWidth="md">
        <WorkExperienceSection />
        <Spacing height={128} />
        <ProjectsSection />
        <Spacing height={128} />
        <EducationSection />
      </Container>
    </Root>
  );
};

export default Home;
