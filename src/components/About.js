import React from 'react'
import styled, { keyframes } from 'styled-components'
import { MugshotImg } from '../components/MugshotImg'
import MiniRectangle from '../images/minirectangle.inline.svg'
import HexagonGrey from '../images/hexagong.inline.svg'
import ReverseTriangle from '../images/reverse.triangle.inline.svg'
import Tag from './Tag'

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

const StyledAbout = styled.div`
  position: relative;
  min-height: calc(70vh);
  margin: 0 auto;
  display: grid;
  color: white;
  grid-template-columns: 1fr;
  grid-gap: ${props => props.theme.unit.getRem(16)};
  margin-bottom: ${props => props.theme.unit.getRem(24)};
  .mugshot {
    display: none;
  }

  .about-me {
    grid-column: 1 / span 1;
    position: relative;
    z-index: 101;
  }

  @media screen and (min-width: 728px) {
    grid-template-columns: 30% 1fr;
    .mugshot {
      display: block;
      grid-column: 1 / span 1;
    }
    .about-me {
      grid-column: 2 / span 1;
    }
  }
`

const skills = [
  'Javascript',
  'Typescript',
  'Node',
  'GraphQL',
  'Apollo Server',
  'React',
  'Webpack',
  'D3.js',
  'SQL',
  'Prisma',
  'Firebase',
  'Docker',
]

const AboutMe = () => (
  <StyledAbout>
    <div className="mugshot">
      <MugshotImg />
    </div>
    <div className="about-me">
      <h4>
        I’m a data-driven Software Engineer that has a passion for products,
        solving real-world problems through software, and music.
      </h4>
      <div>
        <h3>Skills</h3>
        {skills.map((skill, index) => (
          <Tag key={index}>{skill}</Tag>
        ))}
      </div>
    </div>
    <>
      <Placer
        top="75%"
        left="55%"
        tabletTop="85%"
        tabletLeft="45%"
        hiddenMobile
      >
        <MiniRectangle />
      </Placer>
      <Placer top="67%" left="5%" hiddenMobile>
        <HexagonGrey />
      </Placer>
      <Placer top="65%" left="75%" hiddenMobile>
        <ReverseTriangle />
      </Placer>
    </>
  </StyledAbout>
)

export default AboutMe
