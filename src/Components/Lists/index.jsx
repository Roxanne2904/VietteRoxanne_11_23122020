import { useParams } from 'react-router-dom'
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
//Styled
//Host page
import { StyledList } from '../../Styled/Components/Lists/index'
import { StyledListTitleContain } from '../../Styled/Components/Lists/index'
import { StyledListTitle } from '../../Styled/Components/Lists/index'
import { StyledListIcone } from '../../Styled/Components/Lists/index'
import { StyledListUL } from '../../Styled/Components/Lists/index'
import { StyledListLi } from '../../Styled/Components/Lists/index'
import { StyledListParagraphe } from '../../Styled/Components/Lists/index'
//About page
import { StyledAboutList } from '../../Styled/Components/Lists/index'
import { StyledAboutListParagraphe } from '../../Styled/Components/Lists/index'
import { StyledAboutListTitleContain } from '../../Styled/Components/Lists/index'

function Lists(props) {
  const { id } = useParams()
  const { contain, title, page } = props

  return page !== 'about' ? (
    <StyledList>
      <StyledListTitleContain>
        <StyledListTitle>{title}</StyledListTitle>
        <StyledListIcone>
          {contain !== null ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </StyledListIcone>
      </StyledListTitleContain>

      {contain !== null ? (
        typeof contain !== 'object' ? (
          <StyledListParagraphe>{contain}</StyledListParagraphe>
        ) : (
          <StyledListUL>
            {contain.map((elmnt, index) => (
              <StyledListLi key={`${id}-${elmnt}-${index}`}>
                {elmnt}
              </StyledListLi>
            ))}
          </StyledListUL>
        )
      ) : null}
    </StyledList>
  ) : (
    <StyledAboutList>
      <StyledAboutListTitleContain>
        <StyledListTitle>{title}</StyledListTitle>
        <StyledListIcone>
          {contain !== null ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </StyledListIcone>
      </StyledAboutListTitleContain>

      {contain !== null ? (
        typeof contain !== 'object' ? (
          <StyledAboutListParagraphe>{contain}</StyledAboutListParagraphe>
        ) : (
          <StyledListUL>
            {contain.map((elmnt, index) => (
              <StyledListLi key={`${id}-${elmnt}-${index}`}>
                {elmnt}
              </StyledListLi>
            ))}
          </StyledListUL>
        )
      ) : null}
    </StyledAboutList>
  )
}

export default Lists

// typeof theme !== 'object' ? (
//   <StyledListParagraphe>{theme}</StyledListParagraphe>
// ) : (
//   <StyledListUL>
//     {theme.map((elmnt, index) => (
//       <StyledListLi key={`${id}-${elmnt}-${index}`}>{elmnt}</StyledListLi>
//     ))}
//   </StyledListUL>
// )
