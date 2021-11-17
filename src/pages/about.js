import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export default function About() {
  const { contentfulAboutPage } = useStaticQuery(graphql`
    query {
      contentfulAboutPage {
        title
        subtitle
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        childContentfulAboutPageTextTextNode {
          text
        }
      }
    }
  `)

  return (
    <Layout>
      <h1 className="about-title">{contentfulAboutPage.title}</h1>
      <Img
        className="about-image"
        alt={contentfulAboutPage.title}
        fluid={contentfulAboutPage.image.fluid}
      />
      <h2 className="about-subtitle">{contentfulAboutPage.subtitle}</h2>
      <p className="about-text">
        {contentfulAboutPage.childContentfulAboutPageTextTextNode.text}
      </p>
      <div className="readmore-button">
        <Link to="/">Back to main page</Link>
      </div>
    </Layout>
  )
}
