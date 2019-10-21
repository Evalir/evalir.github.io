import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export const MugshotImg = () => {
  const mugshotData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mugshot@3x.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={mugshotData.file.childImageSharp.fluid} />
}
