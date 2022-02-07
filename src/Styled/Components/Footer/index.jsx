import styled from 'styled-components'
import { Margin } from '../../../Utils/Styled/index'
//responsive
import { breakpoints } from '../../../Utils/Breakpoints'
import { px2vw } from '../../../Utils/px2vw/index'

export const StyledFooter = styled.footer`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${Margin.mainMarginTop};
`
export const StyledLogoContain = styled.div`
  margin: 66px 0 35px 0;
`

export const StyledRightstext = styled.p`
  margin-bottom: 29px;
  color: white;
  font-size: 1.5rem;

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.s}) {
    font-size: ${px2vw(12, 320)};
    margin-bottom: ${px2vw(62, 320)};
  }
  @media (min-width: ${breakpoints.s_1}) and (max-width: ${breakpoints.sm}) {
    font-size: ${px2vw(15, 481)};
  }
`
export const StyledImgLogo = styled.img`
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.s}) {
    width: 110%;
  }
`
