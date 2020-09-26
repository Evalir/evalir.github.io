import React from 'react'
import Layout from '../components/layout'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutMe from '../components/About'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <Hero />
    <AboutMe />
  </Layout>
)

export default IndexPage
