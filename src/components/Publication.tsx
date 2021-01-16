import React, { FunctionComponent } from "react"
import Spacing from "./Spacing"
/** @jsx jsx */
import { jsx } from "theme-ui"
import Button from "./Button"

interface BlockProps {
  title: string
  description: string
  url: string
}

const Block: FunctionComponent<BlockProps> = props => {
  const { title, description, url } = props
  return (
    <div>
      <h3 sx={{ color: "primary" }}>{title}</h3>
      <div>{description}</div>
      <Spacing height={16} />
      <Button href={url}>See More</Button>
    </div>
  )
}

export default function Publication() {
  return (
    <div>
      <h1>📚 Publication</h1>
      <Block
        title="Getting Started with GraphQL"
        description="Published under Better Programming. Documented the development process 
        of Jflix and taught readers how to use GraphQL (Apollo) with React."
        url="/publication/getting-started-with-graphql"
      />
      <Spacing height={32} />
      <Block
        title="Machine Learning Diary"
        description="Studied machine learning from the beginning for 100 days in a row and recorded my learning process. 
        Explained various ML concepts in my own words to help readers easily understand."
        url="/publication/machine-learning-diary"
      />
    </div>
  )
}
