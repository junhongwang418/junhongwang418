/**
 * Create static pages using Gatsby's Node.js `createPage` API.
 *
 * See: https://www.gatsbyjs.com/docs/adding-markdown-pages/
 */
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const MarkdownTemplate = require.resolve(
    `./src/templates/MarkdownTemplate.tsx`
  )
  const BookNotesTemplate = require.resolve(
    `./src/templates/BookNotesTemplate.tsx`
  )

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

  function getTemplate(slug) {
    if (slug.startsWith("/book-notes")) {
      return BookNotesTemplate
    }

    return MarkdownTemplate
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(node)
    createPage({
      path: node.frontmatter.slug,
      component: getTemplate(node.frontmatter.slug),
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })
}
