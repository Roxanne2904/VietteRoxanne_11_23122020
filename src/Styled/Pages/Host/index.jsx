import styled from 'styled-components'
import { Weight } from '../../../Utils/Styled/index'
import { Colors } from '../../../Utils/Styled/index'
import { Size } from '../../../Utils/Styled/index'
// import { Radius } from '../../../Utils/Styled/index'
import { Margin } from '../../../Utils/Styled/index'
// import { Link } from 'react-router-dom'

// export const StyledHostImgContainer = styled.figure`
//   height: 415px;
//   width: 100%;
//   overflow: hidden;
//   border-radius: ${Radius.mainRadius};
//   margin-top: ${Margin.mainMarginTop};
// `
// export const StyledHostImg = styled.img`
//   height: 415px;
//   width: 100%;
//   object-fit: cover;
//   display: block;
// `
export const StyledHostIdContain = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${Margin.mainMarginTop};
`
export const StyledHostIdProfil = styled.figure`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`
export const StyledHostIdImg = styled.img`
  display: block;
  border-radius: 100%;
  height: 64px;
  width: 64px;
`
export const StyledHostMainTitle = styled.h1`
  font-size: ${Size.titleFontSize};
  color: ${Colors.colorPrimary};
`
export const StyledHostSubTitle = styled.span`
  display: block;
  margin-top: 10px;
  font-size: ${Size.subTitleFontSize};
  color: ${Colors.colorPrimary};
  font-weight: ${Weight.mainFontWeight};
`
export const StyledHostNameContain = styled.figcaption`
  display: flex;
  flex-direction: column;
  align-items: self-end;
  margin-right: 10px;
`

export const StyledHostFirstName = styled.span`
  display: block;
  font-size: ${Size.subTitleFontSize};
  color: ${Colors.colorPrimary};
  font-weight: ${Weight.mainFontWeight};
`
export const StyledHostName = styled.span`
  display: block;
  font-size: ${Size.subTitleFontSize};
  color: ${Colors.colorPrimary};
  font-weight: ${Weight.mainFontWeight};
`
export const StyledTagsAndStarsContain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const StyledListContain = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`
