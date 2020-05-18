import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default function Tree({ data }) {
  return (
    <Layout>
      <h1>Tree</h1>
      <Img
        style={{ width: `70%` }}
        fluid={data.file.childImageSharp.fluid}
        alt="A tree"
      />
    </Layout>
  )
}
export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "399.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
