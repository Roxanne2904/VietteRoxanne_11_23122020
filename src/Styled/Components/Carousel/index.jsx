import styled from 'styled-components'
// import { Weight } from '../../../Utils/Styled/index'
// import { Colors } from '../../../Utils/Styled/index'
// import { Size } from '../../../Utils/Styled/index'
import { Radius } from '../../../Utils/Styled/index'
import { Margin } from '../../../Utils/Styled/index'
// import { Link } from 'react-router-dom'

export const StyledHostImgContainer = styled.figure`
  height: 415px;
  width: 100%;
  overflow: hidden;
  border-radius: ${Radius.mainRadius};
  margin-top: ${Margin.mainMarginTop};
`
export const StyledHostImg = styled.img`
  height: 415px;
  width: 100%;
  object-fit: cover;
  display: block;
`
