import * as React from "react";
import List from "./List";
import ProjectListItem from "./ProjectListItem";

const ProjectList = () => {
  return (
    <List spacing={36}>
      <ProjectListItem
        name="Tycoon"
        logoUrl="https://github.com/ioneone/tycoon/raw/main/res/favicon.png"
        shortDescription="Real-time multiplayer card game"
        demoUrl="https://ioneone-tycoon.herokuapp.com/"
      />
      <ProjectListItem
        name="Museum 3D"
        logoUrl="https://github.com/ioneone/museum-3d/blob/master/icon.png?raw=true"
        shortDescription="Virtual museum explorer"
        demoUrl="https://intro-graphics-master.github.io/term-project-8/"
      />
    </List>
  );
};

export default ProjectList;
