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

const createDurationString = (startYear: number, startMonth: number) => {
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth()
  const diffYears = startYear - currentYear
  const diffMonths = Math.max(currentMonth - startMonth, 0)
  if (diffYears > 0 && diffMonths > 0) {
    return `${diffYears} yrs ${diffMonths} mos`
  } else if (diffYears > 0) {
    return `${diffYears} yrs`
  } else if (diffMonths > 0) {
    return `${diffMonths} mos`
  } else {
    return `1 mos`
  }
}

export default function Experience() {
  return (
    <div>
      <h1>🏋️‍♂️ Work Experience</h1>
      <Block
        title="Software Engineer"
        company="AppFolio, Inc"
        location="Los Angeles, CA."
        period={`May 2021 - Present · ${createDurationString(2021, 5)}`}
        description="Return to AppFolio Dynasty team as a fulltime employee."
        url="/experience/appfolio"
        imgUrl="/appfolio-logo.jpeg"
      />
      <Spacing height={32} />
      <Block
        title="Software Engineer Intern"
        company="AppFolio, Inc"
        location="Los Angeles, CA."
        period="Jun 2020 - Sep 2020 · 4 mos"
        description="Optimized GraphQL/MySQL queries and reduced the server CPU utilization
        by 20%. Integrated GraphQL Subscription with AWS API Gateway WebSocket
        and reduced the load on the server significantly."
        url="/experience/appfolio-intern"
        imgUrl="/appfolio-logo.jpeg"
      />
      <Spacing height={32} />
      <Block
        title="Software Developer Intern"
        company="GIRS @UCLA"
        location="Los Angeles, CA."
        period="Jun 2019 - Sep 2019 · 4 mos"
        description="Enhanced Graph editing features and increased modeling efficiency/usability. Invented a tree traversal algorithm to navigate users building event trees."
        url="/experience/risksciences"
        imgUrl="/risksciences-logo.png"
      />
      <Spacing height={32} />
      <Block
        title="iOS App Developer Intern"
        company="TeamLab"
        location="Tokyo, Japan."
        period="Jul 2018 - Sep 2018 · 3 mos"
        description="Ranked #23 in the App Store for the shopping category in Japan. Displayed personalized products based on user preferences and purchase histories. Implement skeleton views and tutorial pages."
        url="/experience/teamlab"
        imgUrl="/teamlab-logo.png"
      />
      <Spacing height={32} />
      <Block
        title="iOS App Developer Intern"
        company="MaruMe"
        location="Berkeley, CA."
        period="Jun 2016 - Aug 2016 · 3 mos"
        description="Developed a product review app in a team of 2 using Swift that helps consumers make wise purchase decisions. Updated designs of buttons and layouts and built profile pages from scratch."
        url="/experience/marume"
        imgUrl="/marume-logo.png"
      />
    </div>
  )
}
