import * as React from "react";
import styled from "@emotion/styled";
import Spacing from "./Spacing";
import { Link } from "gatsby";
import ThemeToggle from "./ThemeToggle";
import {
  Box,
  Drawer,
  Grid,
  Link as MuiLink,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SiteContext from "../contexts/SiteContext";

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.palette.text.primary};
`;

const StyledMuiLink = styled(MuiLink)`
  text-decoration: none;
  color: ${(props) => props.theme.palette.text.primary};
`;

const Header = () => {
  const siteContext = React.useContext(SiteContext);

  return (
    <Root>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Typography variant="h4">
                <StyledLink to="/">JW</StyledLink>
              </Typography>
            </Grid>
            <Grid item sx={{ display: { xs: "none", md: "block" } }}>
              <ThemeToggle />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item sx={{ display: { xs: "none", md: "block" } }}>
              <Typography>
                <StyledLink to="/blog">✏️ Blog</StyledLink>
              </Typography>
            </Grid>
            <Grid item sx={{ display: { xs: "none", md: "block" } }}>
              <Typography>
                <StyledMuiLink href="resume.pdf" target="_blank" rel="noopener">
                  💼 Resume
                </StyledMuiLink>
              </Typography>
            </Grid>
            <Grid item sx={{ display: { xs: "block", md: "none" } }}>
              <MenuIcon fontSize="large" onClick={siteContext.toggleDrawer} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Root>
  );
};

export default Header;
