import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import GithubSVG from '../images/github.inline.svg'
import LinkedInSVG from '../images/linkedin.inline.svg'
import TwitterSVG from '../images/twitter.inline.svg'
import { AlgopitImg } from '../components/AlgopitImg'
import { MugshotImg } from '../components/MugshotImg'
import SEO from '../components/seo'

const StyledLink = styled(Link)`
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: white;
  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background: white;
    top: 100%;
    left: 0;
    transform: translateY(100%);
    opacity: 0;
    transition: all 0.35s ease-in-out;
  }
  :hover::after {
    transform: translateY(50%);
    opacity: 1;
  }
`

const NormalLink = styled.a`
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: inherit;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
`
const StyledNavbar = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  padding-top: ${props => props.theme.unit.getRem(16)};
  .separator {
    flex-grow: 1;
  }
  ul {
    list-style: none;
    margin-left: 0;
    li {
      display: inline-block;
      color: white;
      font-size: ${props => props.theme.unit.getRem(24)};
      font-weight: 600;
      &:not(:last-child) {
        margin-right: ${props => props.theme.unit.getRem(16)};
      }
    }
  }
`
const Navbar = () => (
  <StyledNavbar>
    <ul>
      <li>
        <StyledLink to="/">Home</StyledLink>
      </li>
      <li>
        <StyledLink to="/">Blog</StyledLink>
      </li>
      <li>
        <NormalLink href="mailto:hi@enriqueortiz.dev">Contact</NormalLink>
      </li>
    </ul>
  </StyledNavbar>
)

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

const Tag = styled.div`
  background-color: #364349;
  border-radius: 8px;
  color: #b8c4dc;
  display: inline-flex;
  font-size: ${props => props.theme.unit.getRem(16)};
  font-weight: 400;
  margin: 0 8px 8px 0;
  padding: 8px;
`

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

const StyledOpenSource = styled.div`
  margin: 0 auto;
  .projects {
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
            <NormalLink href="/" width="auto" height="auto">
              <h3>Algopit</h3>
            </NormalLink>
            <h4>
              Algopit helps you practice competitive programming in a better
              way.
            </h4>
            {AlgopitTech.map((tech, index) => (
              <Tag index={tech}>{tech}</Tag>
            ))}
          </div>
        </div>
      </div>
    </StyledOpenSource>
  </>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <Hero />
    <AboutMe />
    <OpenSource />
  </Layout>
)

export default IndexPage
