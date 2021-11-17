import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import Seo from "../components/seo"

export const query = graphql`
  query ($slug: String!) {
    contentfulContent(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "DD MMMM, YYYY")
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      childContentfulContentContentTextNode {
        content
      }
    }
  }
`

const BlogPost = props => {
  return (
    <Layout>
      <Seo title={props.data.contentfulContent.title} />
      <div className="content">
        <h1 className="blog-title">{props.data.contentfulContent.title}</h1>
        <span className="publish-date">
          Posted on {props.data.contentfulContent.publishedDate}
        </span>

        {props.data.contentfulContent.image && (
          <Img
            className="blog-image"
            fluid={props.data.contentfulContent.image.fluid}
            alt={props.data.contentfulContent.title}
          />
        )}
        <p className="blog-text">
          {
            props.data.contentfulContent.childContentfulContentContentTextNode
              .content
          }
        </p>
        <div className="readmore-button">
          <Link to="/">Back to main page</Link>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost
