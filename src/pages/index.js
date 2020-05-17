import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
// import { graphql } from "gatsby"
import Candy from "../components/candy"


export default ({ data }) => (<Layout>Hello candy! <br />
  <Link to="/404">404</Link>
  <Candy />
  <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
  {data.allMarkdownRemark.edges.map(({ node }) => (
    <div key={node.id}>
      <Link
        to={node.fields.slug}>
        <h3>
          {node.frontmatter.title}{" "}
          <span>
            — {node.frontmatter.date}
          </span>
        </h3>
      </Link>
    </div>
  ))}
</Layout >)


export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
