import React from "react"
import Experience from "../components/Experience"
import About from "../components/About"
import Spacing from "../components/Spacing"
import Projects from "../components/Projects"
import Publication from "../components/Publication"
import Education from "../components/Education"
import styled from "../styled/index"
import Layout from "../components/Layout"

const ProfileImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
`

const ProfileImage = styled.img`
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`

export default function Home() {
  return (
    <Layout>
      <div>
        <ProfileImageContainer>
          <ProfileImage src="/profile.png" alt="profile" />
        </ProfileImageContainer>
        <About />
        <Spacing height={128} />
        <Experience />
        <Spacing height={128} />
        <Projects />
        <Spacing height={128} />
        <Publication />
        <Spacing height={128} />
        <Education />
      </div>
    </Layout>
  )
}
