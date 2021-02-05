import React from "react"
import styled from "../styled/index"
/** @jsx jsx */
import { jsx } from "theme-ui"
import Spacing from "./Spacing"

const Root = styled.div``

const Header = styled.h1`
  font-size: 48px;
`

const Subheader = styled.h2``

export default function About() {
  return (
    <Root>
      <Header sx={{ color: "primary" }}>Hello world 👋</Header>
      <Subheader>
        I'm Junhong. I'm a student at UCLA studying Computer Science 👨‍💻. I
        specialize in full stack web development and writing readable code.
      </Subheader>
    </Root>
  )
}
