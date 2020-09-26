import React from 'react'
import styled, { keyframes } from 'styled-components'

import NormalLink from './NormalLink'
import DarkPlanet from '../images/planet.svg'
import DarkEllipse from '../images/LightEllipse.svg'
import LightEllipse from '../images/LightEllipse.svg'
import Ex from '../images/ex.inline.svg'

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(5%);
  }
`

const Placer = styled.div`
  position: absolute;
  display: block;
  animation: ${props => (props.animate ? float : null)}
    ${props => props.animationDuration || '4s'} ease-in-out infinite;
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
  min-height: 100vh;
  background: #231e1d;
  margin: 0 auto;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  justify-content: center;
  color: white;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
  p {
    font-family: 'HK Grotesk';
    font-size: 20px;
    line-height: 25px;
    color: #efefef;
    display: inline-block;
    max-width: 355px;
  }
  h1 {
    font-family: 'HK Grotesk';
    background: linear-gradient(97.64deg, #ffaeaf 8.21%, #ff7272 121.29%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 108px;
    vertical-align: text-top;
    animation: shine 4s linear infinite;
  }
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
  .wrapper {
    display: grid;
    grid-template-columns: 60% 1fr;
    .hero {
      color: #ff7272;
    }
    .explainer {
      margin-top: 32px;
    }
  @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      p {
        max-width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
      h1 {
        font-size: ${props => props.theme.unit.getRem(32)};
        line-height: ${props => props.theme.unit.getRem(36)};
    }
  }
  }
  .marquee {
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    width: 200%;
    z-index: 102;
    mix-blend-mode: difference;
    p {
      white-space: nowrap;
      font-size: 24px;
      max-width: 200%;
      color: rgba(255, 174, 175, 0.5);
      margin-right: 8px;
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 64px;
`

const Hero = () => (
  <StyledHero>
    <Container>
      <Placer
        animate
        top="25%"
        left="75%"
        tabletLeft="65%"
        hiddenMobile
        animationDuration="3s"
      >
        <img src={DarkPlanet} />
      </Placer>
      <Placer
        top="25%"
        left="45%"
        tabletTop="20%"
        animationDuration="2s"
        animate
      >
        <img src={LightEllipse} />
      </Placer>
      <Placer
        top="60%"
        left="65%"
        tabletTop="20%"
        animationDuration="2s"
        animate
      >
        <img src={LightEllipse} />
      </Placer>
      <Placer
        top="40%"
        left="75%"
        tabletTop="20%"
        animationDuration="2s"
        animate
      >
        <img src={DarkEllipse} />
      </Placer>
      <Placer top="15%" left="25%" tabletLeft="15%"></Placer>
      <div className="wrapper">
        <h1>
          Software Engineer based on rapid iteration and slick interactions
        </h1>
        <div className="explainer">
          <p>Welcome to my personal cyberspace.</p>
          <p>
            I'm Enrique Ortiz, and I'm based in Santo Domingo, Dominican
            Republic. I work with web technologies to create awesome
            experiences.
          </p>
        </div>
      </div>
    </Container>
    <div className="marquee" id="marquee">
      <p>
        USER <b>INTERFACES</b> JAVASCRIPT <b>ART</b> MATHS <b>SPACE</b> TRAVEL{' '}
        <b>MOUNTAINS</b> USER <b>INTERFACES</b> JAVASCRIPT <b>ART</b> MATHS{' '}
        <b>SPACE</b> TRAVEL <b>MOUNTAINS</b> USER <b>INTERFACES</b> JAVASCRIPT{' '}
        <b>ART</b> MATHS <b>SPACE</b> TRAVEL <b>MOUNTAINS</b> USER{' '}
        <b>INTERFACES</b> JAVASCRIPT <b>ART</b> MATHS <b>SPACE</b> TRAVEL{' '}
        <b>MOUNTAINS</b> USER <b>INTERFACES</b> JAVASCRIPT <b>ART</b> MATHS{' '}
        <b>SPACE</b> TRAVEL <b>MOUNTAINS</b> USER <b>INTERFACES</b> JAVASCRIPT{' '}
        <b>ART</b> MATHS <b>SPACE</b> TRAVEL <b>MOUNTAINS</b> USER{' '}
        <b>INTERFACES</b> JAVASCRIPT <b>ART</b> MATHS <b>SPACE</b> TRAVEL{' '}
        <b>MOUNTAINS</b> USER <b>INTERFACES</b> JAVASCRIPT <b>ART</b> MATHS{' '}
        <b>SPACE</b> TRAVEL <b>MOUNTAINS</b>
      </p>
    </div>
  </StyledHero>
)

export default Hero
