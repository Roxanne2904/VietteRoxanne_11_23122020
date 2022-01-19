//import { Size } from '../../Utils/index'
import { Radius } from '../../../Utils/Styled/index'
// import { Colors } from '../../../Utils/Styled/index'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'

//---
export const StyledBanner = styled.figure`
  position: relative;
  margin-top: 63px;
`
export const StyledBannerImg = styled.img`
  border-radius: ${Radius.mainRadius};
  display: block;
  width: 100%;
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
`
export const StyledBannerTxt = styled.figcaption`
  position: absolute;
  top: 43%;
  width: 100%;
  font-size: 3rem;
  text-align: center;
  color: white;
`

// background: linear-gradient(360deg, rgb(136, 54, 54), rgb(255, 97, 97));
