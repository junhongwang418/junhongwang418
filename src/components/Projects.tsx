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
  @media (max-width: 420px) {
    display: block;
  }
`

const Image = styled.img`
  object-fit: contain;
  flex-shrink: 0;
  width: 168px;
  height: 128px;
  @media (max-width: 420px) {
    display: block;
    margin: 0 auto;
    width: 168px;
    height: 96px;
  }
`

const BlockBodyLeft = styled.div`
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
      <BlockBodyLeft>
        <h2 sx={{ color: "primary" }}>{title}</h2>
        <div>{description}</div>
        <h5>{tools}</h5>
        <Button href={githubUrl} style={{ width: "100%", textAlign: "center" }}>
          🐙 Code
        </Button>
        {demoUrl && (
          <React.Fragment>
            <Spacing height={8} />
            <Button
              href={demoUrl}
              style={{ width: "100%", textAlign: "center" }}
            >
              🎮 Demo
            </Button>
          </React.Fragment>
        )}
      </BlockBodyLeft>
      <Spacing flex={16} />
      <Spacing height={16} /> {/* for small screen */}
      <Image src={imgUrl} alt={title} />
    </BlockRoot>
  )
}

export default function Projects() {
  return (
    <div>
      <h1>🚀 Projects</h1>
      <Block
        title="Alice"
        description="Artificial virtual assistant"
        tools="Python"
        imgUrl="https://github.com/ioneone/alice/raw/main/alice.png"
        githubUrl="https://github.com/ioneone/alice"
      />
      <Spacing height={32} />
      <Block
        title="Pixel"
        description="2D side scrolling multiplayer game"
        tools="TypeScript, PixiJS, SocketIO"
        imgUrl="https://github.com/ioneone/pixel/raw/master/icon.png?raw=true"
        githubUrl="https://github.com/ioneone/pixel"
        demoUrl="https://ioneone-pixel.herokuapp.com/"
      />
    </div>
  )
}
