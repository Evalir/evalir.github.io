import styled from 'styled-components'

const NormalLink = styled.a`
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: inherit;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
`

export default NormalLink
