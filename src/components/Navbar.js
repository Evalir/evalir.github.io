import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import NormalLink from './NormalLink'

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

export default Navbar
