import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Hero></Hero>
    <Trips heading="Our Favorite Destination"></Trips>
    <Testimonials />
  </Layout>
)

export default IndexPage
