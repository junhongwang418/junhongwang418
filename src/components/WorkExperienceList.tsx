import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import List from "./List";
import WorkExperienceListItem from "./WorkExperienceListItem";

const WorkExperienceList = () => {
  const data = useStaticQuery(graphql`
    query GetWorkExperienceImages {
      appfolioLogo: file(relativePath: { eq: "appfolio-logo.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 64, height: 64)
        }
      }

      riskSciencesLogo: file(relativePath: { eq: "risksciences-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 64, height: 64)
        }
      }

      teamLabLogo: file(relativePath: { eq: "teamlab-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 64, height: 64)
        }
      }

      maruMeLogo: file(relativePath: { eq: "marume-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 64, height: 64)
        }
      }
    }
  `);

  return (
    <List spacing={36}>
      <WorkExperienceListItem
        jobTitle="Software Engineer II"
        markdown="software-engineer-II-at-appfolio"
        employer="AppFolio, Inc"
        employerUrl="https://www.appfolio.com/"
        image={
          <StaticImage
            layout="fixed"
            src="../images/appfolio-logo.jpeg"
            width={64}
            height={64}
            alt="appfolio-logo"
          />
        }
        duration="Aug 2022 - Present"
        location="Los Angeles, CA."
      />
      <WorkExperienceListItem
        jobTitle="Software Engineer"
        markdown="software-engineer-at-appfolio"
        employer="AppFolio, Inc"
        employerUrl="https://www.appfolio.com/"
        image={
          <StaticImage
            layout="fixed"
            src="../images/appfolio-logo.jpeg"
            width={64}
            height={64}
            alt="appfolio-logo"
          />
        }
        duration="May 2021 - Aug 2022"
        location="Los Angeles, CA."
      />
      <WorkExperienceListItem
        jobTitle="Software Engineer Intern"
        markdown="software-engineer-intern-at-appfolio"
        employer="AppFolio, Inc"
        employerUrl="https://www.appfolio.com/"
        image={
          <StaticImage
            layout="fixed"
            src="../images/appfolio-logo.jpeg"
            width={64}
            height={64}
            alt="appfolio-logo"
          />
        }
        duration="Jun 2020 - Sep 2020"
        location="Los Angeles, CA."
      />
      <WorkExperienceListItem
        jobTitle="Software Developer Intern"
        markdown="software-developer-intern-at-girs"
        employer="The B. John Garrick Institute for the Risk Sciences"
        employerUrl="https://www.risksciences.ucla.edu/"
        image={
          <StaticImage
            layout="fixed"
            src="../images/risksciences-logo.png"
            width={64}
            height={64}
            alt="risksciences-logo"
          />
        }
        duration="Jun 2019 - Sep 2019"
        location="Los Angeles, CA."
      />
      <WorkExperienceListItem
        jobTitle="iOS App Developer Intern"
        markdown="ios-app-developer-intern-at-teamlab"
        employer="TeamLab"
        employerUrl="https://www.teamlab.art/"
        image={
          <StaticImage
            layout="fixed"
            src="../images/teamlab-logo.png"
            width={64}
            height={64}
            alt="appfolio-logo"
          />
        }
        duration="Jul 2018 - Sep 2018"
        location="Tokyo, Japan."
      />
      <WorkExperienceListItem
        jobTitle="iOS App Developer Intern"
        markdown="ios-app-developer-intern-at-marume"
        employer="MaruMe"
        employerUrl="https://www.linkedin.com/company/maru-me/about/"
        image={
          <StaticImage
            layout="fixed"
            src="../images/marume-logo.png"
            width={64}
            height={64}
            alt="appfolio-logo"
          />
        }
        duration="Jun 2016 - Aug 2016"
        location="Berkeley, CA."
      />
    </List>
  );
};

export default WorkExperienceList;
