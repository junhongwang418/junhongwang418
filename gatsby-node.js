/**
 * Create static pages using Gatsby's Node.js `createPage` API.
 *
 * See: https://www.gatsbyjs.com/docs/adding-markdown-pages/
 */
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const Markdown = require.resolve(`./src/templates/Markdown.tsx`)

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(node)
    createPage({
      path: node.frontmatter.slug,
      component: Markdown,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })
}
