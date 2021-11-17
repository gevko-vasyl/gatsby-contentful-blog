import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Hero() {
  const { contentfulHero } = useStaticQuery(graphql`
    query {
      contentfulHero {
        hero {
          fluid {
            ...GatsbyContentfulFluid
          }
          title
        }
      }
    }
  `)

  return (
    <div>
      <Img
        className="hero"
        fluid={contentfulHero.hero.fluid}
        alt={contentfulHero.hero.title}
      />
      <h1 className="hero-title">Welcome to my blog!</h1>
    </div>
  )
}
