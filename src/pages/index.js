import React from "react"

import Layout from "../components/layout"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AboutMe from "../components/About"
import OpenSource from "../components/OpenSource"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <Hero />
    <AboutMe />
    <OpenSource />
  </Layout>
)

export default IndexPage
