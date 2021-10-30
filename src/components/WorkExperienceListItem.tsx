import * as React from "react";
import ListItem from "./ListItem";
import Link from "./Link";
import RouterLink from "./RouterLink";

interface BlockProps {
  jobTitle: string;
  markdown: string;
  employer: string;
  employerUrl: string;
  employerLogoUrl: string;
  duration: string;
  location: string;
}

const WorkExperienceListItem: React.FunctionComponent<BlockProps> = (props) => {
  const {
    jobTitle,
    markdown,
    employer,
    employerUrl,
    employerLogoUrl,
    duration,
    location,
  } = props;
  return (
    <ListItem
      imgUrl={employerLogoUrl}
      title={<RouterLink to={`/md/${markdown}`}>{jobTitle}</RouterLink>}
      subtitle={
        <>
          <Link href={employerUrl}>{employer}</Link> · {duration} · {location}
        </>
      }
    />
  );
};

export default WorkExperienceListItem;
