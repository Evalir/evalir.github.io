import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import NormalLink from './NormalLink'
import Enrique from '../images/enrique.svg'

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

const StyledALink = styled.a`
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

const StyledNavbar = styled.div`
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  padding: 0 64px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  color: white;
  padding-top: ${props => props.theme.unit.getRem(16)};
  mix-blend-mode: difference;
  .separator {
    flex-grow: 1;
  }
  ul {
    list-style: none;
    margin-left: 0;
    display: flex;
    align-items: center;
    li {
      display: inline-block;
      color: white;
      font-size: ${props => props.theme.unit.getRem(20)};
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
        <img src={Enrique} />
      </li>
      <div style={{ flexGrow: 1 }} />
      <li>
        <StyledALink href="https://evalir.xyz/">journal</StyledALink>
      </li>
      <li>
        <StyledLink href="mailto:hi@enriqueortiz.dev">ouvre</StyledLink>
      </li>
    </ul>
  </StyledNavbar>
)

export default Navbar
