import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Hero></Hero>
  </Layout>
)

export default IndexPage
