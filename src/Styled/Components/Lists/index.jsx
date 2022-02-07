import styled from 'styled-components'
import { Colors } from '../../../Utils/Styled/index'
import { Radius } from '../../../Utils/Styled/index'
//responsive
import { breakpoints } from '../../../Utils/Breakpoints'
import { px2vw } from '../../../Utils/px2vw'

export const StyledList = styled.div`
  width: ${(props) => (props.about ? `80%` : `47%`)};
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    width: 100%;
    margin-bottom: ${(props) =>
      props.about ? `inherit` : `${px2vw(25, 320)}`};
  }
`
export const StyledListTitleContain = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 20px;
  background: ${Colors.colorPrimary};
  border-radius: ${Radius.cardsRadius};
  color: white;
  align-items: center;
  margin-top: ${(props) => (props.about ? `31px` : `inherit`)};
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    padding: ${(props) =>
      props.about ? `13px 20px` : `${px2vw(8, 320)} ${px2vw(15, 320)}`};
  }
`
export const StyledListTitle = styled.h3`
  font-weight: 500;
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.s}) {
    font-size: ${px2vw(13, 320)};
  }
  @media (min-width: ${breakpoints.s_1}) and (max-width: ${breakpoints.sm}) {
    font-size: ${px2vw(15, 481)};
  }
`
export const StyledListIcone = styled.span`
  display: block;
  font-size: 1.3rem;
  cursor: pointer;
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: ${px2vw(13, 320)};
  }
`
export const StyledListUL = styled.ul`
  list-style-type: none;
  padding: 20px;
  color: ${Colors.colorPrimary};
  background: ${Colors.colorBackG};
  min-height: 249px;
  border-radius: ${Radius.cardsRadius};
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    min-height: ${px2vw(143, 320)};
  }
`
export const StyledListLi = styled.li`
  padding: 3px 0;
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: ${px2vw(12, 320)};
  }
`

export const StyledListParagraphe = styled.p`
  padding: 20px;
  color: ${Colors.colorPrimary};
  background: ${Colors.colorBackG};
  min-height: ${(props) => (props.about ? `inherit` : `249px`)};
  border-radius: ${Radius.cardsRadius};
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    min-height: ${(props) => (props.about ? `inherit` : `${px2vw(143, 320)}`)};
    font-size: ${(props) => (props.about ? `inherit` : `${px2vw(12, 320)}`)};
  }
`
//About page
// export const StyledAboutList = styled.div`
//   width: 80%;
// `

// export const StyledAboutListParagraphe = styled.p`
//   padding: 20px;
//   color: ${Colors.colorPrimary};
//   background: ${Colors.colorBackG};
//   border-radius: ${Radius.cardsRadius};
// `

// export const StyledAboutListTitleContain = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 13px 20px;
//   background: ${Colors.colorPrimary};
//   border-radius: ${Radius.cardsRadius};
//   color: white;
//   align-items: center;
//   margin-top: 31px;
// `
