import React, { FunctionComponent } from "react"
import Spacing from "./Spacing"
import styled from "../styled/index"

interface BlockProps {
  emoji: string
  title: string
  description?: string
  link?: string
}

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
  const { emoji, title, description, link } = props
  return (
    <div>
      {emoji}{" "}
      {link ? (
        <Link href={link}>
          <BoldSpan>{title}</BoldSpan>
        </Link>
      ) : (
        <BoldSpan>{title}</BoldSpan>
      )}{" "}
      {description}
    </div>
  )
}

export default function Contact() {
  return (
    <div>
      <h1>☕️ Contact</h1>
      <Block
        emoji="📧"
        title="Email address"
        description="ionejunhong@gmail.com"
      />
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
    </div>
  )
}
