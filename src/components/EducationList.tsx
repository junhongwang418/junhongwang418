import * as React from "react";
import List from "./List";
import EducationListItem from "./EducationListItem";
import { StaticImage } from "gatsby-plugin-image";

const EducationList = () => {
  return (
    <List spacing={36}>
      <EducationListItem
        university="University of California, Los Angeles."
        universityUrl="https://www.ucla.edu/"
        image={
          <StaticImage
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/ucla-logo.jpeg"
            width={64}
            height={64}
            quality={95}
            alt="appfolio-logo"
          />
        }
        degree="Bachelor of Science"
        major="Computer Science"
        graduationYear={2021}
        graduationMonth="March"
      />
      <EducationListItem
        university="Berkeley City College"
        universityUrl="https://www.berkeleycitycollege.edu/"
        image={
          <StaticImage
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/bcc-logo.png"
            width={64}
            height={64}
            quality={95}
            alt="appfolio-logo"
          />
        }
        degree="Associate of Science"
        major="Mathematics"
        graduationYear={2018}
        graduationMonth="May"
      />
    </List>
  );
};

export default EducationList;
