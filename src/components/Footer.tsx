import * as React from "react";
import styled from "@emotion/styled";
import Spacing from "./Spacing";
import Link from "./Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Root = styled.div`
  text-align: center;
`;

const Copyright = styled.div`
  font-size: 14px;
`;

const IconList = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <Root>
      <IconList>
        <Link href="mailto:ionejunhong@gmail.com">
          <EmailIcon />
        </Link>
        <Spacing width={16} />
        <Link href="https://github.com/ioneone">
          <GitHubIcon />
        </Link>
        <Spacing width={16} />
        <Link href="https://www.linkedin.com/in/junhongwang/">
          <LinkedInIcon />
        </Link>
      </IconList>
      <Spacing height={16} />
      <Copyright>{`© Junhong Wang ${year}`}</Copyright>
    </Root>
  );
};

export default Footer;
