import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Footer() {
  const {
    contentfulLogo,
    contentfulFooter,
    contentfulContacts,
    contentfulHeader,
  } = useStaticQuery(graphql`
    query {
      contentfulLogo {
        logo {
          title
          fluid(maxWidth: 90) {
            ...GatsbyContentfulFluid
          }
        }
      }
      contentfulFooter {
        bottom
        information {
          information
        }
      }
      contentfulContacts {
        contacts
      }
      contentfulHeader {
        bgcolor
      }
    }
  `)
  return (
    <footer
      className="footer"
      style={{ backgroundColor: contentfulHeader.bgcolor }}
    >
      <Img
        className="logo"
        fluid={contentfulLogo.logo.fluid}
        alt={contentfulLogo.logo.title}
      />
      <div className="contacts">{contentfulContacts.contacts}</div>
      <div className="">{contentfulFooter.bottom}</div>
      <div className="add-info">{contentfulFooter.information.information}</div>
    </footer>
  )
}
