import React from 'react'
import styled, { keyframes } from 'styled-components'
import LightPlanet from '../images/planetlight.svg'

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

const StyledAbout = styled.div`
  position: relative;
  min-height: 100vh;
  background: #ffaeaf;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    z-index: 101;
  }
  p {
    font-size: ${props => props.theme.unit.getRem(48)};
    font-weight: 500;
    line-height: 60px;
    color: black;
  }
  @media screen and (max-width: 768px) {
    p {
      font-size: ${props => props.theme.unit.getRem(32)};
      line-height: ${props => props.theme.unit.getRem(36)};
    }
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 32px 64px;
  display: grid;
  grid-template-columns: 75% 1fr;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

const AboutMe = () => (
  <StyledAbout>
    <Container>
      <Placer
        animate
        top="25%"
        left="75%"
        tabletLeft="65%"
        hiddenMobile
        animationDuration="3s"
      >
        <img src={LightPlanet} />
      </Placer>
      <div>
        <p>
          I’m currently working at Aragon One, experimenting with governance at
          the speed of software through decentralized technology.
        </p>{' '}
        <p>
          My work involves rapid experimentation and prototyping, from UI
          Engineering, rapidly building prototypes to validate product
          assumptions and interacting with Blockchain networks—mainly Ethereum.
        </p>
      </div>
    </Container>
  </StyledAbout>
)

export default AboutMe
