import React from "react"
import styled from "../styled/index"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const MarkdownRoot = styled.div`
  h1 {
    margin: 0;
  }
  a {
    color: ${props => props.theme.colors.foreground};
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

export default function Markdown({ data }) {
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
    <Layout>
      <MarkdownRoot dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
    }
  }
`
