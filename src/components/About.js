import React from 'react'
import styled from 'styled-components'
import { MugshotImg } from '../components/MugshotImg'
import Tag from './Tag'

const StyledAbout = styled.div`
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
  </StyledAbout>
)

export default AboutMe
