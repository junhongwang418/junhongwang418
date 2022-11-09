import * as React from "react";
import styled from "@emotion/styled";
import Spacing from "./Spacing";
import { Link } from "gatsby";
import ThemeToggle from "./ThemeToggle";
import { Link as MuiLink, Typography } from "@mui/material";

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavigationRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavigationLeft = styled.div`
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
  return (
    <Root>
      <NavigationLeft>
        <Typography variant="h4">
          <StyledLink to="/">JW</StyledLink>
        </Typography>
        <Spacing width={32} />
        <ThemeToggle />
      </NavigationLeft>
      <NavigationRight>
        <Typography>
          <StyledLink to="/blog">✏️ Blog</StyledLink>
        </Typography>
        <Spacing width={32} />
        <Typography>
          <StyledMuiLink href="resume.pdf" target="_blank" rel="noopener">
            💼 Resume
          </StyledMuiLink>
        </Typography>
      </NavigationRight>
    </Root>
  );
};

export default Header;
