import * as React from "react";
import ProjectList from "./ProjectList";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Root = styled.div``;

const ProjectsSection = () => {
  return (
    <Root>
      <Typography variant="h5" align="center">
        Projects
      </Typography>
      <Box sx={{ mb: 4 }} />
      <ProjectList />
    </Root>
  );
};

export default ProjectsSection;
