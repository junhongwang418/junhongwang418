import * as React from "react";
import Link from "./Link";
import ListItem from "./ListItem";

interface EducationBlockProps {
  university: string;
  universityUrl: string;
  image: React.ReactNode;
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
    image,
    degree,
    major,
    graduationYear,
    graduationMonth,
  } = props;
  return (
    <ListItem
      image={image}
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
