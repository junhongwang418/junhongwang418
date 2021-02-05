import React, { FunctionComponent } from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
import Spacing from "./Spacing"
import styled from "../styled"

interface BlockProps {
  school: string
  degree: string
  major: string
  date: string
}

const Block: FunctionComponent<BlockProps> = props => {
  const { school, degree, major, date } = props
  return (
    <div>
      <h3 sx={{ color: "primary" }}>{school}</h3>
      <div>
        {degree} in {major}. ​{date}.
      </div>
    </div>
  )
}

const Root = styled.div``

const Body = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 420px) {
    display: block;
  }
`

const BodyLeft = styled.div`
  flex-grow: 1;
`

const BodyRight = styled.div`
  text-align: center;
`

const Image = styled.img`
  width: 256px;
  margin: 0 64px;
  @media (max-width: 420px) {
    margin: 0;
  }
`

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
