import * as React from "react";
import styled from "@emotion/styled";
import Link from "./Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Box, Grid, Typography } from "@mui/material";

const Root = styled.div``;

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <Root>
      <Grid container justifyContent="center" spacing={6}>
        <Grid item>
          <Link href="mailto:ionejunhong@gmail.com">
            <EmailIcon />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://github.com/ioneone">
            <GitHubIcon />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.linkedin.com/in/junhongwang/">
            <LinkedInIcon />
          </Link>
        </Grid>
      </Grid>
      <Box sx={{ mb: 4 }} />
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="caption">{`© Junhong Wang ${year}`}</Typography>
      </Box>
    </Root>
  );
};

export default Footer;
