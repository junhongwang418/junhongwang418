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
`

const Block: FunctionComponent<BlockProps> = props => {
  const { school, degree, major, date } = props
  return (
    <div>
      <SchoolName>{school}</SchoolName>
      <div>
        {degree} in {major}. ​{date}.
      </div>
    </div>
  )
}

const Root = styled.div``

export default function Education() {
  return (
    <Root>
      <h1>👨‍🏫 Education</h1>
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
