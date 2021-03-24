import React from "react"
import Spacing from "./Spacing"
import styled from "../styled/index"
import IconLink from "./IconLink"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Root = styled.div``

const ProfileImage = styled.img`
  object-fit: cover;
  width: 96px;
  display: block;
  border-radius: 50%;
`

const ProfileRoot = styled.div`
  display: block;
  @media (max-width: 960px) {
    display: flex;
  }
`

const Name = styled.h3`
  margin: 0;
`

const Profile = () => {
  return (
    <ProfileRoot>
      <div>
        <ProfileImage src="/profile.png" alt="profile" />
      </div>
      <Spacing flex={32} />
      <Spacing height={32} />
      <div>
        <Name>Junhong Wang</Name>
        <Spacing height={8} />
        <div>
          Software Engineer. On this website, I document myself and things I
          learned.
        </div>
      </div>
    </ProfileRoot>
  )
}

const MediaRoot = styled.div`
  text-align: center;
`

const Media = () => {
  return (
    <MediaRoot>
      <IconLink href="mailto:ionejunhong@gmail.com" icon={faEnvelope} />
      <Spacing width={16} inlineBlock />
      <IconLink
        href="https://www.linkedin.com/in/junhongwang/"
        icon={faLinkedinIn}
      />
      <Spacing width={16} inlineBlock />
      <IconLink href="https://github.com/ioneone" icon={faGithub} />
    </MediaRoot>
  )
}

export default function Contact() {
  return (
    <Root>
      <Profile />
      <Spacing height={32} />
      <Media />
    </Root>
  )
}
