import styled from 'styled-components'
import { Colors } from '../../../Utils/Styled/index'
import { Margin } from '../../../Utils/Styled/index'

export const StyledUlStars = styled.ul`
  list-style-type: none;
  display: flex;
  margin-top: 12px;
`
export const StyledLiFullStars = styled.li`
  display: block;
  color: ${Colors.colorPrimary};
  margin-right: ${Margin.marginRight};
  font-size: 1.3rem;
`
export const StyledLiEmptyStars = styled.li`
  display: block;
  color: ${Colors.colorEmptyStars};
  margin-right: ${Margin.marginRight};
  font-size: 1.3rem;
`
