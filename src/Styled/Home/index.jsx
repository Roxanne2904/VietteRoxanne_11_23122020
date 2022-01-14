//import { Size } from '../../Utils/index'
import { Radius } from '../../Utils/Styled/index'
import { Colors } from '../../Utils/Styled/index'
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
  top: 43%;
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
  background: ${Colors.colorBackG};
  justify-content: space-between;
  flex-wrap: wrap;
`
export const StyledRentalsTitle = styled.span`
  position: absolute;
  bottom: 0;
  margin: 20px;
  font-weight: 500;
  color: white;
  z-index: 1;
`

export const StyledRentals = styled.li`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 30%;
  background-color: ${Colors.colorPrimary};
  height: 340px;
  margin-bottom: 56px;
  border-radius: ${Radius.cardsRadius};
  &:hover {
    transform: scale(1.03);
    transition-duration: 500ms;
    ${StyledRentalsTitle} {
      font-weight: 600;
    }
  }
`
export const StyledRentalsGradient = styled.span`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(0deg, rgb(0, 0, 0, 0.5), transparent);
  border-radius: ${Radius.cardsRadius};
`
export const StyledRentalsImgContain = styled.span`
  display: block;
  overflow: hidden;
  border-radius: ${Radius.cardsRadius};
`
export const StyledRentalsImg = styled.img`
  object-fit: cover;
  height: 340px;
  display: block;
  width: 100%;
`
// background: linear-gradient(360deg, rgb(136, 54, 54), rgb(255, 97, 97));
