const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulContent {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulContent.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
