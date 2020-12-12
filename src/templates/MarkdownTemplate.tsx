import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Markdown from "./Markdown"

export default function MarkdownTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html, frontmatter } = markdownRemark
  const { title, description } = frontmatter
  return (
    <Layout title={title} description={description}>
      <div>
        <h1>{title}</h1>
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
        description
      }
    }
  }
`
