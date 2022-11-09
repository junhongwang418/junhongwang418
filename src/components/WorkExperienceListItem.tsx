import * as React from "react";
import ListItem from "./ListItem";
import { Link } from "gatsby";
import { Link as MuiLink } from "@mui/material";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.palette.text.primary};
`;

const StyledMuiLink = styled(MuiLink)`
  text-decoration: none;
  color: ${(props) => props.theme.palette.text.primary};
`;

interface BlockProps {
  jobTitle: string;
  markdown: string;
  employer: string;
  employerUrl: string;
  duration: string;
  location: string;
  image: React.ReactNode;
}

const WorkExperienceListItem: React.FunctionComponent<BlockProps> = (props) => {
  const {
    jobTitle,
    markdown,
    employer,
    employerUrl,
    duration,
    location,
    image,
  } = props;
  return (
    <ListItem
      image={image}
      title={<StyledLink to={markdown}>{jobTitle}</StyledLink>}
      subtitle={
        <>
          <StyledMuiLink href={employerUrl}>{employer}</StyledMuiLink> ·{" "}
          {duration} · {location}
        </>
      }
    />
  );
};

export default WorkExperienceListItem;
