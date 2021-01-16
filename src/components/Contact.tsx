import React, { FunctionComponent } from "react"
import Spacing from "./Spacing"
import styled from "../styled/index"

interface BlockProps {
  emoji: string
  title: string
  mailto?: string
  link?: string
}

const Root = styled.div``

const Body = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 420px) {
    display: block;
  }
`

const BoldSpan = styled.span`
  font-weight: bold;
`

const Link = styled.a`
  color: ${props => props.theme.colors.text};
  :hover {
    color: ${props => props.theme.colors.secondary};
  }
`

const Block: FunctionComponent<BlockProps> = props => {
  const { emoji, title, mailto, link } = props
  return (
    <div>
      {emoji}{" "}
      {link || mailto ? (
        <Link href={mailto ? `mailto:${mailto}` : link}>
          <BoldSpan>{title}</BoldSpan>
        </Link>
      ) : (
        <BoldSpan>{title}</BoldSpan>
      )}{" "}
    </div>
  )
}

export default function Contact() {
  return (
    <Root>
      <Body>
        <Block emoji="📧" title="Email" mailto="ionejunhong@gmail.com" />
        <Spacing flex={8} />
        <Spacing height={8} />
        <Block
          emoji="🐦"
          title="Twitter"
          link="https://twitter.com/junhongone"
        />
        <Spacing flex={8} />
        <Spacing height={8} />
        <Block
          emoji="🔗"
          title="LinkedIn"
          link="https://www.linkedin.com/in/junhongwang/"
        />
        <Spacing flex={8} />
        <Spacing height={8} />
        <Block emoji="🐙" title="Github" link="https://github.com/ioneone" />
      </Body>
    </Root>
  )
}
