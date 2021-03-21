import React, { FunctionComponent } from "react"
import styled from "../styled/index"
import Spacing from "./Spacing"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import IconLink from "./IconLink"

const BlockRoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  @media (max-width: 620px) {
    display: block;
  }
`

const Image = styled.img`
  object-fit: contain;
  width: 128px;
  height: 128px;
  @media (max-width: 420px) {
    display: block;
    margin: 0 auto;
  }
`

const BlockBody = styled.div`
  flex-grow: 1;
`

interface BlockProps {
  title: string
  description: string
  imgUrl: string
  githubUrl: string
  demoUrl?: string
}

const BlockTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin: 0;
`

const Block: FunctionComponent<BlockProps> = props => {
  const { title, description, imgUrl, githubUrl, demoUrl } = props
  return (
    <BlockRoot>
      <Image src={imgUrl} alt={title} />
      <Spacing flex={36} />
      <BlockBody>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <BlockTitle>{title}</BlockTitle>
          <div style={{ display: "flex" }}>
            <IconLink href={githubUrl} icon={faGithub} />
            {demoUrl && (
              <React.Fragment>
                <Spacing width={8} />
                <IconLink
                  href={demoUrl}
                  icon={faExternalLinkAlt}
                  target="_blank"
                />
              </React.Fragment>
            )}
          </div>
        </div>
        <Spacing height={8} />
        <div>{description}</div>
      </BlockBody>
    </BlockRoot>
  )
}

export default function Projects() {
  return (
    <div>
      <h1>🚀 Projects</h1>
      <Block
        title="Alice"
        description="Artificial virtual assistant 🤖. The objective is to automate tasks to make my life easier. The more time I save, the more new things I can try. For example, she sends me a notification in the morning if it will rain that day."
        imgUrl="https://github.com/ioneone/alice/raw/main/alice.png"
        githubUrl="https://github.com/ioneone/alice"
      />
      <Spacing height={32} />
      <Block
        title="Pixel"
        description="2D side scrolling multiplayer game. The objective is to learn multiplayer client-server architechture. Built a simple chat system 💬."
        imgUrl="https://github.com/ioneone/pixel/raw/master/icon.png?raw=true"
        githubUrl="https://github.com/ioneone/pixel"
        demoUrl="https://ioneone-pixel.herokuapp.com/"
      />
    </div>
  )
}
