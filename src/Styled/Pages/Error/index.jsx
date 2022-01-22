import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Colors } from '../../../Utils/Styled/index'
import { Size } from '../../../Utils/Styled/index'

export const StyledErrorTitle = styled.h1`
  font-size: 18rem;
  text-align: center;
  margin-top: 169px;
  color: ${Colors.colorPrimary};
`
export const StyledErrorMessage = styled.span`
  display: block;
  text-align: center;
  font-size: ${Size.titleFontSize};
  color: ${Colors.colorPrimary};
  margin-top: 66px;
}
`
export const StyledErrorLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 182px;
  color: ${Colors.colorPrimary};
`
