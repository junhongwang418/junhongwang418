import * as React from "react";
import ListItem from "./ListItem";
import Link from "./Link";
import RouterLink from "./RouterLink";

interface BlockProps {
  jobTitle: string;
  postId: number;
  employer: string;
  employerUrl: string;
  employerLogoUrl: string;
  duration: string;
  location: string;
}

const WorkExperienceListItem: React.FunctionComponent<BlockProps> = (props) => {
  const {
    jobTitle,
    postId,
    employer,
    employerUrl,
    employerLogoUrl,
    duration,
    location,
  } = props;
  return (
    <ListItem
      imgUrl={employerLogoUrl}
      title={<RouterLink to={`/posts/${postId}`}>{jobTitle}</RouterLink>}
      subtitle={
        <>
          <Link href={employerUrl}>{employer}</Link> · {duration} · {location}
        </>
      }
    />
  );
};

export default WorkExperienceListItem;
