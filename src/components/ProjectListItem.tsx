import * as React from "react";
import Link from "./Link";
import ListItem from "./ListItem";

interface ProjectBlockProps {
  name: string;
  shortDescription: string;
  logoUrl: string;
  demoUrl: string;
}

const ProjectListItem: React.FunctionComponent<ProjectBlockProps> = (props) => {
  const { name, shortDescription, logoUrl, demoUrl } = props;
  return (
    <ListItem
      imgUrl={logoUrl}
      title={
        <Link href={demoUrl} target="_blank" rel="noopener">
          {name}
        </Link>
      }
      subtitle={shortDescription}
    />
  );
};

export default ProjectListItem;
