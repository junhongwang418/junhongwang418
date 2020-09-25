import React, { FunctionComponent } from "react"
import styled from "../styled/index"
import Spacing from "./Spacing"
/** @jsx jsx */
import { jsx } from "theme-ui"
import Button from "./Button"

const BlockRoot = styled.div`
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  padding: 32px;
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
  width: 256px;
  height: 128px;
  @media (max-width: 420px) {
    display: block;
    margin: 0 auto;
    width: 168px;
    height: 96px;
  }
`

const BlockLeftDiv = styled.div`
  flex-grow: 1;
`

const ButtonGroupDiv = styled.div`
  display: flex;
`

const BlockButton: FunctionComponent<React.PropsWithChildren<
  React.HTMLProps<HTMLAnchorElement>
>> = props => (
  <Button style={{ flexGrow: 1, textAlign: "center" }} {...props}>
    {props.children}
  </Button>
)

interface BlockProps {
  title: string
  description: string
  tools: string
  imgUrl: string
  demoUrl: string
  githubUrl: string
}

const Block: FunctionComponent<BlockProps> = props => {
  const { title, description, tools, imgUrl, demoUrl, githubUrl } = props
  return (
    <BlockRoot>
      <BlockLeftDiv>
        <h2 sx={{ color: "primary" }}>{title}</h2>
        <div>{description}</div>
        <h5>{tools}</h5>
        <ButtonGroupDiv>
          <BlockButton href={demoUrl}>🎮 Demo</BlockButton>
          <Spacing width={8} inlineBlock />
          <BlockButton href={githubUrl}>🐙 Github</BlockButton>
        </ButtonGroupDiv>
      </BlockLeftDiv>
      <Spacing flex={32} />
      <Spacing height={16} /> {/* for small screen */}
      <Image src={imgUrl} />
    </BlockRoot>
  )
}

export default function Projects() {
  return (
    <div>
      <h1>🚀 Projects</h1>
      <Block
        title="Platformer"
        description="A 2D side scrolling game for fun."
        tools="TypeScript, Phaser 3, WebGL"
        imgUrl="https://github.com/ioneone/platformer/blob/develop/public/assets/logo.png?raw=true"
        demoUrl="https://ioneone.github.io/platformer/"
        githubUrl="https://github.com/ioneone/platformer"
      />
      <Spacing height={32} />
      <Block
        title="Jmusic"
        description="Jmusic is a web application to repeat the songs I like with the lyrics on the side for singing along."
        tools="TypeScript, React"
        imgUrl="https://github.com/ioneone/jmusic/blob/develop/logo.png?raw=true"
        demoUrl="https://ioneone.github.io/jmusic/"
        githubUrl="https://github.com/ioneone/jmusic"
      />
      <Spacing height={32} />
      <Block
        title="Jflix"
        description="A Netflix clone that lets you check out TV shows/movies I like."
        tools="TypeScript, React, NodeJS, GraphQL"
        imgUrl="https://github.com/ioneone/Jflix/blob/master/jflix.png?raw=true"
        demoUrl="https://jflix.herokuapp.com/"
        githubUrl="https://github.com/ioneone/Jflix"
      />
      <Spacing height={32} />
      <Block
        title="Museum 3D"
        description="Developed a virtual museum for a computer graphics class team project."
        tools="JavaScript, WebGL"
        imgUrl="https://github.com/ioneone/Museum-3D/raw/master/images/lightbulb.jpg"
        demoUrl="https://intro-graphics-master.github.io/term-project-8/"
        githubUrl="https://github.com/ioneone/Museum-3D"
      />
    </div>
  )
}
