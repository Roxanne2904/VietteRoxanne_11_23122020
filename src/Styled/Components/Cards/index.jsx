import { Radius } from '../../../Utils/Styled/index'
import { Colors } from '../../../Utils/Styled/index'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledCardsCover = styled.ul`
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
export const StyledCardsTitle = styled.figcaption`
  position: absolute;
  bottom: 0;
  margin: 20px;
  font-weight: 500;
  color: white;
  z-index: 1;
`

export const StyledCards = styled(Link)`
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
    ${StyledCardsTitle} {
      font-weight: 600;
    }
  }
`
export const StyledCardsGradient = styled.span`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(0deg, rgb(0, 0, 0, 0.5), transparent);
  border-radius: ${Radius.cardsRadius};
`
export const StyledCardsImgContain = styled.figure`
  overflow: hidden;
  border-radius: ${Radius.cardsRadius};
`
export const StyledCardsImg = styled.img`
  object-fit: cover;
  height: 340px;
  display: block;
  width: 100%;
`