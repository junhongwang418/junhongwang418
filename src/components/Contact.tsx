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

const BoldSpan = styled.span`
  font-weight: bold;
`

const Link = styled.a`
  color: ${props => props.theme.colors.foreground};
  :hover {
    color: ${props => props.theme.colors.comment};
  }
`

const ProfileImage = styled.img`
  object-fit: cover;
  width: 128px;
  display: block;
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
      <h1>☕️ Contact</h1>
      <ProfileImage src="/profile.png" alt="profile" />
      <Spacing height={16} />
      <Block emoji="📧" title="Email" mailto="ionejunhong@gmail.com" />
      <Spacing height={8} />
      <Block emoji="🐦" title="Twitter" link="https://twitter.com/junhongone" />
      <Spacing height={8} />
      <Block
        emoji="🔗"
        title="LinkedIn"
        link="https://www.linkedin.com/in/junhongwang/"
      />
      <Spacing height={8} />
      <Block emoji="🐙" title="Github" link="https://github.com/ioneone" />
    </Root>
  )
}
