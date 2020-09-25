import React from "react"
import { graphql } from "gatsby"
import { ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui/index"
import Header from "../components/Header"
import Container from "../components/Container"
import Spacing from "../components/Spacing"
import Footer from "../components/Footer"
import styled from "../styled/index"
import { Helmet } from "react-helmet"

const Markdown = styled.div`
  a {
    color: ${props => props.theme.colors.text};
    :hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
  img,
  iframe {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html, frontmatter } = markdownRemark
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <Container>
        <Header />
        <Spacing height={64} />
        <div>
          <h1>{frontmatter.title}</h1>
          <Markdown dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <Spacing height={128} />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
