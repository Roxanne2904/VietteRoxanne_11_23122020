import styled from 'styled-components'
import { Radius } from '../../../Utils/Styled/index'
//Responsive
import { px2vw } from '../../../Utils/px2vw/index'
//---
export const StyledBanner = styled.figure`
  position: relative;
  margin-top: 63px;
  min-height: 111px;
  @media (min-width: 320px) and (max-width: 950px) {
    margin-top: 20px;
  }
`
export const StyledBannerImg = styled.img`
  border-radius: ${Radius.mainRadius};
  display: block;
  width: 100%;
  min-height: 111px;
  object-fit: cover;
  @media (min-width: 320px) and (max-width: 1080px) {
    border-radius: ${Radius.cardsRadius};
  }
`
export const StyleBlackLayer = styled.span`
  display: block;
  position: absolute;
  border-radius: ${Radius.mainRadius};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.3;
  @media (min-width: 320px) and (max-width: 1080px) {
    border-radius: ${Radius.cardsRadius};
  }
`
export const StyledBannerTxt = styled.figcaption`
  position: absolute;
  top: 40%;
  width: 100%;
  font-size: 3rem;
  text-align: center;
  color: white;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: ${px2vw(22, 320)};
    text-align: start;
    margin-left: 16px;
    top: 28%;
  }
  @media (min-width: 481px) and (max-width: 1080px) {
    font-size: ${px2vw(22, 481)};
    text-align: center;
    top: 40%;
  }
`
export const StyledBannertxt01 = styled.span`
  @media (min-width: 320px) and (max-width: 480px) {
    display: block;
  }
`

// background: linear-gradient(360deg, rgb(136, 54, 54), rgb(255, 97, 97));
