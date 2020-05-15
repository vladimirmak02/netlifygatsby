import React from "react"
import { graphql, StaticQuery } from "gatsby"

export default function Candy() {
  return (<StaticQuery
    query={graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              number
              date
              title
              path
            }
          }
        }
      }
    }
  `}
    render={
      data => {
        let {
          allMarkdownRemark: {
            edges: candies,

          },
        } = data;
        console.log(candies);
        return (<p>{candies.map(candy => {
          return candy.node.frontmatter.title + " ";
        })
        }
        </p>)
      }

    } />
  );
}

