import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const { contentfulMenu, contentfulHeader, contentfulLogo } =
    useStaticQuery(graphql`
      query {
        contentfulMenu {
          homePage
          secondPage
        }
        contentfulHeader {
          bgcolor
          banner {
            title
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
        contentfulLogo {
          logo {
            title
            fluid(maxWidth: 90) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    `)

  return (
    <header
      style={{
        backgroundColor: contentfulHeader.bgcolor,
      }}
      className="header"
    >
      <Img
        className="logo"
        style={{
          backgroundColor: contentfulHeader.bgcolor,
        }}
        backgroundColor={contentfulHeader.bgcolor}
        fluid={contentfulLogo.logo.fluid}
        alt={contentfulLogo.logo.title}
      />

      <Link to="/">{contentfulMenu.homePage}</Link>
      <Link to="/about/">{contentfulMenu.secondPage}</Link>

      <Img
        className="banner"
        fluid={contentfulHeader.banner.fluid}
        alt={contentfulHeader.banner.title}
      />
    </header>
  )
}

export default Header
