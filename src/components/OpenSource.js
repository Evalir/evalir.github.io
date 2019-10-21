import React from 'react'
import styled from 'styled-components'
import Tag from './Tag'
import { AlgopitImg } from './AlgopitImg'
import NormalLink from './NormalLink'

const StyledOpenSource = styled.div`
  margin: 0 auto;
  position: relative;
  z-index: 101;
  .projects {
    position: relative;
    z-index: 101;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${props => props.theme.unit.getRem(16)};
    .project {
      display: grid;
      grid-template-columns: 1fr;
      @media screen and (min-width: 728px) {
        grid-template-columns: 30% 1fr;
        .project-image {
          grid-column: 1 / span 1;
        }
        .project-description {
          grid-column: 2 / span 1;
        }
      }
    }
  }
`

const AlgopitTech = [
  'Docker',
  'Heroku',
  'React',
  'Typescript',
  'Node',
  'GraphQL',
  'Apollo Server',
  'Apollo Client',
  'GraphQL Shield',
]

const OpenSource = () => (
  <>
    <h1>Open Source</h1>
    <StyledOpenSource>
      <div className="projects">
        <div className="project">
          <div className="project-image">
            <AlgopitImg />
          </div>
          <div className="project-description">
            <NormalLink
              href="https://algopit.netlify.com/"
              width="auto"
              height="auto"
            >
              <h3>Algopit</h3>
            </NormalLink>
            <h4>
              Algopit helps you practice competitive programming in a better
              way.
            </h4>
            {AlgopitTech.map(tech => (
              <Tag index={tech}>{tech}</Tag>
            ))}
          </div>
        </div>
      </div>
    </StyledOpenSource>
  </>
)

export default OpenSource
