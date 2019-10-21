import styled from 'styled-components'

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

export default Tag
