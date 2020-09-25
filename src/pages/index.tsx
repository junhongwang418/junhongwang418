import React from "react"
import Container from "../components/Container"
import Experience from "../components/Experience"
import About from "../components/About"
import Spacing from "../components/Spacing"
import Projects from "../components/Projects"
import Publication from "../components/Publication"
import Education from "../components/Education"
import { ThemeProvider } from "emotion-theming"
import theme from "../gatsby-plugin-theme-ui/index"
import Header from "../components/Header"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Junhong Wang</title>
      </Helmet>
      <Container>
        <Header />
        <Spacing height={128} />
        <About />
        <Spacing height={128} />
        <Experience />
        <Spacing height={128} />
        <Projects />
        <Spacing height={128} />
        <Publication />
        <Spacing height={128} />
        <Education />
        <Spacing height={128} />
        <Contact />
        <Spacing height={128} />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
