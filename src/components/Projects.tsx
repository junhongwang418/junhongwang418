import React, { FunctionComponent } from "react"
import styled from "../styled/index"
import Spacing from "./Spacing"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import IconLink from "./IconLink"

const ProjectRoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  @media (max-width: 620px) {
    display: block;
  }
`

const ProjectImage = styled.img`
  object-fit: contain;
  width: 128px;
  height: 128px;
  @media (max-width: 420px) {
    display: block;
    margin: 0 auto;
  }
`

const ProjectContent = styled.div`
  flex-grow: 1;
`

interface ProjectProps {
  title: string
  description: string
  imgUrl: string
  githubUrl: string
  demoUrl: string
}

const ProjectTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin: 0;
`

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProjectLinksContainer = styled.div`
  display: flex;
`

const ProjectDescription = styled.div``

const Project: FunctionComponent<ProjectProps> = props => {
  const { title, description, imgUrl, githubUrl, demoUrl } = props
  return (
    <ProjectRoot>
      <ProjectImage src={imgUrl} alt={title} />
      <Spacing flex={36} />
      <ProjectContent>
        <ProjectHeader>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectLinksContainer>
            <IconLink href={githubUrl} icon={faGithub} />
            <Spacing width={8} />
            <IconLink href={demoUrl} icon={faExternalLinkAlt} target="_blank" />
          </ProjectLinksContainer>
        </ProjectHeader>
        <Spacing height={8} />
        <ProjectDescription>{description}</ProjectDescription>
      </ProjectContent>
    </ProjectRoot>
  )
}

const Root = styled.div``

const Header = styled.h1``

export default function Projects() {
  return (
    <Root>
      <Header>🚀 Projects</Header>
      <Project
        title="Tycoon"
        description="Real-time multiplayer card game. Tycoon, also known as Daifugo, is a Japanese card game. I created an online version of the game so that I can play it with my friends remotely."
        imgUrl="https://github.com/ioneone/tycoon/raw/main/res/favicon.png"
        githubUrl="https://github.com/ioneone/tycoon"
        demoUrl="https://ioneone-tycoon.herokuapp.com/"
      />
      <Spacing height={32} />
      <Project
        title="Museum 3D"
        description="Virtual museum explorer. This was a group project from a computer graphics class at UCLA. You can explore a beautiful 3D world we created from home."
        imgUrl="https://github.com/ioneone/museum-3d/blob/master/icon.png?raw=true"
        githubUrl="https://github.com/ioneone/museum-3d"
        demoUrl="https://intro-graphics-master.github.io/term-project-8/"
      />
    </Root>
  )
}
