import React, { FunctionComponent } from "react"
import Spacing from "./Spacing"
import styled from "../styled/index"

interface BlockProps {
  title: string
  company: string
  location: string
  period: string
  description: string
  url: string
  imgUrl: string
}

const BlockRoot = styled.div`
  display: flex;
  @media (max-width: 420px) {
    display: block;
  }
`

const BlockLeft = styled.div``

const BlockRight = styled.div``

const JobTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin: 0;
`

const CompanyName = styled.div`
  font-size: 14px;
`

const Duration = styled.div`
  font-size: 14px;
`

const Location = styled.div`
  font-size: 14px;
`

const JobDescription = styled.div``

const Link = styled.a`
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
  font-weight: bold;
`

const CompanyLogo = styled.img`
  width: 64px;
  height: 64px;
`

const Block: FunctionComponent<BlockProps> = props => {
  const { title, company, location, period, description, url, imgUrl } = props

  return (
    <BlockRoot>
      <BlockLeft>
        <CompanyLogo src={imgUrl} alt="logo" />
      </BlockLeft>
      <Spacing flex={24} />
      <Spacing height={24} />
      <BlockRight>
        <JobTitle>{title}</JobTitle>
        <Spacing height={8} />
        <CompanyName>{company}</CompanyName>
        <Duration>{period}</Duration>
        <Location>{location}</Location>
        <Spacing height={8} />
        <JobDescription>{description}</JobDescription>
        <Spacing height={8} />
        <Link href={url}>Read More</Link>
      </BlockRight>
    </BlockRoot>
  )
}

export default function Experience() {
  return (
    <div>
      <h1>🏋️‍♂️ Work Experience</h1>
      <Block
        title="Software Engineer Intern"
        company="AppFolio, Inc"
        location="Los Angeles, CA."
        period="Jun 2020 - Sep 2020 · 4 mos"
        description="Optimized GraphQL/MySQL queries and reduced the server CPU utilization
        by 20%. Integrated GraphQL Subscription with AWS API Gateway WebSocket
        and reduced the load on the server significantly."
        url="/experience/appfolio"
        imgUrl="https://media-exp1.licdn.com/dms/image/C560BAQEZzWml4YYbEQ/company-logo_200_200/0/1609798850247?e=1619049600&v=beta&t=9CddHYc2iB28D1-PQ8dUtHuzIkt1hll0cr5sML376e0"
      />
      <Spacing height={32} />
      <Block
        title="Software Developer Intern"
        company="GIRS @UCLA"
        location="Los Angeles, CA."
        period="Jun 2019 - Sep 2019 · 4 mos"
        description="Enhanced Graph editing features and increased modeling efficiency/usability. Invented a tree traversal algorithm to navigate users building event trees."
        url="/experience/risksciences"
        imgUrl="https://media-exp1.licdn.com/dms/image/C4E0BAQH_ztIBjSgx_w/company-logo_200_200/0/1522961601498?e=1619049600&v=beta&t=FbGewlZMEKpr1TC2Ib6-A5gTIVo80DXSuH5hn09dmkk"
      />
      <Spacing height={32} />
      <Block
        title="iOS App Developer Intern"
        company="TeamLab"
        location="Tokyo, Japan."
        period="Jul 2018 - Sep 2018 · 3 mos"
        description="Ranked #23 in the App Store for the shopping category in Japan. Displayed personalized products based on user preferences and purchase histories. Implement skeleton views and tutorial pages."
        url="/experience/teamlab"
        imgUrl="https://media-exp1.licdn.com/dms/image/C4D0BAQHcWkIkHJZuUw/company-logo_200_200/0/1519952344898?e=1619049600&v=beta&t=rkR_83QL0FuiH2nDjZUTXFvPPG6P9xbDu9IzoMkdbh8"
      />
      <Spacing height={32} />
      <Block
        title="iOS App Developer Intern"
        company="MaruMe"
        location="Berkeley, CA."
        period="Jun 2016 - Aug 2016 · 3 mos"
        description="Developed a product review app in a team of 2 using Swift that helps consumers make wise purchase decisions. Updated designs of buttons and layouts and built profile pages from scratch."
        url="/experience/marume"
        imgUrl="https://media-exp1.licdn.com/dms/image/C560BAQEhk76xLOy9uw/company-logo_200_200/0/1519868257412?e=1619049600&v=beta&t=x6efU9R-GWteDFjg33tSLSWLaHY5y3Q5_mCAyrHXCLA"
      />
    </div>
  )
}
