import React, { FunctionComponent } from "react"
import styled from "../styled/index"
import Spacing from "./Spacing"
/** @jsx jsx */
import { jsx } from "theme-ui"
import Button from "./Button"

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
  tools: string
  imgUrl: string
  githubUrl: string
  demoUrl?: string
}

const Block: FunctionComponent<BlockProps> = props => {
  const { title, description, tools, imgUrl, githubUrl, demoUrl } = props
  return (
    <BlockRoot>
      <Image src={imgUrl} alt={title} />
      <Spacing flex={36} />
      <BlockBody>
        <h3 sx={{ color: "primary" }}>{title}</h3>
        <div>{description}</div>
        <h5>{tools}</h5>
        <Button href={githubUrl}>🐙 Code</Button>
        {demoUrl && (
          <React.Fragment>
            <Spacing width={16} inlineBlock />
            <Button href={demoUrl}>🎮 Demo</Button>
          </React.Fragment>
        )}
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
        tools="Python"
        imgUrl="https://github.com/ioneone/alice/raw/main/alice.png"
        githubUrl="https://github.com/ioneone/alice"
      />
      <Spacing height={32} />
      <Block
        title="Pixel"
        description="2D side scrolling multiplayer game. The objective is to learn multiplayer client-server architechture. Built a simple chat system 💬."
        tools="TypeScript, TypeDoc, PixiJS, SocketIO"
        imgUrl="https://github.com/ioneone/pixel/raw/master/icon.png?raw=true"
        githubUrl="https://github.com/ioneone/pixel"
        demoUrl="https://ioneone-pixel.herokuapp.com/"
      />
    </div>
  )
}
