import styled from 'styled-components'
import { Weight } from '../../../Utils/Styled/index'
import { Colors } from '../../../Utils/Styled/index'
import { Size } from '../../../Utils/Styled/index'
import { Link } from 'react-router-dom'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`
export const StyledImg = styled.img`
  width: 210.32px;
  height: 68px;
`
export const StyledNav = styled.nav`
  width: 20%;
  display: flex;
  align-items: center;
`
export const StyledUl = styled.ul`
  display: flex;
  padding: 0;
  list-style-type: none;
  width: 100%;
  justify-content: space-between;
`
export const StyledLi = styled(Link)`
  font-size: ${Size.mainFontSize};
  color: ${Colors.colorPrimary};
  font-weight: ${Weight.mainFontWeight};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
// &:hover {
//   text-decoration: underline;
//   cursor: pointer;
// }
