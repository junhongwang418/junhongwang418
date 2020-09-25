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
`

const NavigationItemRoot = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  :hover {
    color: ${props => props.theme.colors.secondary};
  }
`

export default function Header() {
  return (
    <Root>
      <LogoRoot>
        <a href="/">
          <img src="/icon.svg" />
        </a>
      </LogoRoot>
      <Spacing flex={32} />
      <NavigationItemRoot href="/resume.pdf">📜 Resume</NavigationItemRoot>
    </Root>
  )
}
