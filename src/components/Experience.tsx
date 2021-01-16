import React, { FunctionComponent } from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
import Button from "./Button"
import Spacing from "./Spacing"
import styled from "../styled/index"

interface BlockProps {
  title: string
  company: string
  location: string
  period: string
  description: string
  tools: string
  url: string
}

const ItalicSpan = styled.span`
  font-style: italic;
`

const BlockRoot = styled.div``

const Block: FunctionComponent<BlockProps> = props => {
  const { title, company, location, period, description, tools, url } = props
  return (
    <BlockRoot>
      <h3 sx={{ color: "primary" }}>{title}</h3>
      <h4>
        <ItalicSpan>{company}</ItalicSpan>, {location} — ({period})
      </h4>
      <div>{description}</div>
      <h5>{tools}</h5>
      <Button href={url}>See More</Button>
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
        period="Jun 2020 - Sep 2020"
        description="Optimized GraphQL/MySQL queries and reduced the server CPU utilization
        by 20%. Integrated GraphQL Subscription with AWS API Gateway WebSocket
        and reduced the load on the server significantly."
        tools="TypeScript, React, Java, Jetty, GraphQL, MySQL"
        url="/experience/appfolio"
      />
      <Spacing height={48} />
      <Block
        title="Software Developer Intern"
        company="GIRS @UCLA"
        location="Los Angeles, CA."
        period="Jun 2019 - Sep 2019"
        description="Enhanced Graph editing features and increased modeling efficiency/usability. Invented a tree traversal algorithm to navigate users building event trees."
        tools="TypeScript, React, Material UI"
        url="/experience/risksciences"
      />
      <Spacing height={48} />
      <Block
        title="iOS App Developer Intern"
        company="TeamLab"
        location="Tokyo, Japan."
        period="Jul 2018 - Sep 2018"
        description="Ranked #23 in the App Store for the shopping category in Japan. Displayed personalized products based on user preferences and purchase histories. Implement skeleton views and tutorial pages."
        tools="Swift, RxSwift, ReSwift"
        url="/experience/teamlab"
      />
      <Spacing height={48} />
      <Block
        title="iOS App Developer Intern"
        company="MaruMe"
        location="Berkeley, CA."
        period="Jun 2016 - Aug 2016"
        description="Developed a product review app in a team of 2 using Swift that helps consumers make wise purchase decisions. Updated designs of buttons and layouts and built profile pages from scratch."
        tools="Swift"
        url="/experience/marume"
      />
    </div>
  )
}
