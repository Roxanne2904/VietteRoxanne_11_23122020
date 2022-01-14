//import { Size } from '../../Utils/index'
import { Radius } from '../../Utils/Styled/index'
import styled from 'styled-components'
//---
export const StyledBanner = styled.div`
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
export const StyledBannerTxt = styled.span`
  position: absolute;
  top: 35%;
  width: 100%;
  font-size: 3rem;
  text-align: center;
  color: white;
`
export const StyledRentalCover = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 56px;
  margin-top: 43px;
  border-radius: $bannerRadius;
  background: #f6f6f6;
`
export const StyledRentals = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 30%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), transparent);
`
