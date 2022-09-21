import * as React from "react";
import Link from "./Link";
import ListItem from "./ListItem";

interface EducationBlockProps {
  university: string;
  universityUrl: string;
  universityLogoUrl: string;
  degree: string;
  major: string;
  graduationYear: number;
  graduationMonth: string;
}

const EducationListItem: React.FunctionComponent<EducationBlockProps> = (
  props
) => {
  const {
    university,
    universityUrl,
    universityLogoUrl,
    degree,
    major,
    graduationYear,
    graduationMonth,
  } = props;
  return (
    <ListItem
      imgUrl={universityLogoUrl}
      title={
        <Link href={universityUrl} target="_blank" rel="noopener">
          {university}
        </Link>
      }
      subtitle={`${degree} in ${major}. ${graduationMonth} ${graduationYear}.`}
    />
  );
};

export default EducationListItem;
