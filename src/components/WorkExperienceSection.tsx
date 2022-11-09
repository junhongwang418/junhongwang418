import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import * as React from "react";
import WorkExperienceList from "./WorkExperienceList";

const Root = styled.div``;

const WorkExperienceSection = () => {
  return (
    <Root>
      <Typography variant="h5" align="center">
        Work Experience
      </Typography>
      <Box sx={{ mb: 4 }} />
      <WorkExperienceList />
    </Root>
  );
};

export default WorkExperienceSection;
