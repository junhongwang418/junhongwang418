import * as React from "react";
import List from "./List";
import ProjectListItem from "./ProjectListItem";

const ProjectList = () => {
  return (
    <List spacing={36}>
      <ProjectListItem
        name="KaiSho"
        logoUrl="https://github.com/ioneone/ioneone.github.io/blob/master/public/kaisho-logo.svg?raw=true"
        shortDescription="A web server for my dad's restaurant."
        demoUrl="https://kaisho.co/"
      />
      <ProjectListItem
        name="Tycoon"
        logoUrl="https://github.com/ioneone/tycoon/raw/main/res/favicon.png"
        shortDescription="Real-time multiplayer card game"
        demoUrl="https://github.com/ioneone/tycoon"
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
