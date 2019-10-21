import React from 'react'
import styled, { keyframes } from 'styled-components'

import NormalLink from './NormalLink'
import GithubSVG from '../images/github.inline.svg'
import LinkedInSVG from '../images/linkedin.inline.svg'
import TwitterSVG from '../images/twitter.inline.svg'
import Circle from '../images/circle.inline.svg'
import Ellipse from '../images/ellipse.inline.svg'
import Ex from '../images/ex.inline.svg'
import Hexagon from '../images/hexagon.inline.svg'
import HexagonGrey from '../images/hexagong.inline.svg'
import RedSquare from '../images/red.square.inline.svg'
import ColoredReverseTriangle from '../images/reverse.triangle.c.inline.svg'
import ReverseTriangle from '../images/reverse.triangle.inline.svg'

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(15%);
  }
`

const Placer = styled.div`
  position: absolute;
  display: block;
  animation: ${float} ${props => props.animationDuration || '4s'} ease-in-out
    infinite;
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  @media screen and (max-width: 1023px) {
    top: ${props => props.tabletTop || props.top};
    left: ${props => props.tabletLeft || props.left};
  }

  @media screen and (max-width: 500px) {
    display: ${props => (props.hiddenMobile ? 'none' : 'block')};
  }

  @media screen and (max-width: 320px) {
    display: none;
  }
`
const StyledHero = styled.div`
  height: calc(100vh - 60px);
  margin: 0 auto;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  justify-content: center;
  color: white;
  h1,
  h3,
  ul {
    position: relative;
    z-index: 101;
  }
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
    <>
      <Placer top="79%" left="0%" tabletTop="72%" tabletLeft="-15%">
        <RedSquare />
      </Placer>
      <Placer
        top="15%"
        left="75%"
        tabletLeft="65%"
        hiddenMobile
        animationDuration="7s"
      >
        <Hexagon />
      </Placer>
      <Placer top="25%" left="45%" tabletTop="20%" animationDuration="5s">
        <Ex />
      </Placer>
      <Placer top="15%" left="25%" tabletLeft="15%">
        <ColoredReverseTriangle />
      </Placer>
      <Placer top="78%" left="59%" tabletTop="85%" tabletLeft="49%">
        <Circle />
      </Placer>
      <Placer top="75%" left="28%" hiddenMobile>
        <HexagonGrey />
      </Placer>
      <Placer top="65%" left="75%" hiddenMobile>
        <ReverseTriangle />
      </Placer>
    </>
    <h1>Hey! I'm Enrique Ortiz</h1>
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
