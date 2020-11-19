import React from "react"
import { graphql } from "gatsby"
import styled from "../styled/index"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

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
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
      />
      <div>
        <h1>{frontmatter.title}</h1>
        <Markdown dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
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
