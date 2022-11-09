import * as React from "react";
import EducationList from "./EducationList";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Root = styled.div``;

const EducationSection = () => {
  return (
    <Root>
      <Typography variant="h5" align="center">
        Education
      </Typography>
      <Box sx={{ mb: 4 }} />
      <EducationList />
    </Root>
  );
};

export default EducationSection;
