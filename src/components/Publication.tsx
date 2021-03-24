import React, { FunctionComponent } from "react"
import Spacing from "./Spacing"
import styled from "../styled"

interface BlockProps {
  title: string
  description: string
  url: string
}

const BlockTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin: 0;
`

const Link = styled.a`
  color: ${props => props.theme.colors.secondary};
  float: right;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`

const Block: FunctionComponent<BlockProps> = props => {
  const { title, description, url } = props
  return (
    <div>
      <BlockTitle>{title}</BlockTitle>
      <Spacing height={8} />
      <div>{description}</div>
      <Spacing height={8} />
      <Link href={url}>Read More →</Link>
    </div>
  )
}

const Root = styled.div``

const Header = styled.h1``

export default function Publication() {
  return (
    <Root>
      <Header>📚 Publication</Header>
      <Block
        title="Getting Started with GraphQL"
        description="Published under Better Programming. Documented the development process 
        of Jflix and taught readers how to use GraphQL (Apollo) with React."
        url="/publication/getting-started-with-graphql"
      />
      <Spacing height={48} />
      <Block
        title="Machine Learning Diary"
        description="Studied machine learning from the beginning for 100 days in a row and recorded my learning process. 
        Explained various ML concepts in my own words to help readers easily understand."
        url="/publication/machine-learning-diary"
      />
    </Root>
  )
}
