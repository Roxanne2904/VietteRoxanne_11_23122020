import styled from 'styled-components'
import { Colors } from '../../../Utils/Styled/index'
import { Radius } from '../../../Utils/Styled/index'

export const StyledList = styled.div`
  width: 47%;
`
export const StyledListTitleContain = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 20px;
  background: ${Colors.colorPrimary};
  border-radius: ${Radius.cardsRadius};
  color: white;
  align-items: center;
`
export const StyledListTitle = styled.span`
  display: block;
`
export const StyledListIcone = styled.span`
  display: block;
  font-size: 1.3rem;
`
export const StyledListUL = styled.ul`
  list-style-type: none;
  padding: 20px;
  color: ${Colors.colorPrimary};
  background: ${Colors.colorBackG};
  min-height: 249px;
  border-radius: ${Radius.cardsRadius};
`
export const StyledListLi = styled.li`
  padding: 3px 0;
`

export const StyledListParagraphe = styled.p`
  padding: 20px;
  color: ${Colors.colorPrimary};
  background: ${Colors.colorBackG};
  min-height: 249px;
  border-radius: ${Radius.cardsRadius};
`
