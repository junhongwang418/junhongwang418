import React from "react"
import Experience from "../components/Experience"
import About from "../components/About"
import Spacing from "../components/Spacing"
import Projects from "../components/Projects"
import Publication from "../components/Publication"
import Education from "../components/Education"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
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
