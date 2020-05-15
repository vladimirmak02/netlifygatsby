import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Candy from "../components/candy"


export default ({ data }) => (<Layout>Hello candy! <br />
  <Link to="/404">404</Link>
  <Candy />
</Layout >)



