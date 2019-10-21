import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export const TwitterImg = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "twitter.inline.png" }) {
        childImageSharp {
          fluid(maxWidth: 48) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return <Img fluid={data.file.childImageSharp.fluid} />
}
