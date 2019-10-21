import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export const AlgopitImg = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "AlgopitButton@3x.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return <Img fluid={data.file.childImageSharp.fluid} />
}
