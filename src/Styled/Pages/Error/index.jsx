import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Colors } from '../../../Utils/Styled/index'
import { Size } from '../../../Utils/Styled/index'
//responsive
import { breakpoints } from '../../../Utils/Breakpoints'
import { px2vw } from '../../../Utils/px2vw'

export const StyledErrorTitle = styled.h1`
  font-size: 18rem;
  text-align: center;
  margin-top: 169px;
  color: ${Colors.colorPrimary};
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: ${px2vw(96, 320)};
    margin-top: ${px2vw(155, 320)};
  }
`
export const StyledErrorMessage = styled.span`
  display: block;
  text-align: center;
  font-size: ${Size.titleFontSize};
  color: ${Colors.colorPrimary};
  margin-top: 66px;
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: ${px2vw(18, 320)};
    margin-top: ${px2vw(11, 320)};
    }
}
`
export const StyledErrorLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 182px;
  color: ${Colors.colorPrimary};
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: ${px2vw(14, 320)};
    margin-top: ${px2vw(155, 320)};
  }
`
