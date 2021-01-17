import React from "react"
import styled from "../styled/index"
/** @jsx jsx */
import { jsx } from "theme-ui"
import Spacing from "./Spacing"

const Root = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  @media (max-width: 420px) {
    display: block;
  }
`

const Header = styled.h1`
  font-size: 48px;
`

const ProfileImage = styled.img`
  object-fit: cover;
  width: 256px;
  height: 256px;
  border-radius: 50%;
  display: block;
  margin: 32px;
`

const Body = styled.div``

const Subheader = styled.h2``

export default function About() {
  return (
    <Root>
      <ProfileImage src="/profile.png" alt="profile" />
      <Body>
        <Header sx={{ color: "primary" }}>Hello world 👋</Header>
        <Subheader>
          I'm Junhong. I'm a student at UCLA studying Computer Science 👨‍💻. I
          specialize in full stack web development and writing readable code.
        </Subheader>
      </Body>
    </Root>
  )
}
