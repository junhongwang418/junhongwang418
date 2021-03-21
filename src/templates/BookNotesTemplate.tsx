import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Markdown from "./Markdown"
import styled from "../styled"

const Body = styled.div`
  margin: 0 auto;
`

export default function BookNotesTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html, frontmatter } = markdownRemark
  const { title, description, thumbnailUrl } = frontmatter
  return (
    <Layout title={title} description={description}>
      <Body>
        <h1>{title}</h1>
        <img src={thumbnailUrl} alt="thumbnail" width="100%" />
        <p>{description}</p>
        <Markdown dangerouslySetInnerHTML={{ __html: html }} />
      </Body>
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
        description
        thumbnailUrl
      }
    }
  }
`
