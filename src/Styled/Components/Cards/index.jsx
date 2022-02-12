// import { Radius } from '../../../Utils/Styled/index'
// import { Colors } from '../../../Utils/Styled/index'
// import styled from 'styled-components'
// import { Link } from 'react-router-dom'
//responsive
// import { breakpoints } from '../../../Utils/Breakpoints/index'
// import { px2vw } from '../../../Utils/px2vw/index'

// export const StyledCardsCover = styled.ul`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   padding: 56px;
//   margin-top: 43px;
//   border-radius: $bannerRadius;
//   background: ${Colors.colorBackG};
//   justify-content: space-between;
//   flex-wrap: wrap;
//   @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.m}) {
//     flex-direction: column;
//     padding: 0px;
//     background: transparent;
//     margin-top: 20px;
//   }
//   @media (min-width: ${breakpoints.sm_1}) and (max-width: ${breakpoints.l}) {
//     margin-top: 63px;
//   }
// `
// export const StyledCardsTitle = styled.figcaption`
//   position: absolute;
//   bottom: 0;
//   margin: 20px;
//   font-weight: 500;
//   color: white;
//   z-index: 1;
//   @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.s}) {
//     font-size: ${px2vw(15, 320)};
//   }
//   @media (min-width: ${breakpoints.s_1}) and (max-width: ${breakpoints.sm}) {
//     font-size: ${px2vw(18, 481)};
//   }
//   @media (min-width: ${breakpoints.sm_1}) and (max-width: ${breakpoints.m}) {
//     font-size: ${px2vw(20, 769)};
//   }
//   @media (min-width: ${breakpoints.m}) and (max-width: ${breakpoints.l}) {
//     font-size: ${px2vw(17, 950)};
//   }
// `

// export const StyledCards = styled(Link)`
//   cursor: pointer;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   list-style-type: none;
//   width: 30%;
//   background-color: ${Colors.colorPrimary};
//   height: 340px;
//   margin-bottom: 56px;
//   border-radius: ${Radius.cardsRadius};
//   &:hover {
//     transform: scale(1.03);
//     transition-duration: 500ms;
//     ${StyledCardsTitle} {
//       font-weight: 600;
//     }
//   }
//   @media (min-width: ${breakpoints.s_1}) and (max-width: ${breakpoints.l}) {
//     width: 45%;
//   }
//   @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.m}) {
//     width: 100%;
//     height: 255px;
//     margin-bottom: 20px;
//   }
// `
// export const StyledCardsGradient = styled.span`
//   display: block;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background: linear-gradient(0deg, rgb(0, 0, 0, 0.5), transparent);
//   border-radius: ${Radius.cardsRadius};
// `
// export const StyledCardsImgContain = styled.figure`
//   overflow: hidden;
//   border-radius: ${Radius.cardsRadius};
// `
// export const StyledCardsImg = styled.img`
//   object-fit: cover;
//   height: 340px;
//   display: block;
//   width: 100%;
//   @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.m}) {
//     height: 255px;
//   }
// `
