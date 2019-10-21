import React from 'react'
import styled from 'styled-components'

import NormalLink from './NormalLink'
import GithubSVG from '../images/github.inline.svg'
import LinkedInSVG from '../images/linkedin.inline.svg'
import TwitterSVG from '../images/twitter.inline.svg'

const StyledHero = styled.div`
  height: calc(100vh - 60px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  ul {
    list-style: none;
    margin-left: 0;
    li {
      display: inline-block;
      width: 48px;
      height: 48px;
      &:not(:last-child) {
        margin-right: ${props => props.theme.unit.getRem(16)};
      }
    }
  }
`

const Hero = () => (
  <StyledHero>
    <h1>Hey, I'm Enrique Ortiz</h1>
    <h3>Javascript Full Stack Software Engineer.</h3>
    <ul>
      <li>
        <NormalLink href="https://www.github.com/evalir">
          <GithubSVG />
        </NormalLink>
      </li>
      <li>
        <NormalLink href="https://www.linkedin.com/in/enriqueortizpi/">
          <LinkedInSVG />
        </NormalLink>
      </li>
      <li>
        <NormalLink href="https://twitter.com/hievalir">
          <TwitterSVG />
        </NormalLink>
      </li>
    </ul>
  </StyledHero>
)

export default Hero
