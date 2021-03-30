import React, { FunctionComponent } from "react"
import Spacing from "./Spacing"
import styled from "../styled"

interface BlockProps {
  school: string
  degree: string
  major: string
  date: string
}

const SchoolName = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin: 0;
`

const Block: FunctionComponent<BlockProps> = props => {
  const { school, degree, major, date } = props
  return (
    <div>
      <SchoolName>{school}</SchoolName>
      <Spacing height={8} />
      <div>
        {degree} in {major}. ​{date}.
      </div>
    </div>
  )
}

const Root = styled.div``

const Title = styled.h1``

export default function Education() {
  return (
    <Root>
      <Title>👨‍🏫 Education</Title>
      <Block
        school="University of California, Los Angeles."
        degree="Bachelor of Science"
        major="Computer Science"
        date="​March 2021"
      />
      <Spacing height={32} />
      <Block
        school="Berkeley City College"
        degree="Associate of Science"
        major="Mathematics"
        date="​May 2018"
      />
    </Root>
  )
}
