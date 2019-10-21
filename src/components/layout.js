/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import './layout.css'
import CircularStdBold from '../fonts/CircularStd-Bold.woff'
import CircularStdMedium from '../fonts/CircularStd-Medium.woff'
import CircularStdBook from '../fonts/CircularStd-Book.woff'

const theme = {
  colors: {
    primary: '#FFFFFF',
    secondary: '#B8C4DC',
    background: '#141821',
    red: '#E64C72',
    yellow: '#EABB65',
    orange: '#EB8940',
    darkGray: '364349',
  },
  fonts: {
    fontFamily: 'Inter',
  },
  unit: {
    getRem(px) {
      return `${px / 16}rem`
    },
  },
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'CircularStd';
    src: url(${CircularStdBold}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
  }
  @font-face {
    font-family: 'CircularStd';
    src: url(${CircularStdMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
  }
  @font-face {
    font-family: 'CircularStd';
    src: url(${CircularStdBook}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
  }
  html {
    overflow-x: hidden;
    color: #ffffff;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }
  body {
    overflow-x: hidden;
    background: #141821;
    color: #FFFFFF;
    margin: 0;
    padding: 0;
    font-family: CircularStd;
    letter-spacing: normal;
    -webkit-font-smoothing: antialiased;
  }
  svg {
    display: block;
  }
  .container {
    max-width: 960px;
    margin: 0 auto;
  }
  .overflow {
    overflow-x: hidden;
  }
`

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
  overflow-x: hidden;
  h1 {
    font-size: ${props => props.theme.unit.getRem(48)};
  }
  h2 {
    font-size: ${props => props.theme.unit.getRem(42)};
  }
  h3 {
    font-size: ${props => props.theme.unit.getRem(36)};
    color: ${props => props.theme.colors.secondary};
  }

  h4 {
    font-size: ${props => props.theme.unit.getRem(32)};
  }

  @media screen and (max-width: 728px) {
    padding: 16px;
  }
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <main>{children}</main>
      </Wrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
