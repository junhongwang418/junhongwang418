import React from "react"
import Spacing from "./Spacing"
import styled from "../styled/index"

const Root = styled.div`
  display: flex;
  align-items: center;
  height: 96px;
`

const LogoRoot = styled.h1`
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  margin: 0 16px;
`

const NavigationItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  :hover {
    color: ${props => props.theme.colors.comment};
  }
`

export default function Header() {
  return (
    <Root>
      <LogoRoot>
        <a href="/">
          <img src="/icon.svg" alt="icon" />
        </a>
      </LogoRoot>
      <Spacing flex={32} />
      <NavigationItem href="/resume.pdf">📜 Resume</NavigationItem>
      <Spacing flex={32} />
      <NavigationItem href="/book-notes">📚 Book Notes</NavigationItem>
    </Root>
  )
}
