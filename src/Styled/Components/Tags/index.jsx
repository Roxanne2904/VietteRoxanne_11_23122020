import styled from 'styled-components'
import { Colors } from '../../../Utils/Styled/index'
import { Radius } from '../../../Utils/Styled/index'

export const StyledUlTags = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  margin-top: 20px;
  color: white;
`
export const StyledLiTags = styled.li`
  display: flex;
  height: 25px;
  min-width: 115px;
  margin-right: 10px;
  background: ${Colors.colorPrimary};
  border-radius: ${Radius.cardsRadius};
  justify-content: center;
  align-items: center;
  padding: 0 15px 0 15px;
  margin-top: 5px;
`
