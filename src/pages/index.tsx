import React from "react"
import Experience from "../components/Experience"
import About from "../components/About"
import Spacing from "../components/Spacing"
import Projects from "../components/Projects"
import Publication from "../components/Publication"
import Education from "../components/Education"
import Layout from "../components/Layout"
import Contact from "../components/Contact"
import styled from "../styled"

const Left = styled.div`
  max-width: 680px;
`
const Right = styled.div``

const Block = styled.div`
  display: flex;
  @media (max-width: 960px) {
    display: block;
  }
`

export default function Home() {
  return (
    <Layout>
      <Spacing height={64} />
      <About />
      <Spacing height={128} />
      <Experience />
      <Spacing height={128} />
      <Projects />
      <Spacing height={128} />
      <Publication />
      <Spacing height={128} />
      <Education />
    </Layout>
  )
}
