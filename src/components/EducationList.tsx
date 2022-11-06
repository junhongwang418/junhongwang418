import * as React from "react";
import List from "./List";
import EducationListItem from "./EducationListItem";

const EducationList = () => {
  return (
    <List spacing={36}>
      <EducationListItem
        university="University of California, Los Angeles."
        universityUrl="https://www.ucla.edu/"
        universityLogoUrl="/public/ucla-logo.jpeg"
        degree="Bachelor of Science"
        major="Computer Science"
        graduationYear={2021}
        graduationMonth="March"
      />
      <EducationListItem
        university="Berkeley City College"
        universityUrl="https://www.berkeleycitycollege.edu/"
        universityLogoUrl="/public/bcc-logo.png"
        degree="Associate of Science"
        major="Mathematics"
        graduationYear={2018}
        graduationMonth="May"
      />
    </List>
  );
};

export default EducationList;
