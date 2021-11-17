import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Seo from "./seo"

export default function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulContent(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            id
            slug
            publishedDate(formatString: "DD MMMM, YYYY")
            image {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <>
      <Seo title="Blog" />
      <ul className="posts">
        {data.allContentfulContent.edges.map(edge => {
          return (
            <li className="post" key={edge.node.id}>
              <h2 className="post-title">
                <Link to={`/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span className="publish-date">
                  Posted on {edge.node.publishedDate}
                </span>
              </div>
              {edge.node.image && (
                <Img
                  className="list-image"
                  fluid={edge.node.image.fluid}
                  alt={edge.node.title}
                />
              )}
              <p className="excerpt">{edge.node.excerpt}</p>
              <div className="readmore-button">
                <Link to={`/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
