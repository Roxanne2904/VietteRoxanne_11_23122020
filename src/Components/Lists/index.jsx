import { useParams } from 'react-router-dom'
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
//Styled
import { StyledList } from '../../Styled/Components/Lists/index'
import { StyledListTitleContain } from '../../Styled/Components/Lists/index'
import { StyledListTitle } from '../../Styled/Components/Lists/index'
import { StyledListIcone } from '../../Styled/Components/Lists/index'
import { StyledListUL } from '../../Styled/Components/Lists/index'
import { StyledListLi } from '../../Styled/Components/Lists/index'
import { StyledListParagraphe } from '../../Styled/Components/Lists/index'

function Lists(props) {
  const { id } = useParams()
  const { theme, title } = props

  return (
    <StyledList>
      <StyledListTitleContain>
        <StyledListTitle>{title}</StyledListTitle>
        <StyledListIcone>
          <FontAwesomeIcon icon={faChevronUp} />
        </StyledListIcone>
      </StyledListTitleContain>

      {typeof theme !== 'object' ? (
        <StyledListParagraphe>{theme}</StyledListParagraphe>
      ) : (
        <StyledListUL>
          {theme.map((elmnt, index) => (
            <StyledListLi key={`${id}-${elmnt}-${index}`}>{elmnt}</StyledListLi>
          ))}
        </StyledListUL>
      )}
    </StyledList>
  )
}

export default Lists
